interface CardProps {
  children: React.ReactNode;
  selected: boolean;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ onClick, selected, children }) => (
  <div
    onClick={onClick}
    className={`group relative border-2 transition-all overflow-hidden
        ${
          selected ? "border-appBlue" : "border-[#898989] border-opacity-10 hover:border-[#FF5733]/30"
        } 
        bg-white shadow-lg text-white cursor-pointer`}
  >
    {children}
  </div>
);

export default Card;
