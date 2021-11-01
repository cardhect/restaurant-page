import SpringRoll from './img/spring-roll.png';
import SushiRoll from './img/sushi-roll.png';
import SeaUrchin from './img/sea-urchin.png';
import Oyster from './img/oyster.png';

export default function menuLoad() {
  const content = document.getElementById('content');
  const div = document.createElement('div');
  const ul = document.createElement('ul');
  const h1 = document.createElement('h1');

  div.setAttribute('id', 'menu');
  content.appendChild(div);

  h1.setAttribute('id', 'menu-header');
  h1.innerText = 'MENU';

  div.appendChild(h1);
  div.appendChild(ul);

  const menuItems = ['spring-rolls', 'sushi-rolls', 'sea-Urchin', 'oysters'];

  for (let i = 0; i < menuItems.length; i++) {
    const li = document.createElement('li');
    li.classList.add('menu-item');
    li.setAttribute('id', menuItems[i]);
    // li.textContent = menuItems[i];
    ul.appendChild(li);
  }
  menuImgLoad();
}

function menuImgLoad() {
  function springRollItem() {
    const h2 = document.createElement('h2');
    const div = document.createElement('div');

    const springRollLi = document.getElementById('spring-rolls');

    // Adds springroll img to li
    const springRoll = new Image();
    springRoll.src = SpringRoll;

    springRollLi.appendChild(springRoll);
    springRollLi.append(h2);
    h2.textContent = 'spring rolls';

    springRollLi.append(div);
    div.innerText = 'vegtables, fresh shrimp, and pork belly wrapped in a soft vegan spring roll';

    h2.setAttribute('class', 'item-desc');
    div.setAttribute('class', 'item-desc');
  }
  // Adds sushi roll img to li

  function sushiRollItem() {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const sushiRoll = new Image();
    sushiRoll.src = SushiRoll;

    const sushiRollLi = document.getElementById('sushi-rolls');

    sushiRollLi.appendChild(sushiRoll);
    sushiRollLi.append(h2);
    h2.textContent = 'sushi rolls';

    sushiRollLi.append(div);
    div.innerText = 'fresh rice, avacado, authentic sushi served with real wasabi and soy sauce';

    h2.setAttribute('class', 'item-desc');
    div.setAttribute('class', 'item-desc');
  }

  // Adds sea urchin img to li
  function seaUrchinItem() {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const seaUrchin = new Image();
    seaUrchin.src = SeaUrchin;

    const seaUrchinLi = document.getElementById('sea-Urchin');

    seaUrchinLi.appendChild(seaUrchin);
    seaUrchinLi.append(h2);
    h2.textContent = 'sea urchin';

    seaUrchinLi.append(div);
    div.innerText = 'a unique tasting dish, salty cavier and sea urchin served on a bed of slighty sweet and tangy sauce.';

    h2.setAttribute('class', 'item-desc');
    div.setAttribute('class', 'item-desc');
  }

  // Adds oyster img to li
  function oysterItem() {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const oyster = new Image();
    oyster.src = Oyster;

    const oysterLi = document.getElementById('oysters');
    oysterLi.appendChild(oyster);
    oysterLi.append(h2);
    h2.textContent = 'oysters';

    oysterLi.append(div);
    div.innerText = 'a classic dish to enjoy with a locally brewed ale. oyster are flammed grilled with a splash of hot sauce.';

    h2.setAttribute('class', 'item-desc');
    div.setAttribute('class', 'item-desc');
  }

  springRollItem();
  sushiRollItem();
  seaUrchinItem();
  oysterItem();
}
