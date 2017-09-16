import React from 'react';
import { connect } from 'react-redux';

export default function(...servicesToConsume){
    return function(Component){
        const mapStateToProps = (state) => {

            console.log("CONSUMIN!", state);
            let services = servicesToConsume.reduce((acc, service) => {
                acc[service] = state.services[service];
                console.log(service, "GOT ME A THING", state.services[service]);
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
