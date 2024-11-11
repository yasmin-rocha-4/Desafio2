document.getElementById('menu-toggle').addEventListener('click', function() {
    const menu = document.getElementById('nav-links');
    menu.classList.toggle('show');
});

const products = [
    { title: "Graphic Design", category: "English Department", oldPrice: "$15.48", newPrice: "$6.48", imgSrc: "/imagens-produtos/produto1.png" },
    { title: "Graphic Design", category: "English Department", oldPrice: "$15.48", newPrice: "$6.48", imgSrc: "/imagens-produtos/product2.png" },
    { title: "Graphic Design", category: "English Department", oldPrice: "$15.48", newPrice: "$6.48", imgSrc: "/imagens-produtos/product3.png" },
    { title: "Graphic Design", category: "English Department", oldPrice: "$15.48", newPrice: "$6.48", imgSrc: "/imagens-produtos/product4.png" },
    { title: "Graphic Design", category: "English Department", oldPrice: "$15.48", newPrice: "$6.48", imgSrc: "/imagens-produtos/product5.png" },
    { title: "Graphic Design", category: "English Department", oldPrice: "$15.48", newPrice: "$6.48", imgSrc: "/imagens-produtos/product6.png" },
    { title: "Graphic Design", category: "English Department", oldPrice: "$15.48", newPrice: "$6.48", imgSrc: "/imagens-produtos/product7.png" },
    { title: "Graphic Design", category: "English Department", oldPrice: "$15.48", newPrice: "$6.48", imgSrc: "/imagens-produtos/product8.png" },
];

const productGallery = document.getElementById("product-gallery");
const loadMoreBtn = document.getElementById("loadMoreBtn");
let visibleProducts = 6; 
let showingAll = false; 

function displayProducts() {
    productGallery.innerHTML = ""; 

    products.slice(0, visibleProducts).forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        productDiv.innerHTML = `
            <img src="${product.imgSrc}" alt="${product.title}">
            <div class="product-title">${product.title}</div>
            <div class="product-category">${product.category}</div>
            <div class="product-price">
                <span class="old-price">${product.oldPrice}</span>
                <span class="new-price">${product.newPrice}</span>
            </div>
        `;
        productGallery.appendChild(productDiv);
    });

    loadMoreBtn.textContent = showingAll ? "Show less" : "Load more products";
}

displayProducts(); 

loadMoreBtn.addEventListener("click", () => {
    if (showingAll) {
        visibleProducts = 6; 
        showingAll = false;
    } else {
        visibleProducts = products.length; 
        showingAll = true;
    }
    displayProducts();
});
function validateEmail() {
    const emailInput = document.getElementById("email").value;
    const alertContainer = document.getElementById("alert-container");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailPattern.test(emailInput)) {
        showAlert("Successo! Um email será enviado a você.", "success");
    } else {
        showAlert("Email invalido, por favor tente novamente.", "error");
    }
}

function showAlert(message, type) {
    const alertContainer = document.getElementById("alert-container");

    // Limpa qualquer alerta anterior
    alertContainer.innerHTML = "";
    alertContainer.style.display = "block";

    // Cria o div de alerta
    const alert = document.createElement("div");
    alert.classList.add("alert");

    if (type === "success") {
        alert.classList.add("alert-success");
        alert.innerHTML = `
            <span class="alert-icon">✔️</span>
            <span>${message}</span>
        `;
    } else {
        alert.classList.add("alert-error");
        alert.innerHTML = `
            <span class="alert-icon">❌</span>
            <span>${message}</span>
        `;
    }

    alertContainer.appendChild(alert);
    setTimeout(() => {
        alertContainer.style.display = "none";
    }, 3000);
}
