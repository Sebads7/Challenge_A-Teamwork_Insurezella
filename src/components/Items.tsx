import { FaArrowRightLong } from "react-icons/fa6";

interface Plan {
  name: string;
  icon?: string;
  description?: string;
  button?: string;
  image?: string;
}

export const Items = ({ plan }: { plan: Plan }) => {
  return (
    <>
      <ul className=" flex justify-center items-center  h-full">
        <li className=" shadow-lg shadow-blue-500/50 rounded-lg w-40 h-40   lg:w-40 lg:h-40 2xl:w-56 2xl:h-56 flex flex-col justify-center items-center text-center gap-2 border bg-bgwhite">
          <img
            src={plan.icon}
            alt={plan.name}
            className="w-12 h-12 lg:w-14 lg:h-14 2xl:w-20 2xl:h-20 "
          />
          <p className="w-[60%] lg:w-2/4 text-base  2xl:text-lg mx-auto  font-semibold ">
            {plan.name}
          </p>
        </li>
      </ul>
    </>
  );
};

export const CompareItems = ({ plan }: { plan: Plan }) => {
  return (
    <div className=" md:px-5 z-10  ">
      <div className="w-full px-3 h-36 lg:h-[14rem] 2xl:px-14  overflow-hidden">
        <img
          src={plan.image}
          alt={plan.name}
          className="object-cover h-full lg:h-[20rem] w-full "
        />
      </div>
      <ul className="md:pl-7 2xl:w-[90%] mx-auto px-4   z-10 ">
        <li className="flex flex-col sm:pl-2 lg:px-10 lg:pr-24  gap-5  ">
          <h3 className="md:text-xl  lg:text-3xl font-semibold pt-5  ">
            {plan.name}
          </h3>
          <p className="text-gray-500 text-xs md:text-base xl:text-lg h-[4.5rem] sm:h-[7rem] md:h-28">
            {plan.description}
          </p>

          <button className="text-blue-600 hover:border-blue-400 hover:border-b w-fit transition duration-300 ease-in-out flex gap-4 items-center pt-8 ">
            {plan.button}
            <span>
              <FaArrowRightLong />
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
};
