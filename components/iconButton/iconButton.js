/*
  Adım 1: Aşağıdaki HTML button yapısını oluşturup geri dönecek 'IconButton' isimli bir fonksiyon yazın.

  <button class="btn btn-{btnColor}">
    <i class="{iconClass}" />
    {btnText}
  </button>

  'IconButton' fonksiyonu 3 argüman alacak: 
  - btnText: butonun içindeki metin
  - btnColor: butonun arkplan rengi [ blue | orange | red ] değerlerini alabilir
  - iconClass: FontAwesome kütüphanesi icon class ismi 

Adım 2: Bu fonksiyonu kullanarak aşağıdaki butonları oluşturun: 

    1. { btnText: "Aç", btnColor: "blue", iconClass: "fa fa-folder-open" }
    2. { btnText: "Düzenle", btnColor: "orange", iconClass: "fa fa-pen" }
    3. { btnText: "Sil", btnColor: "red", iconClass: "fa fa-trash" }

Adım 3: Oluşturduğunuz buttonları div#icon-buttons içerisine ekleyin

*/


function IconButton(btnText, btnColor, iconClass) {
  // <button> oluştur
  const button = document.createElement('button');
  button.className = `btn btn-${btnColor}`;

  // <i> icon ekle
  const icon = document.createElement('i');
  icon.className = iconClass;

  // iconu butona ekle
  button.appendChild(icon);

  // butonun textini ekle (icon'dan sonra gelmeli)
  button.appendChild(document.createTextNode(' ' + btnText));

  return button;
}

// Adım 2: Butonları oluştur
const btnAc = IconButton('Aç', 'blue', 'fa fa-folder-open');
const btnDuzenle = IconButton('Düzenle', 'orange', 'fa fa-pen');
const btnSil = IconButton('Sil', 'red', 'fa fa-trash');

// Adım 3: div#icon-buttons içerisine ekle
const container = document.getElementById('icon-buttons');
container.appendChild(btnAc);
container.appendChild(btnDuzenle);
container.appendChild(btnSil);
