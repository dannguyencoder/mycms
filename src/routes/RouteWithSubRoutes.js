import React from 'react';
import {Route} from 'react-router-dom';

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
function RouteWithSubRoutes(route) {
    return (
        <Route
            exact
            path={route.path}
            render={function (props) {
                console.log('=========================');
                console.log( <route.component {...props} routes={route.routes}/>);
                return <route.component {...props} routes={route.routes}/>;
            }}
        />
    );
}

export default RouteWithSubRoutes;