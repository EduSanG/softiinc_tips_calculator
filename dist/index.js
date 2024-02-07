import express from "express";
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Setup Succesful!! App Running!!');
});
app.listen(port, () => {
    console.log('backend running on port ' + port);
});
