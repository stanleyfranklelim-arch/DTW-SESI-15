document.addEventListener("DOMContentLoaded", () => {
    // Modal Terima Kasih
    const sendBtn = document.getElementById("sendBtn");
    const thankYouModal = new bootstrap.Modal(document.getElementById("thankYouModal"));

    sendBtn.addEventListener("click", () => {
        thankYouModal.show();
    });

    // Modal Detail Produk
    const productModal = new bootstrap.Modal(document.getElementById("productModal"));
    const detailButtons = document.querySelectorAll(".btn-detail");

    detailButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const name = btn.getAttribute("data-name");
            const price = btn.getAttribute("data-price");
            const desc = btn.getAttribute("data-desc");
            const specs = btn.getAttribute("data-specs");

            document.getElementById("productName").textContent = name;
            document.getElementById("productPrice").textContent = price;
            document.getElementById("productDesc").textContent = desc;
            document.getElementById("productSpecs").innerHTML = specs;

            productModal.show();
        });
    });
});