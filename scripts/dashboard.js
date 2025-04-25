document.getElementById("fileInput").addEventListener("change", handleFileUpload);

function handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const fileReader = new FileReader();
    fileReader.onload = function (e) {
        const fileContent = e.target.result;
        if (file.type === "application/pdf") {
            extractDataFromPDF(fileContent);
        } else if (file.type === "image/jpeg" || file.type === "image/png") {
            extractDataFromImage(file);
        }
    };
    fileReader.readAsArrayBuffer(file);
}

function extractDataFromPDF(fileContent) {
    const loadingTask = pdfjsLib.getDocument(fileContent);
    loadingTask.promise.then(function (pdf) {
        pdf.getPage(1).then(function (page) {
            page.getTextContent().then(function (textContent) {
                const text = textContent.items.map(item => item.str).join(" ");
                const soilData = parseSoilData(text);
                displayResults(soilData);
            });
        });
    });
}

function extractDataFromImage(file) {
    Tesseract.recognize(
        file,
        'eng',
        {
            logger: (m) => console.log(m),
        }
    ).then(({ data: { text } }) => {
        const soilData = parseSoilData(text);
        displayResults(soilData);
    });
}

function parseSoilData(text) {
    // Example logic to extract soil data from the text
    const pH = extractPH(text);
    const nitrogen = extractNutrientLevel(text, "Nitrogen");
    const phosphorus = extractNutrientLevel(text, "Phosphorus");
    const potassium = extractNutrientLevel(text, "Potassium");

    return {
        pH: pH,
        nitrogen: nitrogen,
        phosphorus: phosphorus,
        potassium: potassium
    };
}

function extractPH(text) {
    const pHMatch = text.match(/pH\s*[:\-]?\s*(\d+(\.\d+)?)/i);
    return pHMatch ? parseFloat(pHMatch[1]) : 6.5; // Default to 6.5 if not found
}

function extractNutrientLevel(text, nutrient) {
    const nutrientMatch = text.match(new RegExp(`${nutrient}\\s*[:\-]?\\s*(Low|Medium|High)`, 'i'));
    return nutrientMatch ? nutrientMatch[1] : "Medium";
}

function displayResults(soilData) {
    document.getElementById("soilSummary").textContent = 
        `Soil pH: ${soilData.pH}, Nitrogen: ${soilData.nitrogen}, Phosphorus: ${soilData.phosphorus}, Potassium: ${soilData.potassium}`;
    
    const recommendedCrops = getRecommendedCrops(soilData);
    const cropList = document.getElementById("cropRecommendations");
    cropList.innerHTML = ""; // Clear previous results
    recommendedCrops.forEach(crop => {
        const listItem = document.createElement("li");
        listItem.textContent = crop;
        cropList.appendChild(listItem);
    });
}

function getRecommendedCrops(soilData) {
    const currentSeason = getCurrentSeason();
    const crops = [
        { name: "Wheat", min_pH: 6.0, max_pH: 7.5, season: "Winter" },
        { name: "Rice", min_pH: 5.5, max_pH: 6.5, season: "Monsoon" },
        { name: "Maize", min_pH: 5.8, max_pH: 7.0, season: "Summer" },
        { name: "Potato", min_pH: 5.0, max_pH: 6.5, season: "Winter" }
    ];

    return crops.filter(crop => {
        return crop.min_pH <= soilData.pH && crop.max_pH >= soilData.pH && crop.season === currentSeason;
    }).map(crop => crop.name);
}

function getCurrentSeason() {
    const month = new Date().getMonth() + 1; // Months are 0-indexed
    if (month >= 12 || month <= 2) return "Winter";
    if (month >= 3 && month <= 5) return "Summer";
    if (month >= 6 && month <= 8) return "Monsoon";
    return "Autumn";
}
