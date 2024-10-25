import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userdelete } from '../store/reducers/UserReducer'

const User = () => {
  const {users} = useSelector( state => state.UserReducer)
  // console.log(data)
  const dispatch = useDispatch()

  const deleteHandler = (id)=>{
    console.log(id)
    dispatch(userdelete(id))
  }
  return (
    <>
      <div className='bg-lime-200'>
        <h1 className='text-2xl font-bold bg-red-300 p-3'>Users</h1>
        {users.map((e, i) => {
          return (
            <div key={i} className='p-3'>
              <h2>{e.name} <span onClick={()=>deleteHandler(e.id)} className='font-bold text-red-700 cursor-pointer ml-2'> X</span></h2>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default User
