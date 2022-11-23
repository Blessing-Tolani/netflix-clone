import React from 'react';

export default function Footer() {
  return (
    <footer
      className=" pt-16 pb-8  w-full"
      style={{ background: 'black', color: '#737373' }}
    >
      <div className="w-[60%] mx-auto">
        <p>Questions? Contact us.</p>
        <div className="my-8 flex flex-row text-[.8125rem] justify-between items-center">
          <div className="flex flex-col space-y-4">
            <a href="#">FAQ</a>
            <a href="#">Investor Relations</a>
            <a href="#">Privacy</a>
            <a href="#">Speed Test</a>
          </div>
          <div className="flex flex-col space-y-4">
            <a href="#">Help Center</a>
            <a href="#">Jobs</a>
            <a href="#">Cookie Preferences</a>
            <a href="#">Legal Notices</a>
          </div>
          <div className="flex flex-col space-y-4">
            <a href="#">Account</a>
            <a href="#">Ways to Watch</a>
            <a href="#">Corporate Information</a>
            <a href="#">Only on Netflix</a>
          </div>
          <div className="flex flex-col space-y-4">
            <a href="#">Media Center</a>
            <a href="#">Terms of Use</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
        <p className="text-[.8125rem]">Netflix Nigeria</p>
      </div>
    </footer>
  );
}
