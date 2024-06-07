import  { useRef, useEffect, useState } from 'react';
import p5 from 'p5';

const Sketch = () => {
  const sketchRef = useRef();
  const [numStars, setNumStars] = useState(5); // Initial number of stars set to 50

  useEffect(() => {
    const sketch = (p) => {
      let magicParticles = [];
      let stars = [];

      p.setup = () => {
        let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.style('position', 'fixed');
        canvas.style('top', '0');
        canvas.style('left', '0');
        canvas.style('z-index', '-1');

        for (let i = 0; i < numStars; i++) {
          let star = new Star();
          stars.push(star);
        }

        demo();
      };

      p.draw = () => {
        p.clear();

        for (let i = 0; i < stars.length; i++) {
          stars[i].update();
          stars[i].display();
        }

        for (let i = magicParticles.length - 1; i >= 0; i--) {
          let particle = magicParticles[i];
          particle.update();
          particle.display();

          if (particle.opacity <= 0) {
            magicParticles.splice(i, 1);
          }
        }
      };

      p.mouseMoved = () => {
        addMagicParticle(p.mouseX, p.mouseY);
      };

      p.touchMoved = () => {
        if (p.touches.length > 0) {
          let touch = p.touches[0];
          addMagicParticle(touch.x, touch.y);
        }
      };

      const addMagicParticle = (x, y) => {
        if (x >= 0 && y >= 0 && x <= p.width && y <= p.height) {
          let particle = new MagicParticle(x, y);
          magicParticles.push(particle);
        }
      };

      class MagicParticle {
        constructor(x, y) {
          this.x = x;
          this.y = y;
          this.size = p.random(10, 25);
          this.baseColor = p.color(
            p.random([
              "#e84e66", "#67c69e",
              "#edf1f4", "#80acc9",
              "#73a8b0", "#fe817f",
              "#68d2a4", "#1d203f",
              "#c9a30d"
            ])
          );

          this.color = this.baseColor;
          this.rotation = p.random(p.TWO_PI);
          this.speed = p.random(0.3, 0.7); // Reduced speed to minimize spread
          this.opacity = 100;
          this.fadeOutRate = p.random(1, 1.5); // Reduced fade out rate
          this.shapeType = p.random(["circle", "rect"]);
          this.sparkles = [];
          this.shimmer = p.random(0.3, 0.8);
          this.shimmerSpeed = p.random(0.005, 0.02);
        }

        update() {
          this.x += p.cos(this.rotation) * this.speed;
          this.y += p.sin(this.rotation) * this.speed;
          this.opacity -= this.fadeOutRate;

          this.updateSparkles();
          this.updateColor();
        }

        updateSparkles() {
          for (let i = this.sparkles.length - 1; i >= 0; i--) {
            let sparkle = this.sparkles[i];
            sparkle.update();
            if (sparkle.opacity <= 0) {
              this.sparkles.splice(i, 1);
            }
          }
        }

        updateColor() {
          let shimmerVal = p.sin(p.frameCount * this.shimmerSpeed);
          let shimmerColor = p.lerpColor(this.baseColor, p.color(255), shimmerVal);
          let sparkleColor = p.lerpColor(shimmerColor, p.color(255), this.opacity / 100);
          this.color = p.lerpColor(sparkleColor, this.baseColor, this.shimmer);
        }

        display() {
          p.noStroke();
          p.fill(this.color, this.opacity);
          p.push();
          p.translate(this.x, this.y);
          p.rotate(p.frameCount * 0.02);
          let shapeSize = this.size * 0.6;
          if (this.shapeType === "circle") {
            p.ellipse(0, 0, shapeSize, shapeSize);
          } else if (this.shapeType === "rect") {
            p.rect(-shapeSize / 2, -shapeSize / 2, shapeSize, shapeSize, 5);
          }
          p.pop();

          for (let sparkle of this.sparkles) {
            sparkle.display();
          }

          if (p.random() < 0.1) {
            let sparkle = new Sparkle(this.x, this.y, this.color);
            this.sparkles.push(sparkle);
          }
        }
      }

      class Sparkle {
        constructor(x, y, color) {
          this.x = x;
          this.y = y;
          this.size = p.random(2, 8);
          this.color = color;
          this.opacity = 100;
          this.speedX = p.random(-0.5, 0.2); // Reduced speed to minimize spread
          this.speedY = p.random(-0.5, 0.2); // Reduced speed to minimize spread
        }

        update() {
          this.x += this.speedX;
          this.y += this.speedY;
          this.opacity -= 130;
        }

        display() {
          p.noStroke();
          p.fill(this.color, this.opacity);
          p.ellipse(this.x, this.y, this.size, this.size);
        }
      }

      class Star {
        constructor() {
          this.x = p.random(p.width);
          this.y = p.random(p.height);
          this.size = p.random(1, 3);
          this.opacity = p.random(100, 100);
          this.twinkleSpeed = p.random(0.01, 0.03);
        }

        update() {
          let twinkleVal = p.sin(p.frameCount * this.twinkleSpeed);
          this.opacity = p.map(twinkleVal, -1, 1, 100, 100);
        }

        display() {
          p.noStroke();
          p.fill(255, this.opacity);
          p.ellipse(this.x, this.y, this.size, this.size);
        }
      }

      const demo = () => {
        const centerX = p.windowWidth / 2;
        const centerY = p.windowHeight / 2;
        const radius = Math.min(p.windowWidth, p.windowHeight) / 4;
        const duration = 150;

        const startAngle = 0;
        const endAngle = 2 * Math.PI;
        const step = (endAngle - startAngle) / duration;

        let elapsedTime = 0;

        function updateMousePosition() {
          const angle = startAngle + elapsedTime * step;
          const x = centerX + Math.cos(angle) * radius;
          const y = centerY + Math.sin(angle) * radius;
          const event = new MouseEvent('mousemove', {
            clientX: x,
            clientY: y,
            bubbles: true,
            cancelable: true
          });
          document.dispatchEvent(event);
        }

        const interval = setInterval(() => {
          updateMousePosition();
          elapsedTime += 10; // 16ms = 1 frame at 60fps
          if (elapsedTime >= duration) {
            clearInterval(interval);
          }
        }, 16);
      };
    };

    const p5Instance = new p5(sketch);

    return () => {
      p5Instance.remove();
    };
  }, [numStars]); // Re-run effect when numStars changes

  return (
    <div ref={sketchRef}>
      {/* <input 
        type="range" 
        min="10" 
        max="100" 
        value={numStars} 
        onChange={(e) => setNumStars(e.target.value)} 
        style={{ position: 'fixed', top: '10px', left: '10px', zIndex: '1' }}
      /> */}
      {/* <span style={{ position: 'fixed', top: '10px', left: '220px', zIndex: '1', color: 'white' }}>
        Number of Stars: {numStars}
      </span> */}
    </div>
  );
};

export default Sketch;
