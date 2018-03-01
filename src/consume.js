import React from 'react';
import { connect } from 'react-redux';

export default function(...servicesToConsume){
    return function(Component){
        const mapStateToProps = (state) => {
            if(!state.pluginbot){
                console.error("pluginbot not initialized, try adding pluginbot provider")
                return {services : {}};
            }
            let services = servicesToConsume.reduce((acc, service) => {
                acc[service] = state.pluginbot.services[service];
                return acc;
            }, {});

            return { services };
        };

        class ServiceConsumerWrapper extends React.Component{
            render(){
                return (<Component {...this.props}/>)
            }
        }

        return connect(mapStateToProps)(ServiceConsumerWrapper);
    }
}
