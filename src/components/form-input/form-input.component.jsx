import {InputLabel,InputForm,Group} from './form-input.style.jsx'

const FormInput = ({label,...props}) => {
    return (
        <Group>
             
            <InputForm {...props} />
            {
                label 
                    && 
                <InputLabel shrink={props.value.length}>{ label }</InputLabel>
            }
            
        </Group>
    )
}
export default FormInput