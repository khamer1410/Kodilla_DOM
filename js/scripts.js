var itemNumber = 0;
var addBtn = document.getElementById('addElem');
var getList = document.getElementById('lista');
var newElem = document.createElement('li');

//opcja 1
// addElem.addEventListener('click', function() {
// 	itemNumber += 1;
// 	getList.innerHTML += '<li>item ' + itemNumber + '</li>';
// })

//opcja 2
var itemLength = getList.getElementsByTagName('li');

addElem.addEventListener('click', function() {
	getList.innerHTML += '<li>item ' + itemLength.length + '</li>';
})


//opcja 3
// addElem.addEventListener('click', function() {
// 	itemNumber += 1;
// 	newElem.innerHTML = 'item ' + itemNumber;
// 	getList.appendChild(newElem);
// })

//??Dlaczego po kliknięciu nie wykonuje się dodatkowy appendChild?



