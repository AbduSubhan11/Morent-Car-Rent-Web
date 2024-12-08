import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import Image from "next/image";
import React from "react";
import Mycard from "../../../components/Mycard";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

type recentcardata = {
  name: string;
  category: string;
  image: string;
  petrol: number;
  people: number;
  price: number;
  favourite: boolean;
  discount?: number;
};

const RecentCarData: recentcardata[] = [
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
function page() {
  return (
    <section className="bg-[#f6f7f9] flex ">
      <aside className="lg:w-[20%] xl:w-[20%] hidden lg:block border-r px-5 py-6 bg-white space-y-10">
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
        <div className="flex flex-col xl:flex-row gap-10">
          {/* LEFT */}
          <div className=" flex flex-col gap-5 rounded-md w-full">
            <div className="bg-[#3563E9] h-[232px] sm:h-[360px] relative flex flex-col items-center justify-end py-10 ">
              <Image
                src={"/images/Nissan GT - R.png"}
                alt="Image"
                width={300}
                height={150}
                className="sm:w-[300px] w-[190px]"
              />
              <div className="text-white flex flex-col gap-4 p-5 absolute top-0">
                <h1 className="font-semibold text-base sm:text-[32px] leading-6 sm:leading-8">
                  Sports car with the best design and acceleration
                </h1>
                <p className="font-medium text-xs sm:text-base leading-[15px] sm:leading-6 ">
                  Safety and comfort while driving a{" "}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 justify-between">
              <Image
                src={"/images/view-1.png"}
                alt="Image"
                width={150}
                height={150}
                className="sm:w-[150px] w-[80px]"
              />
              <Image
                src={"/images/view-2.png"}
                alt="Image"
                width={150}
                height={150}
                className="sm:w-[150px] w-[80px]"
              />
              <Image
                src={"/images/view-3.png"}
                alt="Image"
                width={150}
                height={150}
                className="sm:w-[150px] w-[80px]"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="p-5 bg-white shadow rounded-md space-y-10 ">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h1 className="font-bold text-3xl">Nissan GT - R</h1>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.44 3.09998C14.63 3.09998 13.01 3.97998 12 5.32998C10.99 3.97998 9.37 3.09998 7.56 3.09998C4.49 3.09998 2 5.59998 2 8.68998C2 9.87998 2.19 10.98 2.52 12C4.1 17 8.97 19.99 11.38 20.81C11.72 20.93 12.28 20.93 12.62 20.81C15.03 19.99 19.9 17 21.48 12C21.81 10.98 22 9.87998 22 8.68998C22 5.59998 19.51 3.09998 16.44 3.09998Z"
                    fill="#ED3F3F"
                  />
                </svg>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src={"/images/Review Star.png"}
                  alt="Star Image"
                  width={100}
                  height={100}
                />
                <h1 className="font-medium text-sm text-[#596780]">
                  440+ Reviewer
                </h1>
              </div>
            </div>
            <div>
              <p className="font-normal text-[#596780] leading-10">
                NISMO has become the embodiment of Nissan&apos;s outstanding
                performance, inspired by the most unforgiving proving ground,
                the &quot;race track&quot;.
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between gap-4 sm:gap-10">
                  <h1 className="text-xs sm:text-xl text-[#90A3BF] ">
                    Type Car
                  </h1>
                  <h1 className="text-xs sm:text-xl text-[#596780] font-semibold">
                    Sport
                  </h1>
                </div>
                <div className="flex items-center justify-between gap-4 sm:gap-10">
                  <h1 className="text-xs sm:text-xl text-[#90A3BF] ">
                    Steering
                  </h1>
                  <h1 className="text-xs sm:text-xl text-[#596780] font-semibold">
                    Manual
                  </h1>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between gap-4 sm:gap-10">
                  <h1 className="text-xs sm:text-xl text-[#90A3BF] ">
                    Capacity
                  </h1>
                  <h1 className="text-xs sm:text-xl text-[#596780] font-semibold">
                    2 Person
                  </h1>
                </div>
                <div className="flex items-center justify-between gap-4 sm:gap-10    ">
                  <h1 className="text-xs sm:text-xl text-[#90A3BF] ">
                    Gasoline
                  </h1>
                  <h1 className="text-xs sm:text-xl text-[#596780] font-semibold">
                    70L
                  </h1>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <h1 className="text-xl font-bold">
                  $80.00 /
                  <span className="text-[#90A3BF] font-bold text-sm ">day</span>{" "}
                </h1>
                <h1 className="text-[#90A3BF] font-bold text-sm ">
                  <s>$100.00</s>
                </h1>
              </div>
              <Button
                variant={"outline"}
                className="bg-[#3563E9] px-5 text-white"
              >
                Rent Now
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-md p-5">
          <div className="flex items-center gap-5">
            <h1 className="font-semibold text-xl text-[#1A202C]">Reviews</h1>
            <div className="bg-[#3563E9] px-2 py-1 rounded-md flex items-center justify-center text-white">
              13
            </div>
          </div>
          {/* FIRST CLIENT */}
          <div className="flex items-cente justify-center gap-2 sm:gap-5 space-y-5">
            <div className="py-5">
              <Image
                src="/images/Profil.png"
                alt="profile image"
                width={100}
                height={100}
                className=" w-[50px]"
              />
            </div>
            <div className="flex flex-col items-center justify-between gap-5 w-full">
              <div className="flex items-center justify-between w-full">
                <div>
                  <h1 className="font-bold text-base sm:text-xl">
                    Alex Stanton
                  </h1>
                  <h1 className="text-xs sm:text-sm font-medium text-[#90A3BF]">
                    CEO at Bukalapak
                  </h1>
                </div>
                <div>
                  <h1 className="text-xs sm:text-sm font-medium text-[#90A3BF]">
                    21 July 2022
                  </h1>
                  <Image
                    src="/images/Review Star.png"
                    alt="profile image"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              <div>
                <p className="text-sm text-[#596780] font-normal ">
                  We are very happy with the service from the MORENT App. Morent
                  has a low price and also a large variety of cars with good and
                  comfortable facilities. In addition, the service provided by
                  the officers is also very friendly and very polite.
                </p>
              </div>
            </div>
          </div>

          {/* SECOND CLIENT */}
          <div className="flex items-cente justify-center gap-2 sm:gap-5 space-y-5">
            <div className="py-5">
              <Image
                src="/images/ProfilL (1).png"
                alt="profile image"
                width={100}
                height={100}
                className=" w-[50px]"
              />
            </div>
            <div className="flex flex-col items-center justify-between gap-5 w-full">
              <div className="flex items-center justify-between w-full">
                <div>
                  <h1 className="font-bold text-base sm:text-xl">
                    Alex Stanton
                  </h1>
                  <h1 className="text-xs sm:text-sm font-medium text-[#90A3BF]">
                    CEO at Bukalapak
                  </h1>
                </div>
                <div>
                  <h1 className="text-xs sm:text-sm font-medium text-[#90A3BF]">
                    21 July 2022
                  </h1>
                  <Image
                    src="/images/Review Star.png"
                    alt="profile image"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              <div>
                <p className="text-sm text-[#596780] font-normal ">
                  We are very happy with the service from the MORENT App. Morent
                  has a low price and also a large variety of cars with good and
                  comfortable facilities. In addition, the service provided by
                  the officers is also very friendly and very polite.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-[#90A3BF] flex items-center justify-center gap-4">
          <button>Show All</button>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.00026 11.1996C7.53359 11.1996 7.06692 11.0196 6.71359 10.6663L2.36692 6.31964C2.17359 6.1263 2.17359 5.80631 2.36692 5.61297C2.56026 5.41964 2.88026 5.41964 3.07359 5.61297L7.42026 9.95964C7.74026 10.2796 8.26026 10.2796 8.58026 9.95964L12.9269 5.61297C13.1203 5.41964 13.4403 5.41964 13.6336 5.61297C13.8269 5.80631 13.8269 6.1263 13.6336 6.31964L9.28692 10.6663C8.93359 11.0196 8.46692 11.1996 8.00026 11.1996Z"
              fill="#90A3BF"
              stroke="#90A3BF"
              strokeWidth="0.5"
            />
          </svg>
        </div>

        <div className=" bg-[#f6f7f9] space-y-8">
          <div className="flex items-center justify-between">
            <h1 className="text-[#90A3BF] text-base font-semibold ">Recent</h1>
            <h1 className="text-[#3563E9] text-base font-semibold">View All</h1>
          </div>
          <div className="flex items-center justify-center">
            <Carousel className="w-full max-w-full">
              <CarouselContent>
                {RecentCarData.map((val: recentcardata, index: number) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3 xl:basis-1/3 border-none"
                  >
                    <Card className="border-none h-96">
                      <CardContent className="flex border-none aspect-squar items-center justify-center p-">
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
        </div>

        <div className=" bg-[#f6f7f9] py-8 space-y-8">
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h1 className="text-[#90A3BF] text-base font-semibold ">
                Recomendation Car
              </h1>
              <h1 className="text-[#3563E9] text-base font-semibold ">
                View All
              </h1>
            </div>
            <Carousel className="w-full max-w-full">
              <CarouselContent>
                {RecomendCarData.map((val: recomendcardata, index: number) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3 xl:basis-1/3 border-none"
                  >
                    <Card className="border-none h-96">
                      <CardContent className="flex border-none aspect-squar items-center justify-center p-">
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
        </div>
      </main>
    </section>
  );
}

export default page;
