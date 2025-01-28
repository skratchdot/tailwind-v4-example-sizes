import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { twMerge } from 'tailwind-merge';

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <h1 className={twMerge('text-3xl font-bold underline')}>Hello World!</h1>
  </StrictMode>
);
