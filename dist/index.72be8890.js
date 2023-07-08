//장바구니 페이지 이동
document.addEventListener("DOMContentLoaded", ()=>{
    const cartBtn = document.getElementById("cart_btn");
    cartBtn.addEventListener("click", ()=>{
        window.open("cart-page.html", "Cart Page", "width=800,height=600");
    });
});
//   window.open('URL','title','height=' + screen.height + ',width=' + screen.width + 'fullscreen=yes');
//풀스크린
document.addEventListener("DOMContentLoaded", ()=>{
    // 탭 요소들을 선택합니다.
    const tabBest = document.querySelector(".tab_best");
    const tabNew = document.querySelector(".tab_new");
    const bestContainer = document.querySelector(".best_container");
    const newContainer = document.querySelector(".new_container");
    // 기본 선택 탭 및 컨테이너를 설정합니다.
    tabBest.style.color = "#333";
    bestContainer.style.display = "block";
    newContainer.style.display = "none";
    // 각 탭에 대한 이벤트 리스너를 추가합니다.
    tabBest.addEventListener("click", handleTabClick);
    tabNew.addEventListener("click", handleTabClick);
    function handleTabClick(event) {
        // 모든 탭 요소에서 글자색을 초기화합니다.
        const tabElements = document.querySelectorAll(".tab_area h1");
        tabElements.forEach((tab)=>{
            tab.style.color = "";
        });
        // 모든 탭 컨테이너를 숨깁니다.
        const tabContainers = document.querySelectorAll(".tab_container");
        tabContainers.forEach((container)=>{
            container.style.display = "none";
        });
        // 클릭한 탭 요소에 글자색을 변경합니다.
        const clickedTab = event.target;
        clickedTab.style.color = "#333";
        // 클릭한 탭에 해당하는 탭 컨테이너를 보여줍니다.
        const tabContainerClass = clickedTab.classList.contains("tab_best") ? ".best_container" : ".new_container";
        const selectedContainer = document.querySelector(tabContainerClass);
        selectedContainer.style.display = "block";
    }
});

//# sourceMappingURL=index.72be8890.js.map
