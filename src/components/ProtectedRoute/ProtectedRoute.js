import React from "react";
import { Route, Redirect } from "react-router-dom";

export function ProtectedRoute({ component: Component, ...props}) {
    return(
        <Route>
            {() => props.loggedIn ? <Component {...props} /> : <Redirect to="./" />}
        </Route>
    )
}

export function ProtectedRouteSign({ component: Component, ...props}) {
    return(
        <Route>
            {() => props.loggedIn ? <Redirect to="./movies" /> : <Component {...props} />}
        </Route>
    )
}