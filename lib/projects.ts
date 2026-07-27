export interface ProjectAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface ProjectVideo {
  src: string;
  poster?: string;
  title: string;
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
  briefSummary: string;
  thumbnail: string;
  order: number;
  versions?: ProjectVersion[];
  assets?: ProjectAsset[];
  videos?: ProjectVideo[];
  /* Nike-specific */
  conceptAssets?: ProjectAsset[];
  carouselVariants?: NikeVariant[];
  staticVariants?: NikeVariant[];
  videoVariants?: ProjectVideo[];
  heroImage?: string;
}

export const projects: Project[] = [
  {
    slug: 'kesar-bhog',
    name: 'Kesar Bhog',
    brand: 'Kwality Wall\'s',
    hook: 'Kesar Bhog — mithai ka shahi scoop.',
    briefSummary: 'An AI-generated campaign positioning Kwality Wall\'s Kesar Bhog ice cream as festive mithai\'s royal cousin — putting saffron-and-dry-fruit ice cream on the thali, not just in the freezer. Two executions exploring the elder-approval trust mechanic in Indian family households.',
    thumbnail: '/images/kesar-bhog/a/product-sheet.png',
    heroImage: '/images/kesar-bhog/a/product-sheet.png',
    order: 1,
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
          { src: '/videos/kesar-bhog-v1.mp4', title: 'Kesar Bhog — Version A', poster: '/images/kesar-bhog/video-v1-thumb-5s.jpg' },
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
          { src: '/videos/kesar-bhog-v2.mp4', title: 'Kesar Bhog — Version B', poster: '/images/kesar-bhog/video-v2-thumb-5s.jpg' },
        ],
      },
    ],
  },
  {
    slug: 'mama-earth',
    name: 'Mama Earth',
    brand: 'Mamaearth',
    hook: 'Glass skin\'s secret was already in your rasoi.',
    briefSummary: 'An AI-generated campaign for Mamaearth\'s Rice Water Face Wash — reframing the K-beauty "glass skin" trend as something already domestic. Rice water, an ingredient Indian kitchens have used for generations, now dermat-formulated with niacinamide in one bottle.',
    thumbnail: '/images/mama-earth/mama-earth.png',
    heroImage: '/images/mama-earth/mama-earth.png',
    order: 2,
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
      { src: '/videos/mama-earth.mp4', title: 'Mama Earth — Rice Water Campaign', poster: '/images/mama-earth/video-thumb-5s.jpg' },
    ],
  },
  {
    slug: 'nike',
    name: 'Nike',
    brand: 'Air Jordan',
    hook: 'Still Standing.',
    briefSummary: 'An AI-generated multi-format campaign for the Air Jordan 1 Mid White/Black — three format types (carousel ads, static ads, video ads) with three executions each. The "Still Standing" concept: quiet confidence, the shoe that never dates.',
    thumbnail: '/images/nike/assets/product-sheet.png',
    heroImage: '/images/nike/carousel/c/slide-6.png',
    order: 3,
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
      { src: '/videos/nike-jordan-1.mp4', title: 'Jordan Ad 1 — Hyper Motion', poster: '/images/nike/video-1-thumb-5s.jpg' },
      { src: '/videos/nike-jordan-2.mp4', title: 'Jordan Ad 2 — Brand Film', poster: '/images/nike/video-2-thumb-5s.jpg' },
      { src: '/videos/nike-jordan-3.mp4', title: 'Jordan Ad 3 — UGC Review', poster: '/images/nike/video-3-thumb-5s.jpg' },
    ],
  },
  {
    slug: 'voltas',
    name: 'Voltas',
    brand: 'Voltas (Tata)',
    hook: 'It\'s not picking a side. It\'s reading the room.',
    briefSummary: 'An AI-generated brand campaign for Voltas AC — India\'s largest air-conditioning brand, a Tata enterprise. The concept grounds the product in warm, domestic Indian family life. The AC reads as a family member\'s ally, not a machine.',
    thumbnail: '/images/voltas/ac.jpeg',
    heroImage: '/images/voltas/character-sheet.png',
    order: 4,
    assets: [
      { src: '/images/voltas/ac.jpeg', alt: 'Voltas split AC unit — product hero', width: 1920, height: 1080 },
      { src: '/images/voltas/character-sheet.png', alt: 'Voltas campaign character sheet — family cast', width: 1920, height: 1080 },
      { src: '/images/voltas/dad.png', alt: 'Dad character — parent in living room', width: 1920, height: 1080 },
      { src: '/images/voltas/living-room.png', alt: 'Indian middle-class living room — warm practical lighting', width: 1920, height: 1080 },
      { src: '/images/voltas/remote.png', alt: 'AC remote — the moment of control', width: 1920, height: 1080 },
    ],
    videos: [
      { src: '/videos/voltas.mp4?v=2', title: 'Voltas TVC Film', poster: '/images/voltas/video-thumb-5s.jpg' },
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
