var that, _menus, _mains;
var forEach = Array.prototype.forEach;
//Tab构造函数
function Tab(options) {
	options = options || {};
	this.container = options.container || '#wrapper';
	this.tabMenuSelected = options.tabMenuSelected || 'selected';
	this.tabMainCurrent = options.tabMainCurrent || 'current';
	that = this;
	// _init.call(this);
	this._init();
}
Tab.prototype._init = function() {
	var container = document.querySelector(this.container);
	var tabMenu = container.children[0];
	var tabMain = container.children[1];
	_menus = tabMenu.children;
	_mains = tabMain.children;
	forEach.call(_menus, function(item, index) {
		item.index = index;
		item.onclick = _menuClick;
	});
};
function _menuClick() {
	forEach.call(_menus, function(item) {
		item.classList.remove(that.tabMenuSelected);
	});
	this.classList.add(that.tabMenuSelected);
	forEach.call(_mains, function(item) {
		item.classList.remove(that.tabMainCurrent);
	});
	_mains[this.index].classList.add(that.tabMainCurrent);
}
export default Tab;
