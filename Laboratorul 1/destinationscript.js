document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});

const checkinInput = document.getElementById('checkin');
const checkoutInput = document.getElementById('checkout');

const today = new Date().toISOString().split('T')[0];
checkinInput.setAttribute('min', today);

checkinInput.addEventListener('change', function() {
    checkoutInput.setAttribute('min', this.value);
    
    if (checkoutInput.value < this.value) {
        checkoutInput.value = this.value;
    }
});

document.querySelector('.search-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const destination = document.getElementById('destination').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    
    if (!destination || !checkin || !checkout) {
        alert('Please fill all the required fields');
        return;
    }
    
    alert('Searching for trips to ' + destination + ' from ' + checkin + ' to ' + checkout);
});