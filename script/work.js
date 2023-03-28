"use strict"

let owerWorksData = [
    {
        name: 'Graphic Design',
        path: './img/our imazing work/graphic design/graphic-design1.jpg',
        categories: 'graphicDesign',
    },
    {
        name: 'Graphic Design',
        path: './img/our imazing work/graphic design/graphic-design2.jpg',
        categories: 'graphicDesign',
    },
    {
        name: 'Graphic Design',
        path: './img/our imazing work/graphic design/graphic-design3.jpg',
        categories: 'graphicDesign',
    },
    {
        name: 'Graphic Design',
        path: './img/our imazing work/graphic design/graphic-design4.jpg',
        categories: 'graphicDesign',
    },
    {
        name: 'Graphic Design',
        path: './img/our imazing work/graphic design/graphic-design5.jpg',
        categories: 'graphicDesign',
    },
    {
        name: 'Graphic Design',
        path: './img/our imazing work/graphic design/graphic-design6.jpg',
        categories: 'graphicDesign',
    },
    {
        name: 'Graphic Design',
        path: './img/our imazing work/graphic design/graphic-design7.jpg',
        categories: 'graphicDesign',
    },
    {
        name: 'Graphic Design',
        path: './img/our imazing work/graphic design/graphic-design8.jpg',
        categories: 'graphicDesign',
    },
    {
        name: 'Graphic Design',
        path: './img/our imazing work/graphic design/graphic-design9.jpg',
        categories: 'graphicDesign',
    },
    {
        name: 'Graphic Design',
        path: './img/our imazing work/graphic design/graphic-design10.jpg',
        categories: 'graphicDesign',
    },
    {
        name: 'Graphic Design',
        path: './img/our imazing work/graphic design/graphic-design11.jpg',
        categories: 'graphicDesign',
    },
    {
        name: 'Graphic Design',
        path: './img/our imazing work/graphic design/graphic-design12.jpg',
        categories: 'graphicDesign',
    },
    {
        name: 'landing Page',
        path: './img/our imazing work/landing page/landing-page1.jpg',
        categories: 'landingPage',
    },
    {
        name: 'landing Page',
        path: './img/our imazing work/landing page/landing-page2.jpg',
        categories: 'landingPage',
    },
    {
        name: 'landing Page',
        path: './img/our imazing work/landing page/landing-page3.jpg',
        categories: 'landingPage',
    },
    {
        name: 'landing Page',
        path: './img/our imazing work/landing page/landing-page4.jpg',
        categories: 'landingPage',
    },
    {
        name: 'landing Page',
        path: './img/our imazing work/landing page/landing-page5.jpg',
        categories: 'landingPage',
    },
    {
        name: 'landing Page',
        path: './img/our imazing work/landing page/landing-page6.jpg',
        categories: 'landingPage',
    },
    {
        name: 'landing Page',
        path: './img/our imazing work/landing page/landing-page7.jpg',
        categories: 'landingPage',
    },
    {
        name: 'Web Design',
        path: './img/our imazing work/web design/web-design1.jpg',
        categories: 'WebDesign',
    },
    {
        name: 'Web Design',
        path: './img/our imazing work/web design/web-design2.jpg',
        categories: 'WebDesign',
    },
    {
        name: 'Web Design',
        path: './img/our imazing work/web design/web-design3.jpg',
        categories: 'WebDesign',
    },
    {
        name: 'Web Design',
        path: './img/our imazing work/web design/web-design4.jpg',
        categories: 'WebDesign',
    },
    {
        name: 'Web Design',
        path: './img/our imazing work/web design/web-design5.jpg',
        categories: 'WebDesign',
    },
    {
        name: 'Web Design',
        path: './img/our imazing work/web design/web-design6.jpg',
        categories: 'WebDesign',
    },
    {
        name: 'Web Design',
        path: './img/our imazing work/web design/web-design7.jpg',
        categories: 'WebDesign',
    },
    {
        name: 'Wordpress',
        path: './img/our imazing work/wordpress/wordpress1.jpg',
        categories: 'wordpress',
    },
    {
        name: 'Wordpress',
        path: './img/our imazing work/wordpress/wordpress2.jpg',
        categories: 'wordpress',
    },
    {
        name: 'Wordpress',
        path: './img/our imazing work/wordpress/wordpress3.jpg',
        categories: 'wordpress',
    },
    {
        name: 'Wordpress',
        path: './img/our imazing work/wordpress/wordpress4.jpg',
        categories: 'wordpress',
    },
    {
        name: 'Wordpress',
        path: './img/our imazing work/wordpress/wordpress5.jpg',
        categories: 'wordpress',
    },
    {
        name: 'Wordpress',
        path: './img/our imazing work/wordpress/wordpress6.jpg',
        categories: 'wordpress',
    },
    {
        name: 'Wordpress',
        path: './img/our imazing work/wordpress/wordpress7.jpg',
        categories: 'wordpress',
    },
    {
        name: 'Wordpress',
        path: './img/our imazing work/wordpress/wordpress8.jpg',
        categories: 'wordpress',
    },
    {
        name: 'Wordpress',
        path: './img/our imazing work/wordpress/wordpress9.jpg',
        categories: 'wordpress',
    },
    {
        name: 'Wordpress',
        path: './img/our imazing work/wordpress/wordpress10.jpg',
        categories: 'wordpress',
    },

    
];


const categoryButtonItem = document.querySelectorAll('.our-work-item');
const categoryButton = document.querySelector('.our-work-list');
const imageWrapper = document.querySelector('.wrapper');
const loadMoreButton = document.querySelector('.button-load-more');
const loader = document.querySelector('.loader');

let buttonAttribute = '';
categoryButton.addEventListener('click', (e) => {
    let buttonItem = e.target;
    buttonAttribute = buttonItem.getAttribute('data-category');
    if (buttonItem !== e.currentTarget) {
        categoryButtonItem.forEach((elem) => {
            elem.classList.remove('card-active');
        });
        buttonItem.classList.add('card-active');
        imageWrapper.innerHTML = "";
        loadMoreButton.classList.remove('hidden');
        createImages(buttonAttribute, 12, 0);
    }
});

createImages(buttonAttribute, 12, 0);

function createImages (category, maxCard, numberStart){
    let owerWorksDataMap = [];

    owerWorksData.map((elem) => {
        if (elem.categories.includes(category)){
           owerWorksDataMap.push(`<div class="card">
            <div class="front">
            <img src="${elem.path}" alt="image">
            </div>
            <div class="back">
            <img src="../step_project_ham/img/our imazing work/icon.svg" alt=""><span class="back-title">creative design</span>
            <p class="back-text">${elem.name}</p>
            </div>`);
        };
    });
    numberCard (owerWorksDataMap, maxCard, numberStart);
};



function numberCard (arrayMap, maxCard, numberStart){
    let arr = arrayMap;
    for (let i = numberStart; i < maxCard; i++){
        imageWrapper.insertAdjacentHTML('beforeend', arr[i % arr.length]);
    };
};


loadMoreButton.addEventListener('click', (e) => {
    e.target.classList.toggle('hidden');
    loader.classList.add('loader-style');
    let timer = setTimeout(() => {
        loader.classList.remove('loader-style');
        createImages(buttonAttribute, 24, 12);
        clearTimeout(timer);
    }, 1000);
    
});
