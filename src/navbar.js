export default function navLoad() {
    //creates nav element and adds class nav-bar
    const nav = document.createElement('nav');
    nav.classList.add('nav-bar');
    
    //grabs content div and adds nav to it.
    const content = document.getElementById('content');
    content.appendChild(nav);
    

    //array of nav items to add to each created div
    let navItems = ['home','menu','contact'];

    for (let i = 0; i < navItems.length; i++) {
        const div = document.createElement('div');
        div.classList.add('nav-items');
        div.setAttribute('id', navItems[i] +'-nav'); 
        div.textContent = navItems[i];
        nav.appendChild(div);    
    }
 
}
