import CartItem from "./CartItem"
import { useSelector, useDispatch } from "react-redux"
import { clearCart } from "../features/cart/cartSlice"

const CartContainer = () => {
  const { amount, total, cartItems } = useSelector((store) => store.cart)
  const dispatch = useDispatch()

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is empty</h4>
        </header>
      </section>
    )
  }

  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>

      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>$ {total}</span>
          </h4>
          <button
            className="btn clear-btn"
            onClick={() => dispatch(clearCart())}
          >
            clear
          </button>
        </div>
      </footer>
    </section>
  )
}
export default CartContainer
