var myHeading = document.querySelector('h1');

	myHeading.textContent = 'Hello World!';

	/* Calling an element, which has many properties.
		alert(myHeading);

		Calling an specific element.
			alert(myHeading.textContent);

	 	length is the number of characters (including spaces)
			alert(myHeading.textContent.length); 

		 The string has 12 elements, but the 0 element is the first letter which is H.
			alert(myHeading.textContent[0]); */


	/*	alert(5+7);
		alert((5+7)*3/36);
	   	alert(5+7*3/36); */


/* var myContent = document.querySelector ('.content');

var iceCream = 'jamoca almond fudge';

if (iceCream === 'chocolate') {
	myContent.textContent = 'Yay, I lovee chocolate!';
} 
	else {
		myContent.textContent = 'Aw! but I wanted chocolate';
	} */


var person = {
	firstName : 'John',
	lastName : 'Doe',
	id : '5556',
	fullName : function() {return this.firstName+ " "+ this.lastName;}
}

document.getElementById('demo').innerHTML = person.fullName();