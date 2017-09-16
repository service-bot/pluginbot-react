const CONFIG_PATH = "./config"
let path = require("path");
let Pluginbot = require("pluginbot");
let pb = Pluginbot.createPluginbot(path.resolve(__dirname, CONFIG_PATH));

pb.then(pbot => {
    return pbot.initialize()
}).then(plugins => {
    console.log("PLUGINS ENABLED:\n\n", plugins);
}).catch(e => {
    console.error(e);
})


