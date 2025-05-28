var canvas = document.querySelector('.bg');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var stars = [];

var direction = Math.random() * 2 * Math.PI;

var mouse = {
	x: 0,
	y: 0
};

function getDir(x1, y1, x2, y2) {
	var deltaX = x2 - x1;
	var deltaY = y2 - y1;
	return Math.atan2(deltaY, deltaX);
}

class Star {
	constructor(x, y, size, speed) {
		this.x = x;
		this.y = y;
		this.size = size;
		this.speed = speed;
	}
	draw() {
		ctx.fillStyle = "#ffffff";
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
		ctx.fill();
	}
	move() {
		this.x += Math.cos(direction) * this.speed;
		this.y += Math.sin(direction) * this.speed;
		if (this.x < 0) {
			this.x = canvas.width;
			this.y = Math.random() * canvas.height;
			this.size = Math.random() + 1;
			this.speed = Math.random() * 4 + 2;
			//stars.push(canvas.width,Math.random()*canvas.height,Math.random()+1,Math.random()*4+2)
		}
		if (this.x > canvas.width) {
			this.x = 0;
			this.y = Math.random() * canvas.height;
			this.size = Math.random() + 1;
			this.speed = Math.random() * 4 + 2;
			//stars.push(canvas.width,Math.random()*canvas.height,Math.random()+1,Math.random()*4+2)
		}
		if (this.y < 0) {
			this.x = Math.random() * canvas.width;
			this.y = canvas.height;
			this.size = Math.random() + 1;
			this.speed = Math.random() * 4 + 2;
			//stars.push(canvas.width,Math.random()*canvas.height,Math.random()+1,Math.random()*4+2)
		}
		if (this.y > canvas.height) {
			this.x = Math.random() * canvas.width;
			this.y = 0;
			this.size = Math.random() + 1;
			this.speed = Math.random() * 4 + 2;
			//stars.push(canvas.width,Math.random()*canvas.height,Math.random()+1,Math.random()*4+2)
		}
	}
}

document.addEventListener('mousemove', (event) => {
	mouse.x = event.clientX;
	mouse.y = event.clientY;
});

function resetStars(count) {
	stars = []
	for (var i = 0; i < count; i++) {
		stars.push(new Star(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() + 1, Math.random() * 4 + 2));
	}
}

if (!localStorage.getItem('starcount')) {
    localStorage.setItem('starcount','150')
}

resetStars(Number(localStorage.getItem('starcount')));

function draw() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	direction = getDir(mouse.x, mouse.y, canvas.width / 2, canvas.height / 2);
	for (var i in stars) {
		if (stars[i]) {
			stars[i].draw();
			stars[i].move();
		}
	}

	requestAnimationFrame(draw);
}

requestAnimationFrame(draw);