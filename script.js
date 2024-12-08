const mobile_menu_item = document.getElementById('mobile_menu');
const mb_menu = document.getElementById('mb_menu');

let isOpen = false;
mb_menu.addEventListener('click',()=>{
    isOpen=!isOpen
   const toggle =(()=>{
    if(isOpen){
        mobile_menu_item.classList.remove('hidden');
        mobile_menu_item.classList.add('block');
    }
    else{
        mobile_menu_item.classList.remove('block');
        mobile_menu_item.classList.add('hidden');
    }
   })

   toggle()
})

function toggleFAQ(index) {
    const faqBody = document.getElementById(`faq-${index}`);
    const icon = document.getElementById(`icon-${index}`);
   
    faqBody.classList.toggle('hidden');

    if (faqBody.classList.contains('hidden')) {
        icon.textContent = '+';
    } else {
        icon.textContent = '-';
    }
}