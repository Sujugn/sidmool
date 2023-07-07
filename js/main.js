document.addEventListener('DOMContentLoaded', () => {
    const cartBtn = document.getElementById('cart_btn');
  
    cartBtn.addEventListener('click', () => {
      window.open('cart-page.html', 'Cart Page', 'width=800,height=600');
    });
    //장바구니 페이지 이동
  });