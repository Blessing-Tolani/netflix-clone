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
            <a href="www">FAQ</a>
            <a href="www">Investor Relations</a>
            <a href="www">Privacy</a>
            <a href="www">Speed Test</a>
          </div>
          <div className="flex flex-col space-y-4">
            <a href="www">Help Center</a>
            <a href="www">Jobs</a>
            <a href="www">Cookie Preferences</a>
            <a href="www">Legal Notices</a>
          </div>
          <div className="flex flex-col space-y-4">
            <a href="www">Account</a>
            <a href="www">Ways to Watch</a>
            <a href="www">Corporate Information</a>
            <a href="www">Only on Netflix</a>
          </div>
          <div className="flex flex-col space-y-4">
            <a href="www">Media Center</a>
            <a href="www">Terms of Use</a>
            <a href="www">Contact Us</a>
          </div>
        </div>
        <p className="text-[.8125rem]">Netflix Nigeria</p>
      </div>
    </footer>
  );
}
