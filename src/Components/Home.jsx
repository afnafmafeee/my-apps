import React from 'react';
import Lottie from 'lottie-react';
import animationD from "../assets/education.json";
const Home = () => {
    return (
      <div className="lg:flex max-w-screen-lg mx-auto items-center">
        {/* Text area */}
        <div className="max-w-xl space-y-5">
          <h4 className="bg-yellow-400 inline-block px-2 font-semibold rounded-full">
            ON SALE
          </h4>
          <h1 className="font-bold text-4xl">
            A reader lives a thousand lives{" "}
            <span className="text-blue-400">before he dies</span>
          </h1>
          <p>
            Books are a uniquely portable magic. Books serve to show a man that
            those original thoughts of his aren’t very new after all. The man
            who does not read good books is no better than the man who can’t.
          </p>
          <div>
            <button className='bg-blue-400 font-semibold text-white px-4 py-2 rounded-xl mr-5'>Visit Store</button>
            <a href="#">Learn More</a>
          </div>
        </div>
        {/* Img area */}
        <div className="w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96">
          <Lottie animationData={animationD} loop={true}></Lottie>
        </div>
      </div>
    );
};

export default Home;