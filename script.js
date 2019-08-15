var vm = new Vue({
	el: '#app',
	data() {
		return {
			slides: [],
			slidePosition: 0,
			railTransition: 'transform 0.3s ease',
			slideFile: ''
		};
	},
	mounted() {
		window.addEventListener('keydown', event => {
			if (['ArrowRight', 'ArrowUp', 'd'].includes(event.key)) {
				this.increment();
			} else if (['ArrowLeft', 'ArrowDown', 'a'].includes(event.key)) {
				this.decrement();
			}
		});
	},
	methods: {
		increment() {
			if (this.slidePosition < this.slides.length - 1) {
				this.slidePosition++;
			} else {
				this.slidePosition = 0;
			}
		},
		decrement() {
			if (this.slidePosition > 0) {
				this.slidePosition--;
			} else {
				this.slidePosition = this.slides.length - 1;
			}
		},
		fileInput(event) {
			this.slideFile = event.target.files[0];
			// console.log(this.slideFile);
			var result = reader.readAsText(this.slideFile);
			console.log(result);
		}
	},
	computed: {}
});

var reader = new FileReader();
reader.addEventListener('load', file => {
	vm.slides = JSON.parse(file.target.result);
});
