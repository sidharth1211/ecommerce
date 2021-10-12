import React, { useState, useEffect } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Product from '../components/Product.js'
import axios from 'axios'
const Homescreen = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        const fetchProducts = async()=>{
            const res = await axios.get('/api/product')

            setProducts(res.data)
            console.log(res.data)
        }
        fetchProducts()
    },[]

    )
    return (
        <div>
            <Container>
                <Row>
                    
                        {
                            products.map((product) =>{
                                return (
                                <Col sm={12} md={6} lg={4}>
                                <Product product={ product }/>
                                </Col>
                                )
                            })

                        }
                    
                </Row> 

            </Container>
        </div>
    )
}

export default Homescreen
