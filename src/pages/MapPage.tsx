// src/pages/MapPage.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { stories } from '@/data/stories';
import { Story, Coordinates } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Navigation, MapPin, Compass } from 'lucide-react';
import { toast } from 'sonner';
import '../pages/pages-css/MapPage.css';

const MapPage: React.FC = () => {
  const [userLocation, setUserLocation] = useState<Coordinates | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const navigate = useNavigate();

  // Get user's current location
  useEffect(() => {
    const getLocation = (): void => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setUserLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            });
            setLoading(false);
            toast.success("Location found successfully");
          },
          (error) => {
            console.error("Error getting location:", error);
            setLoading(false);
            toast.error("Couldn't access your location. Some features may be limited.");
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser");
        setLoading(false);
        toast.error("Your browser doesn't support geolocation");
      }
    };

    getLocation();
  }, []);

  // Calculate distance between two coordinates in kilometers
  const calculateDistance = (coords1: Coordinates, coords2: Coordinates): number => {
    const R = 6371; // Earth's radius in km
    const dLat = (coords2.latitude - coords1.latitude) * Math.PI / 180;
    const dLon = (coords2.longitude - coords1.longitude) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(coords1.latitude * Math.PI / 180) * Math.cos(coords2.latitude * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  // Format distance to be more readable
  const formatDistance = (distance: number): string => {
    if (distance < 1) {
      return `${Math.round(distance * 1000)} meters`;
    }
    return `${distance.toFixed(1)} km`;
  };

  // Handle story selection
  const handleStorySelect = (story: Story): void => {
    setSelectedStory(story);
  };

  // Navigate to selected story
  const navigateToStory = (): void => {
    if (selectedStory) {
      navigate(`/story/${selectedStory.locationId}`);
    }
  };

  return (
    <div className="map-page-container">
      <div className="map-header">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => navigate('/')}
          className="back-button"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <h1>Story Locations</h1>
        {userLocation && (
          <Button 
            variant="ghost" 
            size="icon"
            className="compass-button"
            onClick={() => {
              toast.info("Locating nearby stories");
              // This would re-center the map on user's location in a real implementation
            }}
          >
            <Compass className="h-5 w-5" />
          </Button>
        )}
      </div>

      <div className="map-content">
        {loading ? (
          <div className="map-loading">
            <div className="loading-spinner"></div>
            <p>Finding nearby stories...</p>
          </div>
        ) : (
          <>
            <div className="map-placeholder">
              <div className="map-pins">
                {stories.map((story) => (
                  <div 
                    key={story.id}
                    className={`map-pin ${selectedStory?.id === story.id ? 'selected' : ''}`}
                    style={{
                      // In a real implementation, these would be calculated based on map coordinates
                      // These are just for demonstration purposes
                      left: `${(story.coordinates.longitude + 122.5) * 100}px`,
                      top: `${(37.8 - story.coordinates.latitude) * 100}px`
                    }}
                    onClick={() => handleStorySelect(story)}
                  >
                    <MapPin className="pin-icon" />
                  </div>
                ))}
                
                {userLocation && (
                  <div className="user-location-pin">
                    <Navigation className="user-pin-icon" />
                  </div>
                )}
              </div>
              
              <div className="map-overlay">
                <p className="map-notice">This is a placeholder for the map. In a real implementation, this would be an interactive map showing story locations and the user's current position.</p>
              </div>
            </div>
            
            <div className="story-list">
              <h2>Available Stories</h2>
              {stories.map((story) => (
                <Card 
                  key={story.id} 
                  className={`story-card ${selectedStory?.id === story.id ? 'selected' : ''}`}
                  onClick={() => handleStorySelect(story)}
                >
                  <CardContent className="p-4 flex items-center">
                    <MapPin className="story-card-icon" />
                    <div className="story-card-content">
                      <h3>{story.title}</h3>
                      <p className="story-location">{story.locationDescription}</p>
                      {userLocation && (
                        <span className="story-distance">
                          {formatDistance(calculateDistance(userLocation, story.coordinates))}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>

      {selectedStory && (
        <Card className="selected-story-details">
          <CardHeader>
            <CardTitle>{selectedStory.title}</CardTitle>
            <CardDescription>{selectedStory.subtitle}</CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="selected-story-author">
              <div 
                className="author-image" 
                style={{ backgroundImage: `url(${selectedStory.imageUrl})` }}
              />
              <div>
                <p className="author-name">{selectedStory.author}</p>
                <p className="author-bio">{selectedStory.authorBio}</p>
              </div>
            </div>
            
            <p className="story-preview">{selectedStory.content[0].substring(0, 100)}...</p>
            
            <div className="story-meta">
              <p className="location-name">{selectedStory.locationDescription}</p>
              {userLocation && (
                <p className="distance-info">
                  <Navigation className="h-4 w-4 mr-1" />
                  {formatDistance(calculateDistance(userLocation, selectedStory.coordinates))} away
                </p>
              )}
            </div>
          </CardContent>
          
          <CardFooter>
            <Button 
              onClick={navigateToStory}
              className="view-story-button"
            >
              View This Story
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default MapPage;