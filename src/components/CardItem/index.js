import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <div className="cards-container">
      <div>
        <li className={className}>
          <h1 className="head">{title}</h1>
          <p className="para">{description}</p>
          <div className="image-container">
            <img src={imgUrl} className="image-sizing" alt={title} />
          </div>
        </li>
      </div>
    </div>
  )
}

export default CardItem
