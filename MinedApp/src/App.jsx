import React from 'react';
import ReactFlow, { Background, Controls, MiniMap } from 'reactflow';
import 'reactflow/dist/style.css';
import './App.css';

const initialNodes = [
  {id: '1', position: { x: 100, y: 100 }, data: { label: 'Main Idea' } },
  {id: '2', position: { x: 300, y: 200 }, data: { label: 'Main Idea' } },

];

  const initialEdges = [
    {id: 'e1-2', source: '1', target: '2', animated: true },
  ];

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
    <ReactFlow nodes={initialNodes} edges={initialEdges}>
     <Background />
      <MiniMap />
      <Controls />      
     </ReactFlow>
    </div>
  );
}