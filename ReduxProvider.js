import { Provider } from 'react-redux';
import GlobalState from './redux/reducers';
import { createStore } from 'redux';

import React, {Component} from 'react';
import  Nav from './components/Nav';

export default class ReduxProvider extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            score: 0,
            finished: false,
            currentQuestion: 0,
            questions: []
        }
        this.store = this.configureStore();
    }
    render() {
        return (
            <Provider store={ this.store }>
                    <Nav/>
            </Provider>
        );
    }
    configureStore() {
        return createStore( GlobalState, this.initialState);
    }
}