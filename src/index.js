const app = require('./app');
const port = process.env.port || 8000;

const server = app.listen(port, () => console.log(`Server listening on port ${port}`));
