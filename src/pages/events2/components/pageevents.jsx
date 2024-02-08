import React from 'react';
import events4 from "../../../assets/images/events4.jpg"
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
        <div>
            <img src={events4}  alt=""  />  
        </div>
        <div className='border container border-2 my-4 p-2 shadow '>
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
        <p className=' gap-2 '><AiFillLike className='text-green-400 text-xl me-lg-30 ' /> People have shown interset recently </p>
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
<div className='flex  flex-column text-center container border container border-2 my-4 p-2 shadow  '>
    <h1>Events location </h1>
    <p>750 sing sing Rd , Horseheads, NY , 14845</p>
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6588.521788927705!2d-76.86341688342107!3d42.17868566527307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d0418407536f4f%3A0x6807e1051e0d31e7!2zNzUwIFNpbmcgU2luZyBSZCwgSG9yc2VoZWFkcywgTlkgMTQ4NDXYjCDYp9mE2YjZhNin2YrYp9iqINin2YTZhdiq2K3Yr9ip!5e0!3m2!1sar!2sma!4v1707229724642!5m2!1sar!2sma" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


</div>




        </div>


       
        </>
    );
};

