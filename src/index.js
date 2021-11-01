import pageLoad from './page-load';
import navLoad from './navbar';
import menuLoad from './menu';
import contactLoad from './contact';
import './style.css';

function tabs() {
  navLoad();
  pageLoad();
  menuLoad();
  contactLoad();

  const menu = document.getElementById('menu');
  const home = document.getElementById('home');
  const contact = document.getElementById('contact');
  menu.classList.toggle('hide');
  contact.classList.toggle('hide');

  const navItems = document.querySelectorAll('.nav-items');
  // navItems is a node list. It looks and acts much like an array.

  let homeClick = true;
  let menuClick = false;
  let contactClick = false;
  // we use the .forEach method to iterate through ea.ch nav-items
  navItems.forEach((navitem) => {
    // and for each one we add a 'click' listener

    navitem.addEventListener('click', () => {
      if (navitem.id === 'home-nav') {
        if (homeClick === false) {
          menu.classList.add('hide');
          contact.classList.add('hide');
          home.classList.remove('hide');
          homeClick = true;
        }

        menuClick = false;
        contactClick = false;
      } else if (navitem.id === 'menu-nav') {
        if (menuClick === false) {
          menu.classList.remove('hide');
          contact.classList.add('hide');
          home.classList.add('hide');
          menuClick = true;
        }
        homeClick = false;
        contactClick = false;
      } else if (navitem.id === 'contact-nav') {
        if (contactClick === false) {
          menu.classList.add('hide');
          contact.classList.remove('hide');
          home.classList.add('hide');
          contactClick = true;
        }
        homeClick = false;
        menuClick = false;
      }
    });
  });
}

tabs();
