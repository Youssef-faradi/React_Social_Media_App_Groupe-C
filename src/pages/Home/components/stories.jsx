import React from 'react';
import { MyContext } from "../../../utils/contextProvider"

export const StoriesSectionHome = () => {
    return (
        <>
            <div className='  h-[25vh] max-[430px]:w-[90vw] overflow-x-scroll scroll-smooth w-[48vw] flex gap-2  items-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
                <div className='w-[100%] bg-[url("https://i.pinimg.com/236x/ff/81/a9/ff81a90690bec85f451f20f9a23b1370.jpg")] bg-cover bg-center	 h-[90%] flex flex-col justify-end max-w-[20%] flex-shrink-0 shadow'>
                    <div className='h-[40%] w-[100%] flex flex-col items-center backdrop-blur-sm'>
                        <button
                            title="Add New"
                            className="group cursor-pointer outline-none hover:rotate-90 duration-300"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40px"
                                height="40px"
                                viewBox="0 0 24 24"
                                className="stroke-orange-400 fill-none group-hover:fill-orange-800 group-active:stroke-orange-200 group-active:fill-orange-600 group-active:duration-0 duration-300"
                            >
                                <path
                                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                                    strokeWidth="1.5"
                                ></path>
                                <path d="M8 12H16" strokeWidth="1.5"></path>
                                <path d="M12 16V8" strokeWidth="1.5"></path>
                            </svg>
                        </button>
                        <h6>Username</h6>
                    </div>
                </div>
                <div className='w-[100%] bg-[url("https://i.pinimg.com/236x/ff/81/a9/ff81a90690bec85f451f20f9a23b1370.jpg")] bg-cover bg-center h-[90%] flex flex-col justify-end max-w-[20%] flex-shrink-0 shadow'>

                </div>
                <div className='w-[100%] bg-[url("https://i.pinimg.com/236x/ff/81/a9/ff81a90690bec85f451f20f9a23b1370.jpg")] bg-cover bg-center h-[90%] flex flex-col justify-end max-w-[20%] flex-shrink-0 shadow'>

                </div>
                <div className='w-[100%] bg-[url("https://i.pinimg.com/236x/ff/81/a9/ff81a90690bec85f451f20f9a23b1370.jpg")] bg-cover bg-center h-[90%] flex flex-col justify-end max-w-[20%] flex-shrink-0 shadow'>

                </div>
                <div className='w-[100%] bg-[url("https://i.pinimg.com/236x/ff/81/a9/ff81a90690bec85f451f20f9a23b1370.jpg")] bg-cover bg-center h-[90%] flex flex-col justify-end max-w-[20%] flex-shrink-0 shadow'>

                </div>
                <div className='w-[100%] bg-[url("https://i.pinimg.com/236x/ff/81/a9/ff81a90690bec85f451f20f9a23b1370.jpg")] bg-cover bg-center h-[90%] flex flex-col justify-end max-w-[20%] flex-shrink-0 shadow'>

                </div>
                <div className='w-[100%] bg-[url("https://i.pinimg.com/236x/ff/81/a9/ff81a90690bec85f451f20f9a23b1370.jpg")] bg-cover bg-center h-[90%] flex flex-col justify-end max-w-[20%] flex-shrink-0 shadow'>

                </div>
                <div className='w-[100%] bg-[url("https://i.pinimg.com/236x/ff/81/a9/ff81a90690bec85f451f20f9a23b1370.jpg")] bg-cover bg-center h-[90%] flex flex-col justify-end max-w-[20%] flex-shrink-0 shadow'>

                </div>
                
            </div>
        </>
    );
};

