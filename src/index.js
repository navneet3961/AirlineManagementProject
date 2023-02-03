const express = require("express");
const bodyParser = require("body-parser");
const CityRepository = require("./repository/city-repository");

const { PORT } = require('./config/serverConfig');

const setupAndStartServer = async () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(PORT, async () => {
        console.log(`Server has started at ${PORT}`);
        const city = new CityRepository();
        city.createCity({ name: "Noida" });
    });
}

setupAndStartServer();