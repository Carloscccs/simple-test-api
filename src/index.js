const express = require("express");
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routes
app.use(require('./routes/index'));

//Iniciar servidor
app.listen(3000, () => {
    console.log("Sevidor en el puerto 3000");
});