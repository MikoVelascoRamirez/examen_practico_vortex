import './App.css'
import Form from './components/Form';
import editorial from './assets/editorial.png';

export default function Login() {    
  return (
    <section className="container row align-items-start" id="login">
      <div className="col-6">
        <Form />
      </div>
      <div className="col-6">
        <img src={editorial} alt="editorial" className='container-fluid'/>
      </div>
    </section>
  )
}
