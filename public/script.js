fetch('/products')
  .then(res => res.json())
  .then(products => {
    const container = document.getElementById('products');

    products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <img src="${product.image}" width="150">
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <p><strong>${product.price} EGP</strong></p>
        <button onclick="addToCart(${product.id})">
          Add to Cart
        </button>
      `;

      container.appendChild(card);
    });
  });

function addToCart(id) {
  alert("Product " + id + " added to cart!");
}
