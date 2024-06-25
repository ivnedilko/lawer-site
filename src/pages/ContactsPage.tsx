import { Link } from "react-router-dom";

function ContactsPage(){
  
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

      Контакти
      <p>
        Контактна інформація
      </p>
    </>
  )
}

export default ContactsPage