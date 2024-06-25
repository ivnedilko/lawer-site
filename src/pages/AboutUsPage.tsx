import { Link } from "react-router-dom";

function AboutUsPage(){
  
  return (
    <>
      <ul>
        <li>
          <Link to={'/'}>Головна</Link>
        </li>
        <li>
          <Link to={'/about-us'}>Про компанію</Link>
        </li>
        <li>
          <Link to={'/contacts'}>Контакти</Link>
        </li>
      </ul>

      Про компанію
      <p>
        Місія. Візія.
        Принципи та переконання
      </p>
    </>
  )
}

export default AboutUsPage