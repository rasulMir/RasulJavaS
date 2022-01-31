class Drag {
	constructor() {
		this.dragZones = document.querySelectorAll('.admin-drag__zones');
		this.dragItems = document.querySelectorAll('.admin-drag__item');
		this.currZone;
		this.currItem;
		this.init();
	}

	dragEnd(e) {
		e.preventDefault();
		console.log(this.currItem);
		
		// this.currZone.insertAdjacentElement('beforeend', this.currItem);
	}

	dragStart(e) {
		this.currItem = e.target;
	}

	dragOver(e) {
		e.preventDefault();
		let currZone = e.target;
		if (currZone === e.target.closest('.admin-drag__item')) {
			return;
		} else {
			this.currZone = currZone;
		};
	}

	init() {
		this.dragZones.forEach(zone => {
			zone.addEventListener('dragover', this.dragOver);
			zone.addEventListener('dragend', this.dragEnd);
		});
		this.dragItems.forEach(item => {
			item.addEventListener('dragstart', this.dragStart);
		});
	}
}

new Drag;
export default Drag;