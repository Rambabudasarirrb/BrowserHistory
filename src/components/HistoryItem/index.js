import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails

  const onClickDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="list-item-container">
      <p className="time">{timeAccessed}</p>
      <img src={logoUrl} className="Image-logo" alt="domain logo" />
      <p className="heading">{title}</p>
      <p className="domain-url">{domainUrl}</p>

      <div>
        <button
          type="button"
          className="delete-btn"
          testid="delete"
          onClick={onClickDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="delete-button"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
