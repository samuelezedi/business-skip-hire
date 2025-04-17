import { Skip } from "../types";

interface BottomBarProps {
  skip: Skip;
}

const BottomBar: React.FC<BottomBarProps> = ({ skip }) => (
  <div
    className={`${
      skip !== undefined
        ? "fixed bottom-0 left-0 right-0 bg-background border-t border-gray-200 p-4 "
        : "hidden"
    } animate-slideUp z-50`}
  >
    <div className="max-w-7xl mx-auto">
      <div className="lg:hidden">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium">{skip?.size} Yard Skip</h3>
          <div>
            <span className="text-xl font-bold text-[#FF5733]">
              £{skip?.price_before_vat}
            </span>
            <span className="text-sm text-gray-400 ml-2">
              {skip?.hire_period_days} days
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button className="px-4 py-2  border border-gray-400 w-full">
            Back
          </button>
          <button className="px-4 py-2 text-white bg-appBlue w-full">
            Continue
          </button>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div>
            <p className="text-sm text-gray-400">{skip?.size} Yard Skip</p>
          </div>
          <div>
            <span className="text-2xl font-bold text-[#FF5733]">
              £{skip?.price_before_vat}
            </span>
            <span className="text-sm text-gray-400 ml-2">
              {skip?.hire_period_days} day hire
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 border border-gray-400">
            Back
          </button>
          <button className="px-4 py-2  text-white bg-appBlue flex items-center gap-2">
            Continue
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
              className="lucide lucide-arrow-right w-4 h-4 text-white"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default BottomBar;
