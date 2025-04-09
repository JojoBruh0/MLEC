let carData = [
    { name: 'LaFerrari', type: 'car', category: 'Ferrari', price: 2500000, image: 'https://www.supercars.net/blog/wp-content/uploads/2020/07/731493-scaled.jpg' },
    { name: 'Ferrari F40', type: 'car', category: 'Ferrari', price: 900000, image: 'https://static1.topspeedimages.com/wordpress/wp-content/uploads/jpg/202208/1-000-hp-ferrari-f40-9.jpg' },
    { name: 'Ferrari Barracuda',  type: 'bike', category: 'Ferrari', price: 800000, image: 'https://i.ytimg.com/vi/1dmchVVWVO0/maxresdefault.jpg' },
    { name: 'Lamborghini Aventador SVJ',  type: 'car', category: 'Lamborghini', price: 1500000, image: 'https://s1.paultan.org/image/2019/03/Lamborghini-Aventador-SVJ-Roadster-5.jpg' },
    { name: 'Lamborghini Revuelto',  type: 'car', category: 'Lamborghini', price: 4000000, image: 'https://cdn.automobile-propre.com/uploads/2023/03/Lamborghini-Revuelto-4.jpg' },
    { name: 'Lamborghini 63 Motor Yacht',  type: 'boat', category: 'Lamborghini', price: 5000000, image: 'https://itboat.com/uploads/9765/b4f4f10ab434.jpg' },
    { name: 'Ducati Diavel 1260 Lamborghini',  type: 'bike', category: 'Lamborghini', price: 1000000, image: 'https://cimg2.ibsrv.net/ibimg/hgm/1920x1080-1/100/771/ducati-diavel-1260-lamborghini_100771046.jpg' },
    { name: 'Koenigsegg Agera',  type: 'car', category: 'Koenigsegg', price: 3500000, image: 'https://cdn.wallpapersafari.com/48/42/uzjs0L.jpeg' },
    { name: 'Koenigsegg Jesko Attack',  type: 'car', category: 'Koenigsegg', price: 3000000, image: 'https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2022/08/2022-Koenigsegg-Jesko-Via-Koenigsegg.jpg' },
    { name: 'Porsche 911 GT3 RS',  type: 'car', category: 'Porsche', price: 2500000, image: 'https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXkBuNYdMGF4tl3U0%25z8rMHIspbWvanYb%255y%25oq%25vSTmjMXD4qAZeoNBPUSfUx4RmHlCgI7Zl2dioCxkF%25vUqCNwuWXsO7QNeV6iTxjgzhRc2LUjqA7fQrmVOJUPYDImTB8VuyY0oVk0DBRlqvzpQNqjdtAsvyJ5I' },
    { name: 'Porsche 911 Carrera GTS',  type: 'car', category: 'Porsche', price: 1500000, image: 'https://bringatrailer.com/wp-content/uploads/2022/01/2016_porsche_911-carrera-gts_2016_porsche_911-carrera-gts_542dd66a-84ca-492a-95fa-bba140312069-dbidyn-17684.jpg' },
    { name: 'Porsche 135 Royal Falcon Yacht',  type: 'boat', category: 'Porsche', price: 5000000, image: 'https://s3.amazonaws.com/boss.yatco.com/ForSale/Vessel/Photo/301336/large_3323418.jpg' },
];

// Cart to keep track of items
let cartItems = [];

// Function to render car list based on filtered cars
function renderCars(filteredCars) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear the existing list

    filteredCars.forEach(car => {
        const carDiv = document.createElement('div');
        carDiv.classList.add('product-item');
        carDiv.innerHTML = `
            <img src="${car.image}" alt="${car.name}" class="product-image">
            <h3>${car.name}</h3>
            <p>Category: ${car.category}</p>
            <p>Price: ₱${car.price.toLocaleString()}</p>  <!-- Format price with commas -->
            <button class="add-to-cart" onclick="addToCart('${car.name}', ${car.price}, '${car.image}')">Add to Cart</button>
        `;
        productList.appendChild(carDiv);
    });
}

