import React from 'react';
import ReactDOM from 'react-dom';
import KanbanBoard from './components/KanbanBoard';
import './index.css'; // If you have a CSS file for your main application

ReactDOM.render(
  <React.StrictMode>
    <KanbanBoard />
  </React.StrictMode>,
  document.getElementById('root')
);
