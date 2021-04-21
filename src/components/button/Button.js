import React, {Component} from 'react';
import './Button.css'

export default class Button extends Component {
  render(props) {
    return (<button type='submit' className="button">{this.props.valor}</button>)
  }
}
