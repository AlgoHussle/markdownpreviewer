const initialState = `# Welcome to my React Markdown Previewer!

#Head

`;



marked.setOptions({
  breaks: true,
});

const renderer = new marked.Renderer();


function App() {
  const [text, setText] = React.useState("");
  return (
    <div className="text-center px-4">
      <h1 className="p-4">Markdown Previewer</h1>
      <textarea
        name="text"
        id="editor"
        value={text}
        rows="10"
        className="textarea"
        onChange={(e) => setText(e.target.value)}
      />
      <h3 className="mt-3">Output</h3>
      <Preview markdown={text}></Preview>
    </div>
  );
}

function Preview({ markdown }) {
  return (
    <div>
      <div
        dangerouslySetInnerHTML={{
          __html: marked(markdown, { renderer: renderer }),
        }}
        id="preview"
      ></div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
