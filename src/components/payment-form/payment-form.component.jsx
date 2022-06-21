import { CardElement , useElements , useStripe} from '@stripe/react-stripe-js'
import { PaymentFormContainer , FormContainer } from './payment-form.style'
import Button , {buttonClassTypes} from '../buttons/button.component'

const PaymentForm = () => {
    const stripe = useStripe()
    const elements = useElements()
    const paymentHandler = async (event) => {
        event.preventDefault()

        if(!stripe || !elements) return 
        
    }
    return (
        <PaymentFormContainer>
            <FormContainer>
                <h2>Credit Card Payment: </h2>
                <CardElement/>
                <Button buttonType={buttonClassTypes.inverted}>Pay now</Button>
            </FormContainer>
        </PaymentFormContainer>
    )
}
export default PaymentForm