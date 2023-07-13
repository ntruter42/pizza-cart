function pizzaCart() {
	return {
		message: ``,
		checkout: false,
		payment: 0,
		total: 0,
		msgTimeout: null,
		msgTime: 3000,

		price: {
			'small': 49.99,
			'medium': 69.99,
			'large': 99.99
		},

		count: {
			'small': 0,
			'medium': 0,
			'large': 0
		},

		cost: {
			'small': 0,
			'medium': 0,
			'large': 0
		},

		clickCheckout() {
			this.checkout = false;
			for (const pizza in this.count) {
				if (this.count[pizza] > 0) {
					this.checkout = true;
				}
			}
			if (this.checkout === false) {
				this.displayMessage(`No pizzas in cart`);
			}
		},

		makePayment() {
			if (this.payment >= this.total) {
				for (const pizza in this.count) {
					this.count[pizza] = 0;
				}
				this.checkout = false;
				this.updateCosts();
				this.displayMessage(`Thank you for your support. Enjoy!`);
			} else {
				this.displayMessage(`Not enough money`);
			}
		},

		buyPizza(size) {
			if (this.count[size] === 0) {
				this.count[size] = 1;
				this.updateCosts();
			} else {
				this.displayMessage(`${size.charAt(0).toUpperCase() + size.slice(1)} pizza is already in cart`);
			}
		},

		addPizza(size) {
			this.checkout = false;
			if (this.count[size] >= 1) {
				this.count[size] += 1;
				this.updateCosts();
			} else {
				this.displayMessage(`First add a ${size} pizza to cart`);
			}
		},

		removePizza(size) {
			if (this.count[size] > 0) {
				this.count[size] -= 1;
				this.updateCosts();
			} else {
				this.displayMessage(`No ${size} pizzas to subtract`);
			}
		},

		updateCosts() {
			this.cost.small = this.count.small * this.price.small;
			this.cost.medium = this.count.medium * this.price.medium;
			this.cost.large = this.count.large * this.price.large;
			this.total = this.cost.small + this.cost.medium + this.cost.large;
		},

		displayMessage(message) {
			clearTimeout(this.msgTimeout);
			this.message = message;
			this.msgTimeout = setTimeout(() => {
				this.message = ``;
			}, this.msgTime);
		}
	}
}