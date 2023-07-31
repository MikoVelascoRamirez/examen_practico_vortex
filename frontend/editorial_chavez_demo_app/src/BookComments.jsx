import Caratula from "./components/Caratula"
import CommentsPanel from "./components/CommentsPanel"
import WriteComment from "./components/WriteComment"

export default function BookComments(){
  return (
    <section className="w-100 vh-100">
      <div className="row">
        <Caratula/>
        <CommentsPanel/>
      </div>
        <WriteComment/>
    </section>
  )
}