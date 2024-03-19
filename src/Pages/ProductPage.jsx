import React from 'react'
import NavBar from '../Component/NavBar'
import Card from '../Component/Card'
import Footer from '../Component/Footer'

const ProductPage = () => {
    const image1 = 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/04/4685192/1.jpg?1723'
    const image2 = 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/68/3355072/1.jpg?5389'
    const image3 = 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/98/1142352/1.jpg?6986'
    const image4 = 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/87/1218882/1.jpg?3148'
  return (
    <div>
        <NavBar/>
        <div className='d-flex flex-wrap gap-3'>
            <Card image={image1} name='Mobile phone' description='Nec phone' price={150000} />
            <Card image={image2} name='Mobile phone' description='Techno phone' price={450000} />
            <Card image={image3} name='Mobile phone' description='David phone' price={550000} />
            <Card image={image4} name='Mobile phone' description='Femi phone' price={750000} />
            </div>
            <div className='d-flex flex-wrap gap-3'>
            <Card image={image1} name='Mobile phone' description='Nec phone' price={150000} />
            <Card image={image2} name='Mobile phone' description='Techno phone' price={450000} />
            <Card image={image3} name='Mobile phone' description='David phone' price={550000} />
            <Card image={image4} name='Mobile phone' description='Femi phone' price={750000} />
            </div>
            <div className='d-flex flex-wrap gap-3'>
            <Card image={image1} name='Mobile phone' description='Nec phone' price={150000} />
            <Card image={image2} name='Mobile phone' description='Techno phone' price={450000} />
            <Card image={image3} name='Mobile phone' description='David phone' price={550000} />
            <Card image={image4} name='Mobile phone' description='Femi phone' price={750000} />
            </div>
            <Footer/>
    </div>
  )
}

export default ProductPage