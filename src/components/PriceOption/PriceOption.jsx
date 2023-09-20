import Features from "../Features/Features";
import PropTypes from "prop-types";

PriceOption.propTypes = {
  option: PropTypes.object,
};

function PriceOption({ option }) {
  const { membership_type, price, features } = option;

  return (
    <div className="bg-emerald-900 rounded-lg p-5 flex flex-col">
      <h2 className="text-center">
        <span className="text-5xl font-extrabold">{price}</span>
        <span className="text-2xl">/month</span>
      </h2>

      <h2 className="text-3xl text-center my-5">{membership_type}</h2>

      <div className="pl-6 flex-grow">
        {" "}
        {features.map((feature, idx) => (
          <Features key={idx} feature={feature}></Features>
        ))}
      </div>

      <button className="w-full bg-yellow-600 text-xl font-bold text-black mt-10 rounded-lg py-3 hover:bg-slate-400 duration-700">
        Buy Now
      </button>
    </div>
  );
}

export default PriceOption;