// Function to add a car to the cart and manage quantity
function addToCart(carName, carPrice, carImage) {
    const cartCount = document.getElementById('cart-count');
    const cartList = document.getElementById('cart-list');
    const totalPrice = document.getElementById('total-price');

    // Check if the car is already in the cart
    const existingCarIndex = cartItems.findIndex(item => item.name === carName);

    if (existingCarIndex !== -1) {
        // Car is already in the cart, increase the quantity
        cartItems[existingCarIndex].quantity += 1;
    } else {
        // Car is not in the cart, add it
        cartItems.push({
            name: carName,
            price: carPrice,
            image: carImage,
            quantity: 1
        });
    }

    // Clear the cart list and rebuild it
    cartList.innerHTML = '';
    let newTotal = 0;
    cartItems.forEach((item, index) => {
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            ${item.name} - ₱${item.price.toLocaleString()} x ${item.quantity}
            <button onclick="removeFromCart(${index})">Remove</button> <!-- Remove button -->
        `;
        cartList.appendChild(cartItem);

        // Update the total price
        newTotal += item.price * item.quantity;
    });

    // Update cart count and total price
    cartCount.textContent = cartItems.length;
    totalPrice.textContent = `Total: ₱${newTotal.toLocaleString()}`;
}

// Function to add a car to the cart and manage quantity
function addToCart(carName, carPrice, carImage) {
    const cartCount = document.getElementById('cart-count');
    const cartList = document.getElementById('cart-list');
    const totalPrice = document.getElementById('total-price');

    // Check if the car is already in the cart
    const existingCarIndex = cartItems.findIndex(item => item.name === carName);

    if (existingCarIndex !== -1) {
        // Car is already in the cart, increase the quantity
        cartItems[existingCarIndex].quantity += 1;
    } else {
        // Car is not in the cart, add it
        cartItems.push({
            name: carName,
            price: carPrice,
            image: carImage,
            quantity: 1
        });
    }

    // Clear the cart list and rebuild it
    cartList.innerHTML = '';
    let newTotal = 0;
    cartItems.forEach((item, index) => {
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            ${item.name} - ₱${item.price.toLocaleString()} x ${item.quantity}
            <button onclick="decreaseQuantity(${index})">-</button>
            <button onclick="increaseQuantity(${index})">+</button>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartList.appendChild(cartItem);

        // Update the total price
        newTotal += item.price * item.quantity;
    });

    // Update cart count and total price
    cartCount.textContent = cartItems.length;
    totalPrice.textContent = `Total: ₱${newTotal.toLocaleString()}`;
}

// Function to decrease the quantity of a car in the cart
function decreaseQuantity(index) {
    const cartCount = document.getElementById('cart-count');
    const cartList = document.getElementById('cart-list');
    const totalPrice = document.getElementById('total-price');

    // Decrease the quantity
    if (cartItems[index].quantity > 1) {
        cartItems[index].quantity -= 1;
    } else {
        // If the quantity is 1, remove the item from the cart
        cartItems.splice(index, 1);
    }

    // Clear the cart list and rebuild it
    cartList.innerHTML = '';
    let newTotal = 0;
    cartItems.forEach((item, index) => {
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            ${item.name} - ₱${item.price.toLocaleString()} x ${item.quantity}
            <button onclick="decreaseQuantity(${index})">-</button>
            <button onclick="increaseQuantity(${index})">+</button>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartList.appendChild(cartItem);

        // Update the total price
        newTotal += item.price * item.quantity;
    });

    // Update cart count and total price
    cartCount.textContent = cartItems.length;
    totalPrice.textContent = `Total: ₱${newTotal.toLocaleString()}`;
}

// Function to increase the quantity of a car in the cart
function increaseQuantity(index) {
    const cartCount = document.getElementById('cart-count');
    const cartList = document.getElementById('cart-list');
    const totalPrice = document.getElementById('total-price');

    // Increase the quantity
    cartItems[index].quantity += 1;

    // Clear the cart list and rebuild it
    cartList.innerHTML = '';
    let newTotal = 0;
    cartItems.forEach((item, index) => {
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            ${item.name} - ₱${item.price.toLocaleString()} x ${item.quantity}
            <button onclick="decreaseQuantity(${index})">-</button>
            <button onclick="increaseQuantity(${index})">+</button>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartList.appendChild(cartItem);

        // Update the total price
        newTotal += item.price * item.quantity;
    });

    // Update cart count and total price
    cartCount.textContent = cartItems.length;
    totalPrice.textContent = `Total: ₱${newTotal.toLocaleString()}`;
}

// Function to remove a car from the cart entirely
function removeFromCart(index) {
    const cartCount = document.getElementById('cart-count');
    const cartList = document.getElementById('cart-list');
    const totalPrice = document.getElementById('total-price');

    // Remove the item from the cart using the provided index
    cartItems.splice(index, 1);

    // Clear the cart list and rebuild it
    cartList.innerHTML = '';
    let newTotal = 0;
    cartItems.forEach((item, index) => {
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            ${item.name} - ₱${item.price.toLocaleString()} x ${item.quantity}
            <button onclick="decreaseQuantity(${index})">-</button>
            <button onclick="increaseQuantity(${index})">+</button>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartList.appendChild(cartItem);

        // Update the total price
        newTotal += item.price * item.quantity;
    });

    // Update cart count and total price
    cartCount.textContent = cartItems.length;
    totalPrice.textContent = `Total: ₱${newTotal.toLocaleString()}`;
}



// Function to filter cars by category
function filterCategory(category) {
    let filteredCars = carData;

    if (category !== 'All') {
        filteredCars = carData.filter(car => car.category === category);
    }

    renderCars(filteredCars);
}

// Function to search cars based on the search bar input
function searchCars() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();

    const filteredCars = carData.filter(car =>
        car.name.toLowerCase().includes(searchTerm) ||
        car.category.toLowerCase().includes(searchTerm) ||
        (car.type && car.type.toLowerCase().includes(searchTerm))
    );

    renderCars(filteredCars);
}




// Function to handle checkout (for demonstration purposes)
function checkout() {
    alert("Proceeding to checkout...");

    // Clear cart data
    cartItems = [];

    // Clear the cart list and reset UI
    const cartList = document.getElementById('cart-list');
    const totalPrice = document.getElementById('total-price');
    const cartCount = document.getElementById('cart-count');

    cartList.innerHTML = '';
    totalPrice.textContent = 'Total: ₱0.00';
    cartCount.textContent = '0';

    // Optionally hide cart after checkout
    toggleCart();
}


// Function to clear all items in the cart
function clearCart() {
    const cartList = document.getElementById('cart-list');
    const totalPrice = document.getElementById('total-price');
    const cartCount = document.getElementById('cart-count');

    // Clear the cart list
    cartList.innerHTML = '';

    // Reset the total price and cart count
    totalPrice.textContent = 'Total: ₱0.00';
    cartCount.textContent = '0';  // Assuming cartCount is a part of the cart UI for item count
}

// Initially render all cars
renderCars(carData);

// Function to toggle cart visibility
function toggleCart() {
    const cartContainer = document.getElementById('cart-container');
    const currentDisplay = cartContainer.style.display;

    // Toggle between showing and hiding the cart
    if (currentDisplay === 'none' || currentDisplay === '') {
        cartContainer.style.display = 'block';
    } else {
        cartContainer.style.display = 'none';
    }
}

// Initialize carousel functionality for image rotation
let currentSlide = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-img');
    const totalSlides = slides.length;

    // Hide current slide
    slides[currentSlide].style.display = "none";

    // Update current slide index
    currentSlide = (currentSlide + step + totalSlides) % totalSlides;

    // Show next slide
    slides[currentSlide].style.display = "block";
}

// Initialize the carousel by showing the first image
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.carousel-img');
    slides.forEach(slide => {
        slide.style.display = "none";
    });
    slides[currentSlide].style.display = "block";

    // Set the carousel to automatically move to the next slide every 3 seconds
    setInterval(function () {
        moveSlide(1);  // Automatically move to the next slide
    }, 3000); // 3000 milliseconds = 3 seconds
});
