"use client";
import React, { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import Mycard from "../../../components/Mycard";
import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";
import GridSkeleton from "@/components/GridSkeletion";
type categorycardata = {
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

function Page() {
  const [carData, setCarData] = useState<categorycardata[]>([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedCars = await fetchCarsFromSanity();
      setCarData(fetchedCars);
    }
    fetchData();
  }, []);

  return (
    <section className="bg-[#f6f7f9] flex ">
      <aside className="lg:w-[20%] xl:w-[15%] hidden lg:block border-r px-5 py-6 bg-white space-y-10">
        {/* TYPE */}
        <div className="space-y-5">
          <h1 className="text-[#90A3BF] font-semibold text-xs ">TYPE</h1>
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-2 text-[#596780] font-semibold text-1xl">
              <Checkbox checked={true} />
              Sport
              <span className="text-[#90A3BF] font-semibold text-xl">(10)</span>
            </div>
            <div className="flex items-center gap-2 text-[#596780] font-semibold text-1xl">
              <Checkbox checked={true} />
              SUV
              <span className="text-[#90A3BF] font-semibold text-xl">(12)</span>
            </div>
            <div className="flex items-center gap-2 text-[#596780] font-semibold text-1xl">
              <Checkbox />
              MPV
              <span className="text-[#90A3BF] font-semibold text-xl">(16)</span>
            </div>
            <div className="flex items-center gap-2 text-[#596780] font-semibold text-1xl">
              <Checkbox />
              Sedan
              <span className="text-[#90A3BF] font-semibold text-xl">(20)</span>
            </div>
            <div className="flex items-center gap-2 text-[#596780] font-semibold text-1xl">
              <Checkbox />
              Coupe
              <span className="text-[#90A3BF] font-semibold text-xl">(14)</span>
            </div>
            <div className="flex items-center gap-2 text-[#596780] font-semibold text-1xl">
              <Checkbox />
              Hatchback
              <span className="text-[#90A3BF] font-semibold text-xl">(14)</span>
            </div>
          </div>
        </div>

        {/* CATEGORY */}
        <div className="space-y-5">
          <h1 className="text-[#90A3BF] font-semibold text-xs ">Category</h1>
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-2 text-[#596780] font-semibold text-1xl">
              <Checkbox />2 Person
              <span className="text-[#90A3BF] font-semibold text-xl">(10)</span>
            </div>
            <div className="flex items-center gap-2 text-[#596780] font-semibold text-1xl">
              <Checkbox />4 Person
              <span className="text-[#90A3BF] font-semibold text-xl">(14)</span>
            </div>
            <div className="flex items-center gap-2 text-[#596780] font-semibold text-1xl">
              <Checkbox />6 Person
              <span className="text-[#90A3BF] font-semibold text-xl">(12)</span>
            </div>
            <div className="flex items-center gap-2 text-[#596780] font-semibold text-1xl">
              <Checkbox checked={true} />8 or More
              <span className="text-[#90A3BF] font-semibold text-xl">(16)</span>
            </div>
          </div>
        </div>

        {/* PRICE */}
        <div className="flex flex-col gap-7 ">
          <h1 className="text-[#90A3BF] font-semibold text-xs ">Price</h1>
          <div className="flex flex-col gap-3">
            <Slider defaultValue={[70]} max={100} step={1} />
            <h1 className="flex items-center gap-2 text-[#596780] font-semibold text-1xl">
              Max. $100.00
            </h1>
          </div>
        </div>
      </aside>

      {/* RIGHT SIDE */}
      <main className=" w-full lg:w-[90%] xl:w-[85%] px-6 py-7 space-y-7">
        {/* Pick-Up and Drop-Off Section */}
        <div className="flex flex-col 2xl:flex-row gap-6 items-center relative">
          {/* Pick-Up Section */}
          <div className="flex flex-col gap-4 px-6 py-6 rounded-[10px] bg-white flex-1 ">
            <div className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="16"
                  height="16"
                  rx="8"
                  fill="#3563E9"
                  fillOpacity="0.3"
                />
                <circle cx="8" cy="8" r="4" fill="#3563E9" />
              </svg>
              <h1 className="font-semibold">Pick-Up</h1>
            </div>
            <div className="flex flex-wrap sm:flex-nowrap gap-6">
              {/* Locations */}
              <div className="flex flex-col sm:border-r sm:pr-3 gap-2 flex-1">
                <h1 className="font-bold">Locations</h1>
                <select className="text-gray-500 outline-none bg-transparent">
                  <option value="" hidden>
                    Select your city
                  </option>
                  <option value="Karachi">Karachi</option>
                  <option value="Islamabad">Islamabad</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Rawalpindi">Rawalpindi</option>
                </select>
              </div>
              {/* Date */}
              <div className="flex flex-col sm:border-r sm:px-3 gap-2 flex-1">
                <h1 className="font-bold">Date</h1>
                <select className="text-gray-500 outline-none bg-transparent">
                  <option value="" hidden>
                    Select your date
                  </option>
                  <option value="8 to 16 Dec">8 to 16 Dec</option>
                  <option value="1 to 20 Jan">1 to 20 Jan</option>
                  <option value="15 to 27 Feb">15 to 27 Feb</option>
                  <option value="1 to 10 March">1 to 10 March</option>
                </select>
              </div>
              {/* Time */}
              <div className="flex flex-col sm:pl-3 gap-2 flex-1">
                <h1 className="font-bold">Time</h1>
                <select className="text-gray-500 outline-none bg-transparent">
                  <option value="" hidden>
                    Select your time
                  </option>
                  <option value="8 am">8 am</option>
                  <option value="9 am">9 am</option>
                  <option value="10 am">10 am</option>
                  <option value="11 am">11 am</option>
                </select>
              </div>
            </div>
          </div>

          {/* Shuffle Icon */}
          <div className="w-[60px] h-[60px] rounded-[10px] flex items-center justify-center shadow-xl sm:shadow bg-[#3563E9] absolute top-[45%] sm:top-[35%] left-[40%] sm:left-[48%]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.16124 3.83632L7.16124 17.4541"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.0837 7.93262L7.16148 3.83595L11.2393 7.93262"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.089 20.167L17.089 6.54921"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.167 16.0713L17.0892 20.168L13.0114 16.0713"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Drop-Off Section */}
          <div className="flex flex-col gap-4 px-6 py-6 rounded-[10px] bg-white flex-1">
            <div className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="16"
                  height="16"
                  rx="8"
                  fill="#5CAFFC"
                  fillOpacity="0.3"
                />
                <circle cx="8" cy="8" r="4" fill="#54A6FF" />
              </svg>
              <h1 className="font-semibold">Drop-Off</h1>
            </div>
            <div className="flex flex-wrap sm:flex-nowrap gap-6">
              {/* Locations */}
              <div className="flex flex-col sm:border-r sm:pr-3 gap-2 flex-1">
                <h1 className="font-bold">Locations</h1>
                <select className="text-gray-500 outline-none bg-transparent">
                  <option value="" hidden>
                    Select your city
                  </option>
                  <option value="Karachi">Karachi</option>
                  <option value="Islamabad">Islamabad</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Rawalpindi">Rawalpindi</option>
                </select>
              </div>
              {/* Date */}
              <div className="flex flex-col sm:border-r sm:px-3 gap-2 flex-1">
                <h1 className="font-bold">Date</h1>
                <select className="text-gray-500 outline-none bg-transparent">
                  <option value="" hidden>
                    Select your date
                  </option>
                  <option value="8 to 16 Dec">8 to 16 Dec</option>
                  <option value="1 to 20 Jan">1 to 20 Jan</option>
                  <option value="15 to 27 Feb">15 to 27 Feb</option>
                  <option value="1 to 10 March">1 to 10 March</option>
                </select>
              </div>
              {/* Time */}
              <div className="flex flex-col sm:pl-3 gap-2 flex-1">
                <h1 className="font-bold">Time</h1>
                <select className="text-gray-500 outline-none bg-transparent">
                  <option value="" hidden>
                    Select your time
                  </option>
                  <option value="8 am">8 am</option>
                  <option value="9 am">9 am</option>
                  <option value="10 am">10 am</option>
                  <option value="11 am">11 am</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {carData.length === 0 ? (
            <GridSkeleton />
          ) : (
            carData.map((val: categorycardata, index: number) => (
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
        <div className="flex items-center">
          <div className="flex justify-end w-[73%] sm:w-[80%] md:w-[70%] xl:w-[60%]">
            <Button
              variant={"outline"}
              className="bg-[#3563E9] text-white px-5"
            >
              Show more car
            </Button>
          </div>
          <div className="flex justify-end text-[#838383] text-sm text-right w-[27%] sm:w-[50%]">
            120 Car
          </div>
        </div>
      </main>
    </section>
  );
}

export default Page;
