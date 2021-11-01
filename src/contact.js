export default function contactLoad() {
  const content = document.getElementById('content');
  const div = document.createElement('div');
  const desc = document.createElement('div');
  const h1 = document.createElement('h1');

  div.setAttribute('id', 'contact');
  content.appendChild(div);
  div.append(h1);
  div.append(desc);
  h1.textContent = 'Contact';
  desc.textContent = 'Mon - Sun 8am-9pm 912-212-4425';
}
