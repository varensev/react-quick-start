import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './app/styles/index.css'
import { ThemePropvider } from './shared/theme/theme-propvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemePropvider>
      <App />
    </ThemePropvider>
  </React.StrictMode>,
)
