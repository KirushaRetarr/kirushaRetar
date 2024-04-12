
var map = document.getElementById('map');
var infoContainer = document.getElementById('info-container');

function createPopup(info) {
    var popup = document.createElement('div');
    popup.classList.add('info-popup');
    popup.textContent = info;
    return popup;
}

// При наведении на регион карты
map.addEventListener('mouseover', function(event) {
    if (event.target.tagName === 'path') { 
        var regionInfo = event.target.getAttribute('data-info');
        if (regionInfo) {
            var popup = createPopup(regionInfo);
            infoContainer.appendChild(popup); 
            popup.style.left = (event.pageX + 10) + 'px';
            popup.style.top = (event.pageY + 10) + 'px';
            popup.style.display = 'block'; 
        }
    }
});

map.addEventListener('mouseout', function(event) {
    if (event.target.tagName === 'path') { 
        var popup = infoContainer.querySelector('.info-popup'); 
        if (popup) {
            popup.remove();
        }
    }
});