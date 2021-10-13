export default function contactLoad() {
    const content = document.getElementById('content');
    const div = document.createElement('div')
    const ul = document.createElement('ul');

    div.setAttribute('id','contact');
    content.appendChild(div);
    div.appendChild(ul);   

    let menuItems = ['TEST!!! Rolls','Sushi Rolls','Sea Urchin','Oysters'];

    for (let i = 0; i < menuItems.length; i++) {
        const li = document.createElement('li');
        li.classList.add('menu-item');
        li.textContent = menuItems[i];
        ul.appendChild(li);
        
    }
 
   
   

 
}
