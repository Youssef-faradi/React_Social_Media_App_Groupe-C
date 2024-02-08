import React from 'react';
// import events4 from "../../../assets/images/events4.jpg"
import "./events2.css"
import { Button } from 'react-bootstrap';
import { FaStar } from "react-icons/fa";
import { IoStarHalf } from 'react-icons/io5';
import { AiFillLike } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
import { MdAccountCircle, MdSupervisorAccount } from "react-icons/md";

export const Pageevents = () => {
    return (
        <>
        <div className='h-[400px] w-100   bg-[url("https://i.pinimg.com/564x/b9/83/c8/b983c8a0bedde84961ec3593b5df9627.jpg")] bg-cover bg-center'>
      <div>
      <h1 className='text-white '>The learning conference</h1>
      
</div>
      <div className='flex flex-col justify-between items-end h-[100 px] ' >
        <div className="  flex  m-2 before:absolute before:w-12 before:h-12 before:bg-orange-800 before:rounded-full before:blur-xl before:top-16 relative    flex-col justify-around items-center w-44 h-44 rounded-2xl shadow-inner shadow-gray-50 bg-neutral-900 text-gray-50">
        <span className="">Wed, Sep 19</span>
        <span className="z-10 flex items-center text-6xl text-amber-600 [text-shadow:_2px_2px_#fff,_1px_2px_#fff]">12<span className="text-xl font-bold text-gray-50 [text-shadow:none]">:</span>00</span>
        <div className="text-gray-50 w-48 flex flex-row justify-evenly">
          <span className="text-xs font-bold">89</span>
          <div className="flex flex-row items-center">
            <svg className="w-5 h-5 fill-red-500 animate-bounce" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
            <path className="" d="M23,27.6a15.8,15.8,0,0,1,22.4,0L50,32.2l4.6-4.6A15.8,15.8,0,0,1,77,50L50,77,23,50A15.8,15.8,0,0,1,23,27.6Z" fill-rule="evenodd">
            </path>
            </svg>
            <svg className="w-5 h-5 fill-current" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
            <path className="svg-fill-primary" d="M80.2,40.7l-1.1-2-.2-.3.3-.3c2.2-14.7-21.3-25.6-20.7-21S57,38.1,45.4,31.8c-9.3-5.1-12.9,12.1-22.8,33.7C16.2,79.4,20.8,82.3,27,81l.3.4L29,83.3a1.4,1.4,0,0,0,1.8.5l.9-.3a1.6,1.6,0,0,0,1.1-1.9l-.5-2.5a38.2,38.2,0,0,0,4.5-2.7L38.6,78a1.8,1.8,0,0,0,2.4-.1l1.2-1.1a1.9,1.9,0,0,0,.4-1.9l-1-2.5L45.5,69l1.7,1.6a1.8,1.8,0,0,0,2.4-.1l.9-1a1.7,1.7,0,0,0,.4-1.8L50,65c5.6-5,11.9-10.9,17.3-15.8l.4.2,1.9,1.1a1.6,1.6,0,0,0,2.1-.2l.8-.8a1.6,1.6,0,0,0,.3-2.1l-1.3-2.1,3.2-3.1,2.2,1.5a1.8,1.8,0,0,0,2.2-.1l.8-.8A1.7,1.7,0,0,0,80.2,40.7Z">
            </path>
            </svg>
            <svg className="w-5 h-5 fill-current" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
            <path className="svg-fill-primary" d="M59.5,20.5a3.9,3.9,0,0,0-2.5-2,4.3,4.3,0,0,0-3.3.5,11.9,11.9,0,0,0-3.2,3.5,26,26,0,0,0-2.3,4.4,76.2,76.2,0,0,0-3.3,10.8,120.4,120.4,0,0,0-2.4,14.2,11.4,11.4,0,0,1-3.8-4.2c-1.3-2.7-1.5-6.1-1.5-10.5a4,4,0,0,0-2.5-3.7,3.8,3.8,0,0,0-4.3.9,27.7,27.7,0,1,0,39.2,0,62.4,62.4,0,0,1-5.3-5.8A42.9,42.9,0,0,1,59.5,20.5ZM58.4,70.3a11.9,11.9,0,0,1-20.3-8.4s3.5,2,9.9,2c0-4,2-15.9,5-17.9a21.7,21.7,0,0,0,5.4,7.5,11.8,11.8,0,0,1,3.5,8.4A12,12,0,0,1,58.4,70.3Z" fill-rule="evenodd">
            </path>
            </svg>
          </div>
        </div>
      
      
      </div>
      <div  data-tooltip="Price:-$20 " className="button m-3 " >
  <div className="button-wrapper  ">
    <div className="text">Buy Now</div>
    <span className="icon ">
      <svg
        viewBox="0 0 16 16"
        className="bi bi-cart2"
        fill="currentColor"
        height={16}
        width={16}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
      </svg>
    </span>
  </div>
</div>

       </div>
        </div>
        <div className=' container border-2 my-4 p-2 shadow '>
           <p className='container'>He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to. Place voice no arises along to. Parlors waiting so against me no.</p>
            <div className=''>
              <div className='  flex  justify-content-lg-evenly container '>     
            <div className=' ' >
                <h2>Timings</h2>
                <p>09:00 AM - 05:00 PM (Business)</p>
                <p>09:00 AM - 03:00 PM (Business)</p>
            </div>
            <div>
                <h2>Entry fees</h2>
                <p className='w-80'><span className='text-blue-600'>Free Ticket </span>For photography professionals check official website</p>   
            </div>
              </div> 
            
            <div className=' flex justify-evenly container '>     
            <div className='flex flex-column justify-start  me-4'  >
                <h2>Category & type</h2>
                <p>Trade show </p>
                <p>photography & Prewedding</p>
            </div>
            <div  className='me-20 '>
                <h2>Estimated turnout</h2>
                <p>140000 Vistors</p>  
                <p>1800 Exhibitors</p>
                <Button variant="danger">Danger</Button>
            </div>
         </div>
       
        <div className=' flex justify-evenly   ' >
        <div className='p-6'>
         <p className='flex  ms-lg-20 '> 4.5 <FaStar className='text-yellow-400' /> <FaStar className='text-yellow-400' /><FaStar className='text-yellow-400' /><FaStar className='text-yellow-400' /><IoStarHalf className='text-yellow-400' /> </p>
         <p className='ms-lg-20 '><span className='font-bold '>#2 of 3506</span>Events in Photography & Prewedding</p>
         </div>
         <div className=' py-2 me-lg-40'>
        <p className=' gap-2 me-20 '><AiFillLike className='text-green-400 text-xl me-lg-30 ' /> People have shown interset recently </p>
        <Button variant="success">Interested?</Button>
         </div>
         </div>
        </div>
        <hr />
      
        <h2 className='px-48 '>Attendees</h2>
        <div className=' flex justify-evenly'>
        <div className="flex">
      <div className="flex justify-end mr-2">
                    <img
                      className="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2"
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt=""
                    />
                    <img
                      className="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2"
                      src="https://randomuser.me/api/portraits/women/31.jpg"
                      alt=""
                    />
                    <img
                      className="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2"
                      src="https://randomuser.me/api/portraits/men/33.jpg"
                      alt=""
                    />
                    <img
                      className="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2"
                      src="https://randomuser.me/api/portraits/women/32.jpg"
                      alt=""
                    />
                    <img
                      className="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2"
                      src="https://randomuser.me/api/portraits/men/44.jpg"
                      alt=""
                    /> 
                    <span className='p-2'>
                      +99.9k people responded
                    </span>
                  </div>
                  </div>
        <div className=' flex text-center gap-2'>
           <div className='flex p-3'>
                <TbWorld className='text-xl' /> 
                <div>
                   <span className=' font-bold'> 125</span>
                <p>Visitors</p>
                    </div>    
                </div>
                <div className='flex p-3'>
                <MdAccountCircle  className='text-xl' />
                <div>
                <span className=' font-bold'> 256</span>
                <p>Registred</p>
                    </div>    
                </div>
                <div className='flex p-3'>
                <MdSupervisorAccount className='text-xl' />

                <div>
                <span className=' font-bold'> 350</span>
                <p>Attendance</p>
                    </div>    
                </div>
          </div>
        </div>
        </div>
        <div>
<div className='flex  flex-column text-center  container border-2 my-4 p-2 shadow  '>
    <h1>Events location </h1>
    <p>750 sing sing Rd , Horseheads, NY , 14845</p>
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6588.521788927705!2d-76.86341688342107!3d42.17868566527307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d0418407536f4f%3A0x6807e1051e0d31e7!2zNzUwIFNpbmcgU2luZyBSZCwgSG9yc2VoZWFkcywgTlkgMTQ4NDXYjCDYp9mE2YjZhNin2YrYp9iqINin2YTZhdiq2K3Yr9ip!5e0!3m2!1sar!2sma!4v1707229724642!5m2!1sar!2sma" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


</div>




        </div>


       
        </>
    );
};

