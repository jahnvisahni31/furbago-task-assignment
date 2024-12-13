import Image from 'next/image';

interface SiteCardProps {
  image: string;
  title: string;
  location: string;
  duration: string;
  sector: string;
  rating: number;
  price: number;
  points?: string;
}

export default function SiteCard({
  image,
  title,
  location,
  duration,
  sector,
  rating,
  price,
  points,
}: SiteCardProps) {
  return (
    <div
      className="overflow-hidden rounded-lg border cursor-pointer bg-white
        hover:bg-pink-100 active:bg-pink-200 transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-48 sm:h-56 md:h-64">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title and Details */}
        <div className="flex items-start justify-between gap-4 mb-2">
          <div>
            <h3 className="font-semibold text-lg sm:text-xl">{title}</h3>
            <p className="text-sm sm:text-base text-gray-500">
              {location} • {duration} • {sector}
            </p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2 text-gray-500">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`h-4 w-4 sm:h-5 sm:w-5 ${
                i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
              }`}
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
          ))}
          <span className="text-sm sm:text-base ml-1">{rating}</span>
        </div>

        {/* Price and Points */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-fuchsia-600 font-semibold text-lg sm:text-xl">${price}</span>
            <span className="text-sm sm:text-base text-gray-500">/person</span>
          </div>
          {points && (
            <span className="text-sm sm:text-base text-fuchsia-400">{points}</span>
          )}
        </div>
      </div>
    </div>
  );
}
