import React, { Component } from 'react';
import CustomBag from '../components/CustomBag';
import {env} from '../config'

export default class BagForm extends Component {
    render() {
        return (
            <div className="Custom">
                <header className="App-header">
                <h1 className="App-title">Sac sur mesure</h1>
                </header>
                <CustomBag env={env} />
            </div>
        )
    }
}