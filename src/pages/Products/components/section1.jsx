import React, { useContext, useState } from 'react';
import productTest from '../../../assets/images/S0-modele--peugeot-205 (1).jpg';
import { MyContext } from '../../../utils/contextProvider';



export const FirstSectionProduct = () => {

    const [products, setProducts] = useContext(MyContext);



    return (
        <>
            <body className='flex justify-center items-center h-screen '>
                <div className='w-[80%] h-[90%] flex justify-between bg-green-100 rounded-3xl'>
                    <div className='ps-3 w-[50%] h-[100%] flex items-center '>
                        <img className='' src= {productTest} alt="" />
                    </div>
                    <div className='ps-3 w-[40%] h-[100%] flex'>
                        <h1>hello</h1>
                    </div>
                </div>  


            </body>
        </>
    );
};

