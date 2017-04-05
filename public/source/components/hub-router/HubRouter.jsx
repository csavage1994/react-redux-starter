import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import History from '../history/History';
import HelloWorld from '../hello-world/HelloWorld';
import Layout from '../layout/Layout';

export default function HubRouter() {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={Layout}>
                <IndexRoute component={HelloWorld} />
                <Route path="history" component={History} />
            </Route>
        </Router>
    );
}
