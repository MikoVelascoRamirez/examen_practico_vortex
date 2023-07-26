import PropTypes from 'prop-types'

export default function Book({children, comments}){
  return (
    <div className='border col-2 h-50 my-4 mx-2 d-flex justify-content-center align-items-center text-white position-relative'>
        {
            comments ?? <small>{comments}</small>
        }
        <p>{children}</p>
    </div>
  )
}

Book.propTypes = {
    children : PropTypes.string,
    comments: PropTypes.number
}