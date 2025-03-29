// src/data/stories.ts
import { Story, Coordinates } from '../types';
import deathAudio from '../assets/audio/death.mp3';
import davidAudio from '../assets/audio/david.mp3';

export const stories: Story[] = [
  {
    id: "story-001",
    locationId: "flinders-street-melbourne-001",
    title: "David's Turning Point",
    subtitle: "From the Streets to Hope",
    author: "David Roberts",
    authorBio: "Community Support Program Graduate",
    imageUrl: "/assets/stories/david.jpg",
    audioUrl: davidAudio,
    content: [
      "Mental health and addiction broke my life apart. I lost my job as a construction worker, then my apartment, then my connections with family.",
      "For two years, I survived on the streets around Flinders Street Station. Melbourne can be brutal in winter – those nights were the longest of my life.",
      "Everything changed when a outreach worker from Mobilise stopped to talk to me. They didn't just offer a meal, they offered a pathway. Counseling, rehabilitation support, job training – they saw me as a person, not just another homeless statistic.",
      "Today, I'm in stable housing. I'm working part-time and rebuilding relationships with my kids. It wasn't just about a bed or a job – it was about believing I could have a future again. With your help and donations, we can work as a community to bring people who were like me on to a better path."
    ],
    coordinates: {
      latitude: -37.8183,
      longitude: 144.9671
    },
    locationDescription: "Flinders Street Station area",
    publishedDate: "2023-09-15",
    resources: [
      {
        name: "We Are Mobilise",
        url: "https://wearemobilise.org.au/",
        phone: "+61 0431 603 299"
      },
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
  },
  {
    id: "story-004",
    locationId: "clayton-melbourne-001",
    title: "A Second Chance at Education",
    subtitle: "From Homelessness to University",
    author: "James Nguyen",
    authorBio: "Monash University Student",
    imageUrl: "/assets/stories/james.jpg",
    audioUrl: "/assets/audio/james-story.mp3",
    content: [
      "After my parents passed away in a car accident, I spiraled into depression and lost my share house in Clayton. At 19, I was sleeping in the study booths at Monash University's library after hours.",
      "The security guards eventually noticed and instead of kicking me out, one of them connected me with Launch Housing. They helped me access youth housing while I completed my VCE.",
      "With stable accommodation and counseling support, I was able to focus on my studies. I'm now in my second year of a biomedical science degree, with dreams of becoming a doctor.",
      "Homelessness among students is more common than people think. I want universities to recognize this issue and provide better support systems for vulnerable students."
    ],
    coordinates: {
      latitude: -37.9110,
      longitude: 145.1300
    },
    locationDescription: "Monash University Clayton campus area",
    publishedDate: "2023-12-10",
    resources: [
      {
        name: "Launch Housing",
        url: "https://www.launchhousing.org.au/",
        phone: "1800 825 955"
      },
      {
        name: "Monash University Support Services",
        url: "https://www.monash.edu/students/support",
        phone: "(03) 9905 3020"
      }
    ]
  },
  {
    id: "story-005",
    locationId: "cbd-melbourne-001",
    title: "The Hidden Homeless Executive",
    subtitle: "When Six Figures Wasn't Enough",
    author: "Sarah Thompson",
    authorBio: "Former Corporate Manager",
    imageUrl: "/assets/stories/sarah.jpg",
    audioUrl: "/assets/audio/sarah-story.mp3",
    content: [
      "I was a senior project manager earning $150,000 a year when a workplace injury and subsequent painkiller addiction cost me everything. Within 18 months, I was sleeping in my car parked near Southern Cross Station.",
      "The hardest part was maintaining appearances - using gym showers, keeping my suits pressed. 'Executive homelessness' is invisible but devastating.",
      "The Salvation Army's Bridge Program saved my life. Their specialized addiction treatment recognized my specific circumstances and helped me rebuild without judgment.",
      "Now three years sober, I work with organizations to develop policies supporting employees facing addiction or mental health crises. No one should lose their home because of illness."
    ],
    coordinates: {
      latitude: -37.8183,
      longitude: 144.9521
    },
    locationDescription: "Southern Cross Station precinct",
    publishedDate: "2024-01-18",
    resources: [
      {
        name: "The Salvation Army Melbourne",
        url: "https://www.salvationarmy.org.au/",
        phone: "13 72 58"
      },
      {
        name: "Financial Counselling Australia",
        url: "https://www.financialcounsellingaustralia.org.au/",
        phone: "1800 007 007"
      }
    ]
  },
  {
    id: "story-006",
    locationId: "footscray-melbourne-001",
    title: "A Refugee's New Beginning",
    subtitle: "Rebuilding After War",
    author: "Amina Hassan",
    authorBio: "Community Leader",
    imageUrl: "/assets/stories/amina.jpg",
    audioUrl: "/assets/audio/amina-story.mp3",
    content: [
      "After surviving the war in Somalia and years in refugee camps, we finally made it to Australia - only to face homelessness in Footscray. With no rental history and limited English, finding housing seemed impossible.",
      "For six months, our family of five lived in one room at a crowded relative's apartment. The stress affected my children's health and school performance.",
      "The Asylum Seeker Resource Center connected us with transitional housing and helped navigate the rental market. They also provided English classes and job training.",
      "Today, we have our own apartment. My husband works as a mechanic and I volunteer helping other refugee families settle in. Australia gave us safety, but community gave us a home."
    ],
    coordinates: {
      latitude: -37.8016,
      longitude: 144.9008
    },
    locationDescription: "Footscray community",
    publishedDate: "2024-02-05",
    resources: [
      {
        name: "Asylum Seeker Resource Centre",
        url: "https://www.asrc.org.au/",
        phone: "(03) 9326 6066"
      },
      {
        name: "Footscray Community Legal Centre",
        url: "https://www.footscrayclc.org.au/",
        phone: "(03) 9362 2111"
      }
    ]
  },
  {
    id: "story-007",
    locationId: "richmond-melbourne-001",
    title: "The Cost of Caregiving",
    subtitle: "When Family Duty Leads to Homelessness",
    author: "Margaret O'Connor",
    authorBio: "Retired Nurse",
    imageUrl: "/assets/stories/margaret.jpg",
    audioUrl: "/assets/audio/margaret-story.mp3",
    content: [
      "After my husband's dementia diagnosis, I quit nursing to care for him full-time. When he passed, I discovered he'd remortgaged our Richmond home without my knowledge. At 63, I was evicted.",
      "I spent months moving between cheap motels along Victoria Street, using my pension to pay for rooms while searching for affordable housing.",
      "COTA Victoria's older persons housing advocacy program fought for me. They helped me access a community housing unit and navigate the legal complexities of my situation.",
      "Now secure in a seniors community, I volunteer to help others avoid similar crises. Australia needs better protections for older women - we're the fastest growing homeless demographic."
    ],
    coordinates: {
      latitude: -37.8174,
      longitude: 144.9980
    },
    locationDescription: "Victoria Street, Richmond",
    publishedDate: "2024-03-12",
    resources: [
      {
        name: "COTA Victoria",
        url: "https://www.cotavic.org.au/",
        phone: "1300 13 50 90"
      },
      {
        name: "Housing for the Aged Action Group",
        url: "https://www.oldertenants.org.au/",
        phone: "(03) 9654 7389"
      }
    ]
  },
  {
    id: "story-008",
    locationId: "docklands-melbourne-001",
    title: "Youth in the Shadows of Prosperity",
    subtitle: "LGBTQ+ Homelessness in the City",
    author: "Taylor Smith",
    authorBio: "Youth Worker",
    imageUrl: "/assets/stories/taylor.jpg",
    audioUrl: "/assets/audio/taylor-story.mp3",
    content: [
      "When I came out as transgender at 16, my family kicked me out. I survived by couch surfing with acquaintances in Docklands, sometimes sleeping in the alleys behind the shiny apartment towers.",
      "The contrast was brutal - luxury developments towering over kids like me trying to stay warm. I felt invisible to the wealthy residents walking past.",
      "Open Family Australia changed everything. Their outreach workers found me, provided crisis accommodation, and helped me access education and hormone therapy.",
      "Now I work with homeless LGBTQ+ youth, helping them find safety and acceptance. No young person should have to choose between being themselves and having a home."
    ],
    coordinates: {
      latitude: -37.8146,
      longitude: 144.9462
    },
    locationDescription: "Docklands waterfront area",
    publishedDate: "2024-04-20",
    resources: [
      {
        name: "Open Family Australia",
        url: "https://www.openfamily.com.au/",
        phone: "1800 668 268"
      },
      {
        name: "QLife LGBTQ+ Support",
        url: "https://qlife.org.au/",
        phone: "1800 184 527"
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