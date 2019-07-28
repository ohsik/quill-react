import React, { Component } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

class QuillEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      wordCount: 0
    };

    QuillEditor.modules = {
      toolbar: [[{ header: "1" }, { header: "2" }], ["image", "video"]]
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    // Word count
    let words = this.quillTextarea.editor.getText().split(/\s+/);
    let newWordArray =[];
    for (var i = 0; i < words.length; i++) {
      if (words[i]) {
        newWordArray.push(words[i]);
      }
    }

    this.setState({
      text: value,
      wordCount: newWordArray.length
    });

    console.log(this.state.wordCount)
  }

  componentDidMount() {
    // Auto focus on textarea
    this.quillTextarea.editor.focus();
  }

  render() {
    return (
        <ReactQuill
          className="quillEditor"
          value={this.state.text}
          theme="snow"
          modules={QuillEditor.modules}
          placeholder={"Type something here..."}
          onChange={this.handleChange}
          ref={(quilltext) => this.quillTextarea = quilltext}
        />
    );
  }
}

export default QuillEditor;