import React from 'react'
import '../../sass/components/_card.scss'

function Card({data}) {
  return <>
  <div className="col-lg-4 col-sm-12">
     <div className="main text-left" style={{backgroundColor:data.bgColor}}>
        <div className="icon"><img src= {data.icon} alt="" /> </div>
        <h1>{data.heading}</h1>
        <div className="desc">
            <p>{data.desc}</p>            
        </div>
        <button className="btn" style={{color:data.bgColor,borderColor:data.border}}>learn more</button>
    </div> 
  </div>
  </>
}

export default Card