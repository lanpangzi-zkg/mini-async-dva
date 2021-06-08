import React from 'react';
import model from '@/model';

@model('foo')
class Foo extends React.Component {
    render() {
        const { foo: { user } } = this.props;
        return (
            <div>user: {user?.name}</div>
        );
    }
}

export default Foo;