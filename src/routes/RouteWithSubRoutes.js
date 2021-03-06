import React from 'react';
import {Route} from 'react-router-dom';

// wrap <Route> and use this everywhere instead, then when
// sub adminRoutes are added to any route it'll work
function RouteWithSubRoutes(route) {
    return (
        <Route
            exact
            path={route.path}
            render={function (props) {
                return <route.component {...props} routes={route.routes}/>;
            }}
        />
    );
}

export default RouteWithSubRoutes;