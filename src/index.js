import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { RoutesApp } from './RoutesApp';
import { ContextProvider } from './context/ContextApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <ContextProvider>
    <RoutesApp />
    </ContextProvider>
    </BrowserRouter>
);


