(function() {
	let loader = new THREE.TextureLoader();
	var scene = new THREE.Scene();
	scene.background = new THREE.Color(0x3E7FD3);
	var s = 100 / 179;
	var floorMaterial = new THREE.MeshBasicMaterial({ map: loader.load('/nav/schiphol11.jpg'), side: THREE.DoubleSide });
	var floorGeometry = new THREE.PlaneGeometry(10000 * s, 10000 * s, 0, 0);
	var floor = new THREE.Mesh(floorGeometry, floorMaterial);
	floor.rotation.x = -Math.PI / 2;
	scene.add(floor);
	var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	var geometry = new THREE.BoxGeometry(20, 20, 100);
	var material = new THREE.MeshBasicMaterial({ color: 0xcccccc });
	var cube = new THREE.Mesh(geometry, material);
	cube.position.x = -1000;
	cube.position.z = 200;
	scene.add(cube);
	var poslist = [
	{ "x": 2519, "y": 0, "z": -1832, "_x": 0, "_y": -11, "_z": 0 },
	//{ "x": 1540, "y": 0, "z": -1888, "_x": 0, "_y": -11.05, "_z": 0 }, { "x": 1335, "y": 0, "z": -1899, "_x": 0, "_y": -11.1, "_z": 0 }, { "x": 1178, "y": 0, "z": -1867, "_x": 0, "_y": -10.55, "_z": 0 }, { "x": 1066, "y": 0, "z": -1813, "_x": 0, "_y": -10.55, "_z": 0 }, { "x": 1009, "y": 0, "z": -1801, "_x": 0, "_y": -11.05, "_z": 0 }, { "x": 777, "y": 0, "z": -1813, "_x": 0, "_y": -11.05, "_z": 0 }, { "x": 733, "y": 0, "z": -1773, "_x": 0, "_y": -9.45, "_z": 0 }, { "x": 732, "y": 0, "z": -1733, "_x": 0, "_y": -9.45, "_z": 0 }, { "x": 690, "y": 0, "z": -1697, "_x": 0, "_y": -11.1, "_z": 0 }

	{ "x": 1342, "y": 0, "z": -1898, "_x": 0, "_y": -11.1, "_z": 0 }, { "x": 1172, "y": 0, "z": -1865, "_x": 0, "_y": -10.6, "_z": 0 }, { "x": 1066, "y": 0, "z": -1812, "_x": 0, "_y": -10.6, "_z": 0 }, { "x": 1006, "y": 0, "z": -1801, "_x": 0, "_y": -11.1, "_z": 0 }, { "x": 491, "y": 0, "z": -1830, "_x": 0, "_y": -11.1, "_z": 0 }, { "x": 424, "y": 0, "z": -1802, "_x": 0, "_y": -10.1, "_z": 0 }, { "x": 233, "y": 0, "z": -1586, "_x": 0, "_y": -10.1, "_z": 0 }, { "x": 216, "y": 0, "z": -1576, "_x": 0, "_y": -10.9, "_z": 0 }, { "x": 198, "y": 0, "z": -1570, "_x": 0, "_y": -10.1, "_z": 0 }, { "x": 184, "y": 0, "z": -1553, "_x": 0, "_y": -10.2, "_z": 0 }, { "x": 179, "y": 0, "z": -1533, "_x": 0, "_y": -9.4, "_z": 0 }, { "x": 176, "y": 0, "z": -1519, "_x": 0, "_y": -10.1, "_z": 0 }, { "x": 172, "y": 0, "z": -1499, "_x": 0, "_y": -9.4, "_z": 0 }, { "x": 176, "y": 0, "z": -1443, "_x": 0, "_y": -9.4, "_z": 0 }, { "x": 167, "y": 0, "z": -1406, "_x": 0, "_y": -10.2, "_z": 0 }, { "x": 74, "y": 0, "z": -1300, "_x": 0, "_y": -10.2, "_z": 0 }, { "x": 49, "y": 0, "z": -1274, "_x": 0, "_y": -10.3, "_z": 0 }, { "x": -281, "y": 0, "z": -993, "_x": 0, "_y": -10.3, "_z": 0 }, { "x": -291, "y": 0, "z": -961, "_x": 0, "_y": -9.5, "_z": 0 }, { "x": -294, "y": 0, "z": -931, "_x": 0, "_y": -9.5, "_z": 0 }, { "x": -286, "y": 0, "z": -902, "_x": 0, "_y": -8.6, "_z": 0 }, { "x": -260, "y": 0, "z": -891, "_x": 0, "_y": -7.9, "_z": 0 }, { "x": -90, "y": 0, "z": -881, "_x": 0, "_y": -7.9, "_z": 0 }, { "x": 136, "y": 0, "z": -868, "_x": 0, "_y": -7.9, "_z": 0 }, { "x": 355, "y": 0, "z": -856, "_x": 0, "_y": -7.9, "_z": 0 }, { "x": 547, "y": 0, "z": -845, "_x": 0, "_y": -7.9, "_z": 0 }, { "x": 590, "y": 0, "z": -833, "_x": 0, "_y": -8.6, "_z": 0 }, { "x": 612, "y": 0, "z": -764, "_x": 0, "_y": -9.5, "_z": 0 },
	{ "x": 602, "y": 0, "z": -571, "_x": 0, "_y": -9.51, "_z": 0 }, { "x": 592, "y": 0, "z": -521, "_x": 0, "_y": -10.01, "_z": 0 }, { "x": 535, "y": 0, "z": -493, "_x": 0, "_y": -11.01, "_z": 0 }, { "x": 351, "y": 0, "z": -502, "_x": 0, "_y": -11.11, "_z": 0 }, { "x": 105, "y": 0, "z": -517, "_x": 0, "_y": -11.01, "_z": 0 }, { "x": -168, "y": 0, "z": -532, "_x": 0, "_y": -11.11, "_z": 0 }, { "x": -415, "y": 0, "z": -546, "_x": 0, "_y": -11.01, "_z": 0 }, { "x": -658, "y": 0, "z": -558, "_x": 0, "_y": -11.11, "_z": 0 }, { "x": -718, "y": 0, "z": -563, "_x": 0, "_y": -11.01, "_z": 0 }, { "x": -782, "y": 0, "z": -566, "_x": 0, "_y": -11.01, "_z": 0 }, { "x": -805, "y": 0, "z": -529, "_x": 0, "_y": -9.41, "_z": 0 }, { "x": -803, "y": 0, "z": -467, "_x": 0, "_y": -9.41, "_z": 0 }, { "x": -800, "y": 0, "z": -413, "_x": 0, "_y": -9.41, "_z": 0 }, { "x": -792, "y": 0, "z": -257, "_x": 0, "_y": -9.41, "_z": 0 }, { "x": -784, "y": 0, "z": -121, "_x": 0, "_y": -9.31, "_z": 0 }, { "x": -780, "y": 0, "z": -64, "_x": 0, "_y": -9.31, "_z": 0 }, { "x": -774, "y": 0, "z": 20, "_x": 0, "_y": -9.41, "_z": 0 }, { "x": -769, "y": 0, "z": 82, "_x": 0, "_y": -9.41, "_z": 0 }, { "x": -795, "y": 0, "z": 110, "_x": 0, "_y": -10.91, "_z": 0 }, { "x": -927, "y": 0, "z": 119, "_x": 0, "_y": -10.91, "_z": 0 }, { "x": -937, "y": 0, "z": 140, "_x": 0, "_y": -9.41, "_z": 0 }, { "x": -934, "y": 0, "z": 198, "_x": 0, "_y": -9.41, "_z": 0 }
	];

	function push() {
		console.log('push');
		poslist.push(curpos());
		eplist.value = JSON.stringify(poslist);
	}

	var iPos = 0, set = poslist[iPos], dt = new Date();
	var geometry = new THREE.BoxGeometry(2, 100, 2);
	var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
	var endcube = new THREE.Mesh(geometry, material);
	endcube.position.y = 50;
	scene.add(endcube);
	orbit = function () {
		scene.add(camera);
		controls = new THREE.OrbitControls(camera, renderer.domElement);
		controls.addEventListener('change', animate);
	}
	group = new THREE.Group();
	scene.add(group);
	group.add(camera);
	camera.position.z = 40;
	camera.position.y = 10;
	camera.rotation.x = -.3;
	var geometry = new THREE.BoxGeometry(1, 1, 1);
	var material = new THREE.MeshBasicMaterial({ color: 0x00dd00 });
	curposcube = new THREE.Mesh(geometry, material);
	curposcube.position.set(0, 0, 0);
	group.add(curposcube);
	group.position.set(set.x, set.y, set.z);
	group.rotation.set(set._x, set._y, set._z);
	curpos = function () {
		return { x: Math.round(group.position.x), y: Math.round(group.position.y), z: Math.round(group.position.z), _x: Math.round(group.rotation._x * 100) / 100, _y: Math.round(group.rotation._y * 100) / 100, _z: Math.round(group.rotation._z * 100) / 100 }
	}
	gopos = function (pos) {
		group.position.set(pos.x, pos.y, pos.z);
		group.rotation.set(pos._x, pos._y, pos._z);
	}
	run = 0;
	r = 0;
	function start() {
		run ^= 1;
		group.add(camera);
		camera.position.z = 40;
		camera.position.y = 10;
		camera.rotation.x = -.3;
		if (run) {
			iPos = 0;
			for (var i = 0, pos; pos = poslist[i]; i++) {
				var geometry = new THREE.BoxGeometry(1, 1, 1);
				var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
				var cube = new THREE.Mesh(geometry, material);
				cube.position.set(pos.x, 0, pos.z);
				endcube.position.set(pos.x, 0, pos.z);
				scene.add(cube);
			}

		}
	}
	function animate() {
		requestAnimationFrame(animate);
		if (run) {
			var diff = new Date().valueOf() - dt.valueOf(), next = false, d = {};
			var pos1 = poslist[iPos], pos2 = poslist[iPos + 1], speed = 0.05;
			if (pos1 && pos2) {
				var diffo = { x: pos1.x - pos2.x, z: pos1.z - pos2.z };
				var afstand = Math.sqrt((diffo.x * diffo.x) + (diffo.z * diffo.z));
				if (pos2 && afstand) {
					var speedafstand = speed * diff, speedpart = speedafstand / afstand;
					if (speedpart > 1) { iPos++; dt = new Date(); }
					var dp = {};
					['x', 'z'].forEach(function (posname) {
						var p1 = pos1[posname], p2 = pos2[posname]; dp[posname] = p2 - p1; step = dp[posname] * speedpart, pnew = p1 + step;
						group.position[posname] = pnew;
					});
					var p1 = pos1._y, p2 = pos2._y, dph = p2 - p1, step = dph * speedpart, pnew = p1 + step;
					group.rotation.y = pnew;
				}
			}
			else run = 0;
		}
		divpos.innerText = JSON.stringify(curpos());
		renderer.render(scene, camera);
	}
	AIM.extend({
		on: {
			init() {
				document.body.appendChild(renderer.domElement);
				start();
				animate();
			},
			keydown() {
				console.log(event.code);
				var step = 1;
				if (event.shiftKey) {
					switch (event.code) {
						case 'ArrowLeft':
							group.rotation.y += 0.05;
							break;
						case 'ArrowRight':
							group.rotation.y -= 0.05;
							break;
					}
					r = (group.rotation._y / Math.PI) % 2;
					console.log({ r: r, x: Math.sin(group.rotation._y), z: Math.cos(group.rotation._y) });
				}
				else switch (event.code) {
					case 'Space':
						push();
						break;
					case 'ArrowLeft':
						group.position.x -= step * Math.cos(group.rotation._y);
						group.position.z += step * Math.sin(group.rotation._y);
						break;
					case 'ArrowRight':
						group.position.x += step * Math.cos(group.rotation._y);
						group.position.z -= step * Math.sin(group.rotation._y);
						break;
					case 'ArrowUp':
						group.position.z -= 2 * step * Math.cos(group.rotation._y);
						group.position.x -= 2 * step * Math.sin(group.rotation._y);
						break;
					case 'ArrowDown':
						group.position.z += step * Math.cos(group.rotation._y);
						group.position.x += step * Math.sin(group.rotation._y);
						break;
				}
				//console.log(camera.rotation._y, camera.rotation._y / Math.PI, r);
			}
		}
  });
})();
