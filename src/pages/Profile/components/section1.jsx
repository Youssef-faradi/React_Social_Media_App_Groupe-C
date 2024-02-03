import { useContext } from "react";
import { MyContext } from "../../../utils/ContextProvider";
import "./section1.sass"
import { FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmojiEmotions } from "react-icons/md";

export const Section1Profile = () => {
    const [dbUser, setDbUser, dbFriendship, setDbFriendship, dbPost, setDbPost, dbComments, setDbComments, dbLikes, setDbLikes] = useContext(MyContext)

    return (
        <>

            <div className="h-screen w-100 bg-red-100">
                {/* navbar */}
                <div className="w-100 h-[12vh] bg-sky-300">

                </div>
                <div className="h-100 bg-red-800 w-100  flex gap-8">
                    <div className="w-[20vw] bg-black h-100">

                    </div>
                    <div className="w-[60vw] bg-sky-500 h-[100] flex flex-col items-center overflow-y-scroll  achraf">
                        <div className="w-[98%]   h-[20%]">
                            {/* div superieur les photos profil couverture */}
                            <div className=" bg-white w-100  rounded-lg mt-2 relative">
                                {/* backgrounImage photo de couverture */}
                                <div className=" bg-slate-500 w-100 h-10 py-20 rounded-t-lg text-center">
                                    <p className="">image de couverture </p>
                                </div>
                                <div className="bg-white pl-52 py-6 rounded-b-lg">
                                    UserName
                                </div>
                                {/* photo de profil */}
                                <div className="bg-red-500 outline outline-white rounded-full absolute bottom-3 left-20">
                                    <p className="m-0 px-10 py-12  ">profil</p>
                                </div>
                            </div>
                            {/* divs inferieur */}
                            <div className=" w-100 rounded-lg mt-2 flex gap-3">
                                {/* divs gauche */}
                                <div className="w-50 rounded-xl border bg-white h-screen">
                                    <div className="w-100 rounded-xl bg-slate-700 text-white pl-3 py-1">
                                        <p className="m-0 pt-1 text-xl">Introduction</p>
                                        <p className="m-0 pt-1">job : student</p>
                                        <p className="m-0 pt-1">live in <span className="text-blue-600">Casablanca, Maroc</span></p>
                                        <p className="m-0 pt-1">birthday : 15/01/2000</p>
                                    </div>

                                </div>
                                {/* divs droite */}
                                <div className="w-100 rounded-xl border bg-white h-screen">
                                    <div className="w-100 rounded-xl bg-slate-700">
                                        <div className="flex pl-8 pt-1  text-white pb-3">
                                            <p className="m-0 pl-5 ">Status</p>
                                            <p className="m-0 pl-5 ">Video</p>
                                            <p className="m-0 pl-5 ">Photo</p>
                                        </div>
                                        <div className=" flex  px-3 w-100 justify-around items-center ">
                                            {/* <img src="" alt="" /> */}
                                            <div>
                                                <p className="rounded-full bg-red-500 text-black px-2 py-3 m-0">profil</p>
                                            </div >
                                            <div className="w-[75%]">
                                                <form className="w-[100%]" action="">
                                                    <input className="w-100 bg-transparent placeholder-neutral-300 text-red-400 focus:outline-none" type="text" placeholder="Write somthing ..." />
                                                </form>
                                            </div>
                                        </div>
                                        <hr className="text-white" />
                                        <div className="flex justify-between pb-3">
                                            <div className=" flex pl-8 text-white items-center">
                                                <FaUser className=" text-white" />
                                                <p className="m-0 pl-2 pr-5"> People</p>
                                                <FaLocationDot className=" text-white" />
                                                <p className="m-0 pl-2 pr-5">Check in</p>
                                                <MdEmojiEmotions  className="text-xl text-yellow-500" />
                                                <p className="m-0 pl-2">Mood</p>
                                            </div>
                                            <button className="mr-5 bg-orange-500 px-3 py-1 rounded-xl">button</button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="w-[20vw] bg-black h-100">
                    </div>
                </div>
            </div>
        </>
    );
};

