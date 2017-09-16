import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux'


class PluginbotProvider extends  React.Component{
    constructor(props){
        super(props);
    }

    getChildContext() {
        return {pluginbot: this.props.pluginbot};
    }


    render(){
        return (<Provider store={this.props.pluginbot.store}>
        {this.props.children}
    </Provider>)
    }


}

PluginbotProvider.childContextTypes = {
    pluginbot : PropTypes.object
}

PluginbotProvider.propTypes = {
    pluginbot: PropTypes.object.isRequired
};

export default PluginbotProvider;