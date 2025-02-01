import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <h1 className={'text-3xl font-bold underline'}>Hello World!</h1>
  </StrictMode>,
);
