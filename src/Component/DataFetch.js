import React from 'react'
import {useState,useEffect} from 'react'
import Axios from 'axios'
import NavBar from './NavBar.js'
import ClipLoader from 'react-spinners/ClipLoader'


const DataFetch = () =>{
  const [data,getData] = useState([])

  useEffect(()=>{
    try{
      Axios.get('https://fakestoreapi.com/products')
      .then((response)=>{
        const DataApi = response.data
        getData(DataApi)
        console.log(data,'data')
      })
      .catch((err)=>{
        console.log("data Error")
      })

    }
    catch(err){
      console.log(err.message)
    }
  },[])
  return (
    <>
    <NavBar/>
    <div className='container mt-5'>
    <h2 className='lead'>Listing the Numbers of Products {data.length == 0 ?  <ClipLoader color={'red'} size={150}/> : <p>{data.length}</p>}</h2>
    <div className='row'>
     {
       data.length == 0 ? <ClipLoader color={'red'} size={150}/> : data.map((ele)=>{
         console.log(ele,'data ')
         return (
           <div key={ele.id}>
           <div className='card-group'>
            <div className='card p-5' style={{width:'16rem'}}>
              <img className='img-thumbnail rounded mt-2 mb-4' src={ele.image} style={{width:'150px'}} alt='product-page' />
            <h5 className='text-center mb-5'>Product Title - {ele.title}</h5>
            <p className='lead'>Category - {ele.category}</p>
            <p className='lead'>Description - {ele.description}</p>
            <p className='lead'>Price - {ele.price}</p>


            <p className='lead'>Rate - {ele.rating.rate}</p>
            <p className='lead'>Count - {ele.rating.count}</p>
           
            </div>
            </div>
            <br/>
           </div>
         )
       })
     }
   
    </div>

    </div>
    </>
  )
}

export default DataFetch