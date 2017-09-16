let express = require("express");
let availableAnimals = ["Fred", "Carl"];
module.exports = {
    start: function (config, imports) {

        const router = express.Router();
        router.get("/available-animals",(req, res) => {
            res.json(availableAnimals);
        })


        //return express route to be consumed by consumer function
        return {
            expressRouter: router,
        }
    },
}
