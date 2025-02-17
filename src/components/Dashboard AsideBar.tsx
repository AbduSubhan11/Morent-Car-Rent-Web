import Link from "next/link";
import React from "react";

function DashboardAsideBar() {
  return (
    <aside className="lg:w-[20%] xl:w-[20%] hidden lg:block border-r px-5 py-6 bg-white space-y-16">
      {/* MAIN MENU */}
      <div className="flex flex-col space-y-5">
        <h1 className="text-xs text-gray-300 font-semibold">MAIN MENU</h1>
        <div className="flex flex-col space-y-5">
          <div className="flex items-center gap-2 bg-[#3563E9] rounded-[10px] px-2 py-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0427 3.15016L10.0431 3.14985C11.1273 2.27904 12.8675 2.28414 13.968 3.16073C13.9681 3.16084 13.9682 3.16094 13.9684 3.16105L20.514 8.39756C20.5146 8.39802 20.5152 8.39849 20.5157 8.39895C20.893 8.70711 21.2196 9.18942 21.4304 9.74099C21.641 10.2922 21.7196 10.8699 21.6462 11.351L20.3873 18.8845C20.3872 18.885 20.3872 18.8855 20.3871 18.8859C20.1374 20.3188 18.7432 21.5 17.3 21.5H6.69996C5.23549 21.5 3.8725 20.3476 3.62294 18.8965C3.62288 18.8961 3.62282 18.8958 3.62276 18.8955L2.36313 11.3576L2.36293 11.3565C2.28079 10.8718 2.35452 10.293 2.56465 9.74192C2.77476 9.19094 3.10548 8.70909 3.4918 8.40086L3.49267 8.40016L10.0427 3.15016ZM12 19.25C12.6861 19.25 13.25 18.6862 13.25 18V15C13.25 14.3139 12.6861 13.75 12 13.75C11.3138 13.75 10.75 14.3139 10.75 15V18C10.75 18.6862 11.3138 19.25 12 19.25Z"
                fill="white"
                stroke="white"
              />
            </svg>
            <h1 className="text-white">Dashboard</h1>
          </div>
          <div className="flex items-center gap-2 pl-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.51 2.82996H8.49C6 2.82996 5.45 4.06996 5.13 5.58996L4 11H20L18.87 5.58996C18.55 4.06996 18 2.82996 15.51 2.82996Z"
                stroke="#90A3BF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.9902 19.82C22.1002 20.99 21.1602 22 19.9602 22H18.0802C17.0002 22 16.8502 21.54 16.6602 20.97L16.4602 20.37C16.1802 19.55 16.0002 19 14.5602 19H9.44022C8.00022 19 7.79022 19.62 7.54022 20.37L7.34022 20.97C7.15022 21.54 7.00022 22 5.92022 22H4.04022C2.84022 22 1.90022 20.99 2.01022 19.82L2.57022 13.73C2.71022 12.23 3.00022 11 5.62022 11H18.3802C21.0002 11 21.2902 12.23 21.4302 13.73L21.9902 19.82Z"
                stroke="#90A3BF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 8H3"
                stroke="#90A3BF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 8H20"
                stroke="#90A3BF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 3V5"
                stroke="#90A3BF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.5 5H13.5"
                stroke="#90A3BF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 15H9"
                stroke="#90A3BF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 15H18"
                stroke="#90A3BF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h1 className="text-[#90A3BF] text-base font-medium">Car Rent</h1>
          </div>
          <div className="flex items-center gap-2 pl-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 22H21"
                stroke="#90A3BF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.59998 8.38H4C3.45 8.38 3 8.83 3 9.38V18C3 18.55 3.45 19 4 19H5.59998C6.14998 19 6.59998 18.55 6.59998 18V9.38C6.59998 8.83 6.14998 8.38 5.59998 8.38Z"
                stroke="#90A3BF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.8002 5.19H11.2002C10.6502 5.19 10.2002 5.64 10.2002 6.19V18C10.2002 18.55 10.6502 19 11.2002 19H12.8002C13.3502 19 13.8002 18.55 13.8002 18V6.19C13.8002 5.64 13.3502 5.19 12.8002 5.19Z"
                stroke="#90A3BF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.9999 2H18.3999C17.8499 2 17.3999 2.45 17.3999 3V18C17.3999 18.55 17.8499 19 18.3999 19H19.9999C20.5499 19 20.9999 18.55 20.9999 18V3C20.9999 2.45 20.5499 2 19.9999 2Z"
                stroke="#90A3BF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h1 className="text-[#90A3BF] text-base font-medium">Insight</h1>
          </div>
          <div className="flex items-center gap-2 pl-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 13.24V11.51C2.5 9.44001 4.18999 7.75 6.25999 7.75H17.74C19.81 7.75 21.5 9.44001 21.5 11.51V12.95H19.48C18.92 12.95 18.41 13.17 18.04 13.55C17.62 13.96 17.38 14.55 17.44 15.18C17.53 16.26 18.52 17.05 19.6 17.05H21.5V18.24C21.5 20.31 19.81 22 17.74 22H12.26"
                stroke="#90A3BF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.5 12.41V7.84004C2.5 6.65004 3.23 5.59 4.34 5.17L12.28 2.17C13.52 1.7 14.85 2.62003 14.85 3.95003V7.75002"
                stroke="#90A3BF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22.5588 13.9702V16.0302C22.5588 16.5802 22.1188 17.0302 21.5588 17.0502H19.5988C18.5188 17.0502 17.5288 16.2602 17.4388 15.1802C17.3788 14.5502 17.6188 13.9602 18.0388 13.5502C18.4088 13.1702 18.9188 12.9502 19.4788 12.9502H21.5588C22.1188 12.9702 22.5588 13.4202 22.5588 13.9702Z"
                stroke="#90A3BF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 12H14"
                stroke="#90A3BF"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 16.5H8.34C8.98 16.5 9.5 17.02 9.5 17.66V18.94"
                stroke="#90A3BF"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.22 15.28L3 16.5L4.22 17.72"
                stroke="#90A3BF"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.5 21.78H4.16C3.52 21.78 3 21.26 3 20.62V19.34"
                stroke="#90A3BF"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.28125 23.0003L9.50125 21.7803L8.28125 20.5603"
                stroke="#90A3BF"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h1 className="text-[#90A3BF] text-base font-medium">Reimburse</h1>
          </div>
          <div className="flex items-center gap-2 pl-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z"
                stroke="#90A3BF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.9965 11H16.0054"
                stroke="#90A3BF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.9955 11H12.0045"
                stroke="#90A3BF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.99451 11H8.00349"
                stroke="#90A3BF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h1 className="text-[#90A3BF] text-base font-medium">Inbox</h1>
          </div>
          <div className="flex items-center gap-2 pl-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 2V5"
                stroke="#90A3BF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 2V5"
                stroke="#90A3BF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.5 9.08997H20.5"
                stroke="#90A3BF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                stroke="#90A3BF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.6947 13.7H15.7037"
                stroke="#90A3BF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.6947 16.7H15.7037"
                stroke="#90A3BF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.9955 13.7H12.0045"
                stroke="#90A3BF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.9955 16.7H12.0045"
                stroke="#90A3BF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.29431 13.7H8.30329"
                stroke="#90A3BF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.29431 16.7H8.30329"
                stroke="#90A3BF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h1 className="text-[#90A3BF] text-base font-medium">Comment</h1>
          </div>
        </div>
      </div>
      {/* PREFERNENCES */}
      <div className="flex flex-col space-y-5">
        <h1 className="text-xs text-gray-300 font-semibold">PREFERENCES</h1>
        <div className="flex flex-col space-y-5">
          <div className="flex items-center gap-2 pl-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 9.10998V14.88C3 17 3 17 5 18.35L10.5 21.53C11.33 22.01 12.68 22.01 13.5 21.53L19 18.35C21 17 21 17 21 14.89V9.10998C21 6.99998 21 6.99999 19 5.64999L13.5 2.46999C12.68 1.98999 11.33 1.98999 10.5 2.46999L5 5.64999C3 6.99999 3 6.99998 3 9.10998Z"
                stroke="#90A3BF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                stroke="#90A3BF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h1 className="text-[#90A3BF] text-base font-medium">Settings</h1>
          </div>
          <div className="flex items-center gap-2 pl-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                stroke="#90A3BF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 8V13"
                stroke="#90A3BF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.9946 16H12.0036"
                stroke="#90A3BF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <Link href={"/faq"} className="text-[#90A3BF] text-base font-medium cursor-pointer">
              Help & Center
            </Link>
          </div>
          <div className="flex items-center gap-2 pl-2 w-full">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.99983 22H15.9998C20.0198 22 20.7398 20.39 20.9498 18.43L21.6998 10.43C21.9698 7.99 21.2698 6 16.9998 6H6.99983C2.72983 6 2.02983 7.99 2.29983 10.43L3.04983 18.43C3.25983 20.39 3.97983 22 7.99983 22Z"
                stroke="#90A3BF"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 6V5.2C8 3.43 8 2 11.2 2H12.8C16 2 16 3.43 16 5.2V6"
                stroke="#90A3BF"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 13V14C14 14.01 14 14.01 14 14.02C14 15.11 13.99 16 12 16C10.02 16 10 15.12 10 14.03V13C10 12 10 12 11 12H13C14 12 14 12 14 13Z"
                stroke="#90A3BF"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.65 11C19.34 12.68 16.7 13.68 14 14.02"
                stroke="#90A3BF"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.62012 11.27C4.87012 12.81 7.41012 13.74 10.0001 14.03"
                stroke="#90A3BF"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="text-[#90A3BF] text-base font-medium flex items-center justify-between">
              Dark Mode
              <svg
                width="68"
                height="34"
                viewBox="0 0 68 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="68" height="34" rx="17" fill="#F6F7F9" />
                <path
                  d="M45.265 17.7418C45.4894 20.952 48.2133 23.5637 51.4734 23.7071C53.7735 23.8068 55.8305 22.7347 57.0647 21.0455C57.5758 20.3536 57.3015 19.8923 56.4476 20.0481C56.0299 20.1229 55.5998 20.1541 55.151 20.1354C52.1029 20.0107 49.6096 17.4613 49.5971 14.4506C49.5909 13.6403 49.7592 12.8736 50.0646 12.1754C50.4012 11.4025 49.9961 11.0347 49.2169 11.3651C46.7485 12.4061 45.0593 14.8932 45.265 17.7418Z"
                  stroke="#90A3BF"
                  strokeWidth="1.24667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  x="3"
                  y="3"
                  width="28"
                  height="28"
                  rx="14"
                  fill="#3563E9"
                />
                <path
                  d="M17.0003 21.3336C19.3936 21.3336 21.3337 19.3935 21.3337 17.0003C21.3337 14.607 19.3936 12.6669 17.0003 12.6669C14.6071 12.6669 12.667 14.607 12.667 17.0003C12.667 19.3935 14.6071 21.3336 17.0003 21.3336Z"
                  fill="white"
                />
                <path
                  d="M21.7597 21.7598L21.673 21.6731M21.673 12.3265L21.7597 12.2398L21.673 12.3265ZM12.2397 21.7598L12.3263 21.6731L12.2397 21.7598ZM16.9997 10.3865V10.3331V10.3865ZM16.9997 23.6665V23.6131V23.6665ZM10.3863 16.9998H10.333H10.3863ZM23.6663 16.9998H23.613H23.6663ZM12.3263 12.3265L12.2397 12.2398L12.3263 12.3265Z"
                  stroke="white"
                  strokeWidth="1.87"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 pl-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.8999 7.55999C9.2099 3.95999 11.0599 2.48999 15.1099 2.48999H15.2399C19.7099 2.48999 21.4999 4.27999 21.4999 8.74999V15.27C21.4999 19.74 19.7099 21.53 15.2399 21.53H15.1099C11.0899 21.53 9.2399 20.08 8.9099 16.54"
              stroke="#90A3BF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.0001 12H3.62012"
              stroke="#90A3BF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.85 8.64999L2.5 12L5.85 15.35"
              stroke="#90A3BF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <h1 className="text-[#90A3BF] text-base font-medium">LogOut</h1>
        </div>
      </div>
    </aside>
  );
}

export default DashboardAsideBar;
