import React from "react";
import Mycard from "./Mycard";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

type popularcardata = {
  name: string;
  category: string;
  image: string;
  petrol: number;
  people: number;
  price: number;
  favourite: boolean;
  discount?: number;
};

const PopularCarData: popularcardata[] = [
  {
    name: "Koenigsegg",
    category: "Sport",
    image: "/images/Koenigsegg.png",
    petrol: 90,
    people: 2,
    price: 99,
    favourite: true,
  },
  {
    name: "Nissan GT - R",
    category: "Sport",
    image: "/images/Nissan GT - R.png",
    petrol: 80,
    people: 2,
    price: 80,
    discount: 100,
    favourite: false,
  },
  {
    name: "Rolls - Royce",
    category: "Sedan",
    image: "/images/Rolls - Royce.png",
    petrol: 70,
    people: 4,
    price: 96,
    favourite: true,
  },
  {
    name: "Nissan GT - R",
    category: "Sport",
    image: "/images/Nissan GT - R.png",
    petrol: 80,
    people: 2,
    price: 80,
    favourite: false,
  },
];
function PopularCar({heading}:any) {
  return (
    <section className="px-6 sm:px-10 bg-[#f6f7f9] space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-[#90A3BF] text-base font-semibold ">{heading}</h1>
        <h1 className="text-[#3563E9] text-base font-semibold">View All</h1>
      </div>
      <div className="flex items-center justify-center">
        <Carousel
          className="w-full max-w-8xl"
        >
          <CarouselContent>
            {PopularCarData.map((val: popularcardata, index: number) => (
              <CarouselItem  key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 border-none">
                  <Card className="border-none h-96">
                    <CardContent className="flex border-none aspect-squar items-center justify-center p-6">
                      <Mycard
                        name={val.name}
                        category={val.category}
                        image={val.image}
                        petrol={val.petrol}
                        people={val.people}
                        price={val.price}
                        discount={val.discount}
                        favourite={val.favourite}
                      />
                    </CardContent>
                  </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}

export default PopularCar;
