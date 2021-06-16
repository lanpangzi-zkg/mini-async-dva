# mini-async-dva
仿dva开发模式的mini-async-dva，相比dva，mini-async-dva采用async/await控制model层，并自动异步加载路由组件和与之对应的model；

# 开发简介

## 路由
```
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
```
#### 路由加载组件采用统一的异步加载，通过core/AsyncComponent组件实现

## model层
```
export default {
    namespace: 'bar',
    state: {
        list: [],
    },
    effects: {
        async fetchList(payload, updateStore) { // updateStore可用于手动更新该model下的state
            const result = await new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        list: [{ name: 'b' }],
                    });
                }, 2000);
            });
            return result;
        }
    }
};

```
#### 执行副作用使用async/await进行流程控制
#### effect函数内部可通过this访问state对象
## model注入
```
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
```
#### model(a, ...)可以同时注册多个models对象，model函数具体实现可查看core/model文件