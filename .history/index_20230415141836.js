function App() {
    return (
        <div className="text-center px-4">
            <h1 className="p-4">Markdown Previewer</h1>
            <textarea name="text" id="text" cols="" />
        </div>
        
    )
}




ReactDOM.render(<App />, document.getElementById('root'));