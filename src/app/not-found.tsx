import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <Image
        src="https://tse3.mm.bing.net/th?id=OIP.vSZ_Sv8LsYBGtviM964drgHaE2&pid=Api&P=0&h=220" // Replace with your image path
        alt="Not Found"
        width={300}
        height={300}
        className="mb-8 w-[400px]"
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h1>
      <p className="sm:text-lg text-gray-600 mb-6 text-center px-5 sm:px-0">
        Sorry, the page you are looking for does not exist or the car is not
        available.
      </p>
      <Link href="/">
        <Button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          Back to Home
        </Button>
      </Link>
    </div>
  );
}
