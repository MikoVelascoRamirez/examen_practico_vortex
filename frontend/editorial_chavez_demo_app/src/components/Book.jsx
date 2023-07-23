import PropTypes from 'prop-types'

export default function Book({children, comments}){
  return (
    <div>
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