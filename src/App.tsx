import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import MediaGrid from './components/MediaGrid';
import VideoPlayer from './components/VideoPlayer';
import ImageViewer from './components/ImageViewer';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Cursor from './components/Cursor';
import NoiseOverlay from './components/NoiseOverlay';
import EventSection from './components/EventSection';

// INSTRUCTIONS FOR ADDING YOUR OWN MEDIA:
// 
// Each event section needs:
// - 1 autoplaying video as the first slot (muted)
// - 2 additional images or videos
// - Additional media items for the "see more" expanded view
//
// For VIDEOS:
// - Upload to Cloudinary, Vimeo, or place in 'public' folder
// - Must include a thumbnail image for the grid view
// - First video in each section will autoplay muted
//
// For IMAGES:
// - Upload to image hosting or place in 'public' folder
// - Reference with full URL or local path starting with '/'

// BADLANDS EVENT MEDIA
const badlandsMedia = [
  // First slot MUST be a video (will autoplay)
  { 
    id: 'bad-1', 
    type: 'video' as const, 
    url: 'https://ipfs.io/ipfs/QmX4hdXVWnsNAAAiquqVMMkdWT83frt5bvEh2F8tiY67zV', // Replace with your Badlands video
    thumbnail: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
    title: 'BADLANDS_INTRO' 
  },
  { 
    id: 'bad-2', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmS6HVBm7acVwxVuTtk8en5fWXS1SSaX6HKNwUpBw7jBAa', 
    title: 'BADLANDS_001' 
  },
  { 
    id: 'bad-3', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmSrQfxUesdtHew7MBeFWsSrgRu8wqP4CFSDQJtvNxcMMN', 
    title: 'BADLANDS_002' 
  },
  // Additional media for "see more" (hidden initially)
  { 
    id: 'bad-4', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmQUpphafPcQP5HTrikZHudjhcSUVDF5cPRHCbW39bNom7', 
    title: 'BADLANDS_003' 
  },
  { 
    id: 'bad-5', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmY8KtXLse2LMUKL1YfmR3RnEqFyGfunSiCQR3yVNH1cGX', 
    title: 'BADLANDS_004' 
  },
  { 
    id: 'bad-6', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmeLy4hTHnsKih6Ta8LwpSMFpJPfx1hBy2goRky1K8RH8v', 
    title: 'BADLANDS_005' 
  },
  { 
    id: 'bad-7', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmNnshZCxF9RrPQqNW8uuPbSX5Fj69sb8Gt77zTyJYb4Vs', 
    title: 'BADLANDS_006' 
  },
  { 
    id: 'bad-8', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmP7aDBCpCKxRkHrN2GpM39aG6SvDV2LZSV9nQi8ZJoW2Y', 
    title: 'BADLANDS_007' 
  },
  { 
    id: 'bad-9', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmbjGHFeAkUNabX5Aty5fYVZaf4f1SnKNF7kjJTnz8r4Gp', 
    title: 'BADLANDS_008' 
  },
  { 
    id: 'bad-10', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmfJCRLdgmP7zQ9AonZNyeUC5qEKmdJ5xUFF7fpCXJT5X4', 
    title: 'BADLANDS_009' 
  },
  { 
    id: 'bad-11', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmXNHMcogF2gxK1YhVB9LMZ1k19p6WzSkabQCUWXVTeS4q', 
    title: 'BADLANDS_010' 
  },
  { 
    id: 'bad-12', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmRdgwqVnpkrBfdu4XmAHNVFtnAsNs5NGcSJ9KQ6bnoJm1', 
    title: 'BADLANDS_011' 
  },
  { 
    id: 'bad-13', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmWRECoDA3ANFr2gfVihJm99573D75oPakGhcaNvsWWvVX', 
    title: 'BADLANDS_012' 
  },
  { 
    id: 'bad-14', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmfGdBUxK2t2evdABJZDkXxqwKmQiZzQMciKgP9ZQxMEsQ', 
    title: 'BADLANDS_013' 
  },
  { 
    id: 'bad-15', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/Qmdz94xgTx1Cd55TLDGkFaymeabw2StKCAwPisqoA5c8hq', 
    title: 'BADLANDS_014' 
  },
  { 
    id: 'bad-16', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmYstBsWUxW8BE5mNnyHyL8twCU5eENyhhpW9eqCbAUcEb', 
    title: 'BADLANDS_015' 
  },
  { 
    id: 'bad-17', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmVeCZpXPeNuGzkVocunMVC21kSAVZHsHWEKnsrkC5rzF3', 
    title: 'BADLANDS_016' 
  },
  { 
    id: 'bad-18', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmSAavbi5R877cGqAeQcLgpKqRm8npJwQmoJkq5PPZQe9H', 
    title: 'BADLANDS_017' 
  },
  { 
    id: 'bad-19', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/Qma8jgrbehw6VTYsTa7MqKVk6ctLqB1BGEVUrR7u1Q6cX5', 
    title: 'BADLANDS_018' 
  },
  { 
    id: 'bad-20', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmcEuBoGm39AmFkjYn9uaW9B7s9ng3tzeSjtHCxaMrFvzT', 
    title: 'BADLANDS_019' 
  },
  { 
    id: 'bad-21', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmbA1ebzyro1Mwdq6xLH2EaAwj7zgeWZwwCXHhP7Z1eWeQ', 
    title: 'BADLANDS_020' 
  }
];

