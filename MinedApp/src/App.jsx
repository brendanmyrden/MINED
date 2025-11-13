import React from 'react';
import ReactFlow, { Background, Controls, MiniMap, useNodesState, useEdgesState } from 'reactflow';
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
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow 
        nodes={nodes} 
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
      >
        <Background />
        <MiniMap />
        <Controls />      
      </ReactFlow>
    </div>
  );
}