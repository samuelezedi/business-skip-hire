interface CardProps {
  children: React.ReactNode;
  selected: boolean;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ onClick, selected, children }) => (
  <div
    onClick={onClick}
    className={`group relative rounded-lg border-2 p-4 md:p-6 transition-all
        ${
          selected ? "border-appBlue" : "border-[#2A2A2A] hover:border-[#0037C1]/50"
        } 
        bg-[#1C1C1C] text-white cursor-pointer`}
  >
    {children}
  </div>
);

export default Card;
