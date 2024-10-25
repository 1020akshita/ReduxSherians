import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <nav className='flex justify-center gap-10 p-2'>
                <NavLink style={(e) => {
                    return {
                        color: e.isActive ? "red" : "",
                        fontWeight: e.isActive ? "bold" : "",
                    }
                }} to='/'>home</NavLink>
                <NavLink style={(e) => {
                    return {
                        color: e.isActive ? "red" : "",
                        fontWeight: e.isActive ? "bold" : "",
                    }
                }} to='/about'>About</NavLink>
                <NavLink style={(e) => {
                    return {
                        color: e.isActive ? "red" : "",
                        fontWeight: e.isActive ? "bold" : "",
                    }
                }} to='/user'>User</NavLink> <NavLink style={(e) => {
                    return {
                        color: e.isActive ? "red" : "",
                        fontWeight: e.isActive ? "bold" : "",
                    }
                }} to='/product'>Product</NavLink>
                <NavLink style={(e) => {
                    return {
                        color: e.isActive ? "red" : "",
                        fontWeight: e.isActive ? "bold" : "",
                    }
                }} to='/cart'>cart</NavLink>
            </nav >
        </>
    )
}

export default Nav

