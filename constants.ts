import { FeatureItem, NavItem, SlideData } from './types';

export const COLORS = {
  primary: '#005EB5',
  accent: '#F6B042',
  text: '#1F2937',
};

export const CONTACT_INFO = {
  whatsapp: 'https://wa.me/1234567890?text=Hello!%20I%20would%20like%20to%20inquire%20about%20Guest%20House%20Siquijor.',
  messenger: 'https://m.me/',
  phone: '+63 999 999 9999',
  email: 'gnrguesthouse@gmail.com',
  bookingUrl: 'https://booking.com',
  address: 'Tubod, San Juan, Siquijor, Philippines',
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4268.181046982555!2d123.51088405391285!3d9.141783176017448!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ab3f952c427eb3%3A0xdcd0f9c190136f2b!2sGNR%20Accommodation!5e0!3m2!1sen!2sph!4v1764823976816!5m2!1sen!2sph"
};

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Tours', href: '#tours' },
  { label: 'Motorbikes', href: '#bikes' },
  // { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_SLIDES: SlideData[] = [
  {
    id: 1,
    image: '/assets/hero-room.jpeg',
    title: 'Welcome to Paradise',
    subtitle: 'Your chill island home in Siquijor.',
    ctaText: 'View Rooms',
    ctaAction: () => document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })
  },
  {
    id: 2,
    image: '/assets/tour-hero.jpg',
    title: 'Explore the Mystic Island',
    subtitle: 'Guided tours to waterfalls, beaches, and mountains.',
    ctaText: 'See Tours',
    ctaAction: () => document.getElementById('tours')?.scrollIntoView({ behavior: 'smooth' })
  },
  {
    id: 3,
    image: '/assets/hero-motor.jpeg',
    title: 'Freedom on Two Wheels',
    subtitle: 'Rent a motorbike and discover at your own pace.',
    ctaText: 'Rent a Bike',
    ctaAction: () => document.getElementById('bikes')?.scrollIntoView({ behavior: 'smooth' })
  }
];

export const FEATURED_ROOMS: FeatureItem[] = [
  {
    id: 1,
    title: 'Deluxe Double Room',
    description: 'Perfect for couples. Comfortable double bed, air conditioning, and en-suite bathroom.',
    price: '₱2,500 / night',
    imageUrl: '/assets/hero-room.jpeg',
    images: [
      '/assets/hero-room.jpeg',
      '/assets/hero-room.jpeg', // Placeholder for now
      '/assets/hero-room.jpeg'  // Placeholder for now
    ],
    // tag: 'Bestseller'
  },
  {
    id: 2,
    title: 'Family Room',
    description: 'Bunk beds perfect for families to stay while enjoying the island',
    price: '₱1,800 / night',
    imageUrl: '/assets/hero-room.jpeg',
    images: [
      '/assets/hero-room.jpeg',
      '/assets/hero-room.jpeg',
      '/assets/hero-room.jpeg'
    ],
  },
];

export const FEATURED_TOURS: FeatureItem[] = [
  {
    id: 1,
    title: 'Island Tour',
    description: 'Visit the famous three-tiered waterfalls. Tarzan swing included!',
    checklist: [
      'Driver/Tour Guide',
      'Gasoline',
      'Your own destination choices'
    ],
    price: 'from ₱2,800',
    imageUrl: '/assets/tour1.jpg',
  },
  {
    id: 2,
    title: 'Port Pickup or Dropoff',
    description: 'Discover the hidden white sand beaches of San Juan and Lazi.',
    checklist: [
      'Siquijor port pickup or dropoff ₱700.00',
      'Larena port pickup or dropoff ₱1000.00'
    ],
    price: 'from ₱700',
    imageUrl: '/assets/tour2.jpg',
  },
  {
    id: 3,
    title: 'Tuktuk/Baobao',
    description: 'Ride up to the highest peak for a breathtaking sunset view.',
    checklist: [
      'Siquijor port pickup or dropoff ₱400.00',
      'Larena port pickup or dropoff ₱700.00',
      'island tour ₱1,800.00'
    ],
    price: 'from ₱400',
    imageUrl: '/assets/Tuktuk.jpeg',
  }
];

export const MOTORBIKE_HIGHLIGHTS: FeatureItem[] = [
  {
    id: 1,
    title: 'Honda Click',
    description: 'Reliable, automatic, and perfect for island roads.',
    price: '₱500 / day',
    imageUrl: '/assets/hero-motor.jpeg',
    tag: 'Popular'
  },
  {
    id: 2,
    title: 'Honda Beat',
    description: 'For those who want to explore off the beaten path.',
    price: '₱400 / day',
    imageUrl: '/assets/hero-motor.jpeg',
  },
  // {
  //   id: 3,
  //   title: 'Yamaha NMAX 155',
  //   description: 'Ultimate comfort for long rides around the circumference.',
  //   price: '₱600 / day',
  //   imageUrl: '/assets/hero-motor.jpeg',
  // }
];

// export const GALLERY_IMAGES = [
//   'https://picsum.photos/400/300?random=20',
//   'https://picsum.photos/400/300?random=21',
//   'https://picsum.photos/400/300?random=22',
//   'https://picsum.photos/400/300?random=23',
//   'https://picsum.photos/400/300?random=24',
//   'https://picsum.photos/400/300?random=25',
// ];
