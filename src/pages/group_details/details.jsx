import React from 'react';
import zaymas from '../../img/ZAYMAS.png'
import { FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmojiEmotions } from "react-icons/md";
import { GiPositionMarker } from "react-icons/gi";
import { FaUniversity } from "react-icons/fa";
import { RiLuggageDepositFill } from "react-icons/ri";
export const Details = () => {
    return (

        <>

<main className="profile-page">
                <section className="relative block h-500-px">
                    <div
                        className="absolute top-0 w-full h-full bg-red-400"
                        style={{
                            backgroundImage:
                                `url(${zaymas})`
                        }}
                    >
                        <span
                            id="blackOverlay"
                            className="w-full h-full absolute opacity-50 bg-black"
                        />
                    </div>
                    <div
                        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
                        style={{ transform: "translateZ(0px)" }}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x={0}
                            y={0}
                        >
                            <polygon
                                className="text-blueGray-200 fill-current"
                                points="2560 0 2560 100 0 100"
                            />
                        </svg>
                    </div>
                </section>
                <section className="relative py-16 bg-blueGray-200">
                    <div className="container mx-auto px-4 ">
                        <div className="relative flex flex-col min-w-0 break-words bg-[#f4effa] w-full mb-4 shadow-xl rounded-lg -mt-64">
                            <div className="px-6">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center mr-8">
                                        <div className="relative ">
                                            <img
                                                alt="..."
                                                src={zaymas}
                                                className="shadow-xl rounded-full h-[200px] align-middle border-none absolute -m-16  -ml-20  max-w-200-px"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4  mt-32 md:mt-0 lg:order-1">
                                        <div className="flex justify-center py-4 lg:pt-4 pt-8 ">
                                            <div className="mr-4 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                    22
                                                </span>
                                                <span className="text-sm text-blueGray-400">Members</span>
                                            </div>
                                            <div className="mr-4 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                    10
                                                </span>
                                                <span className="text-sm text-blueGray-400">Posts</span>
                                            </div>
                                            <div className="lg:mr-4 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                    89
                                                </span>
                                                <span className="text-sm text-blueGray-400">Likes</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                        <div className="flex justify-center">
                                            <div className="py-6 px-3  sm:mt-0 flex gap-3">
                                                <button
                                                    className="bg-[#FF9843] active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                >
                                                    setting
                                                </button>
                                                <button
                                                    className="bg-[#FF9843] active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                >
                                                    add story
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center ">
                                    <h3 className="text-4xl font-semibold leading-normal  text-blueGray-700 my-4">
                                        Group Name
                                    </h3>
                                </div>
                                <div className="mt-10 py-4 border-t border-blueGray-200 text-center">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full lg:w-9/12 px-4">
                                            <p className=" text-lg leading-relaxed text-blueGray-700">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eaque unde aut quos temporibus dignissimos hic suscipit libero fugiat incidunt.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* sous profil  */}
                        <div className=" w-100 rounded-lg mt-2 flex gap-3 ">
                            {/* divs gauche */}
                            <div className="w-50 rounded-xl border bg-[#f4effa] h-screen">
                                <div className="w-100 rounded-xl bg-slate-700 text-white pl-3 py-1">
                                    <p className="text-2xl pb-3">Group Informations:</p>
                                    <div className="text-sm leading-normal mt-0  flex items-center text-white  mb-2 text-blueGray-400 font-bold uppercase">
                                        <GiPositionMarker className="mr-2" />
                                        Casablanca, Maroc
                                    </div>
                                    <div className="mb-2 flex items-center  text-blueGray-600  text-white">
                                        <FaUniversity className="mr-2" />
                                        Web developer - LionsGeek
                                    </div>
                                    <div className="mb-2  flex items-center    text-blueGray-600 text-white">
                                        <RiLuggageDepositFill className="mr-2" />
                                        University of LionsGeek
                                    </div>
                                </div>
                            </div>
                            {/* divs droite */}
                            <div className="w-100 rounded-xl border bg-white h-screen overflow-y-scroll  profilScroll">
                                <div className="w-100 rounded-xl bg-slate-700 mb-3">
                                    <div className="flex pl-8 pt-1  text-white py-3">
                                        <p className="m-0 pl-5 pt-3">Status</p>
                                        <p className="m-0 pl-5 pt-3">Video</p>
                                        <p className="m-0 pl-5 pt-3">Photo</p>
                                    </div>
                                    <div className=" flex  px-3 w-100 justify-evenly items-center ">
                                        {/* <img src="" alt="" /> */}
                                        <div className="flex items-center pb-2 pl-2">
                                            <img className="rounded-full h-[60px] w-[60px]" src={zaymas} alt="" />
                                        </div >
                                        <div className="w-[75%]">
                                            <form className="w-[100%]" action="">
                                                <input className="w-100 bg-transparent placeholder-neutral-300 text-red-400 border-0  focus:outline-none" type="text" placeholder="Write somthing ..." />
                                            </form>
                                        </div>
                                    </div>
                                    <hr className="text-white" />
                                    <div className="flex justify-between py-3">
                                        <div className=" flex pl-8 text-white items-center">
                                            <FaUser className=" text-white" />
                                            <p className="m-0 pl-2 pr-5"> People</p>
                                            <FaLocationDot className=" text-white" />
                                            <p className="m-0 pl-2 pr-5">Check in</p>
                                            <MdEmojiEmotions className="text-xl text-yellow-500" />
                                            <p className="m-0 pl-2">Mood</p>
                                        </div>
                                        <button className="mr-5 bg-orange-500 px-3 py-1 rounded-xl">button</button>
                                    </div>
                                </div>
                                <div className="w-100 rounded-xl bg-slate-700 mb-3">
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </>

    );
};
