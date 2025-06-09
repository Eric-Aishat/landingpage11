

const CartPage = ({ cart, setCart }) => {
    const removeFromCart = (indexToRemove) => {
      setCart(cart.filter((_, i) => i !== indexToRemove));
    };
  
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className="mb-4 p-4 border rounded shadow flex justify-between items-center">
              <div>
                <p className="font-semibold">{item.name}</p>
                <p>${item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(index)}
                className="text-red-500 border border-red-500 px-3 py-1 rounded hover:bg-red-100"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    );
  };
  
  export default CartPage;