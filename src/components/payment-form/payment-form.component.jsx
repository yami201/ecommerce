import { useState } from 'react'
import { useSelector } from 'react-redux'
import { CardElement , useElements , useStripe} from '@stripe/react-stripe-js'
import { PaymentFormContainer , FormContainer } from './payment-form.style'
import { selectTotal } from '../../store/cart/cart.selector'
import { selectCurrentUser } from '../../store/user/user.selector'
import Button , {buttonClassTypes} from '../buttons/button.component'
const PaymentForm = () => {
    const stripe = useStripe()
    const elements = useElements()
    const amount = useSelector(selectTotal)
    const currentUser = useSelector(selectCurrentUser)
    const [isProcessingPayment,setIsProcessingPayment] = useState(false)
    const paymentHandler = async (event) => {
        event.preventDefault()
        if(!stripe || !elements) return 
        setIsProcessingPayment(true)
        const response = await fetch('/.netlify/functions/create-payment-intent.js',{
            method:'post',
            headers:{
                'Content-type':'application/json',
            },
            body:JSON.stringify({amount:amount*100})
        }).then(res => res.json())
        const clientSecret = response.paymentIntent.client_secret
        const paymentResult = stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:elements.getElement(CardElement),
                billing_details:{
                   name:currentUser ? currentUser.displayName : "Guest",
                }
            }
        })
        setIsProcessingPayment(false)
        if((await paymentResult).error){
            alert(paymentResult.error)
        } else {
            if((await paymentResult).paymentIntent.status === "succeded"){
                alert("payment successful")
            }
        }
    }
    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment: </h2>
                <CardElement/>
                <Button buttonType={buttonClassTypes.inverted} isLoading={isProcessingPayment}>Pay now</Button>
            </FormContainer>
        </PaymentFormContainer>
    )
}
export default PaymentForm