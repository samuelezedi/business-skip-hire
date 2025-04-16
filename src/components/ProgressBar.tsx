import IconPicker from "./IconPicker";

interface ProgressData {
  title: string;
  completed: boolean;
  current: boolean;
  iconName: string;
  first?: boolean;
}

export default function ProgressBar() {
  const progressData: ProgressData[] = [
    {
      title: "Postcode",
      completed: true,
      current: false,
      iconName: "MapPin",
      first: true,
    },
    {
      title: "Waste Type",
      completed: true,
      current: false,
      iconName: "Trash2",
    },
    {
      title: "Select Skip",
      completed: false,
      current: true,
      iconName: "Truck",
    },
    {
      title: "Permit Check",
      completed: false,
      current: false,
      iconName: "Shield",
    },
    {
      title: "Choose Date",
      completed: false,
      current: false,
      iconName: "Calendar",
    },
    {
      title: "Payment",
      completed: false,
      current: false,
      iconName: "CreditCard",
    },
  ];

  return (
    <>
      {/* For Mobile  */}
      <div className="flex items-center mb-8 overflow-x-auto lg:hidden">
        {progressData.map((data, index) => (
          <div key={index} className="flex items-center justify-center gap-3 ">
            {data.first || data.current || data.completed ? (
              <></>
            ) : (
              <div
                className={`ml-3 w-16 h-px ${
                  data.completed ? "bg-appBlue" : "bg-[#2A2A2A]"
                } `}
              ></div>
            )}
            {data.first || data.completed ? (
              <></>
            ) : (
              <button
                className={` flex justify-center items-center whitespace-nowrap transition-colors gap-3  text-[#0037C1] ${
                  data.completed || data.current
                    ? "cursor-pointer"
                    : "cursor-not-allowed"
                } hover:text-[#0037C1] `}
              >
                <IconPicker
                  name={data.iconName}
                  color={data.completed || data.current ? "#0037C1" : "#595959"}
                />
                <span
                  className={`${
                    data.completed || data.current
                      ? "text-white font-medium"
                      : "text-[#898989]"
                  } `}
                >
                  {data.title}
                </span>
              </button>
            )}
          </div>
        ))}
      </div>
      {/* For Desktop  */}
      <div className="hidden lg:flex items-center justify-center mb-8 overflow-x-auto space-x-4">
        {progressData.map((data, index) => (
          <div
            key={index}
            className="flex items-center justify-center space-x-4"
          >
            {data.first ? (
              <></>
            ) : (
              <div
                className={`${
                  !data.completed && !data.current ? "flex" : "hidden lg:flex"
                }`}
              >
                <div
                  className={`w-16 h-px ${
                    data.completed ? "bg-appBlue" : "bg-[#2A2A2A]"
                  } `}
                ></div>
              </div>
            )}
            <button
              className={`${
                !data.current ? "hidden" : "flex"
              } lg:flex items-center whitespace-nowrap transition-colors text-[#0037C1] ${
                data.completed || data.current
                  ? "cursor-pointer"
                  : "cursor-not-allowed"
              } hover:text-[#0037C1] `}
            >
              <IconPicker
                name={data.iconName}
                color={data.completed || data.current ? "#0037C1" : "#595959"}
              />
              <span
                className={`ml-2 ${
                  data.completed || data.current
                    ? "text-white font-medium"
                    : "text-[#898989]"
                } `}
              >
                {data.title}
              </span>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
