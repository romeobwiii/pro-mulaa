import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import ProductsPage from './pages/ProductsPage';
import PhilosophyPage from './pages/PhilosophyPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import SimpleLoading from './components/shared/SimpleLoading'; // or LoadingScreen

function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <SimpleLoading onFinish={() => setIsLoading(false)} />;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="philosophy" element={<PhilosophyPage />} />
        <Route path="case-studies" element={<CaseStudiesPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;