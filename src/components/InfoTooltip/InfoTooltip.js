import './InfoTooltip.css'

function InfoTooltip({isOpen,auth,onClose}) {
  return (
    <div className={ isOpen ? `popup popup_opened` : `popup`}>
      <div className={`popup__content`}>
        <button className="button popup__close" onClick={onClose} type="button"></button>
        <p className="popup__title">
          {auth ? "Вы успешно обновили профиль!" : "Что-то пошло не так! Попробуйте ещё раз."}
        </p>
      </div>
    </div>
  )
}

export default InfoTooltip;