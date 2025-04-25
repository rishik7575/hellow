import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { MongoClient } from 'mongodb';

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
const mongoURI = 'mongodb+srv://yeshaboinapraneeth:123naniY24@cluster0.sztht.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; 
const client = new MongoClient(mongoURI);
let db;

async function connectDB() {
    try {
        await client.connect();
        db = client.db('farmersData');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
    }
}

connectDB();

// Routes
app.post('/register', async (req, res) => {
    const { name, email, phone, address, crops, password } = req.body;

    if (!name || !email || !phone || !address || !crops || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const collection = db.collection('farmers');
        const existingUser = await collection.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: 'Email already registered' });
        }

        await collection.insertOne({ name, email, phone, address, crops, password });
        res.status(201).json({ message: 'Registration successful' });
    } catch (error) {
        console.error('Error during registration', error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        const collection = db.collection('farmers');
        const user = await collection.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error('Error during login', error);
        res.status(500).json({ message: 'Server error' });
    }
});
// Executive Registration Endpoint
app.post('/executive-register', async (req, res) => {
    const { fullName, email, phone, role, experience, password } = req.body;

    if (!fullName || !email || !phone || !role || !experience || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const collection = db.collection('executives');
        const existingExecutive = await collection.findOne({ email });

        if (existingExecutive) {
            return res.status(400).json({ message: 'Email already registered' });
        }

        await collection.insertOne({ fullName, email, phone, role, experience, password });
        res.status(201).json({ message: 'Application submitted successfully' });
    } catch (error) {
        console.error('Error during executive registration:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.post('/executive-login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        const collection = db.collection('executives');
        const user = await collection.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error('Error during login', error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});