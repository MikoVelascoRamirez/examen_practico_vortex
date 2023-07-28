import PropTypes from 'prop-types'

export default function Book({children, comments}){
  return (
    <div className='bg-primary col-lg-2 col-md-3 col-sm-4 mx-sm-2 d-flex justify-content-center h-50 my-2 align-items-center text-white position-relative book mx-auto'>
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