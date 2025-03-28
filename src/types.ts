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