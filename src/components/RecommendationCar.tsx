import React from "react";
import Mycard from "./Mycard";
import { Button } from "./ui/button";

type recomendcardata = {
  name: string;
  category: string;
  image: string;
  petrol: number;
  people: number;
  price: number;
  favourite: boolean;
  discount?: number;
};

const RecomendCarData: recomendcardata[] = [
  {
    name: "All New Rush",
    category: "Suv",
    image: "/images/All New Rush.png",
    petrol: 70,
    people: 6,
    price: 72,
    favourite: false,
  },
  {
    name: "CR -V",
    category: "SUV",
    image: "/images/Car - v.png",
    petrol: 80,
    people: 6,
    price: 80,
    favourite: true,
  },
  {
    name: "All New Terios",
    category: "Suv",
    image: "/images/All New Rush.png",
    petrol: 90,
    people: 6,
    price: 74,
    favourite: false,
  },
  {
    name: "CR -V",
    category: "SUV",
    image: "/images/Car - v.png",
    petrol: 80,
    people: 6,
    price: 80,
    favourite: true,
  },
  {
    name: "MG ZX Exclusice",
    category: "Hatchback",
    image: "/images/MG ZX Exclusic.png",
    petrol: 70,
    people: 4,
    price: 76,
    discount: 80,
    favourite: true,
  },
  {
    name: "New MG ZS",
    category: "SUV",
    image: "/images/New MG ZX.png",
    petrol: 80,
    people: 6,
    price: 80,
    favourite: false,
  },
  {
    name: "MG ZX Excite ",
    category: "Hatchback",
    image: "/images/MG ZX Exclusic.png",
    petrol: 90,
    people: 4,
    price: 74,
    favourite: true,
  },
  {
    name: "New MG ZS",
    category: "SUV",
    image: "/images/New MG ZX.png",
    petrol: 80,
    people: 6,
    price: 80,
    favourite: false,
  },
];
function RecommendationCar() {
  return (
    <section className="px-6 sm:px-10 bg-[#f6f7f9] py-8 space-y-8">
      <div className="space-y-8">
        <h1 className="text-[#90A3BF] text-base font-semibold ">
          Recomendation Car
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {RecomendCarData.map((val: recomendcardata, index: number) => (
            <Mycard
              key={index}
              name={val.name}
              category={val.category}
              image={val.image}
              petrol={val.petrol}
              people={val.people}
              price={val.price}
              discount={val.discount}
              favourite={val.favourite}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex justify-end w-[73%] sm:w-[80%] md:w-[70%] xl:w-[60%]">
          <Button variant={"outline"} className="bg-[#3563E9] text-white px-5">
            Show more car
          </Button>
        </div>
        <div className="flex justify-end text-[#838383] text-sm text-right w-[27%] sm:w-[50%]">
          120 Car
        </div>
      </div>
    </section>
  );
}

export default RecommendationCar;
