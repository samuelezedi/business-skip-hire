interface CardButtonProps {
  text: string;
  selected: boolean;
  onClick: () => void;
  children?: React.ReactNode;
}

const CardButton: React.FC<CardButtonProps> = ({
  text,
  selected,
  onClick,
  children,
}) => (
  <button
    onClick={onClick}
    className={`w-full py-2.5 md:py-3 px-4 rounded-md transition-all flex items-center justify-center space-x-2
          ${
            selected
              ? "bg-[#0037C1]"
              : "bg-[#2A2A2A] hover:bg-[#3A3A3A] hover:border-[#0037C1]"
          }  text-white 
          false`}
  >
    <span>{text}</span>
    {children}
  </button>
);

export default CardButton;
