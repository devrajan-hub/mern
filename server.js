const express = require('express');
const app = express();

app.use(express.json({ extended: false }));

app.use('/api/users', require('./routes/api/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));
