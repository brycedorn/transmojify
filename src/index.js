import React from 'react'
import { render } from 'react-dom'
import * as firebase from 'firebase';

import Transmojifier from '../lib/transmojifier';

import skeleton from 'skeleton-css-webpack';
import("./index.scss");


class ReactTransmojifier extends React.Component {

  transmojifier: Object;

  constructor(props) {
    super(props);

    this.transmojifier = new Transmojifier;
    this._onInputChange = this._onInputChange.bind(this);
  }

  _onInputChange(e) {
    const text = e.target.value;

    const transmojified = this.transmojifier.transmojify(text);

    document.getElementById("target").value = transmojified;
  }

  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <div id="symbol">
            <div className="outer-glow">
              <div className="symbol-inner">
                <div className="symbol-core" />
              </div>
            </div>
          </div>
          <div class="main">
            <h1>transmojify<span class='muted'>.js</span></h1>
          </div>
          <div className="row">
            <div className="one-half column">
              <label htmlFor="source">Plain</label>
              <textarea onChange={this._onInputChange} className="u-full-width" placeholder="Feed me text 😈" id="source" />
            </div>
            <div className="one-half column">
              <label htmlFor="target" className="right-aligned">Transmojified</label>
              <textarea className="u-full-width" placeholder="" id="target" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

render(<ReactTransmojifier />, document.getElementById('root'));
