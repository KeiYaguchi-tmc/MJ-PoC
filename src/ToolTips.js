async function init() {

	var obj = document.getElementById("help1").getElementsByTagName("li");
	var length = obj.length;
	for(var i = 0; i < length;i++) {
	 obj.item(i).onmouseover = function () {
   		var element = document.createElement("div");
		element.innerHTML = this.getAttribute('data-text');
		element.className = "help1-tooltips";
		this.appendChild(element);
	 }
	 obj.item(i).onmouseout = function () {
   		this.removeChild(this.childNodes.item(this.childNodes.length - 1)); 
	 }
	}

	var obj = document.getElementById("help2").getElementsByTagName("li");
	var length = obj.length;
	for(var i = 0; i < length;i++) {
	 obj.item(i).onmouseover = function () {
   		var element = document.createElement("div");
		element.innerHTML = this.getAttribute('data-text');
		element.className = "help2-tooltips";
		this.appendChild(element);
	 }
	 obj.item(i).onmouseout = function () {
   		this.removeChild(this.childNodes.item(this.childNodes.length - 1)); 
	 }
	}

	var obj = document.getElementById("help3").getElementsByTagName("li");
	var length = obj.length;
	for(var i = 0; i < length;i++) {
	 obj.item(i).onmouseover = function () {
   		var element = document.createElement("div");
		element.innerHTML = this.getAttribute('data-text');
		element.className = "help3-tooltips";
		this.appendChild(element);
	 }
	 obj.item(i).onmouseout = function () {
   		this.removeChild(this.childNodes.item(this.childNodes.length - 1)); 
	 }
	}

	var obj = document.getElementById("help4").getElementsByTagName("li");
	var length = obj.length;
	for(var i = 0; i < length;i++) {
	 obj.item(i).onmouseover = function () {
   		var element = document.createElement("div");
		element.innerHTML = this.getAttribute('data-text');
		element.className = "help4-tooltips";
		this.appendChild(element);
	 }
	 obj.item(i).onmouseout = function () {
   		this.removeChild(this.childNodes.item(this.childNodes.length - 1)); 
	 }
	}

}
miro.onReady(init);