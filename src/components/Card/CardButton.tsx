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
    className={`w-full py-2.5 md:py-3 px-4  transition-all flex items-center justify-center space-x-2
          ${
            selected
              ? "bg-[#FF5733] text-white"
              : "bg-white  hover:bg-[#FF5733] hover:text-white hover:border-[#FF5733]"
          }  text-[#FF5733] border border-[#FF5733]
          false`}
  >
    <span>{text}</span>
    {children}
  </button>
);

export default CardButton;
