import InputControl from './InputControl'

export default function Form (){
  return (
    <form action="">
        <h1>Inicio de sesión</h1>
        <InputControl field={"User"} type={"text"}></InputControl>
        <InputControl field={"Password"} type={"password"}></InputControl>
        <span>
          <i className="bi bi-door open"></i>          
          <input type="submit" value="Iniciar sesión" name="btn_Login"/>
        </span>
            
            
    </form>
  )
}