import './App.css'
import Form from './components/Form';
import editorial from './assets/editorial.png';

export default function Login() {    
  return (
    <section className="container d-flex justify-content-center align-items-center h-75 mx-auto row w-100" id="login">
      <div className="col-md-6 col-sm-12">
        <Form />
      </div>
      <div className="col-5 d-none d-sm-none d-md-block">
        <img src={editorial} alt="editorial" className='w-100'/>
      </div>
    </section>
  )
}