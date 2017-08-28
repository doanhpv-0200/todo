import React from 'react';
import TodoList from 'components/todo';

import './app.scss';

export default class App extends React.Component {
    render () {
        return (
            <div className="app__content">
                <div className="app__header"></div>
                <div className="app__body">
                    <TodoList />
                </div>
            </div>
        )
    }
}
