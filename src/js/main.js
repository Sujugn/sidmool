
//장바구니 페이지 이동
document.addEventListener('DOMContentLoaded', () => {
    const cartBtn = document.getElementById('cart_btn');
  
    cartBtn.addEventListener('click', () => {
        window.open('cart-page.html', 'Cart Page', 'width=800,height=600');
    });
    
  });


//   window.open('URL','title','height=' + screen.height + ',width=' + screen.width + 'fullscreen=yes');
  //풀스크린



//탭메뉴
document.addEventListener('DOMContentLoaded', () => {
const tabBest = document.querySelector('.tab_best');
const tabNew = document.querySelector('.tab_new');
const bestContainer = document.querySelector('.best_container');
const newContainer = document.querySelector('.new_container');

tabBest.style.color = '#333';
bestContainer.style.display = 'block';
newContainer.style.display = 'none';

tabBest.addEventListener('click', handleTabClick);
tabNew.addEventListener('click', handleTabClick);

function handleTabClick(event) {
  // 모든 탭 요소에서 글자색을 초기화합니다.
  const tabElements = document.querySelectorAll('.tab_area h1');
  tabElements.forEach(tab => {
    tab.style.color = '';
  });

  const tabContainers = document.querySelectorAll('.tab_container');
  tabContainers.forEach(container => {
    container.style.display = 'none';
  });

  const clickedTab = event.target;
  clickedTab.style.color = '#333';

  const tabContainerClass = clickedTab.classList.contains('tab_best')
    ? '.best_container'
    : '.new_container';
  const selectedContainer = document.querySelector(tabContainerClass);
  selectedContainer.style.display = 'block';
}
})
