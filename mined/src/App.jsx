import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

const initialNodes = [{id: 1, position: { x: 250, y: 5 }, data: { label: 'Main Idea' }}];
const initialEdges = [];

export default function App() {
  return (
    < style={{ width: '100vw', height: '100vh' }}>
    <ReactFlow nodes={initialNodes} edges={initialEdges}>
      <Background />
      <Controls />      
    </ReactFlow>
    </div>
  )
}

export default App
