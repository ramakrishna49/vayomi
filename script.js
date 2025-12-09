console.log(" Boutique Navigation Loaded");
 
        // SIMPLE CART SYSTEM
        let cartCount = localStorage.getItem("cartCount") ? parseInt(localStorage.getItem("cartCount")) : 0;

        function updateCartIcon() {
            const badge = document.getElementById("cart-count");
            if (!badge) return;
            badge.textContent = cartCount;
            badge.style.display = cartCount > 0 ? "inline-block" : "none";
        }

        function showToast() {
            const toast = document.getElementById("cart-toast");
            if (!toast) return;
            toast.classList.add("show");
            setTimeout(() => toast.classList.remove("show"), 2000);
        }

        function addToCart() {
            cartCount++;
            localStorage.setItem("cartCount", cartCount);
            updateCartIcon();
            showToast();
        }

        updateCartIcon();
   


        