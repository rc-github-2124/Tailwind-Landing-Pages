import React from "react";
import Menupng from '../../assets/menu.png'
const Header = () => {
  return (
    <>
      <div className=" container h-[100px] max-w-full ">
        <div className="flex flex-row w-[100%] h-[100%] items-center justify-between">
          <div className="flex flex-row gap-[48px] mt-[30.5px] relative left-[40px] items-center  ">
            <h3 className=" scale-[0.8] h-[44px] not-italic font-bold text-[40px] leading-[110%] order-none flex-grow-0 text-white md:scale-[1]">
              flowt
            </h3>
            <ul className=" hidden gap-[48px] md:flex flex-row not-italic font-medium text-[16px] leading-[24px] text-white">
              <li>Home</li>
              <li>Solutions</li>
              <li>Pricing</li>
              <li>Developers</li>
            </ul>
          </div>


          <div className="flex sm:hidden items-center relative right-8 mt-6 ">
            <img className="w-[24px] h-[24px] sm:hidden" src={Menupng}></img>
          </div>

          <div className="hidden mt-[30.5px] sm:flex flex-row gap-[18px] relative right-8 scale-[0.6] md:scale-[1]">
            <button
              style={{
                border: "2px solid #FFFFFF",
                borderRadius: "50px",
                width: "103px",
                height: "48px",
              }}
            >
              <span
                style={{
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "0.5px",
                  color: "#FFFFFF",
                }}
              >
                Log In
              </span>
            </button>
            <button
              style={{
                width: "147px",
                height: "48px",
                background: "#FFFFFF",
                border: "2px solid #FFFFFF",
                borderRadius: "50px",
              }}
            >
              Publish
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
