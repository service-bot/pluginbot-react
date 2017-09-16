let express = require("express");
let path = require("path");
let {take} = require("redux-saga/effects");
let consume = require("pluginbot/src/pluginbot-base").consume
module.exports  = {
    start : function (config, imports) {

        const app = express();
        const router = express.Router();
        app.use(express.static(config.staticFiles));
        app.use(config.apiBaseUrl, router);
        app.get('*', function (req, res) {
            res.sendFile(config.entry);
        });

        app.listen(config.port, function () {
            console.log(`Example app listening on port ${config.port}!`)
        });

        //return express route to be consumed by consumer function
        return {
            expressApp: app,
            baseRouter: router
        }
    },
    consumer : function*(config, imports, services){
        let router = yield consume(services.baseRouter);
        while(true){
            let newRoute = yield consume(services.expressRouter);
            router.use(newRoute);
            console.log("new route added: ", newRoute);
        }
    }
};