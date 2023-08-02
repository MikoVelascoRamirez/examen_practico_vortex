const WriteComment = () => {
  return (
    <div className="w-75 mx-auto comment-section d-flex flex-sm-column flex-lg-row align-items-center justify-content-around">
        <textarea name="comment" className="col-9 form-controi h-50 ps-2" placeholder="Escribe tu comentario"></textarea>
        <button className="col-2 bg-success">Comentar</button>
    </div>
  )
}

export default WriteComment;