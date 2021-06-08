import React from 'react';
import model from '@/model';

@model('bar')
class Bar extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        this.props.dispatch({
            type: 'bar/fetchList',
            payload: {
                id: '123',
            }
        });
    }
    render() {
        const { bar: { list } } = this.props;
        return (
            <div>
                <button onClick={this.onClick}>load data</button>
                <ul>
                    {
                        list.map((item, i) => {
                            return (
                                <li key={i}>{item.name}</li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Bar;