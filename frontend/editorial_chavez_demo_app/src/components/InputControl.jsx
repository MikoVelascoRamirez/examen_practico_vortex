import PropTypes from 'prop-types';

export default function InputControl ({ field, type }){
  return (
    <div className='d-flex justify-content-end my-2 text-light w-100'>
      <label htmlFor={`txt_${field}`}> {field}: </label>
      <input type={type} name={`txt_${field}`} className="bg-light border-0 rounded text-black px-1 pb-2 ms-2"/>
    </div>
  )
}

InputControl.propTypes = {
    field: PropTypes.string,
    type: PropTypes.string
}