import { useState, useEffect } from "react";

export default function ProductsPage() {
  // Existing states (unchanged, included for context)

  const [product, setproduct] = useState(null)
  // Existing useEffect and fetch functions (unchanged, included for context)
  useEffect(() => {

  }, []);



  // Update addToBasket to add to temporary basket state
  
  return (
    <div className="products-page">
      <h2>Products Page</h2>
      {message && <p>{message}</p>}
      {userProfile && (
        <p>Wallet Balance: ${walletBalance.toFixed(2)}</p>
      )}
      {/* Basket Display */}
      <div className="basket-section">
        <h3>Your Basket</h3>
        <ul>
          {basket.map(item => {
            const product = allProducts.find(p => p.id === item.productId);
            return product ? (
              <li key={item.productId}>
                {product.name} - Price: ${product.offerPrice || product.price} x {item.quantity}
                <button onClick={() => addToBasket(item.productId, -1)}>Remove</button> {/* Optional: Decrease quantity */}
              </li>
            ) : null;
          })}
        </ul>
        {basket.length > 0 && (
          <div>
            <p>Total Cost: ${calculateBasketTotal().toFixed(2)}</p>
            <button onClick={purchaseBasket}>Purchase Basket</button>
          </div>
        )}
      </div>
      {/* Existing UI elements (unchanged, included for context) */}
      {/* ... (search, products, forms, tickets, profile, wallet, notifications) */}
      {/* Product list with add to basket */}
      <h3>All Products (For Purchase/Likes)</h3>
      <ul>
        {allProducts.map(product => (
          <li key={product.id}>
            {product.name} (${product.offerPrice || product.price} / Sell Count: {product.sellCount} / Likes: {product.likes?.length || 0})
            {product.owner?.username && ` by ${product.owner.username}`}
            {product.offerPrice && (
              <span> - Offer: ${product.offerPrice} (Valid until {new Date(product.offerEnd).toLocaleDateString()})</span>
            )}
            <button onClick={() => purchaseProduct(product.id)}>Purchase (Wallet: ${walletBalance.toFixed(2)})</button>
            {product.offerPrice || product.price > walletBalance && (
              <button onClick={() => purchaseProduct(product.id, true)}>Buy Directly</button>
            )}
            <button onClick={() => toggleLikeProduct(product.id)}>
              {product.likes?.includes(localStorage.getItem('userId')) ? 'Unlike' : 'Like'}
            </button>
            <Input onchangeF={(e) => setCommentText(e.target.value)} type="text" placeholder="Add a comment (pending approval)" value={commentText} />
            <button onClick={() => submitComment(product.id)}>Submit Comment</button>
            <button onClick={() => addToBasket(product.id)}>Add to Basket</button>
          </li>
        ))}
      </ul>
      {/* ... (rest of the UI) */}
    </div>
  );
}