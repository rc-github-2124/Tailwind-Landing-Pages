import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import mainbg from "./assets/main-bg.png";
import mainbg2 from "./assets/main-bg-2.png";
import mainbg3 from "./assets/main-bg-3.png";
import macbook from "./assets/Macbook.png";
import col from "./assets/Col.png";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <>
      <div className="container">
        <img
          className="absolute -z-10 h-[100%] md:h-[140vh] w-full"
          src={mainbg}
        ></img>
        <Header />
        <Hero />
        <img
          className="absolute -z-10 h-[100%] md:h-[140vh] w-full mt-[-340px]"
          src={mainbg2}
        ></img>

        <div className="grid grid-cols-1 justify-center">
          <img
            className="absolute -z-10 w-[100%] scale-[1] lg:scale-[0.7] "
            src={macbook}
          ></img>
        </div>
      </div>

      <div className="container">
        <img
          className="absolute -z-10 h-[100%] md:h-[140vh] w-full mt-[580px]"
          src={mainbg3}
        ></img>
        <div className="grid grid-cols-1">
          <div className="flex mt-[710px] lg:flex-row flex-col justify-center sm:justify-between w-[100%]">
            <img className=" h-[430px] w-[400px]    lg:h-[600px] lg:w-[622px]" src={col}></img>
            <div className="relative flex flex-col  justify-around lg:left-[200px]">
              <h3
                style={{
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "40px",
                  lineHeight: "110%",
                  width: "80%",
                  color: "#FFFFFF",
                }}
              >
                Build it on desktop, launch it on mobile
              </h3>
              <p
                style={{
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "160%",
                  color: "#FFFFFF",
                  flex: "none",
                  width: "80%",
                }}
              >
                Our powerful app builder will help you build your desired app in
                minutes without coding knowledge and once your app is ready, you
                can publish it on Google Play and App Store.
              </p>
              <div className="relative flex flex-row justify-center gap-[40px] items-center sm:right-[60px]">
                <button className="scale-[0.7] sm:scale-1"
                  style={{
                    width: "177px",
                    height: "56px",
                    background: "#FFFFFF",
                    border: "2px solid #FFFFFF",
                    borderRadius: "50px",
                  }}
                >
                  <span
                    style={{
                      fontStyle: "normal",
                      fontWeight: 500,
                      fontSize: "20px",
                      lineHeight: "24px",
                      letterSpacing: "0.5px",
                      color: "#0F172A",
                    }}
                  >
                    Publish App
                  </span>
                </button>
                <button className="scale-[0.7] sm:scale-1"
                  style={{
                    width: "177px",
                    height: "56px",
                    background: "#FFFFFF",
                    border: "2px solid #FFFFFF",
                    borderRadius: "50px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "20px",
                    lineHeight: "24px",
                    letterSpacing: "0.5px",
                    color: "#0F172A",
                  }}
                >
                  View Demo
                </button>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <About/>
      <Footer/>
    </>
  );
};

export default App;
