"use strict"

const elemParent = document.querySelector('.grid');
const masonryButton = document.querySelector('.button-load-more-masonry');
const masonryLoader = document.querySelector('.loader-2');

const msnry = new Masonry( elemParent, {
    itemSelector: '.grid-item',
    columnWidth: 380,
    percentPosition: true,
    gutter: 10,
});

masonryButton.addEventListener('click', (e) => {
    e.target.classList.add('hidden');
    masonryLoader.classList.add('loader-style');
    let timerMasonry = setTimeout(() => {
        masonryLoader.classList.remove('loader-style');
        const elems = [];
        let fragment = document.createDocumentFragment();
        for ( let i = 1; i <= 9; i++ ) {
          let elem = getItemElement(i);
          fragment.appendChild( elem );
          elems.push( elem );
        }
        elemParent.appendChild( fragment );
        msnry.appended( elems );
        clearTimeout(timerMasonry);
    }, 1000);
});

function getItemElement(i) {
  let elem = document.createElement('div');
  let img = document.createElement('img');
  img.src = `https://picsum.photos/284/300?-v${i}`;
  elem.append(img);
  elem.className = 'grid-item';
  elem.classList.add('grid-item--width4');
  return elem;
}



