import CartContext from '../../context/CartContext'
import './index.css'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {addQuantity, deleteQuantity} = value
      const {cartItemDetails} = props
      const {name, cost, imageUrl, id, quantity} = cartItemDetails

      const onClickMinus = () => {
        deleteQuantity(id)
      }

      const onClickPlus = () => {
        addQuantity(id)
      }

      return (
        <li className="cart-item">
          <img src={imageUrl} className="cart-item-display-image" alt={name} />
          <div className="details-container">
            <h1 className="item-name">{name}</h1>

            <div className="quantity-control">
              <button
                type="button"
                className="btn"
                onClick={onClickMinus}
                data-testid="decrement-quantity"
              >
                -
              </button>
              <p className="quantity" data-testid="item-quantity">
                {quantity}
              </p>
              <button
                type="button"
                className="btn"
                onClick={onClickPlus}
                data-testid="increment-quantity"
              >
                +
              </button>
            </div>
            <p>{cost * quantity}</p>
          </div>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
