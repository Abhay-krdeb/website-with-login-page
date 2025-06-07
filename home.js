// Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.getElementById('navLinks');
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
        
        // Countdown Timer
        function updateCountdown() {
            const days = document.querySelector('.countdown-box:nth-child(1) .countdown-value');
            const hours = document.querySelector('.countdown-box:nth-child(2) .countdown-value');
            const minutes = document.querySelector('.countdown-box:nth-child(3) .countdown-value');
            const seconds = document.querySelector('.countdown-box:nth-child(4) .countdown-value');
            
            // Set the target date (2 days from now)
            const targetDate = new Date();
            targetDate.setDate(targetDate.getDate() + 2);
            
            const now = new Date();
            const diff = targetDate - now;
            
            const d = Math.floor(diff / (1000 * 60 * 60 * 24));
            const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((diff % (1000 * 60)) / 1000);
            
            days.textContent = d.toString().padStart(2, '0');
            hours.textContent = h.toString().padStart(2, '0');
            minutes.textContent = m.toString().padStart(2, '0');
            seconds.textContent = s.toString().padStart(2, '0');
        }
        
        // Update countdown every second
        setInterval(updateCountdown, 1000);
        updateCountdown(); // Initial call
        
        // Add to Cart Functionality
        const addToCartButtons = document.querySelectorAll('.add-to-cart');
        const cartCount = document.querySelector('.cart-count');
        let count = 3;
        
        addToCartButtons.forEach(button => {
            button.addEventListener('click', () => {
                count++;
                cartCount.textContent = count;
                
                // Animation effect
                button.innerHTML = '<i class="fas fa-check"></i>';
                setTimeout(() => {
                    button.innerHTML = '<i class="fas fa-plus"></i>';
                }, 1000);
            });
        });