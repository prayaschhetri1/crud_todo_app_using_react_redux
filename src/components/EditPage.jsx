import axios from 'axios';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addTodo, singleTodo } from '../redux/Action';

const EditPage = () => {

   

    const singleItem = useSelector((state) => state.newTodo);
    const [inputData,setInputData] = useState("")
  
    // console.log(singleItem)
  
    const dispatch = useDispatch();
    const getData = () => {
      axios(`http://localhost:8080/todos/${singleItem.id}`).then((res) => {
        dispatch(singleTodo(res.data));
      });
    };
  
    useEffect(() => {
      getData();
    }, [singleItem.id]);
  
  const navigate = useNavigate()
    const handleupDateDelete = (id) => {
        let payload = {
            title:inputData,
            completed:false,
            id : uuidv4()
         }
 
         fetch("http://localhost:8080/todos",{
             method: 'POST',
             body : JSON.stringify(payload),
             headers : {"Content-Type" : "application/json"}
         })
         
         dispatch(addTodo(payload))
       
         alert("UPDATE SUCCESSFULL 🥰")
         navigate("/")

    }

  return (
    <div>
        <input onChange={(e)=>setInputData(e.target.value)} value={inputData} type="text" placeholder='update your task...' />
        <button onClick={()=>handleupDateDelete(singleItem.id)}>UPDATE</button>
    </div>
  )
}

export default EditPage