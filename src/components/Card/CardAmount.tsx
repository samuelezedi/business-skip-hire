interface CardAmountProps {
  amount: string;
}

const CardAmount: React.FC<CardAmountProps> = ({ amount }) => (
  <div className="flex justify-between items-center mb-3">
    <div>
      <span className="text-xl md:text-2xl font-bold text-[#FF5733]">
        {amount}
      </span>
    </div>
  </div>
);

export default CardAmount;
