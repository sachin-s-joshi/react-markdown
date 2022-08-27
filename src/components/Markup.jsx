import { useState } from "react";
import { marked } from "marked";
import Prism from "prismjs";
function Markup() {
  const placeholder = `# Welcome to my React Markdown Previewer!
  <hr>
  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  
  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `;

  marked.setOptions({
    breaks: true,
    highlight: function (code) {
      return Prism.highlight(code, Prism.languages.javascript, "javascript");
    }
  });
  const renderer = new marked.Renderer();
  const [text, setText] = useState(placeholder);
  //const [markup, setMarkup] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div className="flex-container">
      <div id="editor">
        <h3 className="header">Editor</h3>
        <textarea rows="60" cols="60" onChange={handleChange} value={text} />
      </div>
      <div id="preview">
        <h3 className="header">Preview Mode</h3>
        <div
          rows="20"
          cols="100"
          dangerouslySetInnerHTML={{
            __html: marked(text, { renderer: renderer })
          }}
        />
      </div>
    </div>
  );
}

export default Markup;
//{{__html: marked(props.text, {renderer: renderer})}}
