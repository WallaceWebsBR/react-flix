import React, {Component} from 'react';
import './Button.css'

export default class Button extends Component {
  render(props) {
    return (<input type='button' className="estilo" value={this.props.valor} />)
  }
}
