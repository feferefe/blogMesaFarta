document.addEventListener("DOMContentLoaded", function() {
    
    fetch("components/_header.html") 
        .then(response => response.text()) 
        .then(data => {
            const headerPlaceholder = document.getElementById("header-placeholder")
            if (headerPlaceholder) headerPlaceholder.innerHTML = data;
        })

    fetch("components/_footer.html") 
        .then(response => response.text()) 
        .then(data => {
            const footerPlaceholder = document.getElementById("footer-placeholder")
            if (footerPlaceholder) footerPlaceholder.innerHTML = data;
        })
    
    const contactForm = document.getElementById("contact-form")
    const formWrapper = document.getElementById("form-wrapper")
    const obrigadoMsg = document.getElementById("obrigado-mensagem")

    if (contactForm && formWrapper && obrigadoMsg) {
        
        contactForm.addEventListener("submit", function(event) {
            
            event.preventDefault(); 

            formWrapper.style.display = "none"
            obrigadoMsg.style.display = "block"
        
            window.scrollTo(0, 0)
        })
    }
})