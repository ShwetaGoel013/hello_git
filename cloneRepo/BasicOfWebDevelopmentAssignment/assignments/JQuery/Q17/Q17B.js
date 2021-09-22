images = ['photo1.jpg','photo2.jpg','photo3.jpg','photo4.jpg','photo5.jpg','photo6.jpg','photo7.jpg','photo8.jpg'];


setInterval(nextImage, 500);
function nextImage() {
    i = jQuery.inArray($('#slideshow').attr('src'), images);
    if (i < images.length - 1) {
        changeImage(i + 1);
    } else {
        changeImage(0);
    }
}


//This function will change to image to whatever the variable i passes to it
function changeImage(i) {
    $('#slideshow').stop().animate({
        opacity: 0,
    }, 100, function() {
        $('#slideshow').attr('src', images[i]);
        $('.frame img').on('load',(function() {
            $('#slideshow').stop().animate({
                opacity: 1,
            }, 100)
        }))
    })
}