export default function FilterBy(){
  return (
    <form action="" className="d-flex justify-content-evenly col-5">
        <option selected disabled>Seleccione una opción</option>
        <option value="">Género</option>
        <option value="">Serie</option>
      </select>
      <input type="submit" value="Buscar" name="inpt_Buscar"/>
    </form>
  )
}