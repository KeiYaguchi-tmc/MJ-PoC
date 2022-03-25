const help = {
	help1: "help1",
	help2: "help2",
	help3: "help3",
	help4: "help4",
}

async function init() {

	for (let key in help) {
		var obj = document.getElementById(help[key]).getElementsByTagName("li");
		var length = obj.length;
		for (var i = 0; i < length; i++) {
			obj.item(i).onmouseover = function () {
				var element = document.createElement("div");
				element.innerHTML = this.getAttribute('data-text');
				element.className = `${help[key]}-tooltips`;
				this.appendChild(element);
			}
			obj.item(i).onmouseout = function () {
				this.removeChild(this.childNodes.item(this.childNodes.length - 1));
			}
		}
	}
}
miro.onReady(init);