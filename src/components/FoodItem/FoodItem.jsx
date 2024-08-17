import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'

const FoodItem = ({_id,name,price,description,image}) => {
    
    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext)

  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img src={image} alt="" className="food-item-image" />
            {!cartItems[_id]
            ?<img className='add' onClick={()=>addToCart(_id)} src={assets.add_icon_white} alt="" />
            :<div className="food-item-counter">
                <img src={assets.remove_icon_red} onClick={()=>removeFromCart(_id)} alt="" />
                <p>{cartItems[_id]}</p>
                <img src={assets.add_icon_green} onClick={()=>addToCart(_id)} alt="" />
            </div>

            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">Rs.{price}</p>
        </div>
      
    </div>
  )
}

export default FoodItem
