var god = god || {};

god.rules = (function(self) {
	self.world = [
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	];

	self.colors = ['#FFFFFF', '#40415A'];

	function neighbour(y, x) {
		let neighbour = 0;

		if(y - 1 >= 0 && self.world[y - 1][x]) { neighbour++; } // top
		if(x + 1 < self.world[y].length && self.world[y][x + 1]) { neighbour++; } // right
		if(y + 1 < self.world.length && self.world[y + 1][x]) { neighbour++; } // bottom
		if(x - 1 >= 0 && self.world[y][x - 1]) { neighbour++; } // left
		
		if(y - 1 >= 0 && x + 1 < self.world[y].length && self.world[y - 1][x + 1]) { neighbour++; } // top right
		if(y + 1 < self.world.length && x + 1 < self.world[y].length && self.world[y + 1][x + 1]) { neighbour++; } // bottom right
		if(y + 1 < self.world.length && x - 1 >= 0 && self.world[y + 1][x - 1]) { neighbour++; } // bottom left
		if(y - 1 >= 0 && x - 1 >= 0 && self.world[y - 1][x - 1]) { neighbour++; } // top left

		return neighbour;
	}

	self.birth = function(y, x) {
		return (neighbour(y, x) == 3 ? true : false);
	};

	self.death = function(y, x) {
		return (neighbour(y, x) == 2 || neighbour(y, x) == 3 ? false : true);
	};

	return self;
})(god || {});


var stable = god.rules.world;
const H = god.rules.world.length, W = god.rules.world[0].length, SIZE = 20;

let canvas = document.getElementsByTagName('canvas')[0],
	ctx = canvas.getContext('2d');

function regulation(){
	let alter_ego = [];

	for(let latitude = 0; latitude < H; latitude++) {
		alter_ego[latitude] = [];
		for(let longitude = 0; longitude < W; longitude++) {
			/* Création de l'alter égo */
			alter_ego[latitude][longitude] = stable[latitude][longitude];

			/* Traitement */
			if(alter_ego[latitude][longitude] == 0) {
				if(god.rules.birth(latitude, longitude)) {alter_ego[latitude][longitude] = 1;}
			} else {
				if(god.rules.death(latitude, longitude)) {alter_ego[latitude][longitude] = 0;}
			}

			/* Affichage */
			if(stable[latitude][longitude] != alter_ego[latitude][longitude]){
				ctx.fillStyle = god.rules.colors[alter_ego[latitude][longitude]];
				ctx.fillRect(latitude * SIZE, longitude * SIZE, SIZE, SIZE);
			}
		}
	}

	/* Stabiliser les mondes */
	if(JSON.stringify(stable) == JSON.stringify(alter_ego)) { clearInterval(cycle); }

	for(let latitude = 0; latitude < H; latitude++) {
		stable[latitude] = [];
		for(let longitude = 0; longitude < W; longitude++) {
			stable[latitude][longitude] = alter_ego[latitude][longitude];
		}
	}
}

let cycle = setInterval(function(){
	if(window.requestAnimationFrame) window.requestAnimationFrame(regulation);
	else regulation();
}, 200);