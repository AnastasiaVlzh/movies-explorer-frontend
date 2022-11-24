import './ServerError.css';

const ServerError = () => {
  return (
    <span className="error__server">
      Во время запроса произошла ошибка. Возможно, проблема с соединением или
      сервер недоступен. Подождите немного и попробуйте ещё раз
    </span>
  );
};

export default ServerError;