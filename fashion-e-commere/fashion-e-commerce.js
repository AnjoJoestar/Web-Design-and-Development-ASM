const products = [
    { id: 1, name: "Men's Jacket", category: "Men", price: 50, image: "images/jacket.jpg" },
    { id: 2, name: "Women's Dress", category: "Women", price: 40, image: "images/dress.jpg" },
    { id: 3, name: "Leather Belt", category: "Accessories", price: 15, image: "images/belt.jpg" },
    { id: 4, name: "Sneakers", category: "Men", price: 60, image: "images/sneakers.jpg" },
    { id: 5, name: "Handbag", category: "Women", price: 70, image: "images/handbag.jpg" },
    { id: 6, name: "Sunglasses", category: "Accessories", price: 20, image: "images/sunglasses.jpg" }
];

let cart = [];
let isFirstOrder = true;

function displayProducts(filteredProducts = products) {
    const productContainer = document.getElementById("products");
    productContainer.innerHTML = "";

    filteredProducts.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productElement);
    });
}

function searchProducts() {
    const searchText = document.getElementById("searchBar").value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchText)
    );
    displayProducts(filteredProducts);
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
    }
}

function updateCart() {
    const cartCountDisplay = document.getElementById("cart-count");
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const discountInfo = document.getElementById("discount-info");

    cartCountDisplay.innerText = cart.length;
    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const li = document.createElement("li");
        li.innerHTML = `
            <img src="${item.image}" width="50">
            ${item.name} - $${item.price}
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(li);
    });

    const discount = applyCoupon(total);
    cartTotal.innerText = `Total: $${total - discount}`;
    discountInfo.innerText = discount > 0 ? `You saved $${discount}!` : "";
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Apply Coupon Function
function applyCoupon(total) {
    const couponCode = document.getElementById("coupon-code").value.toUpperCase();
    let discount = 0;

    if (couponCode === "FIRSTORDER" && isFirstOrder) {
        discount = total * 0.10; // 10% off
        isFirstOrder = false;
    } else if (couponCode === "SAVE20" && total > 100) {
        discount = 20; // Flat $20 off
    } else if (couponCode === "FREESHIP" && total > 50) {
        discount = 5; // Assuming $5 is shipping cost
    } else if (couponCode !== "") {
        alert("Invalid or Inapplicable Coupon Code.");
    }

    return discount;
}

// Account Modal for Login and Register
document.getElementById("account-icon").onclick = () => {
    const authModal = document.getElementById("auth-modal");
    authModal.style.display = "flex";

    authModal.innerHTML = `
        <div class="auth-container">
            <h2>Welcome to Whale Fashion Store</h2>
            <button onclick="navigateTo('login.html')">Login</button>
            <button onclick="navigateTo('register.html')">Register</button>
            <button onclick="closeModal()">Close</button>
        </div>
    `;
};

function navigateTo(page) {
    window.location.href = page;
}

function closeModal() {
    document.getElementById("auth-modal").style.display = "none";
}

// Banner Slideshow
const bannerImages = ["images/banner1.jpg", "images/banner2.jpg", "images/banner3.jpg"];
let currentBannerIndex = 0;

function changeBanner(index) {
    currentBannerIndex = (index + bannerImages.length) % bannerImages.length;
    document.getElementById("banner-img").src = bannerImages[currentBannerIndex];
}

// Auto switch banners every 5 seconds
setInterval(() => changeBanner(currentBannerIndex + 1), 5000);

document.getElementById("prev-btn").onclick = () => changeBanner(currentBannerIndex - 1);
document.getElementById("next-btn").onclick = () => changeBanner(currentBannerIndex + 1);

// Initialize Products on Page Load
document.addEventListener("DOMContentLoaded", () => {
    displayProducts();

    document.getElementById("cart-icon").onclick = () => {
        document.getElementById("cart-modal").style.display = "flex";
    };

    document.getElementById("close-cart").onclick = () => {
        document.getElementById("cart-modal").style.display = "none";
    };
});
// Account Modal for Login and Register
document.getElementById("account-icon").onclick = () => {
    const authModal = document.getElementById("auth-modal");
    authModal.style.display = "flex";
};

document.getElementById("close-auth-modal").onclick = () => {
    document.getElementById("auth-modal").style.display = "none";
};

function navigateTo(page) {
    window.location.href = page;
}
function updateCart() {
    const cartCountDisplay = document.getElementById("cart-count");
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const discountInfo = document.getElementById("discount-info");

    cartCountDisplay.innerText = cart.length;
    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const li = document.createElement("li");
        li.innerHTML = `
            <img src="${item.image}" width="50">
            ${item.name} - $${item.price}
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(li);
    });

    // Ensure the coupon input exists before trying to apply a coupon
    let discount = 0;
    const couponInput = document.getElementById("coupon-code");
    if (couponInput) {
        discount = applyCoupon(total);
    }

    const finalTotal = total - discount;
    cartTotal.innerText = `Total: $${finalTotal.toFixed(2)}`;
    discountInfo.innerText = discount > 0 ? `You saved $${discount.toFixed(2)}!` : "";
}
