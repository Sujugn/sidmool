import newProduct from '../data/product.js';

const productInner = document.querySelector('.product_inner');

    newProduct.forEach((value)=>{

        let element = document.createElement('div')
        element.setAttribute('class','goods')

        element.innerHTML= `
        
          <div class="product">
                <div class="product_img">
                   <img src="${value.image}">
                </div>
                <div class="product_name">
                 <p>${value.name}</p>
                </div>
                <div class="product_price">
                <p>${value.price}</p>
                </div>
            </div>
        `
        productInner.appendChild(element)
    })


