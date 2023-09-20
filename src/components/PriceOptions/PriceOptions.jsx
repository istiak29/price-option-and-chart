import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const options = [
      {
        id: 1,
        membership_type: "Basic Membership",
        price: 50.0,
        description: "Access to basic gym facilities.",
        features: [
          "Access to cardio equipment",
          "Access to weightlifting area",
          "Locker room access",
        ],
      },
      {
        id: 2,
        membership_type: "Premium Membership",
        price: 80.0,
        description:
          "Access to premium gym facilities and personal trainer sessions.",
        features: [
          "Access to all gym facilities",
          "Personal trainer sessions (2 per month)",
          "Access to group fitness classes",
        ],
      },
      {
        id: 3,
        membership_type: "Family Membership",
        price: 120.0,
        description: "Access for the whole family with additional discounts.",
        features: [
          "Access for two adults and two children",
          "Discounts on additional family members",
          "Access to family-friendly amenities",
        ],
      },
      {
        id: 4,
        membership_type: "Student Membership",
        price: 30.0,
        description: "Discounted rate for students with valid ID.",
        features: [
          "Access to cardio equipment",
          "Access to weightlifting area",
          "Locker room access",
          "Valid student ID required",
        ],
      },
      {
        id: 5,
        membership_type: "Senior Membership",
        price: 40.0,
        description: "Discounted rate for seniors aged 65 and above.",
        features: [
          "Access to all gym facilities",
          "Senior citizen discounts",
          "Access to senior fitness classes",
        ],
      },
    ];


    return (
      <div className="m-12">
        <h2 className="text-3xl">Best Price in the town: </h2>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {options.map((option) => (<PriceOption key={option.id} option={option}></PriceOption>
          ))}
        </div>
      </div>
    );
};

export default PriceOptions;