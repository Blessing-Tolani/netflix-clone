import React from 'react';
import ForwardArrow from './assets/ForwardArrow';
import NetlifyIcon from './assets/NetlifyIcon';

export default function Herosection() {
  return (
    <section className="w-full h-[80vh] md:h-[65vh] lg:h-[100vh] xl:h-[83vh] herosection">
      <div className="flex w-full px-8 lg:px-[52px] justify-between pt-8">
        <NetlifyIcon />
        <button
          className="py-1 px-4 rounded-sm bg-primary"
          style={{ color: 'white' }}
        >
          Sign in
        </button>
      </div>
      <div
        style={{ color: 'white' }}
        className="mt-36 w-full flex justify-center items-center flex-col"
      >
        <h1 className=" text-[3.125rem] leading-[1.1] text-center font-semibold">
          Unlimited movies, TV <br />
          shows, and more.
        </h1>
        <h2 className="text-[1.625rem] mt-2">
          Watch anywhere. Cancel anytime.
        </h2>
        <h3 className="my-3 lg:my-5 text-[1.2rem] w-[60%]  text-center lg:w-full">
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <div className="lg:flex font-normal" style={{ color: 'black' }}>
          <input
            type="email"
            placeholder="Email address"
            className="w-[450px] py-4 lg:py-0 px-3 outline-none"
          />
          <button
            className="flex mx-auto mt-3 lg:mt-0 bg-primary px-3 lg:px-8 py-2 lg:py-3 items-center text-[1.625rem]"
            style={{ color: 'white' }}
          >
            <span className="mr-3 text-sm lg:text-base"> Get Started</span>
            <ForwardArrow />
          </button>
        </div>
      </div>
    </section>
  );
}
