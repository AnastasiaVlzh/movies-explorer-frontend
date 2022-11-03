import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="notfound">
      <div className="notfound__content">
        <h1 className="notfound__title">404</h1>
        <p className="notfound__subtitle">Страница не найдена</p>
        <Link className="link notfound__link" to="/">
          Назад
        </Link>
      </div>
    </div>
  );
};

export default NotFound;