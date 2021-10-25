
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import Message from '../components/Message.js' 
import Loader from '../components/Loader.js'
import { register } from '../actions/userActions.js'
import FormContainer from '../components/FormContainer.js'
import CheckoutSteps from '../components/CheckoutSteps.js'
import { savePaymentMethod } from '../actions/cartActions.js'


const PaymentScreen = ({history}) => {
    const cart = useSelector(state => state.cart)
    const {shippingAddress} = cart 

    if(!shippingAddress)
    {
        history.push('/shipping')
    }

    const [paymentMethod,setPaymentMethod] = useState('PayPal')
    
    const dispatch = useDispatch()
    const submitHandler = (e) => {
        e.preventDefault()
       dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }
    return (
        <FormContainer>
            <CheckoutSteps step1 step2 step3/>
            <h1>Payment Method</h1>
            <Form onSubmit={submitHandler}>
            <Form.Group>
            <Form.Label as='legend'>Select Method
            </Form.Label>

        
            <Col>
                <Form.Check type='radio' label='Paypal or Credit Card' id='PayPal' name='paymentMethod' value ='PayPal' checked
                onChange={(e)=>{
                    setPaymentMethod(e.target.value)
                }}
                >

                </Form.Check>
            </Col>
            </Form.Group>
       
        <Button className=" mt-3" type='submit' variant='dark'>Pay</Button>
                


            </Form>
        </FormContainer>
            
        
    )
}

export default PaymentScreen
