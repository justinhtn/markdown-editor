import React from "react";
import "./styles.css";
import marked from "marked";

const defaultMarkdown = `
# Justin Houghton
## Developer
<img src='https://pbs.twimg.com/profile_images/1289682060408311808/Cgn95ClH_200x200.jpg'/>

[Portfolio](github.com/justinhtn)
\`\`\`
/*a code block:*/

.thick-green-border {
  border-color: green;
  border-width: 10px;
  border-style: solid;
  border-radius: 50%;
  \`\`\`

  <b>Technologies</b>

  <li>React</li>

  >> I began my career as a product designer.
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: defaultMarkdown
    };

    this.updateText = this.updateText.bind(this);
  }

  componentDidMount() {
    this.setState({
      input: defaultMarkdown
    });
  }

  updateText(event) {
    this.setState({
      input: event.target.value
    });
  }

  render() {
    return (
      <React.Fragment>
        <div id="container">
          <textarea
            id="editor"
            onChange={this.updateText}
            placeholder="Your markdown goes here..."
          />
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
