const products = [
    { title: "Graphic Design", category: "English Department", oldPrice: "$15.48", newPrice: "$6.48", imgSrc: "produto1.png" },
    { title: "Graphic Design", category: "English Department", oldPrice: "$15.48", newPrice: "$6.48", imgSrc: "product2.png" },
    { title: "Graphic Design", category: "English Department", oldPrice: "$15.48", newPrice: "$6.48", imgSrc: "product3.png" },
    { title: "Graphic Design", category: "English Department", oldPrice: "$15.48", newPrice: "$6.48", imgSrc: "product4.png" },
    { title: "Graphic Design", category: "English Department", oldPrice: "$15.48", newPrice: "$6.48", imgSrc: "product5.png" },
    { title: "Graphic Design", category: "English Department", oldPrice: "$15.48", newPrice: "$6.48", imgSrc: "product6.png" },
    { title: "Graphic Design", category: "English Department", oldPrice: "$15.48", newPrice: "$6.48", imgSrc: "product7.png" },
    { title: "Graphic Design", category: "English Department", oldPrice: "$15.48", newPrice: "$6.48", imgSrc: "product8.png" },
    // Adicione mais produtos conforme necessário
];

const productGallery = document.getElementById("product-gallery");
const loadMoreBtn = document.getElementById("loadMoreBtn");
let visibleProducts = 6; // Número inicial de produtos visíveis
let showingAll = false; // Controle para alternar entre "Exibir mais" e "Exibir menos"

function displayProducts() {
    productGallery.innerHTML = ""; // Limpa a galeria

    // Mostra os produtos conforme o limite de visibilidade
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

    // Altera o texto do botão conforme a quantidade de produtos exibida
    loadMoreBtn.textContent = showingAll ? "Show less" : "Load more products";
}

displayProducts(); // Exibe os produtos inicialmente

// Evento de clique para alternar entre "Exibir mais" e "Exibir menos"
loadMoreBtn.addEventListener("click", () => {
    if (showingAll) {
        visibleProducts = 6; // Volta para o número inicial de produtos
        showingAll = false;
    } else {
        visibleProducts = products.length; // Exibe todos os produtos
        showingAll = true;
    }
    displayProducts();
});