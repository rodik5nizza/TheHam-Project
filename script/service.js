"use strict"
const ourServiceList = document.querySelector('.our-serveces-list');
const ourServiceItem = document.querySelectorAll('.our-serveces-item');
const ourServiceContent = document.querySelectorAll('.our-serveces-content');



ourServiceList.addEventListener('click', (e) => {
    let serviceAttribute;
    ourServiceItem.forEach((elem) => {
        elem.classList.remove('our-serveces-active');
    })
    e.target.classList.add('our-serveces-active');
    serviceAttribute = e.target.getAttribute('data-our-service');
    ourServiceContent.forEach((elem) => {
        elem.classList.remove('our-serveces-content-active');
        if (elem.classList.contains(serviceAttribute)) {
            elem.classList.add('our-serveces-content-active')
        };
        elem.animate([
            { opacity: '0' },
            { opacity: '1' },
        ], {
            duration: 1000,
        });
    });
});

