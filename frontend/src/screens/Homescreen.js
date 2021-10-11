import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import products from '../products'
import Product from '../components/Product.js'
const Homescreen = () => {
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
