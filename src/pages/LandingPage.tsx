// src/pages/LandingPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { QrCode, Map, Info, Phone, Send, ChevronRight } from 'lucide-react';
import '../pages/pages-css/LandingPage.css';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1 className="landing-title">Echoes from Home</h1>
        <p className="landing-subtitle">Discover the hidden narratives of Australia</p>
        
        <Card className="app-description-card">
          <CardContent className="p-6">
            <p>
              Find QR codes around the city to unlock personal stories tied to specific locations.
              Experience the city through the eyes of those who lived its untold history.
            </p>
          </CardContent>
        </Card>
        
        <div className="how-it-works">
          <h2 className="section-title">How It Works</h2>
          <div className="steps">
            <Card className="step-card">
              <CardContent className="p-4 flex flex-col items-center">
                <div className="step-number">1</div>
                <QrCode className="step-icon" />
                <p className="step-text">Find a QR code on a street sign, building, or public space</p>
              </CardContent>
            </Card>
            
            <Card className="step-card">
              <CardContent className="p-4 flex flex-col items-center">
                <div className="step-number">2</div>
                <div className="camera-icon-container">
                  <div className="camera-icon"></div>
                </div>
                <p className="step-text">Scan it with your phone's camera</p>
              </CardContent>
            </Card>
            
            <Card className="step-card">
              <CardContent className="p-4 flex flex-col items-center">
                <div className="step-number">3</div>
                <div className="story-icon-container">
                  <div className="story-icon"></div>
                </div>
                <p className="step-text">Experience a story tied to that exact location</p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="cta-section">
          <Button asChild className="cta-button">
            <Link to="/map">
              <Map className="mr-2 h-4 w-4" /> View Story Locations
            </Link>
          </Button>
          
          <div className="or-divider">
            <Separator className="or-line" />
            <span>or</span>
            <Separator className="or-line" />
          </div>
          
          <Button asChild variant="outline" className="demo-button">
            <Link to="/demo">
              Try a Demo Story <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <Card className="about-card">
          <CardHeader>
            <CardTitle>About Echoes from Home</CardTitle>
            <CardDescription>
                A community-driven project partnered with{' '}
                <a 
                  href="https://wearemobilise.org.au/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary underline hover:text-primary/80"
                >
                  We Are Mobilise.
                </a>
              </CardDescription>
          </CardHeader>
          
          <CardContent>
            <p>
              Echoes from Home is a community-driven project that shares real stories of homelessness across Australia - not just the struggle, but the strength behind them.
              Hearing these voices changes how we see homelessness. And when we see differently, we act differently.
              Discover how you can be part of the solution.
            </p>
          </CardContent>
          
          <CardFooter className="about-links">
            <Button asChild variant="ghost" size="sm">
              <Link to="/about">
                <Info className="mr-2 h-4 w-4" /> Learn More
              </Link>
            </Button>
            
            <Button asChild variant="ghost" size="sm">
              <Link to="/contact">
                <Phone className="mr-2 h-4 w-4" /> Contact Us
              </Link>
            </Button>
            
            <Button asChild variant="ghost" size="sm">
              <Link to="/submit">
                <Send className="mr-2 h-4 w-4" /> Submit Your Story
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      <footer className="landing-footer">
        <p>&copy; 2025 Echoes From Home Project</p>
        <div className="footer-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Use</Link>
          <Link to="/accessibility">Accessibility</Link>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;