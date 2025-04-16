interface CardImageProps {
  imageUrl: string;
  imageAlt: string;
  imageTitle: string;
  notAllowedOnRoad: boolean;
}

const CardImage: React.FC<CardImageProps> = ({
  imageUrl,
  imageAlt,
  imageTitle,
  notAllowedOnRoad,
}) => (
  <div className="relative">
    <img
      src={imageUrl}
      alt={imageAlt}
      className="w-full h-36 md:h-48 object-cover rounded-md mb-4"
    />
    <div className="absolute top-3 right-2 z-20 bg-[#0037C1] text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
      {imageTitle}
    </div>
    {notAllowedOnRoad ? (
      <div className="absolute bottom-3 left-2 z-20 space-y-2">
        <div className="bg-black/90 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-alert-triangle w-4 h-4 text-yellow-500 shrink-0"
          >
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
            <path d="M12 9v4"></path>
            <path d="M12 17h.01"></path>
          </svg>
          <span className="text-xs font-medium text-yellow-500">
            Not Allowed On The Road
          </span>
        </div>
      </div>
    ) : (
      <></>
    )}
  </div>
);

export default CardImage;
