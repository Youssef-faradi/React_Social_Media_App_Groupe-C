import './marketSection.scss';

import React, { useContext, useState } from 'react';
import { TbAlertTriangleFilled } from "react-icons/tb";

import { Button, Modal } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { MyContext } from '../../../utils/contextProvider';
import { element } from 'prop-types';

export const FirstSectionMarket = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    // const [filteredFilms, setFilteredFilms] = useState(products);
    const [openModal, setOpenModal] = useState(false);

    // const filterByName = (ev) => {
    //     let newProducts = products.filter(element => element.title.toLowerCase().includes(ev.target.value.toLowerCase()));
    //     setFilteredFilms(newProducts);
    // };

    const handleClose = () => setOpenModal(false);
    const handleShow = () =>setOpenModal(true);

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');


    const newProductName = (ev) => {
        setName (ev.target.value)
    }

    console.log(setName);
    
    const newProductPrice = (ev) => {
        setPrice (ev.target.value)
        console.log();
    }

    console.log(setPrice);


    const newProductDescription = (ev) => {
        setDescription (ev.target.value)
        console.log();
    }


    
    const  [newProduct , setNewProduct] = useState({
        name : '' ,
        price : 0 ,
        description : '' ,
    })

    const addProduct = (ev) => {
        setProducts.push(newProduct) ;

        
    }




    const [dbUser, setDbUser, dbFriendship, setDbFriendship, dbPost, setDbPost, dbComments, setDbComments, dbLikes, setDbLikes, products, setProducts] = useContext(MyContext);

    return (
        <>

            <body className='h-fit max-[430px]:h-fit bg-white'>
                <div className='bg-white h-14 flex justify-center items-center border-bottom'>
                    <h4>Product List</h4>
                </div>
                <div className=' h-16 flex items-center justify-between px-5  '>

                    <button className='rounded-xl bg-[--green] w-28 py-1 shadow' onClick={() => {
                        handleShow()
                        
                        
                    }}  >hello wold</button>
                    <Modal show={openModal} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>ADD AN ITEM</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className=' flex justify-center'>

                            <form className="form1 ">
                                <p className="title1 text-center text-lg"> Add Your New Item</p>

                                <div className="flex1 flex flex-col gap-3">
                                    <label>
                                        Product Name :
                                    </label>
                                    <input onChange={((ev) => newProductName(ev))} required="" placeholder="Product Name" type="text" className="ps-3 input1 border rounded-lg h-10" />

                                    <label>
                                        Product Price :
                                    </label>
                                    <input onChange={((ev) => newProductPrice(ev))}  required="" placeholder=" Product price" type="number" className="ps-3 input1 border rounded-lg h-10 " />

                                <label>More About :</label>
                                    <textarea onChange={((ev) => newProductDescription(ev))}  placeholder='Description / categorie / condition ...' name="" id="" cols="30" rows="10" className="ps-3 sm:w-560 rounded-lg border-gray-300 txt border "></textarea>
                                    
                                    <input id="picture" type="file" class="flex h-10 items-center justify-center  w-full rounded-md border border-input bg-white px-3  text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium" />
                                </div>


                                <p className="message1 text-center text-sm text-red-400 flex items-center justify-evenly pt-3"> <TbAlertTriangleFilled /> Before creating your new product make sure to fill all the inputs </p>
                            </form>

                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <div className='flex '>
                        <p className='m-0 '>Sort by :</p>
                        <select name="" id="" className='border-none bg-transparent'>
                            <option value="">ALL</option>
                            <option value="">Cloths</option>
                            <option value="">Vehicules</option>
                            <option value="">Electronic Devices</option>
                        </select>
                    </div>
                </div>

                <div className='flex max-[430px]:flex-col  flex-wrap gap-5 justify-center items-center py-4'>

                    {
                        products.map((element, index) =>
                            <div key={index} className=' h-80 w-[60%] lg:w-[15%] p-1 text-white  shadow rounded-xl text-center'>
                                <div className='bg-red-500 h-[70%] rounded-2xl'>
                                    <img className=' ' src={element.image} alt="" />
                                </div>
                                <h3 className='bg-[--green] '>{element.title}</h3>
                                <h5 className=' bg-[--green] italic opacity-70 text-black text-start ps-3'>{element.price} </h5>
                            </div>
                        )
                    }
                </div>

            </body>















        </>
    );
};
