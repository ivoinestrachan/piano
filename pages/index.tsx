import type { NextPage } from "next";
import Head from "next/head";

import useKeyboard from "../hooks/useKeyboard";
const Home: NextPage = () => {
  useKeyboard();

  
  return (
    <>
      <Head>
        <title>Piano</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-center mt-[10vh]">
        <div className="key w-10 h-32 bg-black border border-gray-700">
          <div className="text-white text-2xl font-bold text-center">C</div>
        </div>
        <div className="key w-10 h-32 bg-gray-800 border border-gray-700">
          <div className="text-white text-2xl font-bold text-center">D</div>
        </div>
        <div className="key w-10 h-32 bg-black border border-gray-700">
          <div className="text-white text-2xl font-bold text-center">E</div>
        </div>
        <div className="key w-10 h-32 bg-gray-800 border border-gray-700">
          <div className="text-white text-2xl font-bold text-center">F</div>
        </div>
        <div className="key w-10 h-32 bg-black border border-gray-700">
          <div className="text-white text-2xl font-bold text-center">G</div>
        </div>
        <div className="w-10 h-32 bg-gray-800 border border-gray-700">
          <div className="text-white text-2xl font-bold text-center">A</div>
        </div>
        <div className="w-10 h-32 bg-black border border-gray-700">
          <div className="text-white text-2xl font-bold text-center">B</div>
        </div>
        <div className="w-10 h-32 bg-gray-800 border border-gray-700">
          <div className="text-white text-2xl font-bold text-center">C</div>
        </div>
      </div>
    </>
  );
};

export default Home;
