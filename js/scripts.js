var itemNumber = 0;
var addBtn = document.getElementById('addElem');
var getList = document.getElementById('lista');
var newElem = document.createElement('li');

addElem.addEventListener('click', function() {
	newElem.innerHTML = 'item ' + itemNumber;
	getList.appendChild(newElem);
})


