import Comment from "./Comment"

const CommentsPanel = () => {
  return (
    <div className="col-sm col-md-8">
        <Comment user={"Usuario 1"} comment={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea."}></Comment>
        <Comment user={"Usuario 2"} comment={"Lorem ipsum, dolor sit amet"}></Comment>
        <Comment user={"Usuario 3"} comment={"Lorem ipsum, dolor sit amet amet"}></Comment>
        <Comment user={"Usuario 4"} comment={"Lorem ipsum"}></Comment>
    </div>
  )
}

export default CommentsPanel