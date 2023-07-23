export default function FilterBy(){
  return (
    <form action="">
      <label htmlFor="filter">Buscar por:</label>      
      <select name="filter">
        <option selected disabled>Seleccione una opción</option>
        <option value="">Género</option>
        <option value="">Serie</option>
      </select>
      <input type="submit" value="Buscar" name="inpt_Buscar"/>
    </form>
  )
}