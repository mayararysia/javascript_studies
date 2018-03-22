//está no escopo do window
var blg = (function(){
	var beluga = {};

	beluga.$ = document.querySelector.bind(document);
	beluga.$$ = document.querySelectorAll.bind(document);

	return beluga;
})();