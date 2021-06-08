import { connect } from 'react-redux';
import AsyncComponent from './AsyncComponent';

function model(...deps) {
    return function wrapComponent(target) {
        return (props) => {
            return (
                <AsyncComponent deps={deps} {...props}>
                    {
                        connect(function mapStateToProps(state) {
                            return deps.reduce((mapState, dep) => {
                                mapState[dep] = state[dep];
                                return mapState;
                            }, {});

                        }, null)(target)
                    }
                </AsyncComponent>
            )
        };
    }
}

export default model;