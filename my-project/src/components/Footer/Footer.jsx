import React from "react";
import footerbg from "../../assets/footerbg.png";
import iphoneimage from "../../assets/Col.png";
import bottom from '../../assets/Bottom.png'
const Footer = () => {
    return (
        <>
            <div className="container max-w-full h-[100vh] ">
                <img className="w-[100%] h-[100vh] absolute -z-10" src={footerbg}></img>
                <div className="flex flex-col lg:flex-row lg:justify-between items-center">
                    <img
                        className="w-[500px] sm:mt-[200px] lg:mt-[80px]"
                        src={iphoneimage}
                    ></img>
                    <div className="flex flex-col relative lg:right-5 gap-[40px] text-center lg:text-left">
                        <h3
                            style={{
                                fontStyle: "normal",
                                fontWeight: 700,
                                fontSize: "40px",
                                lineHeight: "110%",
                                color: "#FFFFFF",
                            }}
                        >
                            Launch Your App Today
                        </h3>
                        <p
                            style={{
                                fontStyle: "normal",
                                fontWeight: 400,
                                fontSize: "18px",
                                lineHeight: "160%",
                                color: "#FFFFFF",
                                width: "400px",
                            }}
                        >
                            Stay on top of your competition with a great performing app. Your
                            time and energy are not wasted.
                        </p>
                        <button
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
                            Publish App
                        </button>
                    </div>
                </div>
            </div>
            <div className="container max-w-full bg-[#0F172A] h-[200vh] lg:h-[100vh]">
                <div className="grid grid-cols-1 lg:grid-cols-6 items-center gap-[80px] text-center  ">
                    <div className="flex flex-col gap-[12px] relative top-[80px] lg:left-4 ">
                        <h1 style={{
                              fontStyle: "normal",
                              fontWeight: 500,
                              fontSize: "16px",
                              lineHeight: "110%",
                              color: "#FFFFFF",
                        }}>Categories</h1>
                        <p style={{
                              fontStyle: "normal",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "140%",
                              color: "#E2E8F0",
                        }}>User Interface</p>
                        <p style={{
                              fontStyle: "normal",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "140%",
                              color: "#E2E8F0",
                        }}>User Experience</p>
                        <p style={{
                              fontStyle: "normal",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "140%",
                              color: "#E2E8F0",
                        }}>Digital Media</p>
                        <p style={{
                              fontStyle: "normal",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "140%",
                              color: "#E2E8F0",
                        }}>Lifestyle</p>
            
                    </div>
                    <div className="flex flex-col gap-[12px] relative top-[80px] ">
                        <h1 style={{
                              fontStyle: "normal",
                              fontWeight: 500,
                              fontSize: "16px",
                              lineHeight: "110%",
                              color: "#FFFFFF",
                        }}>Product</h1>
                        <p style={{
                              fontStyle: "normal",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "140%",
                              color: "#E2E8F0",
                        }}>Pricing</p>
                        <p style={{
                              fontStyle: "normal",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "140%",
                              color: "#E2E8F0",
                        }}>Overview</p>
                        <p style={{
                              fontStyle: "normal",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "140%",
                              color: "#E2E8F0",
                        }}>Browse</p>
                        <p style={{
                              fontStyle: "normal",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "140%",
                              color: "#E2E8F0",
                        }}>Accessibility</p>
            
                    </div>
                    <div className="flex flex-col gap-[12px] relative top-[80px] ">
                        <h1 style={{
                              fontStyle: "normal",
                              fontWeight: 500,
                              fontSize: "16px",
                              lineHeight: "110%",
                              color: "#FFFFFF",
                        }}>Solutions</h1>
                        <p style={{
                              fontStyle: "normal",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "140%",
                              color: "#E2E8F0",
                        }}>Brainstorming</p>
                        <p style={{
                              fontStyle: "normal",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "140%",
                              color: "#E2E8F0",
                        }}>Ideation</p>
                        <p style={{
                              fontStyle: "normal",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "140%",
                              color: "#E2E8F0",
                        }}>Wireframing</p>
                        <p style={{
                              fontStyle: "normal",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "140%",
                              color: "#E2E8F0",
                        }}>Research</p>
            
                    </div>
                    <div className="flex flex-col gap-[12px] relative top-[80px] ">
                        <h1 style={{
                              fontStyle: "normal",
                              fontWeight: 500,
                              fontSize: "16px",
                              lineHeight: "110%",
                              color: "#FFFFFF",
                        }}>Resources</h1>
                        <p style={{
                              fontStyle: "normal",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "140%",
                              color: "#E2E8F0",
                        }}>Help Center</p>
                        <p style={{
                              fontStyle: "normal",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "140%",
                              color: "#E2E8F0",
                        }}>Blog</p>
                        <p style={{
                              fontStyle: "normal",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "140%",
                              color: "#E2E8F0",
                        }}>Tutorials</p>
                        <p style={{
                              fontStyle: "normal",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "140%",
                              color: "#E2E8F0",
                        }}>FAQs</p>
            
                    </div>
                    <div className="flex flex-col gap-[12px] relative top-[80px] ">
                        <h1 style={{
                              fontStyle: "normal",
                              fontWeight: 500,
                              fontSize: "16px",
                              lineHeight: "110%",
                              color: "#FFFFFF",
                        }}>Support</h1>
                        <p style={{
                              fontStyle: "normal",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "140%",
                              color: "#E2E8F0",
                        }}>Contact Us</p>
                        <p style={{
                              fontStyle: "normal",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "140%",
                              color: "#E2E8F0",
                        }}>Developers</p>
                        <p style={{
                              fontStyle: "normal",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "140%",
                              color: "#E2E8F0",
                        }}>Documentation</p>
                        <p style={{
                              fontStyle: "normal",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "140%",
                              color: "#E2E8F0",
                        }}>Integrations</p>
            
                    </div>
                    <div className="flex flex-col gap-[12px] relative top-[80px] ">
                        <h1 style={{
                              fontStyle: "normal",
                              fontWeight: 500,
                              fontSize: "16px",
                              lineHeight: "110%",
                              color: "#FFFFFF",
                        }}>Company</h1>
                        <p style={{
                              fontStyle: "normal",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "140%",
                              color: "#E2E8F0",
                        }}>About</p>
                        <p style={{
                              fontStyle: "normal",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "140%",
                              color: "#E2E8F0",
                        }}>Press</p>
                        <p style={{
                              fontStyle: "normal",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "140%",
                              color: "#E2E8F0",
                        }}>Events</p>
                        <p style={{
                              fontStyle: "normal",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "140%",
                              color: "#E2E8F0",
                        }}>Request Demos</p>
            
                    </div>
                  
                </div>
                <div className="flex w-[100%] justify-center">
                <img className="w-[97%] mt-[300px]" src={bottom}></img>
                </div>

              
 
            </div>
        </>
    );
};

export default Footer;
