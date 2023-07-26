import PropTypes from 'prop-types'

export default function Book({children, comments}){
  return (
    <div className='border col-2 h-50 my-4 mx-2 d-flex justify-content-center align-items-center text-white position-relative'>
        {
            !comments || <small className='position-absolute top-0 start-100 translate-middle badge bg-success rounded-circle p-2'>{comments}</small>
        }
        <p className='text-center'>{children}</p>
    </div>
  )
}

Book.propTypes = {
    children : PropTypes.string,
    comments: PropTypes.number
}