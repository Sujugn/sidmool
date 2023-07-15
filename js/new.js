import newProduct from '../data/new_data.js';
     

   

    //상품 동적 레이아웃
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
                <p class="origin">${value.origin}</p>
                <p>${value.price}</p>
                </div>
            </div>
        `
        productInner.appendChild(element)
    })



        //상품 총 수량 표시
        const productCount = document.querySelector('.product_count strong');
        function updateProductCount() {
        productCount.textContent = newProduct.length;
        }
        updateProductCount();


            //pagination
    
             //총페이지수
             let totalData = newProduct.length;
             const limit = 12;
             const totalPage = totalData/limit;

            //현재페이지그룹
             const pageCount = 5;
             const currentPage = 1;
             const pageGroup = Math.ceil(currentPage/pageCount);

            //이전,다음 
            let lastNumber = pageGroup * pageCount

            if(lastNumber>totalPage){
                lastNumber=totalPage
            }
            
            let firstNumber = lastNumber - (pageCount - 1);

            const next = lastNumber + 1
            const prev = firstNumber - 1

            for (let i = firstNumber; i <= lastNumber; i++) {
                let pageBtn = createElement('div')
                pageBtn.setAttribute('class','btnBox')


                pageBtn.innerHTML
                =
                `<button class="pageNumber" id="page_${i}">${i}</button>`

                productInner.appendChild(pageBtn)

                console.log(pageBtn)
              }

