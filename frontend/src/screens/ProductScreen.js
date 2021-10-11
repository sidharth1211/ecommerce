import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, Container, ListGroupItem } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'
import Product from '../components/Product'

const ProductScreen = (props) => {
    const product = products.find(p => p._id === props.match.params.id)
    return (
        <div>
            <Link className='btn btn-light my-3' to='/'>
            Go Back
            </Link>
            
                <Row>
                    <Col md={6}>
                <Image src={product.image} fluid></Image>

             
              
                    
                    
                    </Col>
        <Col md={3}>
        <ListGroup variant='flush'>
  <ListGroup.Item><h2>{product.name}</h2></ListGroup.Item>
  <ListGroup.Item><Rating value={product.rating} text ={`${product.numReviews} reviews`}/></ListGroup.Item>
  <ListGroup.Item><h4>{`Price: $${product.price}`}</h4></ListGroup.Item>
  <ListGroup.Item>Description: {product.description}</ListGroup.Item>
</ListGroup>


        </Col>
        <Col md={3}>
        <Card>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                <Row>
                <Col>
            
                    Price:
                
                </Col>
                <Col>
              
                    <strong>
                        ${product.price}
                    </strong>
                
                </Col>
                </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                <Row>
                <Col>
            
                    Status:
                
                </Col>
                <Col>
              
                    <strong>
                        {product.countInStock>0?"In Stock":"Out of Stock"}
                    </strong>
                
                </Col>
                </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Button className="btn-block" size='lg' type="button" variant='dark' disabled={product.countInStock===0}>
                        Add To Card 
                    </Button>
                </ListGroup.Item>
            </ListGroup>
            

        </Card>
        </Col>

                </Row>
               

           
                
            
        </div>
    )
}

export default ProductScreen
