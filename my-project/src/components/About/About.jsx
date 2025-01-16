import React from "react";
import logos1 from "../../assets/logos1.png";
import logos2 from "../../assets/logos2.png";
import about1 from "../../assets/about-1.png";
import about2 from "../../assets/about-2.png";
import about3 from "../../assets/about-3.png";
const About = () => {
    return (
        <>
            <div className="container max-w-full grid grid-cols-1 bg-white h-[100vh]">
                <div className="flex flex-col">
                    <h3
                        style={{
                            fontStyle: "normal",
                            fontWeight: 800,
                            fontSize: "56px",
                            lineHeight: "110%",
                            textAlign: "center",
                            color: "#0F172A",
                            marginTop: "80px",
                        }}
                    >
                        Our Top Partners
                    </h3>

                    <div className="flex flex-col ">
                        <img
                            className=" scale-[0.8] lg:scale-[1] w-[819px] h-[51px] relative lg:left-[287px] top-[80px]"
                            src={logos1}
                        ></img>
                        <img
                            className="scale-[0.8] lg:scale-[1] w-[819px] h-[51px] relative lg:left-[310px] top-[206px]"
                            src={logos2}
                        ></img>
                    </div>
                </div>
            </div>

            <div className="container max-w-full bg-slate-100 h-[300vh] md:h-[280vh] lg:h-[260vh]">
                <div className="flex md:flex-row flex-col ">
                    <div className="flex flex-col mt-[116px]  relative lg:left-[80px]">
                        <h3
                            style={{
                                fontStyle: "normal",
                                fontWeight: 800,
                                fontSize: "56px",
                                lineHeight: "110%",
                                color: "#0F172A",
                            }}
                        >
                            Turpis risus facilisi
                        </h3>
                        <p
                            style={{
                                fontStyle: "normal",
                                fontWeight: 400,
                                fontSize: "20px",
                                lineHeight: "180%",
                                color: "#0F172A",
                            }}
                        >
                            Augue feugiat mi, massa amet. Id purus aliquam bibendum purus
                            dictum elementum nullam odio tellus. Imperdiet feugiat est odio
                            fames magna orci. Augue purus aliquam, placerat vestibulum dictum
                            pellentesque molestie. Facilisis pretium porta congue proin.
                        </p>
                    </div>
                    <div>
                        <img className="mt-[80px] w-[500px] lg:w-[100%]" src={about1}></img>
                    </div>
                </div>
                <div className="flex md:flex-row flex-col justify-center items-center">
                    <div>
                        <img className="w-[500px] lg:w-[100%]" src={about2}></img>
                    </div>
                    <div className="flex-col">
                        <h3
                            style={{
                                fontStyle: "normal",
                                fontWeight: 800,
                                fontSize: "56px",
                                lineHeight: "110%",
                                color: "#0F172A",
                            }}
                        >
                            Turpis risus facilisi
                        </h3>
                        <p
                            style={{
                                fontStyle: "normal",
                                fontWeight: 400,
                                fontSize: "20px",
                                lineHeight: "180%",
                                color: "#0F172A",
                            }}
                        >
                            Augue feugiat mi, massa amet. Id purus aliquam bibendum purus
                            dictum elementum nullam odio tellus. Imperdiet feugiat est odio
                            fames magna orci. Augue purus aliquam, placerat vestibulum dictum
                            pellentesque molestie. Facilisis pretium porta congue proin.
                        </p>
                    </div>
                </div>
                <div className="flex md:flex-row flex-col items-center justify-center">
                    <div className="flex-col relative lg:left-[80px] ">
                        <h3
                            style={{
                                fontStyle: "normal",
                                fontWeight: 800,
                                fontSize: "56px",
                                lineHeight: "110%",
                                color: "#0F172A",
                            }}
                        >
                            Turpis risus facilisi
                        </h3>
                        <p
                            style={{
                                fontStyle: "normal",
                                fontWeight: 400,
                                fontSize: "20px",
                                lineHeight: "180%",
                                color: "#0F172A",
                            }}
                        >
                            Augue feugiat mi, massa amet. Id purus aliquam bibendum purus
                            dictum elementum nullam odio tellus. Imperdiet feugiat est odio
                            fames magna orci. Augue purus aliquam, placerat vestibulum dictum
                            pellentesque molestie. Facilisis pretium porta congue proin.
                        </p>
                    </div>
                    <div>
                        <img className="w-[500px] lg:w-[100%]" src={about3}></img>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
