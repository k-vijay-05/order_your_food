import React,  { useContext } from 'react'
import { assets } from '../../assets/assets'
import './FoodItem.css'
import { Storecontext } from '../../context/Storecontext'

const Fooditem = ({ id, name, price, description, image }) => {
 
  const {cartItems, addTocart, removeFromcart}=useContext(Storecontext);
                     
   
   
  return (
    <div className='food-item'>
      <div className='food-item-image-container'>
        <img className='food-item-image' src={image} alt="" />
        {!cartItems[id]
          ? <img className='add' onClick={()=>addTocart(id)} src={assets.add_icon_white}/>
          :<div className='food-item-counter'>
            <img src={assets.remove_icon_red}  onClick={()=>removeFromcart(id)} alt="" />
            <p>{cartItems[id]}</p>
            <img src={assets.add_icon_green }  onClick={()=>addTocart(id)}  alt="" />
            
          </div>

        }
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>${price}</p>

      </div>
    </div>
  )
}

export default Fooditem

