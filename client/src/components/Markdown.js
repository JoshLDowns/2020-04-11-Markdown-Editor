import React from 'react'
import MarkdownView from 'react-showdown'

function Markdown(props) {

    return (
      <div id='new-markdown'>
        <MarkdownView markdown={props.markdown} options={{emoji: true, simpleLineBreaks: true, simplifiedAutoLink: true, strikethrough: true}} />
      </div>
    )
  }

  export default Markdown