var searchInput = document.querySelector('.input-search');
var allCities = document.querySelectorAll('.wrapper ul li');

searchInput.addEventListener('keyup', function() {
    for (var i = 0; i < allCities.length; i++) {
        if (allCities[i].innerHTML.startsWith(searchInput.value)) {
            allCities[i].style.display = "block";
        } else {
            allCities[i].style.display = "none";
        }
    }
});