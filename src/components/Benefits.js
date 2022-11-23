export default function Benefits() {
  return (
    <>
      {/* section 1 */}
      <section
        className="px-12 xl:px-36 pb-16 w-full border-y-8 border-[#222] lg:flex items-center space-x-10  justify-between"
        style={{ background: 'black', color: 'white' }}
      >
        <div className=" w-[80%] xl:w-[50%]">
          <h1 className="text-[3.125rem] leading-[1.1] font-semibold mb-2">
            Enjoy on your TV.
          </h1>
          <h2 className="text-[1.625rem]  font-normal ">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </h2>
        </div>
        <div className="relative">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt=""
          />
          <video
            muted
            playsInline
            autoPlay
            className="scale-[0.73] xl:scale-[0.88] absolute top-[30px] xl:top-[17%] left-0 xl:left-[8%]"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
          ></video>
        </div>
      </section>

      {/* section 2  */}
      <section
        className="pr-12 xl:pr-36  w-full lg:flex items-center space-x-10  justify-between"
        style={{ background: 'black', color: 'white' }}
      >
        <div className="relative ">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt=""
            className="scale-[0.80]"
          />
          <div
            style={{ background: 'black' }}
            className="absolute  left-36 bottom-[72px] items-center border-2 grid grid-cols-[auto_auto_auto] px-3 py-2 border-[#222] rounded-2xl"
          >
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
              alt="stranger things"
              width="46px"
              height="64px"
            />
            <div className="ml-3 pr-28">
              <h4 style={{ color: 'white' }}>Stranger Things</h4>
              <h6 style={{ color: '#0071eb' }}>Downloading...</h6>
            </div>
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
              alt=""
              width="48px"
              height="60px"
            />
          </div>
        </div>
        <div className="w-[50%]">
          <h1 className="text-[3.125rem] leading-[1.1] font-semibold mb-2">
            Download your shows to watch offline.
          </h1>
          <h2 className="text-[1.625rem]  font-normal ">
            Save your favorites easily and always have something to watch.
          </h2>
        </div>
      </section>

      {/* section 3 */}

      <section
        className="px-36 py-16  border-y-8 border-[#222] w-full"
        style={{ background: 'black', color: 'white' }}
      >
        <h1 className="text-[3.125rem] leading-[1.1] font-semibold mb-2">
          Watch everywhere.
        </h1>
        <h2 className="text-[1.625rem] w-1/2  font-normal ">
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV.
        </h2>
      </section>

      {/* section 4 */}

      <section
        className="pr-36 pl-16  w-full lg:flex items-center  justify-between"
        style={{ background: 'black', color: 'white' }}
      >
        <img
          src="https://occ-0-299-1167.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f"
          alt=""
          className="scale-[.80]"
        />
        <div className="w-[50%]">
          <h1 className="text-[3.125rem] leading-[1.1] font-semibold mb-2">
            Create profiles for kids.
          </h1>
          <h2 className="text-[1.625rem] w-[85%]  font-normal ">
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </h2>
        </div>
      </section>
    </>
  );
}
