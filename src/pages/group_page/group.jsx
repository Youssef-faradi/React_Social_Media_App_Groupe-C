import React, { useState } from 'react';
import zaymas from '../../img/ZAYMAS.png'

class Groupes {
    constructor(title, desc, img, number) {
        this.title = title
        this.desc = desc
        this.img = img
        this.number = number
    }
}

let group1 = new Groupes("Amine Group", "This is a market group", zaymas, "552");
let group2 = new Groupes("Achraf Group", "Perfume Lovers", zaymas, "120");
let group3 = new Groupes("Saad Group", "Techno people", zaymas, "999");
let group4 = new Groupes("Youssef Group", "Dogs Lovers", zaymas, "100");
let group5 = new Groupes("Morad Group", "Car Informations", zaymas, "51");
let group6 = new Groupes("last Group", "lzst Informations", zaymas, "121");
let group7 = new Groupes("Saad Group", "Techno people", zaymas, "999");
let group8 = new Groupes("Youssef Group", "Dogs Lovers", zaymas, "100");
let group9 = new Groupes("Morad Group", "Car Informations", zaymas, "51");

const group = [group1, group2, group3, group4, group5, group6, group7, group8, group9]




export const Group = () => {
    const [screenArray, setScreenArray] = useState(group)
    return (
        <div className="bg-[#252A34]">
            {/* <div class="flex items-center justify-center">
                <nav className='text-4xl mb-3'>NAVBAR</nav>
            </div> */}


            {/* <div className="flex items-center justify-center">
  <div className="rounded-lg bg-gray-200">
    <div className="flex">
      <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white">
        <svg viewBox="0 0 20 20" aria-hidden="true" className="pointer-events-none absolute w-5 fill-gray-500 transition">
          <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
        </svg>
      </div>
      <input type="text" className="w-full max-w-[160px] bg-white pl-2 text-base font-semibold outline-0" placeholder="" id=""/>
      <input type="button" value="Search" className="bg-[#08D9D6] p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-[#FF2E63] transition-colors"/>
    </div>
  </div>
                </div> */}


        
        {/* <div className=' bg-[#252A34] h-fit flex flex-wrap justify-center'>
{
    screenArray.map((element, index) => 
    
    <>
                <div className=" dark:bg-gray-700 ml-5">

                <div className="max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg mt-10">
                    <div className="border-b px-4 pb-6">
                        <div className="text-center my-4">
                            <img className="w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
                                src={element.img} alt="" />
                            <div className="py-2">
                                <h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-1">{element.title}</h3>
                                <div className="inline-flex text-gray-700 dark:text-gray-300 items-center">
                                   {element.desc}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 px-2">
                            <button
                                className="flex-1 rounded-full bg-[#FF2E63] dark:bg-blue-800 text-white dark:text-white antialiased font-bold hover:bg-blue-800 dark:hover:bg-blue-900 px-4 py-2">
                                Join
                            </button>
                            <button
                                className="flex-1 rounded-full border-2 border-gray-400 dark:border-gray-700 font-semibold text-black dark:text-white px-4 py-2">
                                Report
                            </button>
                        </div>
                    </div>
                    <div className="px-4 py-4">
                        <div className="flex gap-2 items-center text-gray-800 dark:text-gray-300 mb-4">
                            <svg className="h-6 w-6 text-gray-600 dark:text-gray-400" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path className=""
                                    d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z" />
                            </svg>
                            <span><strong className="text-black dark:text-white">12</strong> Followers you know are in this group</span>
                        </div>
                        <div className="flex">
                            <div className="flex justify-end mr-2">
                                <img className="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2"
                                    src="https://randomuser.me/api/portraits/men/32.jpg" alt="" />
                                <img className="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2"
                                    src="https://randomuser.me/api/portraits/women/31.jpg" alt="" />
                                <img className="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2"
                                    src="https://randomuser.me/api/portraits/men/33.jpg" alt="" />
                                <img className="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2"
                                    src="https://randomuser.me/api/portraits/women/32.jpg" alt="" />
                                <img className="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2"
                                    src="https://randomuser.me/api/portraits/men/44.jpg" alt="" />
                                <img className="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2"
                                    src="https://randomuser.me/api/portraits/women/42.jpg" alt="" />
                                <span
                                    className="flex items-center justify-center bg-white dark:bg-gray-800 text-sm text-gray-800 dark:text-white font-semibold border-2 border-gray-200 dark:border-gray-700 rounded-full h-10 w-10">
                                    +{element.number}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    </>
    
    
    )
}







        </div> */}
        
        
        
        </div>
    );
};
