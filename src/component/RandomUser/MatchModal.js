import React from "react";

const Matchmodal = () => {
  return (
    <div className="w-100% matchmodal mt-24">
      <div className="mx-auto matchmodal__card w-96 h-80 drop-shadow-lg">
        <div className="flex matchmodal__card--header">
          <div className="matchmodal__card--borderprofile ">
            <img
              className="matchmodal__card--profile"
              src="https://cdn.discordapp.com/attachments/662893950687772684/965268755892551740/06ce798640c2328122204ab73a753295.jpg"
            />
          </div>
          <div>
            <svg
              width="58"
              height="68"
              viewBox="0 0 58 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_12_10)">
                <path
                  d="M36.5266 11.2601L36.4799 11.2611C35.0619 11.2892 33.6345 11.6475 32.2219 12.3219C31.585 12.6294 30.9975 13.0341 30.2903 13.5896C30.1041 13.7359 29.8804 13.9173 29.6332 14.1178C29.0764 14.5695 28.4004 15.1179 27.7643 15.5792L27.7633 15.58C26.7954 16.2815 25.6669 16.5983 24.5962 16.5983C23.5252 16.5983 22.3958 16.2835 21.4252 15.58L21.4212 15.5771C20.7933 15.1206 20.1208 14.5752 19.566 14.1252C19.3151 13.9216 19.0882 13.7376 18.9004 13.5902C18.1933 13.0351 17.6044 12.6298 16.9666 12.3219C15.554 11.6475 14.1266 11.2892 12.7086 11.2611L12.6619 11.2601L12.6152 11.258C12.5233 11.2537 12.4179 11.2531 12.2176 11.2531H12.1413C9.11497 11.2531 6.46495 13.0701 4.62951 17.9635L4.62745 17.969C4.01343 19.5976 3.92376 22.5679 4.2586 24.8539L36.5266 11.2601ZM36.5266 11.2601L36.5733 11.258M36.5266 11.2601L36.5733 11.258M36.5733 11.258C36.665 11.2537 36.7736 11.2531 36.9748 11.2531H37.051C40.0755 11.2531 42.7224 13.0678 44.5587 17.967L44.5618 17.9753C45.1748 19.5984 45.2649 22.5726 44.9297 24.8599C44.6353 26.8592 43.9002 28.7229 42.8159 30.5616L42.8148 30.5636C41.0517 33.5579 38.5482 35.8447 35.5503 38.2233C34.9452 38.7035 34.3077 39.1955 33.6508 39.7025C31.2025 41.5922 28.4853 43.6895 26.17 46.1532C25.8623 46.479 25.5614 46.8126 25.2908 47.1126L25.2538 47.1537C25.0188 47.4142 24.8047 47.6511 24.5956 47.875C24.3871 47.6531 24.1723 47.4161 23.9371 47.1554C23.9083 47.1234 23.879 47.0909 23.8494 47.0581C23.5938 46.7745 23.3114 46.4612 23.0269 46.1581L23.026 46.1571C20.7103 43.6922 17.9913 41.5939 15.5415 39.7033C14.8839 39.1958 14.2457 38.7033 13.6399 38.2227C10.6413 35.8437 8.13722 33.556 6.37422 30.56L6.37257 30.5572M36.5733 11.258L6.37257 30.5572M6.37257 30.5572C5.2883 28.7186 4.55319 26.8549 4.25885 24.8556L6.37257 30.5572Z"
                  stroke="#7B97F9"
                  stroke-width="7"
                />
              </g>
              <g clip-path="url(#clip1_12_10)">
                <path
                  d="M45.9022 56.3324C46.5818 56.3324 47.3088 56.2393 48.0407 56.0226C47.9152 56.1081 47.778 56.2005 47.6311 56.2995C47.1391 56.6311 46.5385 57.0359 45.902 57.4943C45.2654 57.0358 44.6646 56.6309 44.1725 56.2994C44.026 56.2006 43.8892 56.1084 43.7639 56.0232C44.4971 56.2399 45.2242 56.3324 45.9022 56.3324Z"
                  stroke="#FEA5B7"
                  stroke-width="13"
                />
              </g>
              <defs>
                <clipPath id="clip0_12_10">
                  <rect
                    width="48.7977"
                    height="55.6706"
                    fill="white"
                    transform="translate(0.197266 0.859497)"
                  />
                </clipPath>
                <clipPath id="clip1_12_10">
                  <rect
                    width="22.6806"
                    height="22.6806"
                    fill="white"
                    transform="translate(34.5615 44.8462)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="ml-3 matchmodal__card--borderprofile border-yellow">
            <img
              className="matchmodal__card--profile"
              src="https://cdn.discordapp.com/attachments/662893950687772684/965268703899971614/6c8ba3681240d2acdd120b021f1ef162.jpg"
            />
          </div>
        </div>
        <div className="matchmodal__card--title">
          <p className="text-center">new</p>
          <p className="text-center matchmodal__title--puple">Matching</p>
        </div>
        <div className="grid  matchmodal__card--action">
          <button className="matchmodal__button--primary mx-auto">
            Go chat
          </button>
          <button className="matchmodal__button--secondary mx-auto">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Matchmodal;
