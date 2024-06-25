import { Link } from "react-router-dom";

function MainPage(){
  
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

      Головна
      <p>
        Феста – системна юридична компанія, яка супроводжує бізнес
      </p>
    </>
  )
}

export default MainPage