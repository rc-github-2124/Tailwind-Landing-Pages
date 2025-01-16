import React from "react";
import iphoneImage from '../../assets/Col.png'

const Hero = ()=>{
    return(
        <>
        <div className="mt-[100px]">
          <div className="grid grid-cols-1  sm:grid-cols-2 ">
            <div className="relative left-1 sm:left-10 w-[100%] gap-[24px] flex flex-col">
                <h1 className="text-[38px] md:text-[80px] lg:text-[96px]" style={{
                       
                      fontStyle: "normal",
                      fontWeight: 800,
                      lineHeight: "110%",
                      color: "#FFFFFF",
                }}>App Builder</h1>
                <h3 className="text-[18px] md:text-[20px] lg:text-[40px]" style={{
                      fontStyle: "normal",
                      fontWeight: 700,
                      lineHeight: "110%",
                      color: "#FFFFFF",
                }}>For iOS & Android</h3>
                <p className="text-[12px] md:text-[18px] lg:text-[18px] w-[100%]" style={{
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "160%",
                      color: "#FFFFFF",
                }}>Our powerful app builder will help you build your desired app in minutes without coding knowledge and once your app is ready, you can publish it on Google Play and App Store.</p>
            </div>
            <div>
                <div className="relative w-[100%] top-[320px]">
                </div>
                <img className="relative z-[10] w-[100%]" src={iphoneImage}></img>
            </div>
          </div>
        </div>
        
        </>
    )
}

export default Hero;