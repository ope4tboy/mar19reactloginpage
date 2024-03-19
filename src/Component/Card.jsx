import React from 'react'
import { CiStar } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Card = (props) => {
    const image1 = 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/04/4685192/1.jpg?1723'
    const image2 = 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/68/3355072/1.jpg?5389'
    const image3 = 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/98/1142352/1.jpg?6986'
    const image4 = 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/87/1218882/1.jpg?3148' 
  return (
    <div className='d-flex'>
        <div class="D" style={{ width: "18rem", marginLeft: '50px'}}>
                <img className='w-100' src={props.image}/>
                <div class="card-body">
                    <h5 class="card-title">{props.name}</h5>
                <p class="card-text">{props.description}</p>
                <p class="card-text">${props.price}</p>
                    <div className='mb-1 d-flex '>
                        <CiStar />
                        <CiStar />
                        <CiStar />
                        <CiStar />
                        <CiStar />
                    </div>
                    <br />
                    <Link to="https://google.com" class="btn btn-primary w-100 Toheeb" ><FaCartArrowDown/> Add to Cart</Link>
                </div>
            </div>
    </div>
  )
}

export default Card