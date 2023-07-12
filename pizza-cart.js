function pizzaCart() {
	return {
		payment: 0,

		price: {
			'small': 50,
			'medium': 70,
			'large': 80
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

		addPizza(size) {
			if (this.count[size] >= 1) {
				this.count[size] += 1;
			}
			this.updateCosts();
		},

		removePizza(size) {
			if (this.count[size] > 0) {
				this.count[size] -= 1;
			}
			this.updateCosts();
		},

		buyPizza(size) {
			this.count[size] = 1;
			this.updateCosts();
		},

		updateCosts() {
			this.cost.small = this.count.small * this.price.small;
			this.cost.medium = this.count.medium * this.price.medium;
			this.cost.large = this.count.large * this.price.large;
		},
	}
}