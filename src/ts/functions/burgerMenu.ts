export function burgerMenu () {
    let btn:HTMLElement = document.getElementById(
    "burgerCircle"
    ) as HTMLElement;
     btn.addEventListener('click', test)
  function test(){
  let menu: HTMLElement = document.getElementById(
    "menu"
    ) as HTMLElement;
  menu.classList.toggle("active");
};
}