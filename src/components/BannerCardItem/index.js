import './index.css'
const cardList = props => {
  const {bannerList} = props
  const {title, description, className} = bannerList
  return (
    <li className={`${className} card-container`}>
      <div>
        <h1 className="head">{title}</h1>
        <p className="value">{description}</p>
        <button className="btn">Show More</button>
      </div>
    </li>
  )
}
export default cardList
