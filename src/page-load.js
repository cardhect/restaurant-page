export default function pageLoad() {
    const div = document.createElement('div')
    const h1 = document.createElement('h1');
    const h4 = document.createElement('h4');

    div.setAttribute('id','home');
    h1.setAttribute('id','home-head');

    h1.textContent = 'Del Mar';
    h4.textContent = 'Del Mar, established in 2001 by Chef Cardenas. Chef Cardenas created his vision of fine dining and fine views in the town of acapulco. With some of the freshest sea food in the world, unique dishes are created from the life surrodiong the area. You can eat in a very peaceful setting while staring out into the endless ocean.';
    
    const content = document.getElementById('content');

    content.appendChild(div);
    div.appendChild(h1);
    div.appendChild(h4);
 
}
