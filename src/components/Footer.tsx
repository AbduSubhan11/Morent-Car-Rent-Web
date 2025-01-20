import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="px-6 sm:px-10 py-14 space-y-10">
      <div className="flex flex-col md:flex-row gap-y-10 py-8 border-b-2 justify-between">
        {/* LEFT */}
        <div className="flex flex-col gap-4 w-[292px]">
          <h1 className="text-[#3563E9] font-bold text-[24px] sm:text-[32px] ">MORENT</h1>
          <p className="text-[#838383] font-medium text-xs sm:text-base leading-6">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>

        {/* RIGHT */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10 sm:gap-14">
          {/* ABOUT */}
          <div className="flex flex-col space-y-5">
            <h1 className="font-semibold text-xl">About</h1>
            <div className="flex flex-col space-y-4">
              <Link href={""} className="text-[#838383] font-medium text-base">
                How it works
              </Link>
              <Link href={"/faq"} className="text-[#838383] font-medium text-base">
                FAQs
              </Link>
              <Link href={"/faq"} className="text-[#838383] font-medium text-base">
                Help & Center
              </Link>
              <Link href={""} className="text-[#838383] font-medium text-base">
                Bussiness Relation
              </Link>
            </div>
          </div>
          {/* COMMMUINTY */}
          <div className="flex flex-col space-y-5">
            <h1 className="font-semibold text-xl">Community</h1>
            <div className="flex flex-col space-y-4">
              <Link href={""} className="text-[#838383] font-medium text-base">
                Events
              </Link>
              <Link href={""} className="text-[#838383] font-medium text-base">
                Blogs
              </Link>
              <Link href={""} className="text-[#838383] font-medium text-base">
                Podcast
              </Link>
              <Link href={""} className="text-[#838383] font-medium text-base">
                Invite a friend
              </Link>
            </div>
          </div>
          {/* SOCIALS */}
          <div className="flex flex-col space-y-5">
            <h1 className="font-semibold text-xl">Socials</h1>
            <div className="flex flex-col space-y-4">
              <Link href={""} className="text-[#838383] font-medium text-base">
                Discord
              </Link>
              <Link href={""} className="text-[#838383] font-medium text-base">
                Instagram
              </Link>
              <Link href={""} className="text-[#838383] font-medium text-base">
                Twitter
              </Link>
              <Link href={""} className="text-[#838383] font-medium text-base">
                Facebook
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row items-center gap-y-5 justify-between font-semibold text-base text-[#1A202C]">
        <div>
          <h1>©2022 MORENT. All rights reserved</h1>
        </div>
        <div className="flex items-center gap-10">
            <h1>Privacy & Policy</h1>
            <h1>Terms & Condition</h1>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
