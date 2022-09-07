
import axios from "axios"
import { useEffect, useState } from "react"
import './weather.css'

export const Weather = ()=>{

   const [data , setdata] = useState([])
   const [loading , setloading] = useState(false)
   console.log(data)
   useEffect(()=>{
    getData()
 },[])
    const getData = ()=>{
        setloading(true)
       axios.get('https://todo-soul.herokuapp.com/weather')
       .then((res)=>{
          setdata(res.data)
          setloading(false)
       }).catch((err)=>{
        console.error(err)
       })
    }
 

    return (
        <div className="main-div">
            <div className="header-div">
                <span>
                    <p>
                         {/* {data.query.results.channel.location.city} City,  */}

                    </p>
                </span>
            </div>
            <div className="detail-div">
                <div>
                    <h2>{}</h2>
                    <h5>{}</h5>
                    <h5>{}</h5>
                </div>
                
            </div>
            
        </div>
    )
}