// src/components/story/StoryDisplay.tsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getStoryByLocationId, isUserNearLocation } from '@/data/stories';
import { Coordinates, Story } from '@/types';
import CameraView from '@/components/camera/CameraView';
import ARScene from '@/components/ar/ARScene';
import CallToActionDialog from '../Dialog/CallToActionDialog';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { X, ExternalLink, Play, Pause } from 'lucide-react';
import HelpButton from '../Dialog/HelpButton';
import './StoryDisplay.css';

interface StoryParams {
  locationId: string;
}

const StoryDisplay: React.FC = () => {
  const { locationId } = useParams<StoryParams>();
  const [story, setStory] = useState<Story | null>(null);
  const [currentSegment, setCurrentSegment] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [locationVerified, setLocationVerified] = useState<boolean>(false);
  const [loadingLocation, setLoadingLocation] = useState<boolean>(true);
  const [showCtaDialog, setShowCtaDialog] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const storyContentRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Fetch story data based on the locationId
  useEffect(() => {
    if (!locationId) {
      toast.error("No location ID provided");
      navigate('/not-found');
      return;
    }
    
    const storyData = getStoryByLocationId(locationId);
    
    if (storyData) {
      setStory(storyData);
      
      // Check if we need to verify location
      const shouldVerifyLocation = false; // Disable location verification for now
      
      if (shouldVerifyLocation) {
        verifyUserLocation(storyData.coordinates);
      } else {
        setLocationVerified(true);
        setLoadingLocation(false);
      }
    } else {
      // Handle invalid location ID
      toast.error("Story not found for this location");
      navigate('/not-found');
    }
  }, [locationId, navigate]);

  // Location verification logic
  const verifyUserLocation = (storyCoords: Coordinates): void => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userCoords: Coordinates = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          };
          
          // Check if user is near the story location (within 100 meters)
          const isNearby = isUserNearLocation(userCoords, storyCoords);
          setLocationVerified(isNearby);
          setLoadingLocation(false);
          
          if (!isNearby) {
            toast.warning("You're not at the story location. For the best experience, visit the actual location.");
          } else {
            toast.success("Location verified! Enjoy the story.");
          }
        },
        (error) => {
          console.error("Error getting user location:", error);
          toast.warning("Couldn't verify your location. Allowing story access anyway.");
          setLocationVerified(true);
          setLoadingLocation(false);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser");
      toast.warning("Your browser doesn't support geolocation. Allowing story access anyway.");
      setLocationVerified(true);
      setLoadingLocation(false);
    }
  };

  // Audio playback logic
  useEffect(() => {
    if (story && audioRef.current) {
      audioRef.current.src = story.audioUrl;
      
      audioRef.current.onended = () => {
        setIsPlaying(false);
        // Show the CTA dialog when audio finishes
        setShowCtaDialog(true);
      };
    }
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [story]);

  // Toggle audio playback
  const toggleAudio = (): void => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      toast.info("Audio paused");
    } else {
      audioRef.current.play().catch(err => {
        console.error("Error playing audio:", err);
        toast.error("Couldn't play audio. Please try again.");
      });
      toast.success("Playing audio narration");
    }
    setIsPlaying(!isPlaying);
  };

  // Camera ready callback
  const handleCameraReady = (isReady: boolean): void => {
    if (!isReady) {
      console.error("Camera could not be initialized");
    }
  };

  // Handle closing the CTA dialog
  const handleCloseCtaDialog = () => {
    setShowCtaDialog(false);
  };

  // Render loading and error states
  if (!locationId) {
    return (
      <div className="error-container">
        <Card>
          <CardHeader>
            <CardTitle>Error</CardTitle>
            <CardDescription>No location ID provided</CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  if (!story || loadingLocation) {
    return (
      <div className="loading-container">
        <Card className="loading-card">
          <CardHeader>
            <div className="h-8 w-3/4 bg-muted rounded animate-pulse"></div>
            <div className="h-4 w-1/2 bg-muted rounded animate-pulse mt-2"></div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="h-4 w-full bg-muted rounded animate-pulse"></div>
              <div className="h-4 w-full bg-muted rounded animate-pulse"></div>
              <div className="h-4 w-3/4 bg-muted rounded animate-pulse"></div>
            </div>
          </CardContent>
        </Card>
        <p>Loading story...</p>
      </div>
    );
  }

  if (!locationVerified) {
    return (
      <div className="location-error">
        <Card>
          <CardHeader>
            <CardTitle>Location Mismatch</CardTitle>
            <CardDescription>
              This story is best experienced at its actual location.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="location-description">{story.locationDescription}</p>
          </CardContent>
          <Button 
            onClick={() => setLocationVerified(true)}
            variant="default"
          >
            Continue Anyway
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="story-page">
      <CameraView locationId={locationId} onCameraReady={handleCameraReady}>
        <ARScene story={story} currentSegment={currentSegment} />
      </CameraView>
      
      <div className="story-content-wrapper">
        <div className="story-header">
          <h1 className="story-title">{story.title}</h1>
          <h2 className="story-subtitle">{story.subtitle}</h2>
        </div>

        <div className="story-audio-controls">
          <div className="audio-buttons-row">
            <Button 
              onClick={toggleAudio}
              variant="outline"
              className="audio-button"
            >
              {isPlaying ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
              {isPlaying ? "Pause Audio" : "Play Audio"}
            </Button>
            <HelpButton onClick={() => setShowCtaDialog(true)} />
          </div>
        </div>
        <div className="story-content-scroll" ref={storyContentRef}>
          {story.content.map((segment, index) => (
            <Card key={index} className="story-segment">
              <CardHeader className="story-card-header">
                <div className="author-info">
                  <div 
                    className="author-image" 
                    style={{ backgroundImage: `url(${story.imageUrl})` }}
                  />
                  <div className="author-details">
                    <CardTitle className="author-name">{story.author}</CardTitle>
                    <CardDescription>{story.authorBio}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="story-text">
                  <p>{segment}</p>
                </div>
                
                <div className="story-progress">
                  <Progress 
                    value={((index + 1) / story.content.length) * 100} 
                    className="story-progress-bar" 
                  />
                  <div className="story-pagination">
                    {index + 1} / {story.content.length}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {story.resources && story.resources.length > 0 && (
          <Card className="resources-card">
            <CardHeader>
              <CardTitle className="resources-title">Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="resources-list">
                {story.resources.map((resource, index) => (
                  <li key={index} className="resource-item">
                    <a 
                      href={resource.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      {resource.name} <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                    {resource.phone && (
                      <span className="resource-phone">{resource.phone}</span>
                    )}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        <Button 
          onClick={() => navigate('/')}
          variant="secondary"
          size="sm"
          className="close-button"
        >
          <X className="h-4 w-4 mr-2" /> Exit
        </Button>
      </div>
      
      <audio ref={audioRef} />
      
      {/* Call to Action Dialog */}
      {story && (
        <CallToActionDialog
          open={showCtaDialog}
          onClose={handleCloseCtaDialog}
          story={story}
        />
      )}
    </div>
  );
};

export default StoryDisplay;