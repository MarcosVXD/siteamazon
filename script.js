document.addEventListener('DOMContentLoaded', () => {
    

    let cartCount = 0;
    const cartCountElement = document.getElementById('nav-cart-count');
    const shopLinks = document.querySelectorAll('.shop-link');

    shopLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); 
            
            cartCount++;
            cartCountElement.innerText = cartCount;

            
            const originalText = link.innerText;
            link.style.color = "#C7511F";
            link.innerText = "Adicionado!";
            
            setTimeout(() => {
                link.style.color = "#007185";
                link.innerText = originalText;
            }, 1500);
        });
    });

    
    const menuToggle = document.getElementById('menu-toggle');
    menuToggle.addEventListener('click', () => {
        alert('Aqui abriria o painel lateral escuro (Offcanvas) da Amazon com todas as categorias.');
    });

});


function scrollCarousel(carouselId) {
    const carousel = document.getElementById(carouselId);
    
    if (carousel) {
        carousel.scrollBy({ left: 600, behavior: 'smooth' });
    }
}