export default function FilterBy(){
  return (
    <form action="" className="d-flex justify-content-evenly col-5">
      <label htmlFor="filter" className="d-flex align-items-center justify-content-center col-3 text-white">Buscar por:</label>
      <select name="filter" className="col-6 ps-2">
        <option selected disabled>Seleccione una opción</option>
        <option value="">Género</option>
        <option value="">Serie</option>
      </select>
      <input type="submit" value="Buscar" name="inpt_Buscar"/>
    </form>
  )
}