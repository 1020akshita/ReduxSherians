// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

// const Routing = () => {
//     return (
//         <>
//             <Routes>
//                 <Route path='/' element={<Home />} />
//                 <Route path='/user' element={<User />} />
//                 <Route path='/user/:id' element={<UserDetail />} />
//                 <Route path='/about' element={<About />} />
//             </Routes>
//         </>
//     )
// }

// export default Routing

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from '../components/Product'
import About from '../components/About'
import User from '../components/User'
import Home from '../components/Home'
import Cart from '../components/Cart'

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/user" element={<User />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>      
    </div>
  )
}

export default Routing

