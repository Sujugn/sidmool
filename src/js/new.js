import newProduct from '../data/product.js'

//pagination
document.addEventListener(function(){
    newProduct.addEventListener((function(){
        
    }))
    const productInner = document.querySelector('.product_inner');

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


})