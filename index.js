const express = require('express'); 
const app = express();
app.get('/', (req, res) => {
   res.status(200).json({message : "Ok"});
});
const port =9000
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});