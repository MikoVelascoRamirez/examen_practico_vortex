import Caratula from "./components/Caratula"
import CommentsPanel from "./components/CommentsPanel"
import WriteComment from "./components/WriteComment"

export default function BookComments(){
  return (
    <section>
        <Caratula/>
        <CommentsPanel/>
        <WriteComment/>
    </section>
  )
}