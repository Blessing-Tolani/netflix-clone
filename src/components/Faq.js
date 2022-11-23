import { useState } from 'react';
import CancelIcon from './assets/Cancel';
import ForwardArrow from './assets/ForwardArrow';
import PlusIcon from './assets/PlusIcon';

const faqData = [
  {
    title: 'What is Netflix?',
    firstContent:
      'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
    secondContent:
      "You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
  },
  {
    title: 'How much does Netflix cost?',
    firstContent:
      'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦1,200 to ₦4,400 a month. No extra costs, no contracts.',
  },
  {
    title: 'Where can I watch?',
    firstContent:
      'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.',
    secondContent:
      "You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
  },
  {
    title: 'How do I cancel?',
    firstContent:
      'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.',
  },
  {
    title: 'What can I watch on Netflix?',
    firstContent:
      'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
  },
  {
    title: 'Is Netflix good for kids?',
    firstContent:
      'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.',
    secondContent:
      'Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.',
  },
];

export default function Faq() {
  const [isActive, setIsActive] = useState(-1);
  return (
    <section
      className="px-36 py-16  w-full border-y-8 border-[#222] flex items-center flex-col"
      style={{ background: 'black', color: 'white' }}
    >
      <h1 className="text-[3.125rem] leading-[1.1] font-semibold">
        Frequently Asked Questions
      </h1>
      <div className="my-12 w-[75%]">
        {faqData.map((faq, index) => (
          <div
            style={{ background: '#303030', color: 'white' }}
            className="mb-2 w-full"
            key={index}
          >
            <button
              className="flex w-full items-center justify-between px-7 py-4 border-b"
              style={{ borderColor: 'black' }}
              onClick={() => setIsActive(isActive === index ? -1 : index)}
            >
              <p className="text-[1.625rem] font-medium">{faq.title}</p>
              {isActive === index ? <CancelIcon /> : <PlusIcon />}
            </button>
            <div className={`mt-1 p-7 ${isActive === index ? '' : 'hidden'}`}>
              <p className="text-[1.625rem] font-medium">{faq.firstContent}</p>
              {faq.secondContent && (
                <p className="mt-6 text-[1.625rem] font-medium">
                  {faq.secondContent}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <h3 className="my-5 text-[1.2rem]">
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
    </section>
  );
}
