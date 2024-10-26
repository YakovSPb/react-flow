import React from 'react';
import { ReactFlow } from '@xyflow/react';
 
import '@xyflow/react/dist/style.css';
 
const initialNodes = [
  { 
    id: '1',
    position: { x: 100, y: 50 },
    data: { label: 'Входная нода' },
    className: 'bg-img'
   },
   { 
    id: '2',
    position: { x: 100, y: 150 },
    data: { label: 'Входная нода2' },
   },
   { 
    id: '3',
    position: { x: 20, y: 170 },
    data: { label: 'Входная нода3' },
   },
   { 
    id: '4',
    position: { x: 200, y: 170 },
    data: { label: 'Входная нода4' },
   }
];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2', animated: true }];
 
export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow nodes={initialNodes} edges={initialEdges} />
    </div>
  );
}