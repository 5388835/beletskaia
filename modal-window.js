var modal = document.getElementById('myModal');
var btn = document.getElementById('footerLink');
var span = document.getElementsByClassName('close')[0];

btn.onclick = function (e) {
  e.preventDefault(); // отменяем действие по умолчанию для ссылки
  modal.style.display = 'block';
};

span.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
