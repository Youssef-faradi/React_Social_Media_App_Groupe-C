import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import events1 from "../../../assets/images/events.jpeg"
import events2 from "../../../assets/images/events1.jpeg"
import events3 from "../../../assets/images/events3.jpg"
import events4 from "../../../assets/images/events4.jpg"
import events5 from "../../../assets/images/events5.jpeg"
import "./events.css"
import CloseButton from 'react-bootstrap/CloseButton';
import { useNavigate } from 'react-router-dom';

export const Sectionevents = () => {
  const [show, setShow] = useState(false);
  const [isInterested, setIsInterested] = useState(false);

  const handleClick = () => {
    setIsInterested(prevState => !prevState);
  };

  const navigate = useNavigate()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
  return (
        <>
      
<div className='flex justify-between align-content-end m-5   '>
  
    <h1 >Discover Events</h1>
    
      <Button onClick={handleShow} variant="outline-success  rounded-full" className='w-40 h-12'> + Create event </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Create event </Modal.Title>
        </Modal.Header>
        <Modal.Body>
           
             <div >
            <p className='m-2'>Title </p>
            <input type="text" placeholder='Event name here ' className='border-2 rounded-lg p-1 w-100 border-collapse'  />
            <p className='m-2'>Description  </p>
            <textarea type="text" placeholder='Ex:topics,schedule,etc. ' className='border-2  p-1 w-100 border-collapse'  />
            <div className='flex gap-3 '>
           <div>
            <p className='m-2'>Date </p>
            <input type="Date" placeholder='Select date ' className='border-2 rounded-lg p-1 w-100 border-collapse'  />
            </div>
            <div>
            <p className='m-2'>Time  </p>
            <input type="time"  className='border-2 rounded-lg p-1 w-100 border-collapse'  />
            </div>
            <div>
            <p className='m-2'>Duration </p>
            <input type="text" placeholder='1hr 23m ' className='border-2 rounded-lg p-1 w-100 border-collapse'  />
           </div> 
            </div>
            <p className='m-2'>Loction </p>
            <input type="text" placeholder='Logansport, IN 46947 ' className='border-1 rounded-lg p-1 w-100 border-collapse'  />
            <p className='m-2'>Add guests </p>
            <input type="text" placeholder='Guest email ' className='border-1 rounded-lg  p-1 w-100 border-collapse'  />
            <div className="flex py-3">
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
                    <img
                      className="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2"
                      src="https://randomuser.me/api/portraits/women/42.jpg"
                      alt=""
                    />
                    <span className="flex items-center justify-center bg-white dark:bg-gray-800 text-sm text-gray-800 dark:text-black font-semibold border-2 border-gray-200 dark:border-gray-700 rounded-full h-10 w-10">
                      +50
                    </span>
                  </div>
                </div>
                <p>Upload attachment</p>
              
                <input  className='border-1 rounded-lg  p-10 w-100  border-collapse' type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"  />



            </div>
            
            </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="outline-success" onClick={handleClose}>
            Create now
          </Button>
        </Modal.Footer>
      </Modal>

</div>
  <div className='w-[90vw] m-5 border flex justify-between rounded-lg  bg-lime-400'> <p className='p-2'><span className='fs-4'>Upcoming event :</span> The learning conference on sep 19 2022  <Button onClick={()=>{navigate('/events2')}} variant="success" >View event</Button> </p> <CloseButton className='p-4' /></div>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
    integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk="
    crossOrigin="anonymous"
  />
  <div className="container">
    {/* start event block */}
    <div className="row align-items-center p-9 event-block no-gutters margin-40px-bottom">
      <div className="col-lg-5 col-sm-12">
        <div className="position-relative">
          <img className='w-100'
            src={events1}
            alt=""
          />
      
        </div>
      </div>
      <div className="col-lg-7 col-sm-12">
        <div className="padding-60px-lr md-padding-50px-lr sm-padding-30px-all xs-padding-25px-all">
          <h5 className="margin-15px-bottom md-margin-10px-bottom font-size22 md-font-size20 xs-font-size18 font-weight-500">
            <a href="event-details.html" className="text-theme-color">
              Business Conference
            </a>
          </h5>
          <ul className="event-time margin-10px-bottom md-margin-5px-bottom">
            <li>
              <i className="far fa-clock margin-10px-right" /> 01:30 PM - 04:30
              PM
            </li>
            <li>
              <i className="fas fa-user margin-5px-right" /> Speaker : John
              Sminth
            </li>
          </ul>
          <p>
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore
          </p>
          <button className='rounded-full border-2 bg-lime-300'
      onClick={handleClick}
      style={{
        width: isInterested ? '80px' : '100px',
        backgroundColor: isInterested ? '#2EB82E' : '#ffffff',
        color: isInterested ? '#fff' : '#3399FF',
        borderColor: isInterested ? '#2EB82E' : '#3399FF',
        transition: 'width 0.6s ease-in-out, background-color 1s ease-in-out',
      }}
    >
      {isInterested ? 'Interested' : "+ Intersted"}
    </button>
        </div>
      </div>
    </div>
    {/* end event block */}
    {/* start event block */}
    <div className="row align-items-center event-block no-gutters margin-40px-bottom">
      <div className="col-lg-7 order-2 order-lg-1">
        <div className="padding-60px-lr md-padding-50px-lr sm-padding-30px-all xs-padding-25px-all">
          <h5 className="margin-15px-bottom md-margin-10px-bottom font-size22 md-font-size20 xs-font-size18 font-weight-500">
            <a href="event-details.html" className="text-theme-color">
              Craft Workshops
            </a>
          </h5>
          <ul className="event-time margin-10px-bottom md-margin-5px-bottom">
            <li>
              <i className="far fa-clock margin-10px-right" /> 09:00 AM - 09:30
              PM
            </li>
            <li>
              <i className="fas fa-user margin-5px-right" /> Speaker : Alexa
              Zone
            </li>
          </ul>
          <p>
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore
          </p>
          <button className='rounded-full border-2 bg-lime-300'
      onClick={handleClick}
      style={{
        width: isInterested ? '80px' : '100px',
        backgroundColor: isInterested ? '#2EB82E' : '#ffffff',
        color: isInterested ? '#fff' : '#3399FF',
        borderColor: isInterested ? '#2EB82E' : '#3399FF',
        transition: 'width 0.6s ease-in-out, background-color 1s ease-in-out',
      }}
    >
      {isInterested ? 'Interested' : "+ Intersted"}
    </button>
        </div>
      </div>
      <div className="col-lg-5 order-1 order-lg-2">
        <div className="position-relative">
          <img className='w-100'
            src={events2}
            alt=""
          />
          <div className="events-date">
            <div className="font-size28">25</div>
            <div className="font-size14">Feb</div>
          </div>
        </div>
      </div>
    </div>
    {/* end event block */}
    {/* start event block */}
    <div className="row align-items-center event-block no-gutters margin-40px-bottom">
      <div className="col-lg-5 col-sm-12">
        <div className="position-relative">
          <img
            src={events3}
            alt=""
          />
          <div className="events-date">
            <div className="font-size28">20</div>
            <div className="font-size14">Feb</div>
          </div>
        </div>
      </div>
      <div className="col-lg-7 col-sm-12">
        <div className="padding-60px-lr md-padding-50px-lr sm-padding-30px-all xs-padding-25px-all">
          <h5 className="margin-15px-bottom md-margin-10px-bottom font-size22 md-font-size20 xs-font-size18 font-weight-500">
            <a href="event-details.html" className="text-theme-color">
              Mentorship Program
            </a>
          </h5>
          <ul className="event-time margin-10px-bottom md-margin-5px-bottom">
            <li>
              <i className="far fa-clock margin-10px-right" /> 09:20 AM - 12:00
              AM
            </li>
            <li>
              <i className="fas fa-user margin-5px-right" /> Speaker : Avil Mex
            </li>
          </ul>
          <p>
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore
          </p>
          <button className='rounded-full border-2 bg-lime-300'
      onClick={handleClick}
      style={{
        width: isInterested ? '80px' : '100px',
        backgroundColor: isInterested ? '#2EB82E' : '#ffffff',
        color: isInterested ? '#fff' : '#3399FF',
        borderColor: isInterested ? '#2EB82E' : '#3399FF',
        transition: 'width 0.6s ease-in-out, background-color 1s ease-in-out',
      }}
    >
      {isInterested ? 'Interested' : "+ Intersted"}
    </button>
        </div>
      </div>
    </div>
    {/* end event block */}
    {/* start event block */}
    <div className="row align-items-center event-block no-gutters margin-40px-bottom">
      <div className="col-lg-7 order-2 order-lg-1">
        <div className="padding-60px-lr md-padding-50px-lr sm-padding-30px-all xs-padding-25px-all">
          <h5 className="margin-15px-bottom md-margin-10px-bottom font-size22 md-font-size20 xs-font-size18 font-weight-500">
            <a href="event-details.html" className="text-theme-color">
              Technical Events
            </a>
          </h5>
          <ul className="event-time margin-10px-bottom md-margin-5px-bottom">
            <li>
              <i className="far fa-clock margin-10px-right" /> 10:00 AM - 09:00
              PM
            </li>
            <li>
              <i className="fas fa-user margin-5px-right" /> Speaker : Venil
              Monts
            </li>
          </ul>
          <p>
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore
          </p>
          <button className='rounded-full border-2 bg-lime-300'
      onClick={handleClick}
      style={{
        width: isInterested ? '80px' : '100px',
        backgroundColor: isInterested ? '#2EB82E' : '#ffffff',
        color: isInterested ? '#fff' : '#3399FF',
        borderColor: isInterested ? '#2EB82E' : '#3399FF',
        transition: 'width 0.6s ease-in-out, background-color 1s ease-in-out',
      }}
    >
      {isInterested ? 'Interested' : "+ Intersted"}
    </button>
        </div>
      </div>
      <div className="col-lg-5 order-1 order-lg-2">
        <div className="position-relative">
          <img
            src={events4}
            alt=""
          />
          <div className="events-date">
            <div className="font-size28">25</div>
            <div className="font-size14">Sep</div>
          </div>
        </div>
      </div>
    </div>
    {/* end event block */}
    {/* start event block */}
    <div className="row align-items-center event-block no-gutters">
      <div className="col-lg-5 col-sm-12">
        <div className="position-relative">
          <img className='w-100 h-25'
            src={events5}
            alt=""
          />
          <div className="events-date">
            <div className="font-size28">10</div>
            <div className="font-size14">Oct</div>
          </div>
        </div>
      </div>
      <div className="col-lg-7 col-sm-12">
        <div className="padding-60px-lr md-padding-50px-lr sm-padding-30px-all xs-padding-25px-all">
          <h5 className="margin-15px-bottom md-margin-10px-bottom font-size22 md-font-size20 xs-font-size18 font-weight-500">
            <a href="event-details.html" className="text-theme-color">
              Startup Events
            </a>
          </h5>
          <ul className="event-time margin-10px-bottom md-margin-5px-bottom">
            <li>
              <i className="far fa-clock margin-10px-right" /> 11:00 AM - 09:00
              PM
            </li>
            <li>
              <i className="fas fa-map-marker-alt margin-5px-right" /> Speaker :
              Mavil Aven
            </li>
          </ul>
          <p>
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore
          </p>
          <button className='rounded-full border-2 bg-lime-300'
      onClick={handleClick}
      style={{
        width: isInterested ? '80px' : '100px',
        backgroundColor: isInterested ? '#2EB82E' : '#ffffff',
        color: isInterested ? '#fff' : '#3399FF',
        borderColor: isInterested ? '#2EB82E' : '#3399FF',
        transition: 'width 0.6s ease-in-out, background-color 1s ease-in-out',
      }}
    >
      {isInterested ? 'Interested' : "+ Intersted"}
    </button>
        </div>
      </div>
    </div>
    {/* end event block */}
  </div>






        </>
    );
};

