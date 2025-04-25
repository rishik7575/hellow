
import { Button } from "@/components/ui/button";
import { Menu, Package, Tractor, Home, LayoutDashboard } from "lucide-react";
import MachineryCard from "@/components/MachineryCard";
import ComboCard from "@/components/ComboCard";
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";

const Machinery = () => {
  const [activeSection, setActiveSection] = useState<"rentals" | "combos">("rentals");

  const machines = [
    {
      id: 1,
      name: "Modern Tractor",
      description: "High-power tractor suitable for heavy-duty farming operations",
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc",
      pricePerHour: 400,
    },
    {
      id: 2,
      name: "Harvester",
      description: "Advanced harvesting machine for efficient crop collection",
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a",
      pricePerHour: 400,
    },
    {
      id: 3,
      name: "Plough System",
      description: "Professional ploughing equipment for field preparation",
      image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac",
      pricePerHour: 400,
    },
  ];

  const combos = [
    {
      id: 1,
      name: "Complete Field Package",
      description: "Perfect for complete field preparation and harvesting",
      machines: ["Tractor", "Harvester", "Plough"],
      workers: ["Operator", "Field Assistant"],
      image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2",
      price: 1500,
      duration: "8 hours",
    },
    {
      id: 2,
      name: "Basic Farm Setup",
      description: "Essential machinery with skilled operators for basic farming needs",
      machines: ["Tractor", "Plough"],
      workers: ["Operator"],
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d",
      price: 1000,
      duration: "6 hours",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header with navigation */}
      <header className="bg-white shadow-md sticky top-0 z-30">
        <div className="container mx-auto px-4 flex justify-between items-center h-14">
          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-white">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link to="/" className="flex items-center gap-2 text-green-700 hover:text-green-800 font-medium px-2 py-2 hover:bg-green-50 rounded-md">
                    <Home className="h-5 w-5" />
                    Home
                  </Link>
                  <Link to="/dashboard" className="flex items-center gap-2 text-green-700 hover:text-green-800 font-medium px-2 py-2 hover:bg-green-50 rounded-md">
                    <LayoutDashboard className="h-5 w-5" />
                    Dashboard
                  </Link>
                  <Link to="/machinery" className="flex items-center gap-2 bg-green-100 text-green-800 font-medium px-2 py-2 rounded-md">
                    <Tractor className="h-5 w-5" />
                    Machinery
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
            <Link to="/" className="font-bold text-xl text-green-800">AgriLift</Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-4">
            <Link to="/" className="text-green-700 hover:text-green-800 font-medium px-3 py-2 hover:bg-green-50 rounded-md flex items-center gap-2">
              <Home className="h-4 w-4" />
              Home
            </Link>
            <Link to="/dashboard" className="text-green-700 hover:text-green-800 font-medium px-3 py-2 hover:bg-green-50 rounded-md flex items-center gap-2">
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Link>
            <Link to="/machinery" className="bg-green-100 text-green-800 font-medium px-3 py-2 rounded-md flex items-center gap-2">
              <Tractor className="h-4 w-4" />
              Machinery
            </Link>
          </nav>
        </div>
      </header>

      <div className="relative bg-green-800 text-white py-12 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1495107334309-fcf20504a5ab')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              AgriLift Machinery
            </h1>
            <p className="text-lg md:text-xl text-green-100 mb-6">
              Professional Agricultural Equipment for Your Farming Needs
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 -mt-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border border-green-100">
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <Button
              variant={activeSection === "rentals" ? "default" : "outline"}
              onClick={() => setActiveSection("rentals")}
              className={`gap-2 flex-1 ${activeSection === "rentals" ? "bg-green-700 hover:bg-green-600" : "text-green-700 border-green-200 hover:bg-green-50"}`}
            >
              <Tractor className="h-4 w-4" />
              Individual Rentals
            </Button>
            <Button
              variant={activeSection === "combos" ? "default" : "outline"}
              onClick={() => setActiveSection("combos")}
              className={`gap-2 flex-1 ${activeSection === "combos" ? "bg-green-700 hover:bg-green-600" : "text-green-700 border-green-200 hover:bg-green-50"}`}
            >
              <Package className="h-4 w-4" />
              Combo Packages
            </Button>
          </div>
        </div>

        <div className="py-4">
          {activeSection === "rentals" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {machines.map((machine) => (
                <MachineryCard key={machine.id} machine={machine} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {combos.map((combo) => (
                <ComboCard key={combo.id} combo={combo} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Machinery;
