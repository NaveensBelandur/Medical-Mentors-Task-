import React from 'react'
import {useState} from 'react'


const FormData = () =>{
 return (
   <div>
   <form>
   <label>Username</label>
   <input type='text' placeholder='your username here'/>
   <label>Password</label>
   <input type='text' placeholder='your password here'/>
   <label>Email</label>
   <input type='text' placeholder='your email here'/>
   <input type='submit' />
   </form>
   </div>
 )
}

export default FormData