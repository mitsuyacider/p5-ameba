
// NOTE: Default parameter

export default class ameba {
  constructor(config) {
    if (config) {
      this.dots = config.dots ? config.dots : 360;
      this.frequency = config.frequency ? config.frequency : 12;
      this.amplitude = config.amplitude ? config.amplitude : 12;
      this.ampSpeed = config.ampSpeed ? config.ampSpeed : 0.05;
      this.frequencySpeed = config.frequencySpeed ? config.frequency : 0.05;
      this.ampRange = config.ampRange ? config.ampRange : 1;
      this.step = 1;
      this.degree = 1;

      this.radius = config.radius ? config.radius : 30;
    } else {
      this.dots = 360;
      this.frequency = 12;
      this.amplitude = 2;
      this.ampSpeed = 0.05;
      this.frequencySpeed = 0.05;
      this.ampRange = 1;
      this.step = 1;
      this.degree = 1;

      this.radius = 50;
    }

    this.ampMax = this.amplitude +this.ampRange;
    this.ampMin = -this.ampMax;
  }

  setup() {}

  updateParameter() {
    this.amplitude += this.ampSpeed;
    if (this.amplitude > this.ampMax || this.amplitude < this.ampMin) {
      this.ampSpeed *= -1;
    }
  
    // frequency += frequencySpeed;
    // if (frequency > 20 || frequency < 9) {
    //   frequencySpeed *= -1;
    // }    

    this.degree += 0.1;
  }

  draw(pos) {
    p5.push();
    p5.randomSeed(1);
    p5.translate(pos.x, pos.y);
    // p5.rotate(p5.radians(degree * 2));
    p5.beginShape();
    for (let i = 0; i < this.dots; i += this.step){    
        // polar plot r=4+0.5 sin( 8 theta)
      const r = this.radius + this.amplitude * p5.sin( p5.radians(this.frequency * i ))			    
      const x = p5.cos(p5.radians(i)) * r
      const y = p5.sin(p5.radians(i)) * r
      p5.curveVertex(x, y);

      // NOTE: Connect start point with end point
      if (i === this.dots.length - 1 || i === 0) {
        p5.curveVertex(x, y);
      }  
      // p5.ellipse(x, y, 2, 2);
    }
    p5.endShape(p5.CLOSE);
    p5.pop();    
  }

  drawWithDot(pos, dotSize) {
    p5.push();
    p5.randomSeed(1)
    p5.translate(pos.x, pos.y);
    // p5.rotate(p5.radians(degree * 2));
    let formResolution = 15;
    // p5.beginShape(p5.TRIANGLES);
    for (let i = 0; i < this.dots; i += 4){    
        // polar plot r=4+0.5 sin( 8 theta)
      const r = this.radius + this.amplitude * p5.sin( p5.radians(this.frequency * i ))			    
      const x = p5.cos(p5.radians(i)) * r
      const y = p5.sin(p5.radians(i)) * r

      p5.ellipse(x, y, dotSize, dotSize);
    }
    p5.pop();
  }

  drawBrokenLine(pos) {
    p5.push();
    p5.randomSeed(1)
    p5.translate(pos.x, pos.y);
    // p5.rotate(p5.radians(degree * 2));
    p5.beginShape(p5.TRIANGLES);
    for (let i = 0; i < this.dots; i += 4){    
        // polar plot r=4+0.5 sin( 8 theta)
      const r = this.radius + this.amplitude * p5.sin( p5.radians(this.frequency * i ))			    
      const x = p5.cos(p5.radians(i)) * r
      const y = p5.sin(p5.radians(i)) * r
      p5.curveVertex(x, y);

      // NOTE: Connect start point with end point
      if (i === this.dots.length - 1 || i === 0) {
        p5.curveVertex(x, y);
      }  
    }
    p5.endShape(p5.CLOSE);
    p5.pop();    
  }  
 }