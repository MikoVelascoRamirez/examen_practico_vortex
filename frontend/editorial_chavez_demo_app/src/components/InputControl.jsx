import PropTypes from 'prop-types';

export default function InputControl ({ field, type }){
  return (
    <label htmlFor={`txt_${field}`}>
        {field}:
        <input type={type} name={`txt_${field}`}/>
    </label>    
  )
}

InputControl.propTypes = {
    field: PropTypes.string,
    type: PropTypes.string
}