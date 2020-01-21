import '../styles/index.scss';

import Mustache from 'mustache';
import StoreService from './storeService';

let storeService = new StoreService();
window.storeService = storeService;

storeService.loadData();


let cart = storeService.get('cart');
let products = storeService.get('products');

// Работа с Mustache
let productTMPL = document.getElementById('product-tpl').innerHTML;

products.forEach(product => {
    document.querySelector('.products-list').innerHTML += Mustache.render(productTMPL, product);
});

Array.from(document.getElementsByClassName('product')).forEach(element => {
   element.addEventListener('click', e => {
       let productEl = e.target.classList.contains('product') ? e.target : e.target.closest('.product');

       if (!productEl) return;

       let product = products.find(prd => prd.id == productEl.dataset.id);

       cart.addProduct(product, 1);
   });
});

window.onunload = function () {
    storeService.save();
};


let arr = [1, 5, 9, 4, 10, 6];

arr.sort((el1, el2) => {
    return Math.ceil(Math.random() * 10) % 2 === 0 ? -1 : 1;//el1 === el2 ? 0 : el1 > el2 ? -1 : 1;
});


let div = document.createElement('div');
div.classList.add('hello-div');
div.innerHTML = '<b>hello</b>';

let product3 = document.querySelector('.product[data-id="3"]');

product3.querySelector('.product-title').after(div);

Array.from(document.querySelectorAll('.product-title')).forEach(productTitleEl => {
    console.log(productTitleEl.closest('.product').dataset.id);

});
console.log(document.querySelector('.product').querySelector('.product-title'));


document.querySelector('.header').after(div.cloneNode(false));

document.getElementsByClassName('header');
document.getElementById('header');