import { Switch, Route } from 'react-router-dom';
import App from './pages/Home';
import Bar from './pages/Bar';
import Foo from './pages/Foo';

function Router() {
    return (
        <Switch>
            <Route exact path="/">
                <App />
            </Route>
            <Route path="/bar">
                <Bar />
            </Route>
            <Route path="/foo">
                <Foo />
            </Route>
        </Switch>
    );
}

export default Router;