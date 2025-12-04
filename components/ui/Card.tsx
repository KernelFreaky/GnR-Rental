import React from 'react';

interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
  price?: string;
  tag?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  image,
  title,
  description,
  price,
  tag,
  ctaText = "View Details",
  onCtaClick
}) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-200">
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" 
        />
        {tag && (
          <div className="absolute top-2 right-2 rounded-full bg-sand-500 px-3 py-1 text-xs font-bold text-dark-900 shadow-sm">
            {tag}
          </div>
        )}
        {price && (
          <div className="absolute bottom-2 left-2 rounded-md bg-black/60 px-3 py-1 text-sm font-semibold text-white backdrop-blur-sm">
            {price}
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-2 text-xl font-bold text-dark-900">{title}</h3>
        <p className="mb-4 flex-1 text-sm text-gray-600">{description}</p>
        <button 
          onClick={onCtaClick}
          className="mt-auto w-full rounded-lg bg-tropical-500 py-2 text-sm font-semibold text-white transition-colors hover:bg-tropical-600"
        >
          {ctaText}
        </button>
      </div>
    </div>
  );
};
