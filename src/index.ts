import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

// Middleware per analizzare JSON
app.use(express.json());

// Esempio di endpoint
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
