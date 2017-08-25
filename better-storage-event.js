/**
 * 2017/8/25 by lxl
 * better-storage-event 1.0.0
 */
var oriSetItem = localStorage.setItem;
localStorage.setItem = function(k, v) {
	var se = document.createEvent("StorageEvent");
	se.initStorageEvent('storage', false, false, k, null, v, null, null);
	window.dispatchEvent(se);
	oriSetItem.apply(this, arguments);
}