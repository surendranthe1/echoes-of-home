// src/data/stories.ts
import { Story, Coordinates } from '../types';
import deathAudio from '../assets/audio/death.mp3';

export const stories: Story[] = [
  {
    id: "story-001",
    locationId: "flinders-street-melbourne-001",
    title: "David's Turning Point",
    subtitle: "From the Streets to Hope",
    author: "David Roberts",
    authorBio: "Community Support Program Graduate",
    imageUrl: "/assets/stories/david.jpg",
    audioUrl: deathAudio,
    content: [
      "Mental health and addiction broke my life apart. I lost my job as a construction worker, then my apartment, then my connections with family.",
      "For two years, I survived on the streets around Flinders Street Station. Melbourne can be brutal in winter – those nights were the longest of my life.",
      "Everything changed when a outreach worker from Sacred Heart Mission stopped to talk to me. They didn't just offer a meal, they offered a pathway. Counseling, rehabilitation support, job training – they saw me as a person, not just another homeless statistic.",
      "Today, I'm in stable housing. I'm working part-time and rebuilding relationships with my kids. It wasn't just about a bed or a job – it was about believing I could have a future again."
    ],
    coordinates: {
      latitude: -37.8183,
      longitude: 144.9671
    },
    locationDescription: "Flinders Street Station area",
    publishedDate: "2023-09-15",
    resources: [
      {
        name: "Sacred Heart Mission",
        url: "https://www.sacredheartmission.org/",
        phone: "(03) 9676 2341"
      },
      {
        name: "Launch Housing",
        url: "https://launchhousing.org.au/",
        phone: "1800 582 825"
      }
    ]
  },
  {
    id: "story-002",
    locationId: "fitzroy-melbourne-001",
    title: "Emma's Resilience",
    subtitle: "Escaping Domestic Violence",
    author: "Emma Williams",
    authorBio: "Survivor and Community Advocate",
    imageUrl: "/assets/stories/emma.jpg",
    audioUrl: "/assets/audio/emma-story.mp3",
    content: [
      "Domestic violence pushed me into homelessness. After years of abuse, I finally left with nothing but my courage and a small bag of clothes.",
      "I spent months couch surfing, then sleeping in my old car parked in different streets around Fitzroy. Some nights were terrifying – I was always on edge, always afraid.",
      "Domestic Violence Resource Centre became my lifeline. They didn't just provide emergency accommodation. They connected me with legal support, counseling, and a job training program.",
      "Now I'm a peer support worker, helping other women navigate their way out of similar situations. My experience became my strength. I want other women to know they're not alone."
    ],
    coordinates: {
      latitude: -37.8009,
      longitude: 144.9750
    },
    locationDescription: "Fitzroy neighborhood streets",
    publishedDate: "2023-10-22",
    resources: [
      {
        name: "Domestic Violence Resource Centre Victoria",
        url: "https://www.dvrcv.org.au/",
        phone: "(03) 9373 0123"
      },
      {
        name: "Women's Housing Limited",
        url: "https://www.whealth.com.au/",
        phone: "(03) 9412 6655"
      }
    ]
  },
  {
    id: "story-003",
    locationId: "collingwood-melbourne-001",
    title: "Michael's Community Connection",
    subtitle: "Overcoming Mental Health Challenges",
    author: "Michael Chen",
    authorBio: "Mental Health Recovery Advocate",
    imageUrl: "/assets/stories/michael.jpg",
    audioUrl: "/assets/audio/michael-story.mp3",
    content: [
      "Schizophrenia and job instability led me down a path of homelessness. I cycled through temporary accommodations, struggling to maintain any sense of stability.",
      "The Collingwood streets became my uncertain home. People would walk past, avoiding eye contact. I felt invisible, disconnected from society.",
      "Neami National's support program was my turning point. They provided more than just housing – they offered comprehensive mental health support, job rehabilitation, and a sense of community.",
      "Today, I live in supported housing. I volunteer at community centers, sharing my story to reduce stigma. My journey proves that with the right support, recovery is possible."
    ],
    coordinates: {
      latitude: -37.7965,
      longitude: 144.9872
    },
    locationDescription: "Collingwood neighborhood",
    publishedDate: "2023-11-05",
    resources: [
      {
        name: "Neami National",
        url: "https://www.neaminational.org.au/",
        phone: "1300 130 339"
      },
      {
        name: "Mind Australia",
        url: "https://www.mindaustralia.org.au/",
        phone: "1300 286 463"
      }
    ]
  }
];

// The utility functions remain the same as in the previous version
export function getStoryById(id: string): Story | undefined {
  return stories.find(story => story.id === id);
}

export function getStoryByLocationId(locationId: string): Story | undefined {
  return stories.find(story => story.locationId === locationId);
}

export function isUserNearLocation(
  userCoords: Coordinates, 
  storyCoords: Coordinates, 
  rangeInMeters: number = 100
): boolean {
  if (!userCoords || !storyCoords) return false;
  
  const toRad = (value: number): number => value * Math.PI / 180;
  const R = 6371e3; // Earth's radius in meters
  
  const lat1 = toRad(userCoords.latitude);
  const lat2 = toRad(storyCoords.latitude);
  const deltaLat = toRad(storyCoords.latitude - userCoords.latitude);
  const deltaLon = toRad(storyCoords.longitude - userCoords.longitude);
  
  const a = Math.sin(deltaLat/2) * Math.sin(deltaLat/2) +
            Math.cos(lat1) * Math.cos(lat2) *
            Math.sin(deltaLon/2) * Math.sin(deltaLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const distance = R * c;
  
  return distance <= rangeInMeters;
}

export function getDemoStory(): Story {
  return stories[0];
}

export function getStoriesByProximity(userCoords?: Coordinates): Story[] {
  if (!userCoords) {
    return [...stories];
  }
  
  return [...stories].sort((a, b) => {
    const distanceA = calculateDistance(userCoords, a.coordinates);
    const distanceB = calculateDistance(userCoords, b.coordinates);
    return distanceA - distanceB;
  });
}

export function calculateDistance(coords1: Coordinates, coords2: Coordinates): number {
  const toRad = (value: number): number => value * Math.PI / 180;
  const R = 6371e3; // Earth's radius in meters
  
  const lat1 = toRad(coords1.latitude);
  const lat2 = toRad(coords2.latitude);
  const deltaLat = toRad(coords2.latitude - coords1.latitude);
  const deltaLon = toRad(coords2.longitude - coords1.longitude);
  
  const a = Math.sin(deltaLat/2) * Math.sin(deltaLat/2) +
            Math.cos(lat1) * Math.cos(lat2) *
            Math.sin(deltaLon/2) * Math.sin(deltaLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  
  return R * c;
}