import Caratula from "./components/Caratula"
import CommentsPanel from "./components/CommentsPanel"
import WriteComment from "./components/WriteComment"

import "./App.css";

export default function BookComments(){
  return (
    <section className="container-fluid h-100 d-flex flex-column justify-content-between">
      <div className="row main-section">
        <Caratula/>
        <CommentsPanel/>
      </div>
        <WriteComment/>
    </section>
  )
}