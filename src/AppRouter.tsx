// src/AppRouter.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'sonner';

// Pages
import LandingPage from './pages/LandingPage';
import StoryDisplay from './components/story/StoryDisplay';
import NotFound from './pages/NotFound';
import ScanError from './pages/ScanError';
//import AboutPage from './pages/AboutPage';
//import ContactPage from './pages/ContactPage';
//import SubmitStoryPage from './pages/SubmitStoryPage';
import MapPage from './pages/MapPage';
import DemoStoryPage from './pages/DemoStoryPage';
import TestCamera from './components/camera/TestCamera';
//import PrivacyPage from './pages/PrivacyPage';
//import TermsPage from './pages/TermsPage';
//import AccessibilityPage from './pages/AccessibilityPage';

const AppRouter: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/story/:locationId" element={<StoryDisplay />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/demo" element={<DemoStoryPage />} />
        {/* <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/submit" element={<SubmitStoryPage />} /> */}
        {/* <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/accessibility" element={<AccessibilityPage />} /> */}
        <Route path="/scan-error" element={<ScanError />} />
        <Route path="/test-camera" element={<TestCamera/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      <Toaster 
        position="bottom-center"
        toastOptions={{
          duration: 4000,
          style: {
            borderRadius: '0.5rem',
          },
        }}
      />
    </>
  );
};

export default AppRouter;