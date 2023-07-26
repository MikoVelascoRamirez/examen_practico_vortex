import FilterBy from "./FilterBy";

export default function HeaderCatalog(){
  return (
    <header className="d-flex flex-md-row justify-content-between bg-white bg-opacity-25 py-3">
      <nav className="d-flex justify-content-around col-xs-12 col-sm-6 fs-5 text-light" id="nav">
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