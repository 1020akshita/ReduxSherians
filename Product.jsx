import React, { useEffect } from 'react'
// import { getProducts } from '../store/reducers/ProductReducer'
import { useDispatch } from 'react-redux'
import { getProductsasync } from '../store/actions/ProductAction'

const Product = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        // dispatch(getProducts())
        getProductsasync()
    }, [])

    return (
        <>
            <div className='bg-lime-200'>
                <h1 className='text-2xl font-bold bg-red-300 p-3'>Proucts</h1>
            </div>
        </>
    )
}

export default Product
