import './marketSection.scss'


import React, { useContext, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { MyContext } from '../../../utils/contextProvider';

export const FirstSectionMarket = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [products, setProducts] = useContext(MyContext);
    const [filteredFilms, setFilteredFilms] = useState(products);
    const [openModal, setOpenModal] = useState(false);

    const filterByName = (ev) => {
        let newProducts = products.filter(element => element.title.toLowerCase().includes(ev.target.value.toLowerCase()));
        setFilteredFilms(newProducts);
    };

    const handleClose = () => setOpenModal(false);
    const handleShow = () => setOpenModal(true);

    return (
        <>

        <body className='bg-red-500 h-screen'>
            <div className='bg-white h-10 flex justify-center items-center'>
                <h1>Product List</h1>
            </div>
            <div className='bg-white w-52 h-screen'>

            </div>
            
        </body>








                                {/* <Button variant="primary" className='rounded-3xl' onClick={handleShow}>
                                    ADD AN ITEM +
                                </Button>
                                <Modal show={openModal} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>ADD AN ITEM</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body className=' flex justify-center'>

                                        <form className="form1 ">
                                            <p className="title1"> Add Your New Item</p>
                                            <p className="message1">Signup now and get full access to our app. </p>
                                            <div className="flex1">
                                                <label>
                                                    <input required="" placeholder="" type="text" className="input1" />
                                                    <span>Product Name</span>
                                                </label>

                                                <label>
                                                    <input required="" placeholder="" type="number" className="input1" />
                                                    <span>Product Price</span>
                                                </label>
                                            </div>

                                            <label>
                                                <textarea placeholder='Description / categorie / condition ...' name="" id="" cols="30" rows="10" className=" w-80 sm:w-560 rounded-lg border-gray-300 txt"></textarea>
                                            </label>

                                            <div class="grid w-full max-w-xs items-center gap-1.5">
                                                <input id="picture" type="file" class="flex  w-full rounded-md border border-input bg-white px-3  text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium" />
                                            </div>
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
                                </Modal> */}





        </>
    );
};