// CHASING SUMMER DAY 1 MEDIA
const chasingSummerDay1Media = [
  // First slot MUST be a video (will autoplay)
  { 
    id: 'cs1-1', 
    type: 'video' as const, 
    url: 'https://ipfs.io/ipfs/QmUdvbWbw8CgxdKor5f6n5VzUzUSZwkRzaWY7tEj4U6knZ', // Replace with your CS Day 1 video
    thumbnail: 'https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg',
    title: 'CS_DAY1_INTRO' 
  },
  { 
    id: 'cs1-2', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmTBgaYz2vzKM7VUeRc6X245JYoGXaiGLTXZE7Gt5w2gAQ', 
    title: 'CS_DAY1_001' 
  },
  { 
    id: 'cs1-3', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmbYeP4NX7tprGg8WWtYfFGwaqkhK3rwUMWeGXVba7T7eA', 
    title: 'CS_DAY1_002' 
  },
  { 
    id: 'cs1-4', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmTznYR7zdsqz1Matcy7ddYV3whvajoJoNZGH2dvjn9M15', 
    title: 'CS_DAY1_003' 
  },
  { 
    id: 'cs1-5', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmSe7ezUk9KSUQZhBGxs7qUEAmfPcYB6UDZ9G1n23NEbTw', 
    title: 'CS_DAY1_004' 
  },
  { 
    id: 'cs1-6', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmVif24nJuaSW9fRLgLLdHQkLvDSzGUNGgupVQ23Mt36fW', 
    title: 'CS_DAY1_005' 
  },
  { 
    id: 'cs1-7', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmNYUovBHpMxP2pkHpADfZXdyqT2AiU1HPTKTp9TBMjUcL', 
    title: 'CS_DAY1_006' 
  },
  { 
    id: 'cs1-8', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmbF3LEh1FAtv9aXDraAmsWRCvu9CFZdDgDqK7XFyaypZ2', 
    title: 'CS_DAY1_007' 
  },
  { 
    id: 'cs1-9', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmUmQBSwL7MYN5FeguVvpup4sf7yrrYpb5zaDhZAnknFYJ', 
    title: 'CS_DAY1_008' 
  },
  { 
    id: 'cs1-10', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmXtHj8SZrfbTNaQBV681v5BVPctLUubpaVXuNbtgkuHsz', 
    title: 'CS_DAY1_009' 
  },
  { 
    id: 'cs1-11', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmaF9XT2XtxdTrwVDptTA6JZyxNwB2Hj9N8Hv1S3HVQvc7', 
    title: 'CS_DAY1_010' 
  },
  { 
    id: 'cs1-12', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmQHrxfwvkNXzSjxDxF8ZLTYZ73rccaYTCvPBCPrp6FASN', 
    title: 'CS_DAY1_011' 
  },
  { 
    id: 'cs1-13', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmZSF2ySyFxQh1fFHN8ggXQuAodgov7SHvrPsiiW2kYwVX', 
    title: 'CS_DAY1_012' 
  },
  { 
    id: 'cs1-14', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmXP915agXMA9FAZziDDvYNzgafvRUmmJoKo79zKLwsv2P', 
    title: 'CS_DAY1_013' 
  },
  { 
    id: 'cs1-15', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmVrB2NLNg9qgKL65LQP9oGzZkGjqQQcv38kmbHz6TJT7G', 
    title: 'CS_DAY1_014' 
  },
  { 
    id: 'cs1-16', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmPbwutE2MqGqQR3BDbYLwDAFQrUMGeBKK2mNGTAhncYvD', 
    title: 'CS_DAY1_015' 
  },
  { 
    id: 'cs1-17', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmUgkVwWp9YLuJziqQARCxzWZhTQQFvJrqXKeQidWU8aDu', 
    title: 'CS_DAY1_016' 
  },
  { 
    id: 'cs1-18', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmRfLAms5pcxQ3bQyfwqxGRYV7oN24gRZKiG88NpJZk7rx', 
    title: 'CS_DAY1_017' 
  },
  { 
    id: 'cs1-19', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmeJSPXcrZ7ccVBGhHwHsKozEgqAZTSj5JwQfMABL5mVwH', 
    title: 'CS_DAY1_018' 
  }
];

