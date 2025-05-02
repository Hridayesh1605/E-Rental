"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { useRouter } from 'next/navigation';

const HeroSection = () => {

  const router = useRouter();

  const handleClick = () => {
    router.push('/search');
  };

  return (
    <div className="relative h-screen">
      <Image
        src="/landing-splash.jpg"
        alt="Rentiful Rental Platform Hero Section"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/60"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full"
      >
        <div className="max-w-4xl mx-auto px-16 sm:px-12">
          <div className="flex items-center justify-center w-full">
            <Image
              src="/logo.svg"
              alt="Rentiful Logo"
              width={24}
              height={26}
              className="w-12 h-auto sm:w-50"
            />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            Your dream home is just a search away.
          </h1>
          <p className="text-xl text-white mb-8">
            Find the perfect rental that suits your lifestyle.
          </p>

          <div className="flex justify-center">
            {/* <Input
              type="text"
              value="dhga"
              onChange={() => {}}
              placeholder="Search by city, neighborhood or address"
              className="w-full max-w-lg rounded-none rounded-l-xl border-none bg-white h-12"
            /> */}
            <Button
              onClick={handleClick}
              className="bg-secondary-500 text-black rounded-r-xl rounded-l-xl border-none hover:bg-secondary-600 h-15 w-39"
              style={{ fontWeight: 'bold', fontFamily: 'Poppins, sans-serif' }}
            >
              Search
              <MoveRight />
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
