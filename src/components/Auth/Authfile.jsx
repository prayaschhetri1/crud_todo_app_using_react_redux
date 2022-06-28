import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const Authfile = () => {

    const dispatch= useDispatch()

const [form,setform] = useState({
    "email":"",
    "password":""
})

const  grtrecru = ()=>{
    axios("https://reqres.in/api/login").then((res)=>{
        console.log(res.data)
    }).catch(erroe=>{console.log(erroe)})
        
    
}


const handlechange = (e)=>{
const {name,value} = e.target;
setform({...form,[name]:value})

}

const hclick = (e)=>{
  e.preventDefault()
  dispatch()

}

useEffect(()=>{
   grtrecru()
},[])

  return (
    <div>
        <form onSubmit={hclick}>
        <input type="email" onChange={handlechange} name="email" value={form.email}/>
        <input type="password" onChange={handlechange} name="password" value={form.password}/>
        <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Authfile