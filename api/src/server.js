const app = require('./app');

const PORT = process.env.API_PORT || 8000;

app.listen(PORT, () => console.log('Server is running on port 8000'));
