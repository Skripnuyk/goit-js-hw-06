const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('.gallery');
const elements = images.map(item => {
  const liEl = document.createElement('li');
  liEl.classList.add('list');
  
  const imgEl = document.createElement('img');
  imgEl.src = item.url;
  imgEl.alt = item.alt;
  imgEl.width = '640';
  liEl.append(imgEl)
  gallery.insertAdjacentHTML('afterbegin', `<li><img src='${imgEl.src}' alt='${imgEl.alt}' width='${imgEl.width}'></li>`)
})

