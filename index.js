const express = require('express');
const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
  res.send('Hello World from naval-play-server!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
