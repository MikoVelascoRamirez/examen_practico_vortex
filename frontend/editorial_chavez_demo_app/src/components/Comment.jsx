import PropTypes from 'prop-types';

export default function Comment({user, comment}){
  return (
    <div className='card my-3 py-0 text-start' id="card">
      <section className="card-body">
        <h4 className='mt-2 card-title'>{user}</h4>
        <p className="text-body-secondary"><small>2 hours ago</small></p>
        <section className="d-flex flex-sm-column flex-md-row align-items-start justify-content-between card-text">
          <p className="card-text h-25 w-75 text-nowrap text-truncate overflow-hidden">{comment}</p>
          <button className="bg-transparent text-primary p-0">Ver comentario</button>
        </section>
      </section>
    </div>
  )
}

Comment.propTypes = {
    user: PropTypes.string,
    comment: PropTypes.string
}