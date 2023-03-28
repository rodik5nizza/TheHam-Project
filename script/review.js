"use strict"
const reviewsCollection = [{
    fullName: 'Hasan Ali',
    position: 'UX Designer',
    photo: './img/reviews/Layer 344.png',
    review: 'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.'
}, {

    fullName: 'Samuel Clemens',
    position: 'Java developer',
    photo: './img/reviews/samuel-langhorne-clemens-5268195_640.png',
    review: 'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa.'
},
{
    fullName: 'Arthur Conan Doyl',
    position: 'Node.js',
    photo: './img/reviews/arthur-conan-doyle-5268186_640.png',
    review: 'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus.'
},
{
    fullName: 'Thomas Edison',
    position: 'Frontend',
    photo: './img/reviews/thomas-alva-edison-5268200_640.png',
    review: 'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem. Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem.Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem.'
},
];

const cerouselItem = document.querySelectorAll('.reviews-people-carousel img');
const reviewsCard = document.querySelector('.reviews-people')
const reviwesName = document.querySelector('.reviews-people .reviews-people-name');
const reviewsPosition = document.querySelector('.reviews-people .reviews-people-position');
const reviwesPhoto = document.querySelector('.reviews-people .reviews-people-photo');
const reviewsContent = document.querySelector('.reviews-content');
const reviewsButtonRight = document.querySelector('.reviews-cerousel-right-button');
const reviewsButtonLeft = document.querySelector('.reviews-cerousel-left-button');

cerouselItem.forEach((elem) => {
    elem.addEventListener('click', getPerson);
});

let i = 0;

function getPerson() {
    i = this.getAttribute('data-index');
    getParsonData();
};

function getParsonData() {
    cerouselItem.forEach((elem) => {
        elem.classList.remove('reviews-cerousel-photo-active');
    });
    cerouselItem[i].classList.add('reviews-cerousel-photo-active');
    reviwesName.innerText = `${reviewsCollection[i].fullName}`;
    reviewsPosition.innerText = `${reviewsCollection[i].position}`;
    reviwesPhoto.src = `${reviewsCollection[i].photo}`;
    reviewsContent.innerText = `${reviewsCollection[i].review}`;
    reviewsCard.animate([
        { transform: 'translate3D(0, 70px, 0)',
        opacity: '0.2' },
        { transform: 'translate3D(0, 35px, 0)',
        opacity: '0.6' },
        { transform: 'translate3D(0, 0, 0)',
        opacity: '1' }
      ], {
        duration: 500,
      });
};


reviewsButtonRight.addEventListener ('click', () => {
    i++;
    if (i != cerouselItem.length){
        getParsonData();
    }else {
        i = 0;
        getParsonData();
    }
})


reviewsButtonLeft.addEventListener('click', () => {
    i--;
    if (i != -1){
        getParsonData();
    }else {
        i = cerouselItem.length - 1;
        getParsonData();
    }
})