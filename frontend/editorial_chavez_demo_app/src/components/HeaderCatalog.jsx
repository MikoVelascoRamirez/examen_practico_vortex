import FilterBy from "./FilterBy";

export default function HeaderCatalog(){
  return (
    <header className="d-flex flex-md-row justify-content-between bg-white bg-opacity-25 nav-custom-height">
      <nav className="d-flex justify-content-around col-xs-12 col-sm-6 fs-5 text-light">
        <a href="" className="text-light fw-normal d-flex align-items-center">Género 1</a>
        <a href="" className="text-light fw-normal d-flex align-items-center">Género 2</a>
        <a href="" className="text-light fw-normal d-flex align-items-center">Género 3</a>
        <a href="" className="text-light fw-normal d-flex align-items-center">Género 4</a>
        <a href="" className="text-light fw-normal d-flex align-items-center">Género 5</a>
      </nav>
      <FilterBy />
    </header>
  )
}