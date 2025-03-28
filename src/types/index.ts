// src/types/index.ts

// Coordinates for geolocation
export interface Coordinates {
    latitude: number;
    longitude: number;
  }
  
  // Resource information (links, phone numbers)
  export interface Resource {
    name: string;
    url: string;
    phone?: string;
  }
  
  // Story data structure
  export interface Story {
    id: string;
    locationId: string;
    title: string;
    subtitle: string;
    author: string;
    authorBio: string;
    imageUrl: string;
    audioUrl: string;
    content: string[];
    coordinates: Coordinates;
    locationDescription: string;
    publishedDate: string;
    resources: Resource[];
  }
  
  // Form submission types
  export interface StorySubmission {
    name: string;
    email: string;
    phone?: string;
    bio: string;
    location: string;
    storyTitle: string;
    storyContent: string;
    willBePresent: boolean;
  }
  
  // Camera component props
  export interface CameraProps {
    children: React.ReactNode;
    locationId: string;
    onCameraReady?: (isReady: boolean) => void;
  }
  
  // Environment configuration
  export interface AppConfig {
    verifyLocation: boolean;
    mapApiKey: string;
    apiBaseUrl: string;
    storageUrl: string;
  }