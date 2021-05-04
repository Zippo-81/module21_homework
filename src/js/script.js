import "../scss/style.scss";


document.addEventListener("DOMContentLoaded", () => {

    // FAQ block
    let faqButtons = document.querySelectorAll(".faqBlock__button");
    faqButtons.forEach(button => {
        button.addEventListener("click", function() {
            this.classList.toggle("faqBlock__active");
            let content = this.nextElementSibling;
            if (content.style.maxHeight){
                content.style.maxHeight = null;
              } else {
                content.style.maxHeight = content.scrollHeight + "px";
              } 
        });
    });


    // humberger menu
    const humburger = document.querySelector(".humburger");
    humburger.addEventListener('click', () => {
      let listMenu = document.querySelector(".header__wrap--mobile");
      listMenu.classList.toggle('menu--show');
      humburger.classList.toggle('humburger--active');
    })


});


