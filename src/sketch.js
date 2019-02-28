import p5 from 'p5';
import ameba from './js/ameba';
import data from 'json!./assets/data/animation.json';

const sketch = (p5) => {
	// make library globally available
	window.p5 = p5;

	// const ameba = new Ameba()
	let amebaStore = []
	let amebaNum = 30;

	p5.setup = () => {
		p5.createCanvas(p5.windowWidth, p5.windowHeight);		
		for (let i = 0; i < amebaNum; i++) {
			const config = data[i];
			const creature = new ameba(config)
			amebaStore.push(creature);
		}
  }
  
  p5.draw = () => {
    const color = p5.color('#CC6600');
		p5.background(color, 85);

		const step = 100;
		let index = 0;
		for (let i = 0; i < 6; i += 1) {
			for (let j = 0; j < 5; j += 1) {
				const config = data[index];

				const x = j * step;
				const y = i * step
				p5.fill(255);				
				p5.rect(x, y, step, step);
				const pos = p5.createVector(x + step / 2, y + step / 2)
				const ameba = amebaStore[index];
				ameba.updateParameter()
				// ameba.radius = step / 3;

				p5.stroke(0);
				if (config.wireframe) {
					p5.noFill();
					ameba.drawWithDot(pos, 1);
				} else {
					p5.fill(255, 255, 0);
					ameba.draw(pos);
				}
				// ameba.drawWithDot(pos, 1);
				index++
			}
		}
	}
}

new p5(sketch)

