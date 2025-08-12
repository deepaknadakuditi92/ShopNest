document.addEventListener('DOMContentLoaded', () => {
  const products = [
    {
      name: "Wireless Headphones",
      image: "https://source.unsplash.com/300x300/?headphones",
      price: "₹1,499"
    },
    {
      name: "Smart Watch",
      image: "https://source.unsplash.com/300x300/?smartwatch",
      price: "₹2,999"
    },
    {
      name: "Stylish Sneakers",
      image: "https://source.unsplash.com/300x300/?shoes",
      price: "₹1,899"
    },
    {
      name: "Sunglasses",
      image: "https://source.unsplash.com/300x300/?sunglasses",
      price: "₹999"
    }
  ];

  const productGrid = document.getElementById('productGrid');

  products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <button>Add to Cart</button>
    `;
    productGrid.appendChild(card);
  });
});
