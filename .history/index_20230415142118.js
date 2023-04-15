function App() {

    const [text, setText] = React.useState('')
    return (
        <div className="text-center px-4">
            <h1 className="p-4">Markdown Previewer</h1>
            <textarea name="text" id="text" value={text} rows="10" className="textarea" />
            <h3 className="mt-3">Output</h3>
            <Preview markdown={text} ></Preview>
        </div>
        
    )
}

function Preview({markdown}) {
    
}




ReactDOM.render(<App />, document.getElementById('root'));