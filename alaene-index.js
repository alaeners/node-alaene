const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", function(req, res){
    res.send('Alaene Rufino de Sousa');
});

app.listen(port, () => {
  console.info(`Server running at http://localhost:${port}`);
});