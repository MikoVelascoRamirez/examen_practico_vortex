import InputControl from './InputControl'

export default function Form (){
  return (
    <form action="" className="container d-flex flex-column h-75 py-3 bg-secondary bg-opacity-25 rounded-4" id="form-login">
          <InputControl field={"User"} type={"text"}></InputControl>
          <InputControl field={"Password"} type={"password"}></InputControl>
        </fieldset>
        <div className='border-0 mx-auto'>
            <i className="fa-solid fa-door-open text-light"></i>
            <input type="submit" value="Iniciar sesión" name="btn_Login" className='py-2 bg-transparent border-0'/>
        </div>
    </form>
  )
}