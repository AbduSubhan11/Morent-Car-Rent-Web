import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

function HeroSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-10 py-10 bg-[#F6F7F9] space-y-10">
      {/* Images Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* CARD 1 */}
        <div className="bg-[#3563E9] h-[300px] sm:h-[340px] w-full lg:w-[50%] relative flex flex-col items-center justify-end py-10 rounded-xl ">
          <Image
            src={"/images/Koenigsegg.png"}
            alt="Image"
            width={300}
            height={150}
            className="sm:w-[300px] w-[190px] "
          />
          <div className="text-white flex flex-col w-[70%] sm:w-[50%] gap-4 p-5 absolute top-0 left-0">
            <h1 className="font-semibold text-lg sm:text-[32px] leading-6 sm:leading-8">
              The Best Platform for Car Rental
            </h1>
            <p className="font-medium text-xs sm:text-base leading-[15px] sm:leading-6 ">
              Ease of doing a car rental safely and reliably. Of course at a low
              price.
            </p>
            <Link href={"/cars"}>
              <Button
                variant={"outline"}
                className="bg-[#3b5dc4] px-2 sm:px-5 text-white w-fit"
              >
                Rental Car
              </Button>
            </Link>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="bg-[#3563E9] h-[340px] w-full lg:w-[50%] relative sm:flex flex-col items-center justify-end py-10 rounded-xl hidden">
          <Image
            src={"/images/Nissan GT - R.png"}
            alt="Image"
            width={300}
            height={150}
            className="sm:w-[300px] w-[190px] "
          />
          <div className="text-white flex flex-col sm:w-[50%] gap-4 p-5 absolute top-0 left-0">
            <h1 className="font-semibold text-base sm:text-[32px] leading-6 sm:leading-8">
              Easy way to rent a car at a low price
            </h1>
            <p className="font-medium text-xs sm:text-base leading-[15px] sm:leading-6 ">
              Providing cheap car rental services and safe and comfortable
              facilities.
            </p>
            <Link href={"/cars"}>
              <Button
                variant={"outline"}
                className="bg-[#3b5dc4] px-2 sm:px-5 text-white w-fit"
              >
                Rental Car
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Pick-Up and Drop-Off Section */}
      <div className="flex flex-col xl:flex-row gap-6 items-center relative">
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
    </section>
  );
}

export default HeroSection;
