import React from 'react';
import {render} from 'react-dom';
import PluginBotClient from "../../../pluginbot-react";
// import PluginbotProvider from "../../../src/provider.js";
import PluginbotProvider from "./stuff/provider";
import ReactDOM from 'react-dom'
import AppRouter from "./router.jsx"
PluginBotClient.createPluginbot().then(pluginbot => {
    pluginbot.initialize();
    render((<PluginbotProvider pluginbot={pluginbot}>
        <AppRouter/>
    </PluginbotProvider>), document.getElementById('app'));

});