let path = require("path");
module.exports =  {

        plugins: [
            {
                path: "./plugins/express-app",
                "port": 3001,
                "apiBaseUrl": "/api",
                    "entry": path.resolve(__dirname, "./public/index.html"),
                "staticFiles": path.resolve(__dirname, "./public/")
            },
            {path: "./plugins/animals/cats"},
            {path: "./plugins/animals/dogs"},
            {path: "./plugins/adoption"}

        ]
};