// CHASING SUMMER DAY 2 MEDIA
const chasingSummerDay2Media = [
  // First slot MUST be a video (will autoplay)
  { 
    id: 'cs2-1', 
    type: 'video' as const, 
    url: 'https://ipfs.io/ipfs/QmaScD9ZuULQnSAnkirjk1G93drQEcEDv3AtXmNfLChUGi', // Replace with your CS Day 2 video
    thumbnail: 'https://images.pexels.com/photos/2078071/pexels-photo-2078071.jpeg',
    title: 'CS_DAY2_INTRO' 
  },
  { 
    id: 'cs2-2', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmYpKybyhY8B5fuEZTGts93yugdLxNqaNsvEe6D5vjxFh1', 
    title: 'CS_DAY2_001' 
  },
  { 
    id: 'cs2-3', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmQXjS1w2CfuiR5d5LNcbayXAfPhNuPabZuRvgMUfpDgU9', 
    title: 'CS_DAY2_002' 
  },
  { 
    id: 'cs2-4', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmWKXCgDjEAzFsQpKvHx4Bks7QnBcPyrnsbcBtngwQqr5s', 
    title: 'CS_DAY2_003' 
  },
  { 
    id: 'cs2-5', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmS8tYUZTj3NAsdDmM4BvZPiHgNPA2M1v2qm9cxqr56KZy', 
    title: 'CS_DAY2_004' 
  },
  { 
    id: 'cs2-6', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmY86W1rn1MzPjkX6iBdUtVwitmBr3n71f4Gqj956MXHjd', 
    title: 'CS_DAY2_005' 
  },
  { 
    id: 'cs2-7', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmXVPtTZLpUMa93G3Q6knhQd4mMVvXL4taFamdEmxNH7hr', 
    title: 'CS_DAY2_006' 
  },
  { 
    id: 'cs2-8', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmPNXBjuBvNdEU7TR6gyJaWNAHGg6PVZqNVkmQNhMuXHz8', 
    title: 'CS_DAY2_007' 
  },
  { 
    id: 'cs2-9', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmRq92ZZbQ4Z53kZev9zUYYXcG6G3EY1i4vUZSqi4NvYzt', 
    title: 'CS_DAY2_008' 
  },
  { 
    id: 'cs2-10', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmTRgrupy27cEPygjEbGtAbXFDgxR7foMcHEakRLZuF77B', 
    title: 'CS_DAY2_009' 
  },
  { 
    id: 'cs2-11', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmYYmTG4Ee3qwBXjexYE9DhTazM5PtRG7iCQDjfK3CRK11', 
    title: 'CS_DAY2_010' 
  },
  { 
    id: 'cs2-12', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmZVvfkTApobHiPWvmUPZKa99N9k3DWkjKmnosBQYLm1C7', 
    title: 'CS_DAY2_011' 
  },
  { 
    id: 'cs2-13', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmYbAiPYpgaZVKHLZUjbA6PponX3mbo8CcZce6hnme1GRy', 
    title: 'CS_DAY2_012' 
  },
  { 
    id: 'cs2-14', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmZhkQqxabRmTC1gqbANpFUZnw146fwEc5nxNwTTuQBhey', 
    title: 'CS_DAY2_013' 
  },
  { 
    id: 'cs2-15', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmUn8qDJgYVgREkwUwNQra25piWKV77ryivAgojXqcPWzP', 
    title: 'CS_DAY2_014' 
  },
  { 
    id: 'cs2-16', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmfANF2RhWrzrG3MuQafTdaS4KrBA6jM1Hckb2NLkEzuhB', 
    title: 'CS_DAY2_015' 
  },
  { 
    id: 'cs2-17', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/Qmey4Nrg4aor7gvrRSSC15Ns6adxyf2K5jtP2T9yQQb7qo', 
    title: 'CS_DAY2_016' 
  },
  { 
    id: 'cs2-18', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmQt3VvaLL6oq1GSKx1Q11nH8VjqAxghXvNgH6o4e8zftR', 
    title: 'CS_DAY2_017' 
  },
  { 
    id: 'cs2-19', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/Qmb9yCpmLZH4Akr3hP3jMk9FDqUfcfHADuuFeG2js15fTE', 
    title: 'CS_DAY2_018' 
  },
  { 
    id: 'cs2-20', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmWE2o2Gj8GzZM67DjMZm3Qdjs7YN8M9MNW23zDGv4piCQ', 
    title: 'CS_DAY2_019' 
  },
  { 
    id: 'cs2-21', 
    type: 'image' as const, 
    url: 'https://ipfs.io/ipfs/QmZidRspQdtwzmsikiBoHhxfZW1S1jb4HhAnsJqHKXRd7B', 
    title: 'CS_DAY2_020' 
  }
];

