

interface CardSubtitleProps {
  title: string;
}

const CardSubtitle: React.FC<CardSubtitleProps> = ({ title }) => (
  <p className="text-sm text-gray-400 mb-3 md:mb-6">{title}</p>
);

export default CardSubtitle;
