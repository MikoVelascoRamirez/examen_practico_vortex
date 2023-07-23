import PropTypes from 'prop-types';

export default function Comment({user, comment}){
  return (
    <div>
        <h4>{user}</h4>
        <p>{comment}</p>
    </div>
  )
}

Comment.propTypes = {
    user: PropTypes.string,
    comment: PropTypes.string
}