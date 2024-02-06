import React, { createContext, useContext, useState } from 'react'
import context from 'react-bootstrap/esm/AccordionContext';

import productTest from '../assets/images/S0-modele--peugeot-205 (1).jpg';


export const    MyContext = createContext()

export const MyProvider = ({ children }) => {

    const [products, setProducts] = useState([

        {
            image: productTest,
            title: 'AAAAA',
            price: 100500 
        },
        {
            image: productTest,
            title: 'BBBBB',
            price: 100500
        },
        {
            image: productTest,
            title: 'CCCCC',
            price: 100500
        },
        {
            image: productTest,
            title: 'DDDDD',
            price: 100500
        },
        {
            image: productTest,
            title: 'EEEEE',
            price: 100500
        },
        {
            image: productTest,
            title: 'FFFFF',
            price: 100500
        },
        {
            image: productTest,
            title: 'JJJJJ',
            price: 100500
        },
        {
            image: productTest,
            title: 'HHHHH',
            price: 100500
        },
        {
            image: productTest,
            title: 'IIIII',
            price: 100500
        }
    ])

    return (
        <>
            <MyContext.Provider value={ [products, setProducts] } >
                {children}
            </MyContext.Provider>
        </>
    )
}