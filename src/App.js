import React from "react";
import "./styles.css";
import marked from "marked";

const defaultMarkdown =
`An h1 header
============

Paragraphs are separated by a blank line.

2nd paragraph. *Italic*, **bold**, and \`monospace\`. Itemized lists
look like:

  * this one
  * that one
  * the other one
  > Block quotes are
  > written like so.
  >
  > They can span multiple paragraphs,
  > if you like.
  
Three dots ... will be converted to an ellipsis.
  Unicode is supported. ☺
  
An h2 header
------------
  
  Here's a numbered list:
  
   1. first item
   2. second item
   3. third item
  
Here's a code sample:
  
~~~
for (let i=0; i < groceryList.length; i++ {
    console.log(i) 
}
~~~ 


`;

const CopyButton = (props) => {
  return (
    <div id='copy-button' onClick={props.handleCopy}>
    {props.status}
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: defaultMarkdown,
      copied: 'Copy'
    };

    this.handleChange = this.handleChange.bind(this);
    this.copyCodeToClipboard = this.copyCodeToClipboard.bind(this)
  }

  componentDidMount() {
    this.setState({
      input: defaultMarkdown
    });
  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
      copied:'Copy'
    });
  }


  copyCodeToClipboard = (state) => {
    const context = this.textArea;
    context.select();
    document.execCommand("copy");
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(document.createRange());

    this.setState({
      copied: 'Copied'
    })

  }


  render() {
    return (
      <React.Fragment>
        <div id="container">
          <textarea
            ref={(textarea) => this.textArea = textarea}
            id="editor"
            onChange={this.handleChange}
            placeholder="Your markdown goes here..."
            defaultValue={defaultMarkdown}
          />
          <CopyButton status={this.state.copied} handleCopy={() => this.copyCodeToClipboard()}/>
          <div
            id="preview"
            dangerouslySetInnerHTML={{ __html: marked(this.state.input) }}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
