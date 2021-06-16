import { connect } from 'react-redux';
import AsyncComponent from './AsyncComponent';

function model(...deps) {
    return function wrapComponent(target) {
        const cacheRender = connect(function mapStateToProps(state) {
            return deps.reduce((mapState, dep) => {
                mapState[dep] = state[dep];
                return mapState;
            }, {});

        }, null)(target);
        return (props) => {
            return (
                <AsyncComponent deps={deps} {...props}>
                    {cacheRender}
                </AsyncComponent>
            )
        };
    }
}

export default model;