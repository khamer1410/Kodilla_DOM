var itemNumber = 0;
var addBtn = document.getElementById('addElem');
var getList = document.getElementById('lista');
var newElem = document.createElement('li');

//opcja 1
// addBtn.addEventListener('click', function() {
// 	itemNumber += 1;
// 	getList.innerHTML += '<li>item ' + itemNumber + '</li>';
// })

//opcja 2
// var itemLength = getList.getElementsByTagName('li');

// addBtn.addEventListener('click', function() {
// 	getList.innerHTML += '<li>item ' + itemLength.length + '</li>';
// })


//opcja 3
addBtn.addEventListener('click', function() {
	itemNumber += 1;
	var newElem = document.createElement('li'); //dlaczego bez tego nie działa, skoro newElem był zdefiniowany na poczatku?
	newElem.innerHTML = 'item ' + itemNumber;
	getList.appendChild(newElem);
})





