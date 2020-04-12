
import Markdown from './Markdown.js'
import React from 'react';
import '../styles/App.css';
import { Controlled as CodeMirror } from 'react-codemirror2';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
  }

  render() {

    let options = {
      value: '**Welcome to the text editor!**',
      getValue: {separator: '<br />'},
      lineNumbers: true,
      gutter: true,
      linewrapping: true,
      inputStyle: 'textarea',
      draggable: true
    }

    return (
      <div id='main-container'>
        <div id='header'>
          <h1 id='header-text'>Markdown Editor</h1>
          <p>A simple Markdown Editor by Josh Downs</p>
        </div>
        <div id='input-output'>
          <div id='input'>
            <CodeMirror
              value={this.state.value}
              options={options}
              onBeforeChange={(editor, data, value) => {
                this.setState({ value });
              }}
              onChange={(editor, data, value) => {
                this.setState({ value });
              }}
            />
          </div>
          <div id='output'>
          <div id='output-scroll'>
            <Markdown markdown={this.state.value} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default App;
