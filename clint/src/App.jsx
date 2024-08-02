import React, { useState } from 'react';
import senddta from './components/senddta';
import ResponseDisplay from './components/ResponseDisplay';
import './App.css';

function App() {
    const [response, setResponse] = useState(null);

    return (
        <div className="App">
            <h1>bajaj Test</h1>
            <senddta setResponse={setResponse} />
            {response && <ResponseDisplay response={response} />}
        </div>
    );
}

export default App;
