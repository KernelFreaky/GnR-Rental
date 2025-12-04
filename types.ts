export interface SlideData {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaAction: () => void;
}

export interface FeatureItem {
  id: number;
  title: string;
  description: string;
  price?: string;
  imageUrl: string;
  tag?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
