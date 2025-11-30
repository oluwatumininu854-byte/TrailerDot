document.addEventListener('DOMContentLoaded', function() {
    
    // --- Logic for ORDER PAGE (order.html) ---
    if (document.getElementById('trailerOrderForm')) {
        
        const form = document.getElementById('trailerOrderForm');
        const paymentSection = document.getElementById('payment-gateway');
        const mockButton = document.getElementById('mockPaymentButton');
        const packageSelect = document.getElementById('package');

        // 1. Handle pre-selection from services.html (if link was clicked)
        const urlParams = new URLSearchParams(window.location.search);
        const preSelectedPackage = urlParams.get('package');
        if (preSelectedPackage) {
            packageSelect.value = preSelectedPackage;
        }

        // 2. Handle form submission (Move to Payment Step)
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const packageValue = packageSelect.value;
            let price = 0;
            let packageName = '';

            // Assign price based on selection
            if (packageValue === 'standard') {
                // NEW PRICE
                price = 950;
                packageName = 'Standard Trailer';
            } else if (packageValue === 'premium') {
                // NEW PRICE
                price = 1250;
                packageName = 'Premium Trailer';
            } else {
                alert('Please select a valid package before proceeding.');
                return;
            }

            const bookTitle = document.getElementById('bookTitle').value;
            const email = document.getElementById('email').value;

            // Transition from form to payment view
            document.getElementById('order-form-container').style.display = 'none';
            paymentSection.style.display = 'block';

            document.getElementById('payment-amount').innerHTML = 
                `**Confirming:** You are ordering the **${packageName}** for **$${price}**. Total amount due: **$${price}**.`;

            // NOTE: In a live app, secure payment processing would be triggered here.
        });

        // 3. Mock payment completion handler (for demonstration only)
        mockButton.addEventListener('click', function() {
            document.getElementById('payment-message').innerHTML = 
                "✅ **Success!** Your order payment has been completed. Check your email for confirmation. (This is a demo only.)";
            this.style.display = 'none'; // Hide button after "payment"
        });
    }

    // --- Logic for CONTACT PAGE (contact.html) ---
    if (document.getElementById('contactForm')) {
        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault();
            // This alert simulates success. A real contact form needs a backend.
            alert('Thank you for your message! We will get back to you shortly. (Note: This is a static demo, real emails are not sent.)');
            this.reset();
        });
    }
});
