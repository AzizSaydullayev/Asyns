const __API = 'https://randomuser.me/api/';
const btn = document.querySelector('button');
const text = document.querySelector('.text');
const photo = document.querySelector('.photo');
const address = document.querySelector('.address');
const phone = document.querySelector('.phone');

const getData = async () => {
    const res = await fetch(__API);
    const data = await res.json();
    let obj = data.results[0];
    render(obj);
};

function render(obj) {
    console.log(obj);
    text.textContent = `${obj.name.title} ${obj.name.first} ${obj.name.last}`;
    photo.src = obj.picture.large;
    address.textContent = `Address: ${obj.location.street.number} ${obj.location.street.name}, ${obj.location.city}, ${obj.location.state}, ${obj.location.country}`;
    phone.textContent = `Phone: ${obj.phone}`;
}

btn.addEventListener('click', () => {
    getData();
});