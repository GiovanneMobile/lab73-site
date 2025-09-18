// fontawesome.ts
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faMicrophone,
  faSliders,
  faVolumeHigh,
  faMusic,
  faBroadcastTower,
  faVideo,
  faCompactDisc,
  faBuilding,
  faUsers,
  faBolt,
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faClock,
  faCog
} from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faYoutube,
  faSoundcloud,
  faSpotify
} from '@fortawesome/free-brands-svg-icons';

// Add all icons to the library
library.add(
  // Services icons
  faMicrophone,      // Recording
  faSliders,         // Mixing
  faVolumeHigh,      // Mastering
  faMusic,           // Production
  faBroadcastTower,  // Coaching
  faVideo,           // Live Sessions
  
  // About section icons
  faCompactDisc,     // Equipment (using disc instead of piano)
  faBuilding,        // Rooms
  faUsers,           // Team
  faBolt,            // Turnaround
  
  // Contact icons
  faMapMarkerAlt,    // Location
  faPhone,           // Phone
  faEnvelope,        // Email
  faClock,           // Hours
  
  // Under construction
  faCog,             // Tools/Construction
  
  // Social media icons
  faInstagram,
  faYoutube,
  faSoundcloud,
  faSpotify
);