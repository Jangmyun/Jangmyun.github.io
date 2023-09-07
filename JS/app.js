let scrollValueDiv = document.getElementById('scroll-value');

document.addEventListener('scroll', function(e){
    scrollValueDiv.innerText = window.scrollY;
})