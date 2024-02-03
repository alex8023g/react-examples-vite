import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UseEffectPage } from './pages/UseEffectPage';
import { HomePage } from './pages/HomePage';

export const pages = {
  home: { path: '/', name: 'Главная' },
  useeffect: { path: '/useeffect', name: 'UseEffect' },
} as const;

export type Pages = keyof typeof pages;

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={pages.home.path} element={<HomePage />} />
        <Route path={pages.useeffect.path} element={<UseEffectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
