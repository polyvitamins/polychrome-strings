define(['polyvitamins~polychrome@master'], function(core) {
	/* Расширяем абстрактный класс Function */
	
	var Strings = core.registerClass('Strings', function() {
		console.log('INIT STRINGS');
		return this;
	});
	
	Strings.assignTo('String');

	return Strings;
});