let Plugin = require("pluginbot/src/plugin");
let PluginbotBase = require("pluginbot/src/pluginbot-base");

class PluginbotClient {

    /**
     *
     * @param configPath -- todo : put logic in case of non-webpack build...
     */
    static async createPluginbot(configPath=null) {
        if (configPath) {
            throw "direct config Not supported yet - need webpack to prebuild.";
        }
        else {
            //assume webpack has built a config
            let config = await require("pluginbot_client_config");
            let plugins = {};
            for (let [key, value] of Object.entries(config.plugins)) {
                let pluginPackage = value.pluginPackage;
                let pkgPart = pluginPackage.pluginbot.client;
                let pluginName = key;
                let pluginConfig = value.clientConfig;
                console.log("GETTIN PLUGIN! " + pluginName);
                let plugin = require("PLUGINBOT/" + pluginName);
                console.log("THIS IS PLUGIN", plugin);
                plugins[pluginName] = new Plugin(plugin, pluginPackage, pluginConfig,pkgPart);


            }
            return new PluginbotBase(plugins);
        }
    }




}

module.exports = PluginbotClient;

