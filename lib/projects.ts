export interface ProjectAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface ProjectVideo {
  src: string;
  poster?: string;
  title: string;
  ratio?: '16:9' | '9:16' | '1:1';
}

export interface ProjectVersion {
  label: string;
  assets: ProjectAsset[];
  videos: ProjectVideo[];
}

export interface NikeVariant {
  label: string;
  images: ProjectAsset[];
}

export interface Project {
  slug: string;
  name: string;
  brand: string;
  hook: string;
  year?: string;
  role?: string;
  tools?: string;
  production?: string;
  credit?: string;
  briefSummary: string;
  workflow?: string;
  thumbnail: string;
  heroImage?: string;
  heroVideo?: string;
  order: number;
  ratio?: '16:9' | '9:16' | '1:1';
  versions?: ProjectVersion[];
  assets?: ProjectAsset[];
  videos?: ProjectVideo[];
  /* Nike-specific */
  conceptAssets?: ProjectAsset[];
  carouselVariants?: NikeVariant[];
  staticVariants?: NikeVariant[];
  videoVariants?: ProjectVideo[];
}

export const projects: Project[] = [
  {
    slug: 'nike',
    name: 'Nike — Air Jordan',
    brand: 'Air Jordan',
    hook: 'Still Standing. The shoe that never dates.',
    year: '2026',
    role: 'Creative Direction, Prompt Architecture, Multi-Format Delivery',
    tools: 'Gemini · Google Flow (Veo 3.1) · Photoshop · DaVinci Resolve',
    production: 'Fully AI',
    credit: 'Air Jordan · Spec Campaign',
    briefSummary: 'An AI-generated multi-format campaign for the Air Jordan 1 Mid White/Black — spanning three deliverable formats (carousel ads, static ads, and commercial video spots). The "Still Standing" concept celebrates timeless poise and quiet court authority.',
    workflow: 'Character and product consistency sheets generated across multi-angle plates. Video executions rendered with camera-tracked trajectory prompts in Veo 3.1 and edited in DaVinci Resolve.',
    thumbnail: '/images/nike/assets/product-sheet.png',
    heroImage: '/images/nike/carousel/c/slide-6.png',
    heroVideo: '/videos/nike-jordan-1.mp4',
    order: 1,
    ratio: '16:9',
    conceptAssets: [
      { src: '/images/nike/assets/character-sheet.png', alt: 'Jordan campaign character sheet', width: 1920, height: 1080 },
      { src: '/images/nike/assets/product-sheet.png', alt: 'Air Jordan 1 Mid product sheet', width: 1920, height: 1080 },
    ],
    carouselVariants: [
      {
        label: 'Variant A',
        images: [
          { src: '/images/nike/carousel/a/slide-1.png', alt: 'Carousel A — slide 1', width: 1080, height: 1080 },
          { src: '/images/nike/carousel/a/slide-2.png', alt: 'Carousel A — slide 2', width: 1080, height: 1080 },
          { src: '/images/nike/carousel/a/slide-3.png', alt: 'Carousel A — slide 3', width: 1080, height: 1080 },
          { src: '/images/nike/carousel/a/slide-4.png', alt: 'Carousel A — slide 4', width: 1080, height: 1080 },
          { src: '/images/nike/carousel/a/slide-5.png', alt: 'Carousel A — slide 5', width: 1080, height: 1080 },
          { src: '/images/nike/carousel/a/slide-6.png', alt: 'Carousel A — slide 6', width: 1080, height: 1080 },
        ],
      },
      {
        label: 'Variant B',
        images: [
          { src: '/images/nike/carousel/b/slide-1.png', alt: 'Carousel B — slide 1', width: 1080, height: 1080 },
          { src: '/images/nike/carousel/b/slide-2.png', alt: 'Carousel B — slide 2', width: 1080, height: 1080 },
          { src: '/images/nike/carousel/b/slide-3.png', alt: 'Carousel B — slide 3', width: 1080, height: 1080 },
          { src: '/images/nike/carousel/b/slide-4.png', alt: 'Carousel B — slide 4', width: 1080, height: 1080 },
          { src: '/images/nike/carousel/b/slide-5.png', alt: 'Carousel B — slide 5', width: 1080, height: 1080 },
          { src: '/images/nike/carousel/b/slide-6.png', alt: 'Carousel B — slide 6', width: 1080, height: 1080 },
        ],
      },
      {
        label: 'Variant C',
        images: [
          { src: '/images/nike/carousel/c/slide-1.png', alt: 'Carousel C — slide 1', width: 1080, height: 1080 },
          { src: '/images/nike/carousel/c/slide-2.png', alt: 'Carousel C — slide 2', width: 1080, height: 1080 },
          { src: '/images/nike/carousel/c/slide-3.png', alt: 'Carousel C — slide 3', width: 1080, height: 1080 },
          { src: '/images/nike/carousel/c/slide-4.png', alt: 'Carousel C — slide 4', width: 1080, height: 1080 },
          { src: '/images/nike/carousel/c/slide-5.png', alt: 'Carousel C — slide 5', width: 1080, height: 1080 },
          { src: '/images/nike/carousel/c/slide-6.png', alt: 'Carousel C — slide 6', width: 1080, height: 1080 },
        ],
      },
    ],
    staticVariants: [
      {
        label: 'Variant A',
        images: [
          { src: '/images/nike/static/a/static-1.png', alt: 'Static A — execution 1', width: 1080, height: 1350 },
          { src: '/images/nike/static/a/static-2.png', alt: 'Static A — execution 2', width: 1080, height: 1350 },
          { src: '/images/nike/static/a/static-3.png', alt: 'Static A — execution 3', width: 1080, height: 1350 },
        ],
      },
      {
        label: 'Variant B',
        images: [
          { src: '/images/nike/static/b/static-1.png', alt: 'Static B — execution 1', width: 1080, height: 1350 },
          { src: '/images/nike/static/b/static-2.png', alt: 'Static B — execution 2', width: 1080, height: 1350 },
          { src: '/images/nike/static/b/static-3.png', alt: 'Static B — execution 3', width: 1080, height: 1350 },
        ],
      },
      {
        label: 'Variant C',
        images: [
          { src: '/images/nike/static/c/static-1.png', alt: 'Static C — execution 1', width: 1080, height: 1350 },
          { src: '/images/nike/static/c/static-2.png', alt: 'Static C — execution 2', width: 1080, height: 1350 },
          { src: '/images/nike/static/c/static-3.png', alt: 'Static C — execution 3', width: 1080, height: 1350 },
          { src: '/images/nike/static/c/static-4.png', alt: 'Static C — execution 4', width: 1080, height: 1350 },
        ],
      },
    ],
    videoVariants: [
      { src: '/videos/nike-jordan-1.mp4', title: 'Jordan Ad 1 — Hyper Motion', poster: '/images/nike/video-1-thumb-5s.jpg', ratio: '9:16' },
      { src: '/videos/nike-jordan-2.mp4', title: 'Jordan Ad 2 — Brand Film', poster: '/images/nike/video-2-thumb-5s.jpg', ratio: '9:16' },
      { src: '/videos/nike-jordan-3.mp4', title: 'Jordan Ad 3 — UGC Review', poster: '/images/nike/video-3-thumb-5s.jpg', ratio: '9:16' },
    ],
    videos: [
      { src: '/videos/nike-jordan-1.mp4', title: 'Jordan Ad 1 — Hyper Motion', poster: '/images/nike/video-1-thumb-5s.jpg', ratio: '9:16' },
      { src: '/videos/nike-jordan-2.mp4', title: 'Jordan Ad 2 — Brand Film', poster: '/images/nike/video-2-thumb-5s.jpg', ratio: '9:16' },
      { src: '/videos/nike-jordan-3.mp4', title: 'Jordan Ad 3 — UGC Review', poster: '/images/nike/video-3-thumb-5s.jpg', ratio: '9:16' },
    ],
  },
  {
    slug: 'hairan-studio',
    name: 'Hairan Studio',
    brand: 'Hairan Studio',
    hook: 'Generative cinema, tactile textures, and kinetic product spots.',
    year: '2026',
    role: 'AI Image Generation & Video Direction',
    tools: 'Seedance 2.0 · Veo 3.1 · Gemini Omni · Nano Banana Pro · Kling 3 · DaVinci Resolve',
    production: 'Fully AI',
    credit: 'Hairan Studio · Client Engagement',
    briefSummary: 'A multi-spot commercial showcase developed for Hairan Studio’s creative channels. Features experimental brand films, organic cotton boll micro-physics, and dynamic trolley product sequences.',
    workflow: 'Concept stills crafted in Nano Banana and prompt architectures rendered through Seedance 2.0 and Veo 3.1. Post-production, rhythm cuts, and audio mixing finalized in DaVinci Resolve.',
    thumbnail: '/images/hairan-studio/chaos-thumb.jpg',
    heroImage: '/images/hairan-studio/chaos-thumb.jpg',
    heroVideo: '/videos/hairan-chaos.mp4',
    order: 2,
    ratio: '16:9',
    assets: [
      { src: '/images/hairan-studio/chaos-thumb.jpg', alt: 'Hairan Studio — Chaos commercial high-contrast frame', width: 1920, height: 1080 },
      { src: '/images/hairan-studio/cotton-boll-thumb.jpg', alt: 'Hairan Studio — Organic cotton boll natural fiber study', width: 1920, height: 1080 },
      { src: '/images/hairan-studio/trolley-thumb.jpg', alt: 'Hairan Studio — Industrial luggage trolley kinetic shot', width: 1920, height: 1080 },
    ],
    videos: [
      { src: '/videos/hairan-chaos.mp4', title: 'Chaos — Brand Commercial Film', poster: '/images/hairan-studio/chaos-thumb.jpg', ratio: '16:9' },
      { src: '/videos/hairan-cotton-boll.mp4', title: 'Cotton Boll — Macro Motion Study', poster: '/images/hairan-studio/cotton-boll-thumb.jpg', ratio: '16:9' },
      { src: '/videos/hairan-trolley.mp4', title: 'Trolley — Kinetic Product Spot', poster: '/images/hairan-studio/trolley-thumb.jpg', ratio: '16:9' },
    ],
  },
  {
    slug: 'the-sleep-company',
    name: 'The Sleep Company',
    brand: 'The Sleep Company',
    hook: 'SmartGRID comfort engineered into dynamic, relatable storytelling.',
    year: '2025–2026',
    role: 'Concept, Generative Prompts, Video Edit & Post',
    tools: 'Nano Banana Pro · Kling 3 · Veo 3.1 · Wan 2.6 · Runway · DaVinci Resolve',
    production: 'Fully AI',
    credit: 'The Sleep Company · Spec Campaign',
    briefSummary: 'A multi-film spec campaign for The Sleep Company highlighting ergonomic SmartGRID mattress technology across real lifestyle moments — from energetic morning waking sequences to active sports recovery and university dorm life.',
    workflow: 'Stills generated with character consistency sheets, animated through camera-tracked motion in Kling and Veo, edited and finished in DaVinci Resolve with custom rhythm-synced beats.',
    thumbnail: '/images/sleep-company/wake-up-thumb.jpg',
    heroImage: '/images/sleep-company/wake-up-thumb.jpg',
    heroVideo: '/videos/sleep-company-wake-up.mp4',
    order: 3,
    ratio: '9:16',
    assets: [
      { src: '/images/sleep-company/wake-up-thumb.jpg', alt: 'Morning Bedroom environment and SmartGRID mattress lighting', width: 1920, height: 1080 },
      { src: '/images/sleep-company/football-thumb.jpg', alt: 'Athletic recovery sequence on SmartGRID support', width: 1920, height: 1080 },
      { src: '/images/sleep-company/college-thumb.jpg', alt: 'College dormitory study environment keyframe', width: 1920, height: 1080 },
    ],
    videos: [
      { src: '/videos/sleep-company-wake-up.mp4', title: 'Wake Up Fresh — SmartGRID Morning Commercial', poster: '/images/sleep-company/wake-up-thumb.jpg', ratio: '9:16' },
      { src: '/videos/sleep-company-football.mp4', title: 'The Recovery Play — Football Training Spot', poster: '/images/sleep-company/football-thumb.jpg', ratio: '9:16' },
      { src: '/videos/sleep-company-college.mp4', title: 'Campus Life — College Dormitory Film', poster: '/images/sleep-company/college-thumb.jpg', ratio: '9:16' },
    ],
  },
  {
    slug: 'cadbury',
    name: 'Cadbury Dairy Milk',
    brand: 'Cadbury',
    hook: 'Real moments, real sweetness — crafted frame by frame.',
    year: '2026',
    role: 'Character Sheets, Scene Staging, Prompt Pipeline & Edit',
    tools: 'Google Flow (Veo 3.1) · Kling · Photoshop · DaVinci Resolve',
    production: 'Fully AI',
    credit: 'Cadbury · Spec Commercial',
    briefSummary: 'An end-to-end AI-generated commercial for Cadbury Dairy Milk. The campaign captures warmth and genuine human connection across a shared moment, backed by detailed character consistency sheets, authentic domestic lighting, and macro product shots of the chocolate bar.',
    workflow: 'Multi-character identity generation across emotional expression sheets, ambient domestic staging, and seamless motion stitching in DaVinci Resolve.',
    thumbnail: '/images/cadbury/char-female-01.png',
    heroImage: '/images/cadbury/storyboard-sheet.png',
    heroVideo: '/videos/cadbury-dairy-milk.mp4',
    order: 4,
    ratio: '9:16',
    assets: [
      { src: '/images/cadbury/char-female-01.png', alt: 'Female Character sheet — lead character', width: 1920, height: 1080 },
      { src: '/images/cadbury/char-female-expr.png', alt: 'Female Expression sheet — emotional range', width: 1920, height: 1080 },
      { src: '/images/cadbury/char-male-01.png', alt: 'Male Character sheet — co-lead character', width: 1920, height: 1080 },
      { src: '/images/cadbury/char-male-expr.png', alt: 'Male Expression sheet — authentic emotion', width: 1920, height: 1080 },
      { src: '/images/cadbury/loc-wide.png', alt: 'Establishing shot — domestic interior', width: 1920, height: 1080 },
      { src: '/images/cadbury/loc-her-side.png', alt: 'Her side — warm soft lighting plate', width: 1920, height: 1080 },
      { src: '/images/cadbury/loc-his-side.png', alt: 'His side — natural window light plate', width: 1920, height: 1080 },
      { src: '/images/cadbury/loc-table.png', alt: 'Table macro plate — texture focus', width: 1920, height: 1080 },
      { src: '/images/cadbury/loc-window.png', alt: 'Window cutaway — ambient light', width: 1920, height: 1080 },
      { src: '/images/cadbury/prop-bar-sealed.png', alt: 'Cadbury Dairy Milk — sealed packaging prop', width: 1920, height: 1080 },
      { src: '/images/cadbury/prop-bar-open.png', alt: 'Cadbury Dairy Milk — foil unwrapped prop', width: 1920, height: 1080 },
      { src: '/images/cadbury/prop-bar-broken.png', alt: 'Cadbury Dairy Milk — snapped bar detail', width: 1920, height: 1080 },
      { src: '/images/cadbury/prop-cups.png', alt: 'Props — ceramic tea cups', width: 1920, height: 1080 },
      { src: '/images/cadbury/storyboard-sheet.png', alt: 'Cadbury commercial full storyboard sheet', width: 1920, height: 1080 },
    ],
    videos: [
      { src: '/videos/cadbury-dairy-milk.mp4', title: 'Cadbury Dairy Milk — Final Commercial', poster: '/images/cadbury/video-thumb.jpg', ratio: '9:16' },
    ],
  },
  {
    slug: 'nescafe',
    name: 'Nescafé',
    brand: 'Nescafé',
    hook: 'Start strong. Every morning, reimagined.',
    year: '2026',
    role: 'Prop Generation, Character Continuity, Fast-Cut Assembly',
    tools: 'Veo 3.1 · Kling · Photoshop · DaVinci Resolve',
    production: 'Fully AI',
    credit: 'Nescafé · Spec Film',
    briefSummary: 'A high-energy morning routine AI commercial for Nescafé capturing the morning rush from bedside to front door. Features meticulous prop generation (branded jar, mug, watch, keys, smartphone) with persistent character identity across multi-room environment sets.',
    workflow: 'Consistent prop modeling, cinematic motion trajectories, and energetic quick-cut editing in DaVinci Resolve synced to coffee morning momentum.',
    thumbnail: '/images/nescafe/male-lead-master.png',
    heroImage: '/images/nescafe/nescafe-storyboard.png',
    heroVideo: '/videos/nescafe.mp4',
    order: 5,
    ratio: '9:16',
    assets: [
      { src: '/images/nescafe/male-lead-master.png', alt: 'Male Lead Master sheet — character consistency', width: 1920, height: 1080 },
      { src: '/images/nescafe/wardrobe-master.png', alt: 'Ready-for-day Wardrobe Master sheet', width: 1920, height: 1080 },
      { src: '/images/nescafe/bedroom.png', alt: 'Bedroom environment — early morning light', width: 1920, height: 1080 },
      { src: '/images/nescafe/kitchen.png', alt: 'Kitchen environment — coffee preparation setup', width: 1920, height: 1080 },
      { src: '/images/nescafe/apartment-entry.png', alt: 'Apartment entry hallway — commuter departure', width: 1920, height: 1080 },
      { src: '/images/nescafe/nescafe-coffee-jar.png', alt: 'Nescafé Coffee Jar — product hero plate', width: 1920, height: 1080 },
      { src: '/images/nescafe/coffee-mug.png', alt: 'Coffee mug — morning ritual prop', width: 1920, height: 1080 },
      { src: '/images/nescafe/laptop.png', alt: 'Laptop prop — modern remote professional', width: 1920, height: 1080 },
      { src: '/images/nescafe/bags.png', alt: 'Work bags — commuter gear props', width: 1920, height: 1080 },
      { src: '/images/nescafe/keys.png', alt: 'Keys prop — exit sequence', width: 1920, height: 1080 },
      { src: '/images/nescafe/smartphone.png', alt: 'Smartphone prop — morning alarm detail', width: 1920, height: 1080 },
      { src: '/images/nescafe/wristwatch.png', alt: 'Wristwatch prop — morning timing cue', width: 1920, height: 1080 },
      { src: '/images/nescafe/nescafe-storyboard.png', alt: 'Nescafé full commercial storyboard', width: 1920, height: 1080 },
    ],
    videos: [
      { src: '/videos/nescafe.mp4', title: 'Nescafé — Morning Momentum AI Commercial', poster: '/images/nescafe/video-thumb.jpg', ratio: '9:16' },
    ],
  },
  {
    slug: 'voltas',
    name: 'Voltas',
    brand: 'Voltas (Tata)',
    hook: "It's not picking a side. It's reading the room.",
    year: '2026',
    role: 'Storyboard Pipeline, 33-Node Color Grade, Supers & Edit',
    tools: 'Google Flow · DaVinci Resolve · Photoshop ExtendScript',
    production: 'Fully AI',
    credit: 'Voltas (Tata Enterprise) · Spec TVC',
    briefSummary: 'An AI-generated brand campaign for Voltas AC — India’s largest air-conditioning brand, a Tata enterprise. The concept grounds the product in warm, domestic Indian family life. The AC reads as a family member’s ally, not a machine.',
    workflow: '14-frame storyboard through a complete production pipeline, including a custom 33-node DaVinci Resolve colour grade and a Photoshop ExtendScript for broadcast-standard supers.',
    thumbnail: '/images/voltas/ac.jpeg',
    heroImage: '/images/voltas/character-sheet.png',
    heroVideo: '/videos/voltas.mp4',
    order: 6,
    ratio: '16:9',
    assets: [
      { src: '/images/voltas/ac.jpeg', alt: 'Voltas split AC unit — product hero', width: 1920, height: 1080 },
      { src: '/images/voltas/character-sheet.png', alt: 'Voltas campaign character sheet — family cast', width: 1920, height: 1080 },
      { src: '/images/voltas/dad.png', alt: 'Dad character — parent in living room', width: 1920, height: 1080 },
      { src: '/images/voltas/living-room.png', alt: 'Indian middle-class living room — warm practical lighting', width: 1920, height: 1080 },
      { src: '/images/voltas/remote.png', alt: 'AC remote — the moment of control', width: 1920, height: 1080 },
    ],
    videos: [
      { src: '/videos/voltas.mp4?v=2', title: 'Voltas TVC Film', poster: '/images/voltas/video-thumb-5s.jpg', ratio: '16:9' },
    ],
  },
  {
    slug: 'zara',
    name: 'Zara',
    brand: 'Zara',
    hook: 'Zara After Dark — Luxury elevated by synthetic cinema.',
    year: '2026',
    role: 'Haute-Couture Direction, Architectural Staging, Color Finish',
    tools: 'Kling 3 · Veo 3.1 · Photoshop · DaVinci Resolve',
    production: 'Fully AI',
    credit: 'Zara · Spec Fashion Film',
    briefSummary: 'An haute-couture speculative film for Zara’s After Dark collection. Designed with moody architectural lighting, reflective luxury apartment interiors, sleek elevator transition cuts, and cinematic wardrobe styling generated with state-of-the-art AI video pipelines.',
    workflow: 'Architectural interior prompts combined with high-contrast low-key illumination, finished in DaVinci Resolve with an editorial film-stock look.',
    thumbnail: '/images/zara/character-master.png',
    heroImage: '/images/zara/cinematic-storyboard.png',
    heroVideo: '/videos/zara-after-dark.mp4',
    order: 7,
    ratio: '9:16',
    assets: [
      { src: '/images/zara/character-master.png', alt: 'Character Master — high-fashion portrait', width: 1920, height: 1080 },
      { src: '/images/zara/wardrobe-master.png', alt: 'Wardrobe Master — nocturnal couture styling', width: 1920, height: 1080 },
      { src: '/images/zara/night-city.png', alt: 'Night City Master — cinematic metropolis backdrop', width: 1920, height: 1080 },
      { src: '/images/zara/luxury-apartment.png', alt: 'Luxury Apartment Master — architectural interior', width: 1920, height: 1080 },
      { src: '/images/zara/elevator-master.png', alt: 'Elevator Master — atmospheric transit plate', width: 1920, height: 1080 },
      { src: '/images/zara/hotel-corridor.png', alt: 'Hotel Corridor Master — moody corridor lighting', width: 1920, height: 1080 },
      { src: '/images/zara/product-hero-studio.png', alt: 'Product Hero Studio Master — studio plate', width: 1920, height: 1080 },
      { src: '/images/zara/product-master.png', alt: 'Product Master — texture and garment details', width: 1920, height: 1080 },
      { src: '/images/zara/cinematic-storyboard.png', alt: 'Zara After Dark — cinematic storyboard contact sheet', width: 1920, height: 1080 },
    ],
    videos: [
      { src: '/videos/zara-after-dark.mp4', title: 'Zara After Dark — AI Commercial', poster: '/images/zara/video-thumb.jpg', ratio: '9:16' },
    ],
  },
  {
    slug: 'mr-malhotra',
    name: 'Mr. Malhotra',
    brand: 'Mr. Malhotra',
    hook: 'Two generations. One room. The weight of legacy.',
    year: '2026',
    role: 'Narrative Storyboarding, Character Dual-Consistency, Sound',
    tools: 'Veo 3.1 · Kling · DaVinci Resolve',
    production: 'Fully AI',
    credit: 'Executive Spec Drama',
    briefSummary: 'A cinematic executive drama exploring lineage, boardroom authority, and generational transfer. Built with photorealistic character studies (Mr. Malhotra & Mr. Rao), mahogany office environment styling, and a continuous 12-frame story sequence.',
    workflow: 'Multi-character dialogue blocking, mahogany boardroom environmental plates, and dramatic tension pacing in DaVinci Resolve.',
    thumbnail: '/images/mr-malhotra/mr-malhotra.png',
    heroImage: '/images/mr-malhotra/storyboard-16x9.png',
    heroVideo: '/videos/mr-malhotra.mp4',
    order: 8,
    ratio: '9:16',
    assets: [
      { src: '/images/mr-malhotra/mr-malhotra.png', alt: 'Mr. Malhotra character plate — senior leadership presence', width: 1920, height: 1080 },
      { src: '/images/mr-malhotra/mr-rao.png', alt: 'Mr. Rao character plate — successor study', width: 1920, height: 1080 },
      { src: '/images/mr-malhotra/legacy-office.png', alt: 'Mr. Rao Legacy Executive Office — mahogany interior plate', width: 1920, height: 1080 },
      { src: '/images/mr-malhotra/executive-chair.png', alt: 'Luxury Executive Leather Chair — key prop plate', width: 1920, height: 1080 },
      { src: '/images/mr-malhotra/tea-cups.png', alt: 'Two Luxury Tea Cups & Saucers — tension prop detail', width: 1920, height: 1080 },
      { src: '/images/mr-malhotra/luxury-prop.png', alt: 'Executive Desk Accent — metallic precision prop', width: 1920, height: 1080 },
      { src: '/images/mr-malhotra/frames/frame-1.png', alt: 'Keyframe 01 — Executive establishing scene', width: 1920, height: 1080 },
      { src: '/images/mr-malhotra/frames/frame-2.png', alt: 'Keyframe 02 — Conversation beat', width: 1920, height: 1080 },
      { src: '/images/mr-malhotra/frames/frame-4.png', alt: 'Keyframe 04 — Medium character tension', width: 1920, height: 1080 },
      { src: '/images/mr-malhotra/frames/frame-6.png', alt: 'Keyframe 06 — Dramatic turning point', width: 1920, height: 1080 },
      { src: '/images/mr-malhotra/frames/frame-8.png', alt: 'Keyframe 08 — Close-up intensity', width: 1920, height: 1080 },
      { src: '/images/mr-malhotra/frames/frame-10.png', alt: 'Keyframe 10 — Climax resolution', width: 1920, height: 1080 },
      { src: '/images/mr-malhotra/storyboard-16x9.png', alt: 'Legacy Office — 16:9 cinematic storyboard sheet', width: 1920, height: 1080 },
    ],
    videos: [
      { src: '/videos/mr-malhotra.mp4', title: 'Mr. Malhotra — Legacy Executive Film', poster: '/images/mr-malhotra/video-thumb.jpg', ratio: '9:16' },
    ],
  },
  {
    slug: 'mama-earth',
    name: 'Mama Earth',
    brand: 'Mamaearth',
    hook: "Glass skin's secret was already in your rasoi.",
    year: '2026',
    role: 'Concept, Generational Character Sheets, Video Execution',
    tools: 'Google Flow (Veo 3.1) · Photoshop · DaVinci Resolve',
    production: 'Fully AI',
    credit: 'Mamaearth · Spec Campaign',
    briefSummary: 'An AI-generated campaign for Mamaearth’s Rice Water Face Wash — reframing the K-beauty "glass skin" trend as something already domestic. Rice water, an ingredient Indian kitchens have used for generations, now dermat-formulated with niacinamide in one bottle.',
    workflow: 'Cross-generational character modeling (granddaughter & nani), kitchen texture studies, and fresh water animation pass.',
    thumbnail: '/images/mama-earth/mama-earth.png',
    heroImage: '/images/mama-earth/mama-earth.png',
    heroVideo: '/videos/mama-earth.mp4',
    order: 9,
    ratio: '9:16',
    assets: [
      { src: '/images/mama-earth/ananya.png', alt: 'Ananya — campaign character', width: 1920, height: 1080 },
      { src: '/images/mama-earth/bedroom.png', alt: 'Bedroom environment — natural morning light', width: 1920, height: 1080 },
      { src: '/images/mama-earth/kitchen.png', alt: 'Kitchen — rice water origin story', width: 1920, height: 1080 },
      { src: '/images/mama-earth/mama-earth.png', alt: 'Mamaearth Rice Water Face Wash product', width: 1920, height: 1080 },
      { src: '/images/mama-earth/mobile.png', alt: 'Mobile screen — social media glass skin trend', width: 1920, height: 1080 },
      { src: '/images/mama-earth/nani.png', alt: 'Nani character — generational wisdom', width: 1920, height: 1080 },
      { src: '/images/mama-earth/props.png', alt: 'Skincare props and ingredients', width: 1920, height: 1080 },
      { src: '/images/mama-earth/steel-bowl.png', alt: 'Steel bowl with rice water', width: 1920, height: 1080 },
      { src: '/images/mama-earth/towel.png', alt: 'Towel — post-wash freshness', width: 1920, height: 1080 },
      { src: '/images/mama-earth/washroom.png', alt: 'Washroom environment — skincare routine', width: 1920, height: 1080 },
    ],
    videos: [
      { src: '/videos/mama-earth.mp4', title: 'Mama Earth — Rice Water Campaign', poster: '/images/mama-earth/video-thumb-5s.jpg', ratio: '9:16' },
    ],
  },
  {
    slug: 'kesar-bhog',
    name: 'Kesar Bhog',
    brand: "Kwality Wall's",
    hook: 'Kesar Bhog — mithai ka shahi scoop.',
    year: '2026',
    role: 'Dual-Execution Concept, Cultural Lighting, Final Cut',
    tools: 'Google Flow (Veo 3.1) · Kling · DaVinci Resolve',
    production: 'Fully AI',
    credit: "Kwality Wall's · Spec Campaign",
    briefSummary: 'An AI-generated campaign positioning Kwality Wall’s Kesar Bhog ice cream as festive mithai’s royal cousin — putting saffron-and-dry-fruit ice cream on the thali, not just in the freezer. Two executions exploring the elder-approval trust mechanic in Indian family households.',
    workflow: 'Two distinctive visual paths (festive living room vs intimate kitchen prep) with gold warm grading and texture macro detail.',
    thumbnail: '/images/kesar-bhog/a/product-sheet.png',
    heroImage: '/images/kesar-bhog/a/product-sheet.png',
    heroVideo: '/videos/kesar-bhog-v1.mp4',
    order: 10,
    ratio: '9:16',
    versions: [
      {
        label: 'Version A',
        assets: [
          { src: '/images/kesar-bhog/a/contact-sheet.png', alt: 'Kesar Bhog version A contact sheet', width: 1920, height: 1080 },
          { src: '/images/kesar-bhog/a/grand-mother.png', alt: 'Grandmother character — festive elder approval', width: 1920, height: 1080 },
          { src: '/images/kesar-bhog/a/location.png', alt: 'Indian home festive setting', width: 1920, height: 1080 },
          { src: '/images/kesar-bhog/a/product-sheet.png', alt: 'Kesar Bhog product sheet — saffron and dry fruits', width: 1920, height: 1080 },
          { src: '/images/kesar-bhog/a/props-1.png', alt: 'Festive props — diyas and marigold', width: 1920, height: 1080 },
          { src: '/images/kesar-bhog/a/props-2.png', alt: 'Traditional thali arrangement', width: 1920, height: 1080 },
          { src: '/images/kesar-bhog/a/props-3.png', alt: 'Saffron strands and dry fruit textures', width: 1920, height: 1080 },
          { src: '/images/kesar-bhog/a/young-adult.png', alt: 'Young adult character — secondary audience', width: 1920, height: 1080 },
        ],
        videos: [
          { src: '/videos/kesar-bhog-v1.mp4', title: 'Kesar Bhog — Version A', poster: '/images/kesar-bhog/video-v1-thumb-5s.jpg', ratio: '9:16' },
        ],
      },
      {
        label: 'Version B',
        assets: [
          { src: '/images/kesar-bhog/b/bowl.png', alt: 'Ice cream bowl presentation', width: 1920, height: 1080 },
          { src: '/images/kesar-bhog/b/contact-sheet.png', alt: 'Kesar Bhog version B contact sheet', width: 1920, height: 1080 },
          { src: '/images/kesar-bhog/b/location.png', alt: 'Kitchen setting — domestic warmth', width: 1920, height: 1080 },
          { src: '/images/kesar-bhog/b/mac-book.png', alt: 'MacBook showing campaign reference', width: 1920, height: 1080 },
          { src: '/images/kesar-bhog/b/man.png', alt: 'Male character — family buyer', width: 1920, height: 1080 },
          { src: '/images/kesar-bhog/b/product-sheet.png', alt: 'Kesar Bhog product variations', width: 1920, height: 1080 },
          { src: '/images/kesar-bhog/b/spoon.png', alt: 'Spoon detail — texture and craft', width: 1920, height: 1080 },
          { src: '/images/kesar-bhog/b/vegetable.png', alt: 'Fresh ingredient elements', width: 1920, height: 1080 },
        ],
        videos: [
          { src: '/videos/kesar-bhog-v2.mp4', title: 'Kesar Bhog — Version B', poster: '/images/kesar-bhog/video-v2-thumb-5s.jpg', ratio: '9:16' },
        ],
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): { prev: Project | null; next: Project | null } {
  const index = projects.findIndex((p) => p.slug === slug);
  return {
    prev: index > 0 ? projects[index - 1] : projects[projects.length - 1],
    next: index < projects.length - 1 ? projects[index + 1] : projects[0],
  };
}
