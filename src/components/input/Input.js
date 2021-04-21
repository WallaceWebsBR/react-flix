import React, { Component } from 'react';
import './Input.css'

export default class Input extends Component{
    render(props){
        return <input placeholder={this.props.placeholder} className="input"></input>
    }
}