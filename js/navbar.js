// Get all the navbar links
var navItems = document.querySelectorAll('.nav-item');

// Loop through each nav item and add click event listener
navItems.forEach(function(item) {
    item.addEventListener('click', function() {
        // Remove the 'active' class from all items
        navItems.forEach(function(link) {
            link.classList.remove('active');
        });
        
        // Add the 'active' class to the clicked item
        item.classList.add('active');
    });
});
