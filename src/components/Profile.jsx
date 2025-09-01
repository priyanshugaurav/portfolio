import React from 'react';

const Profile = () => {
  return (
    <div>
      {/* Top Border Container */}
      <div style={{ borderColor: 'var(--border-color)' }} className="border-b">
        <div
          style={{ borderColor: 'var(--border-color)' }}
          className="
            border border-t-0 border-b-0 flex
            mx-[5%] sm:mx-[10%] md:mx-[15%] lg:mx-[19.5%]
            min-h-[15vh] sm:min-h-[24vh] 
          "
        >
          {/* Profile Image Container */}
          <div
            style={{ borderColor: 'var(--border-color)' }}
            className="
              border-r relative flex items-center justify-center p-2
              w-[36%] sm:w-auto sm:min-w-46 sm:max-w-46 sm:min-h-46 sm:max-h-46
            "
          >
            <img
              src="https://pbs.twimg.com/profile_images/1925208423529943040/tILDmOtW_400x400.jpg"
              alt="profile"
              style={{ borderColor: 'var(--border-color)' }}
              className="rounded-full border-2 p-1 w-full aspect-square object-cover sm:h-46 sm:min-w-46"
            />
          </div>

          {/* Info Section */}
          <div className="w-[64%] sm:w-auto sm:flex-1 flex flex-col justify-end align-bottom">
            {/* Pattern Section */}
            <div
              style={{
                borderColor: 'var(--border-color)',
                backgroundColor: 'var(--cover-bg)',
                backgroundImage:
                  'repeating-linear-gradient(-45deg, var(--cover-dot) 0px, var(--cover-dot) 1px, transparent 1px, transparent 8px)',
                transition: 'background-color 0.4s ease, background-image 0.4s ease',
              }}
              className="border-b-2 min-h-[6rem] max-h-[6rem] w-full flex items-end p-1 pl-4 text-zinc-400 text-xs sm:text-sm"
            >
              console.log("Hello, World !")
            </div>

            {/* Name */}
            <div
              style={{ borderColor: 'var(--border-color)' }}
              className="border-b-2 min-h-8 pl-4 text-xl sm:text-2xl font-bold flex items-center"
            >
              Priyanshu
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="size-[0.7em] translate-y-px text-blue-600 ml-3"
              >
                <path
                  fill="currentColor"
                  d="M24 12a4.454 4.454 0 0 0-2.564-3.91 4.437 4.437 0 0 0-.948-4.578 4.436 4.436 0 0 0-4.577-.948A4.44 4.44 0 0 0 12 0a4.423 4.423 0 0 0-3.9 2.564 4.434 4.434 0 0 0-2.43-.178 4.425 4.425 0 0 0-2.158 1.126 4.42 4.42 0 0 0-1.12 2.156 4.42 4.42 0 0 0 .183 2.421A4.456 4.456 0 0 0 0 12a4.465 4.465 0 0 0 2.576 3.91 4.433 4.433 0 0 0 .936 4.577 4.459 4.459 0 0 0 4.577.95A4.454 4.454 0 0 0 12 24a4.439 4.439 0 0 0 3.91-2.563 4.26 4.26 0 0 0 5.526-5.526A4.453 4.453 0 0 0 24 12Zm-13.709 4.917-4.38-4.378 1.652-1.663 2.646 2.646L15.83 7.4l1.72 1.591-7.258 7.926Z"
                />
              </svg>
            </div>

            {/* Roles */}
            <div className="ml-5 pt-1 text-zinc-400 italic text-xs sm:text-sm font-light ">
              <span className="relative inline-block h-4 sm:h-6 overflow-hidden">
                <span className="animate-slideText block">
                  <span>Full-Stack Developer</span>
                  <br />
                  <span>Low-level Programming Lover</span>
                  <br />
                  <span>Exploring AI & ML</span>
                  <br />
                  <span>Always Learning and Building</span>

                  <br />
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Pattern Bar */}
      <div
        style={{
          borderColor: 'var(--border-color)',
          backgroundColor: 'var(--cover-bg)',
          backgroundImage:
            'repeating-linear-gradient(-45deg, var(--cover-dot) 0px, var(--cover-dot) 1px, transparent 1px, transparent 8px)',
          transition: 'background-color 0.4s ease, background-image 0.4s ease',
        }}
        className="min-w-screen min-h-10 border-b-2"
      ></div>
    </div>
  );
};

export default Profile;
