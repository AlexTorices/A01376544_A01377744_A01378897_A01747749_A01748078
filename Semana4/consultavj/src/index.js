import React from 'react';
import { createRoot } from 'react-dom/client';
import { MultipleCustomHooks } from './Hooks/MultipleCustomHooks';
import './index.css';
import { VideojuegosApp } from './VideojuegosApp';

const container = document.getElementById('root');

const root = createRoot(container);

//root.render(<VideojuegosApp />);

root.render(<MultipleCustomHooks />);