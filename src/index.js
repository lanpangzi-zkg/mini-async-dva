import ReactDOM from 'react-dom';
import AppLauncher from '@/AppLauncher';
import { HashRouter, Link } from 'react-router-dom';
import "core-js/stable";
import "regenerator-runtime/runtime";
import Router from './Router';

ReactDOM.render(
    <AppLauncher>
        <HashRouter>
            <div className="menu-box">
                <Link to="/">home</Link>
                <Link to="/foo">foo</Link>
                <Link to="/bar">bar</Link>
            </div>
            <Router />
        </HashRouter>
    </AppLauncher>
, document.querySelector('#root'));