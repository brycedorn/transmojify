import React from 'react'
import { render } from 'react-dom'
import { Helmet } from "react-helmet"

import Transmojifier from '../lib/transmojifier'

import skeleton from 'skeleton-css-webpack'
import moj from './moj.png'
import circ from './circ.png'
import cyclone from './cyclone.png'
import("./index.scss")

class ReactTransmojifier extends React.Component {

  transmojifier: Object

  constructor(props) {
    super(props)

    this.transmojifier = new Transmojifier
    this._onInputChange = this._onInputChange.bind(this)

    this.state = {
      transmojified: ''
    }
  }

  _onInputChange(e) {
    const text = e.target.value

    this.setState({
      transmojified: this.transmojifier.transmojify(text)
    })
  }

  render() {
    return (
      <div className="wrapper">
        <Helmet>
          <meta http-equiv="Content-Type" content="text/html" />
          <title>transmojify</title>
          <meta name="description" content="Make text cool as heck." />
          <meta property="og:title" content="transmojify.js" />
          <meta property="og:description" content="Make text cool as heck." />
          <link href={moj} rel='shortcut icon' type='image/png' />
          <link href="https://fonts.googleapis.com/css?family=Milonga" rel="stylesheet" />
        </Helmet>
        <div className="container">
          <div id="symbol">
            <div className="outer-glow">
              <div className="symbol-inner">
                <img className="symbol-cyclone" src={cyclone} />
                <img className="symbol-core" src={circ} />
              </div>
            </div>
          </div>
          <div className="main">
            <h1>transmojify</h1>
            <h4>Make text cool as heck.</h4>
          </div>
          <div className="row">
            <div className="one-half column">
              <label htmlFor="source">Plain</label>
              <textarea onChange={this._onInputChange} className="u-full-width" placeholder="Feed me text 😈" id="source" />
            </div>
            <div className="one-half column">
              <label htmlFor="target" className="right-aligned">Transmojified</label>
              <textarea className="u-full-width" placeholder="" id="target" value={this.state.transmojified} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

render(<ReactTransmojifier />, document.getElementById('root'))
