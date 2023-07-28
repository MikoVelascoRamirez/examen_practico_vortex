import Book from "./Book";
import "../App.css";

export default function List() {
  return (
    <div
      id="list-container"
      className="container-fluid d-flex mx-auto flex-wrap justify-content-between align-items-start p-3 overflow-auto"
    >
      <Book comments={2}>Libro 1</Book>
      <Book>Libro 2</Book>
      <Book comments={6}>Libro 3</Book>
      <Book comments={2}>Libro 4</Book>
      <Book>Libro 5</Book>
      <Book>Libro 6</Book>
      <Book comments={13}>Libro 7</Book>
      <Book>Libro 8</Book>
      <Book comments={1}>Libro 9</Book>
      <Book>Libro 10</Book>
    </div>
  );
}
