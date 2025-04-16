interface CardTitleProps {
  title: string;
}

const CardTitle: React.FC<CardTitleProps> = ({ title }) => (
  <h3 className="text-lg md:text-xl font-bold mb-2 text-white">{title}</h3>
);

export default CardTitle;
