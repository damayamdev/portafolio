import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { LoadingSpinner } from './components/ui/LoadingSpinner';

// Lazy load page components
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Skills = lazy(() => import('./pages/Skills').then(module => ({ default: module.Skills })));
const Projects = lazy(() => import('./pages/Projects').then(module => ({ default: module.Projects })));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <Suspense fallback={<LoadingSpinner />}>
              <Home />
            </Suspense>
          } />
          <Route path="about" element={
            <Suspense fallback={<LoadingSpinner />}>
              <About />
            </Suspense>
          } />
          <Route path="skills" element={
            <Suspense fallback={<LoadingSpinner />}>
              <Skills />
            </Suspense>
          } />
          <Route path="projects" element={
            <Suspense fallback={<LoadingSpinner />}>
              <Projects />
            </Suspense>
          } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;