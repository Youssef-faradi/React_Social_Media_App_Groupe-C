import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <NextUIProvider>
                <App />
            </NextUIProvider>
        </BrowserRouter>
    </React.StrictMode>
);
