import express from 'express';

const app = express();
const port = (parseInt(process.env.PORT || '') || null) || 3000;

// Middleware per analizzare JSON
app.use(express.json());

// Esempio di endpoint
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${port}`);
});
