import PropTypes from 'prop-types';

export default function InputControl ({ field, type }){
  return (
    <label htmlFor={`txt_${field}`} className="d-flex justify-content-end col-8 my-2 text-light">
        {field}:
        <input type={type} name={`txt_${field}`} className="mx-2 bg-light border-0 rounded text-black px-1 pb-2"/>
    </label>
  )
}

InputControl.propTypes = {
    field: PropTypes.string,
    type: PropTypes.string
}