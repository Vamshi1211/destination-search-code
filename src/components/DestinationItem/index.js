// Write your code here
import './index.css'

const DestinationItems = props => {
  const {eachDestinationItem} = props
  const {name, imgUrl, key} = eachDestinationItem
  //   console.log(name)
  return (
    <li className="destination-item-container">
      <img src={imgUrl} alt={name} className="destination-img" />
      <p className="destination-item">{name}</p>
    </li>
  )
}

export default DestinationItems
