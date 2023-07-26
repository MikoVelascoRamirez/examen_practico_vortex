import FilterBy from "./FilterBy";

export default function HeaderCatalog(){
  return (
    <header className="d-flex justify-content-between bg-white bg-opacity-25 py-3">
      <nav className="d-flex justify-content-around col-6 fs-4 text-light">
        <a href="" className="text-light fw-normal">Género 1</a>
        <a href="" className="text-light fw-normal">Género 2</a>
        <a href="" className="text-light fw-normal">Género 3</a>
        <a href="" className="text-light fw-normal">Género 4</a>
        <a href="" className="text-light fw-normal">Género 5</a>
      </nav>
      <FilterBy />
    </header>
  )
}