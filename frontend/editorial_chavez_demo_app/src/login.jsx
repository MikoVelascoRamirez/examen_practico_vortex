import './App.css'
import Form from './components/Form';
import editorial from './assets/editorial.jpg';

export default function Login() {    
  return (
    <section>
      <Form/>
      <img src={editorial} alt="editorial" />
    </section>
  )
}
