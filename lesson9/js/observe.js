
imagesToLoad = document.querySelectorAll("img[data-src]");
imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 100px 0px"
};

 loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');};
};
    if('IntersectionObserver' in window) {
        const imgObserver = new IntersectionObserver((items, observer) => {
            items.forEach((item) => {
                if(item.isIntersecting) {
                    loadImages(item.target);
                    imgObserver.unobserve(item.target);
                }
            });
        }, imgOptions );

    imagesToLoad.forEach((img) => {
      imgObserver.observe(img);
    });
    } 
    else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }
  