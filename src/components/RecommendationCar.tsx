"use client";
import React, { useEffect, useState } from "react";
import Mycard from "./Mycard";
import { Button } from "./ui/button";
import { client } from "@/sanity/lib/client";
import GridSkeleton from "./GridSkeletion";

type recomendcardata = {
  id: number;
  name: string;
  category: string;
  image: string;
  petrol: number;
  people: number;
  price: number;
  originalPrice?: number;
};

async function fetchRecommendedCarsFromSanity() {
  const query = `*[_type == "car" && "recommended" in tags]{
    id,
    name,
    category,
    "image": image.asset->url,
    fuelCapacity,
    seatingCapacity,
    pricePerDay,
    originalPrice
  }`;

  try {
    const cars = await client.fetch(query);
    
    return cars.map((car: any) => ({
      id:car.id,
      name: car.name,
      category: car.category,
      image: car.image || "",
      petrol: car.fuelCapacity || 0,
      people: car.seatingCapacity || 0,
      price: car.pricePerDay || 0,
      originalPrice: car.originalPrice || undefined,
    }));
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
    return [];
  }
}

function RecommendationCar() {
  const [carData, setCarData] = useState<recomendcardata[]>([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedCars = await fetchRecommendedCarsFromSanity();
      setCarData(fetchedCars);
    }
    fetchData();
  }, []);

  return (
    <section className="px-6 sm:px-10 bg-[#f6f7f9] py-8 space-y-8">
      <div className="space-y-8">
        <h1 className="text-[#90A3BF] text-base font-semibold ">
          Recomendation Car
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {carData.length === 0 ? (
            <GridSkeleton />
          ) : (
            carData.map((val: recomendcardata, index: number) => (
              <Mycard
                key={index}
                id={val.id}
                name={val.name}
                category={val.category}
                image={val.image}
                petrol={val.petrol}
                people={val.people}
                price={val.price}
                originalPrice={val.originalPrice}
              />
            ))
          )}
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
