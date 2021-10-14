import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Col, Row } from 'react-bootstrap'
import Product from '../components/Product.js'
import { listProducts } from '../actions/productActions.js'
import Message from '../components/Message.js'
import Loader from '../components/Loader.js'
const Homescreen = () => {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    

    useEffect(()=>{
        dispatch(listProducts())
    },[dispatch]

    )
    const { loading , error, products } = productList
  
    return (
        <div>
            <Container>
                <h1>LATEST PRODUCTS </h1>
                {loading ? 
                <Loader/>: error?<Message >{error}</Message> : <Row>
                    
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
                }
                 

            </Container>
        </div>
    )
}

export default Homescreen
