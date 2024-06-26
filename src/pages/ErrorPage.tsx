import { Link } from "react-router-dom";

function ErrorPage(){
  return(
    <div className="error_page_container">
      <h1>
        Сторінка не знайдена
      </h1>
      <Link to={'/'}>Перейти на головну сторінку</Link>
    </div>
  ) 
}
export default ErrorPage