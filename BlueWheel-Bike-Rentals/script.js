const bikeSelect=document.querySelector('#bike-select');
const daysInput=document.querySelector('#days');
const estimate=document.querySelector('#estimate');
const dateInput=document.querySelector('#start-date');
const form=document.querySelector('#book');
const message=document.querySelector('#booking-message');
dateInput.min=new Date().toISOString().split('T')[0];
dateInput.value=dateInput.min;
function updateEstimate(){const price=Number(bikeSelect.value.split('|')[1]);const days=Math.max(1,Number(daysInput.value)||1);estimate.textContent=`₹${(price*days).toLocaleString('en-IN')}`}
bikeSelect.addEventListener('change',updateEstimate);daysInput.addEventListener('input',updateEstimate);
document.querySelectorAll('[data-bike]').forEach(button=>button.addEventListener('click',()=>{const wanted=button.dataset.bike;[...bikeSelect.options].forEach((option)=>{option.selected=option.value.startsWith(wanted)});updateEstimate();form.scrollIntoView({behavior:'smooth',block:'center'})}));
form.addEventListener('submit',(event)=>{event.preventDefault();const name=bikeSelect.value.split('|')[0];message.textContent=`Great choice! Your ${name} request is ready. Our team will confirm availability by phone.`;message.classList.add('show')});
const menu=document.querySelector('.menu-toggle');const nav=document.querySelector('#main-nav');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