function App() {
  const [selectedMedia, setSelectedMedia] = useState<any>(null);
  const [currentSection, setCurrentSection] = useState('home');
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null);
  
  useEffect(() => {
  const base = "PAST_FIVE";
  let show = true;

  const id = window.setInterval(() => {
    document.title = show ? `${base}_` : `${base} `;
    show = !show;
  }, 500); // blink every 0.5s

  // set an initial value immediately
  document.title = `${base}_`;

  return () => window.clearInterval(id);
}, []);

  useEffect(() => {
    // Add glitch effect on scroll
    const handleScroll = () => {
      const elements = document.querySelectorAll('.glitch-on-scroll');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('animate-glitch');
        } else {
          el.classList.remove('animate-glitch');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMediaClick = (item: any) => {
    setSelectedMedia(item);
  };

  const handleClose = () => {
    setSelectedMedia(null);
  };

  const handleNext = () => {
    // Determine which media array to use based on the selected item's ID
    let mediaArray: any[] = [];
    if (selectedMedia.id.startsWith('bad-')) {
      mediaArray = badlandsMedia;
    } else if (selectedMedia.id.startsWith('cs1-')) {
      mediaArray = chasingSummerDay1Media;
    } else if (selectedMedia.id.startsWith('cs2-')) {
      mediaArray = chasingSummerDay2Media;
    }
    
    const currentIndex = mediaArray.findIndex(item => item.id === selectedMedia.id);
    const nextIndex = (currentIndex + 1) % mediaArray.length;
    setSelectedMedia(mediaArray[nextIndex]);
  };

  const handlePrev = () => {
    // Determine which media array to use based on the selected item's ID
    let mediaArray: any[] = [];
    if (selectedMedia.id.startsWith('bad-')) {
      mediaArray = badlandsMedia;
    } else if (selectedMedia.id.startsWith('cs1-')) {
      mediaArray = chasingSummerDay1Media;
    } else if (selectedMedia.id.startsWith('cs2-')) {
      mediaArray = chasingSummerDay2Media;
    }
    
    const currentIndex = mediaArray.findIndex(item => item.id === selectedMedia.id);
    const prevIndex = currentIndex === 0 ? mediaArray.length - 1 : currentIndex - 1;
    setSelectedMedia(mediaArray[prevIndex]);
  };

  const handleEventClick = (eventName: string) => {
    setExpandedEvent(expandedEvent === eventName ? null : eventName);
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      <NoiseOverlay />
      {/* Cursor component disabled for performance - using default browser cursor */}
      <Cursor />

      <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />

      {currentSection === 'home' && <Hero />}
      
      {currentSection === 'work' && (
        <section id="work" className="min-h-screen flex flex-col justify-center items-center px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-bebas text-6xl md:text-8xl mb-16 glitch-text" data-text="WORK">
              WORK
            </h2>
            
            {/* Badlands Event */}
            <div className="relative z-[10050]">
              <EventSection
                title="BADLANDS"
                media={badlandsMedia}
                onMediaClick={handleMediaClick}
                onTitleClick={() => handleEventClick('badlands')}
                isExpanded={expandedEvent === 'badlands'}
              />
            </div>
            
            {/* Chasing Summer Day 1 */}
            <div className="relative z-[10050]">
              <EventSection
                title="CHASING SUMMER DAY 1"
                media={chasingSummerDay1Media}
                onMediaClick={handleMediaClick}
                onTitleClick={() => handleEventClick('cs-day1')}
                isExpanded={expandedEvent === 'cs-day1'}
              />
            </div>
            
            {/* Chasing Summer Day 2 */}
            <div className="relative z-[10050]">
              <EventSection
                title="CHASING SUMMER DAY 2"
                media={chasingSummerDay2Media}
                onMediaClick={handleMediaClick}
                onTitleClick={() => handleEventClick('cs-day2')}
                isExpanded={expandedEvent === 'cs-day2'}
              />
            </div>
          </div>
        </section>
      )}

      {currentSection === 'about' && <About />}
      {currentSection === 'contact' && <Contact />}

      {/* Media Viewer Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 z-[10051] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
          <button
            onClick={handleClose}
            className="absolute top-8 right-8 p-3 border border-white/20 hover:bg-white hover:text-black transition-all duration-300"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-8 top-1/2 -translate-y-1/2 p-3 border border-white/20 hover:bg-white hover:text-black transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-8 top-1/2 -translate-y-1/2 p-3 border border-white/20 hover:bg-white hover:text-black transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Media container now centers content and sizes to fit */}
          <div className="flex items-center justify-center">
            {selectedMedia.type === 'video' ? (
              <VideoPlayer url={selectedMedia.url} title={selectedMedia.title} />
            ) : (
              <ImageViewer url={selectedMedia.url} title={selectedMedia.title} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
