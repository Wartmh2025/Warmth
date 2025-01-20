const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");


menuOpenButton.addEventListener("click", () => {
    // Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});


// Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click ());


// Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
 
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
 
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  function showProductDetails(product) {
    const modal = document.getElementById('product-modal');
    const modalContent = document.getElementById('modal-product-info');
    const productImg = document.getElementById(product + '-img').src; // Get the image URL


    // Add product details dynamically to the modal, including the image
    let content = '';
    if (product === 'product1') {
        content = `
            <img src="${productImg}" alt="Product 1" class="modal-product-img">
            <h3>Product 1</h3>
            <p class="price">$29.99</p>
            <p class="description">This is an amazing product. It helps you do everything you need in style!</p>
            <div class="actions">
                <!-- "I want this one" Button -->
                <button class="cta-btn" onclick="orderNow()">I want this one</button>


                <!-- Add to Cart Icon -->
                <button class="add-to-cart-btn" onclick="addToCart('product1')">
                    <i class="fa fa-shopping-cart cart-icon"></i>
                </button>


                <!-- Quantity Adjuster -->
                <div class="add-to-cart-quantity">
                    <button onclick="decreaseQuantity('product1')">-</button>
                    <span id="product1-quantity">1</span>
                    <button onclick="increaseQuantity('product1')">+</button>
                </div>
            </div>
        `;
    } else if (product === 'product2') {
        content = `
            <img src="${productImg}" alt="Product 2" class="modal-product-img">
            <h3>Product 2</h3>
            <p class="price">$19.99</p>
            <p class="description">A versatile product that can be used in many situations. Get yours today!</p>
            <div class="actions">
                <!-- "I want this one" Button -->
                <button class="cta-btn" onclick="orderNow()">I want this one</button>


                <!-- Add to Cart Icon -->
                <button class="add-to-cart-btn" onclick="addToCart('product2')">
                    <i class="fa fa-shopping-cart cart-icon"></i>
                </button>


                <!-- Quantity Adjuster -->
                <div class="add-to-cart-quantity">
                    <button onclick="decreaseQuantity('product2')">-</button>
                    <span id="product2-quantity">1</span>
                    <button onclick="increaseQuantity('product2')">+</button>
                </div>
            </div>
        `;
    } else if (product === 'product3') {
        content = `
            <img src="${productImg}" alt="Product 3" class="modal-product-img">
            <h3>Product 3</h3>
            <p class="price">$19.99</p>
            <p class="description">A versatile product that can be used in many situations. Get yours today!</p>
            <div class="actions">
                <!-- "I want this one" Button -->
                <button class="cta-btn" onclick="orderNow()">I want this one</button>


                <!-- Add to Cart Icon -->
                <button class="add-to-cart-btn" onclick="addToCart('product3')">
                    <i class="fa fa-shopping-cart cart-icon"></i>
                </button>


                <!-- Quantity Adjuster -->
                <div class="add-to-cart-quantity">
                    <button onclick="decreaseQuantity('product3')">-</button>
                    <span id="product3-quantity">1</span>
                    <button onclick="increaseQuantity('product3')">+</button>
                </div>
            </div>
        `;
    } else if (product === 'product4') {
        content = `
            <img src="${productImg}" alt="Product 4" class="modal-product-img">
            <h3>Product 4</h3>
            <p class="price">$19.99</p>
            <p class="description">A versatile product that can be used in many situations. Get yours today!</p>
            <div class="actions">
                <!-- "I want this one" Button -->
                <button class="cta-btn" onclick="orderNow()">I want this one</button>


                <!-- Add to Cart Icon -->
                <button class="add-to-cart-btn" onclick="addToCart('product4')">
                    <i class="fa fa-shopping-cart cart-icon"></i>
                </button>


                <!-- Quantity Adjuster -->
                <div class="add-to-cart-quantity">
                    <button onclick="decreaseQuantity('product4')">-</button>
                    <span id="product2-quantity">1</span>
                    <button onclick="increaseQuantity('product4')">+</button>
                </div>
            </div>
        `;
    }


    // Update the modal content
    modalContent.innerHTML = content;
    modal.style.display = 'block'; // Show the modal
}


// Functions to handle quantity changes
function decreaseQuantity(product) {
    const quantitySpan = document.getElementById(product + '-quantity');
    let currentQuantity = parseInt(quantitySpan.textContent, 10);
    if (currentQuantity > 1) {
        quantitySpan.textContent = currentQuantity - 1;
    }
}


function increaseQuantity(product) {
    const quantitySpan = document.getElementById(product + '-quantity');
    let currentQuantity = parseInt(quantitySpan.textContent, 10);
    quantitySpan.textContent = currentQuantity + 1;
}


function addToCart(product) {
    alert(product + " has been added to your cart!");
}


function closeModal() {
    const modal = document.getElementById('product-modal');
    modal.style.display = "none";  // Hide the modal when clicked outside
}


function orderNow() {
    alert("You can now order this product.");
}


document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".section-content");


  // Add click event to nav links
  navLinks.forEach(link => {
      link.addEventListener("click", function (e) {
          e.preventDefault(); // Prevent default anchor behavior
          const targetId = link.getAttribute("href").substring(1); // Get section ID
          const targetSection = document.getElementById(targetId);


          // Scroll to the section
          targetSection.scrollIntoView({ behavior: "smooth" });


          // Highlight the section (add animation)
          sections.forEach(section => section.classList.remove("active")); // Reset others
          targetSection.querySelector(".section-content").classList.add("active");
      });
  });


  // Add animation when scrolling into view (Intersection Observer)
  const observerOptions = {
      threshold: 0.3 // Trigger when 30% of the section is visible
  };


  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("active");
          }
      });
  }, observerOptions);


  sections.forEach(section => observer.observe(section));
});
