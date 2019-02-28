import p5 from 'p5';
import 'p5/lib/addons/p5.sound';
import 'p5/lib/addons/p5.dom';
import ameba from './js/ameba';

const sketch = (p5) => {
	// make library globally available
	window.p5 = p5;

	// const ameba = new Ameba()
	let amebaStore = []
	let amebaNum = 25;

	p5.setup = () => {
		p5.createCanvas(p5.windowWidth, p5.windowHeight);
		
		for (let i = 0; i < amebaNum; i++) {
			const creature = new ameba()
			amebaStore.push(creature);
		}
  }
  
  p5.draw = () => {
    const color = p5.color('#CC6600');
		p5.background(color, 85);

		const step = p5.width / 5;
		let index = 0;
		for (let y = 0; y < p5.height; y += step) {
			for (let x = 0; x < p5.width; x += step) {
				p5.rect(x, y, step, step);
				const pos = p5.createVector(x + step / 2, y + step / 2)
				const ameba = amebaStore[index];
				ameba.updateParameter()
				ameba.radius = step / 3;
				ameba.draw(pos);
				index++
			}
		}
	}
}

new p5(sketch)

