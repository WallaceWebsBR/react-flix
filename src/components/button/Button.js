import React, {Component} from 'react';
import './Button.css'

export default class Button extends Component {
  render(props) {
    return (<button type='submit' className="estilo">{this.props.valor}</button>)
  }
}
