"use client";
import React, { useEffect, useState } from "react";
import Mycard from "./Mycard";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { client } from "@/sanity/lib/client";
import Skeleton from "./CarouselSkeleton";

type PopularCarData = {
  id:number;
  name: string;
  category: string;
  image: string;
  petrol: number;
  people: number;
  price: number;
  originalPrice?: number;
};

async function fetchCarsFromSanity() {
  const query = `*[_type == "car" && "popular" in tags]{
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

function PopularCar({ heading }: { heading: string }) {
  const [carData, setCarData] = useState<PopularCarData[]>([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedCars = await fetchCarsFromSanity();
      setCarData(fetchedCars);
    }
    fetchData();
  }, []);

  return (
    <section className="px-6 sm:px-10 bg-[#f6f7f9] space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-[#90A3BF] text-base font-semibold ">{heading}</h1>
        <h1 className="text-[#3563E9] text-base font-semibold">View All</h1>
      </div>

      {/* Carousel Section */}
      <div className="flex items-center justify-center">
        <Carousel className="w-full max-w-8xl">
          <CarouselContent>
            {carData.length ===0 ? (
              <Skeleton/>
            ) : (
              carData.map((val: PopularCarData, index: number) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 border-none"
                >
                  <Card className="border-none h-96">
                    <CardContent className="flex border-none aspect-square items-center justify-center ">
                      <Mycard
                        id={val.id}
                        name={val.name}
                        category={val.category}
                        image={val.image}
                        petrol={val.petrol}
                        people={val.people}
                        price={val.price}
                        originalPrice={val.originalPrice}
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))
            )}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}

export default PopularCar;
