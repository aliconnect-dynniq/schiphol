var camera, scene, renderer, mesh;
mesh_items = {};
Aim.assign({
	on: {
		load: function () {


		}
	},
	dataonload: function () {
		//console.log('Videowall dataonload', api.item[Aim.client.domain.id]);
		Aim.Videowall.init(api.item[Aim.client.domain.id]);
		Aim.Videowall.animate();
		Aim.messenger.connect();
		Aim.messenger.initProperties();
	},
	Videowall: {
		init: function (item) {
			//console.log('THREE', Aim.Three);
			renderer = new THREE.WebGLRenderer({ antialias: true });
			//renderer.setPixelRatio(window.devicePixelRatio);
			scene = new THREE.Scene();
			scene.background = bg = new THREE.Color(0xb8e1ee);


			var floor = new THREE.Mesh(new THREE.PlaneGeometry(Aim.Videowall.plan.width, Aim.Videowall.plan.length, 0, 0), new THREE.MeshBasicMaterial({ color: color.grond }));
			floor.rotation.x = -Math.PI / 2;
			scene.add(floor);
			var light = new THREE.AmbientLight(0x222222);
			scene.add(light);
			scene.add(camera = new THREE.PerspectiveCamera(50, 1, 4 / 3, 2000));
			//scene.add(new THREE.Mesh(new THREE.BoxGeometry(300, 50, 2000), new THREE.MeshBasicMaterial({ color: 'red' })));
			var i = 0;
			angle = function (deg) { return deg / 180 * Math.PI }
			for (var name in Aim.Videowall.kanalen) {
				var k = Aim.Videowall.kanalen[name];
				k.name = name;
				k.camID = i++;
				//scene.add(k.cam = new THREE.PerspectiveCamera(50, 1, 4 / 3, 2000));
				k.cam = camera;
				var canvas = k.el = document.body.appendTag('canvas', { style: 'position:fixed;top:' + k.top * Aim.Videowall.displayScale + 'px;left:' + k.left * Aim.Videowall.displayScale + 'px;', kanaal: k, onclick: function () { Aim.Videowall.kanaalID = this.kanaal.name; } });
				canvas.width = k.width * Aim.Videowall.displayScale;
				canvas.height = k.height * Aim.Videowall.displayScale;
				//canvas.width = k.width / Aim.Videowall.displayScale * window.devicePixelRatio ;
				//canvas.height = k.height / Aim.Videowall.displayScale * window.devicePixelRatio ;
				k.render = function () {
					var cam = CCTV.cameras[this.cameraID];
					Object.assign(cam, {
						size: { width: this.width * Aim.Videowall.displayScale - 1, height: this.height * Aim.Videowall.displayScale - 1 },
						presetActive: cam.preset[cam.presetID],
						ctx: this.el.getContext('2d'),
						draw: function (image) {
							this.ctx.drawImage(image, 0, 0);
							this.ctx.textAlign = "center";
							this.ctx.font = "20px sans-serif";
							this.ctx.shadowColor = "black";
							this.ctx.shadowBlur = 7;
							this.ctx.lineWidth = 5;
							this.ctx.fillText([this.cameraID, this.presetActive.name].join(' - '), this.size.width / 2, 20);
							this.ctx.shadowBlur = 0;
							this.ctx.fillStyle = "white";
							this.ctx.lineWidth = 0;
							this.ctx.fillText([this.cameraID, this.presetActive.name].join(' - '), this.size.width / 2, 20);
						},
					});
					if (cam.url) {
						cam.img = Object.assign(new Image, {
							cam: cam,
							onload: function () {
								this.cam.draw(this);//ctx.drawImage(this, 0, 0);
							},
							src: cam.url + '&ts=' + new Date().getTime(),
						});
						//	var myCanvas = document.getElementById('my_canvas_id');
						//	var ctx = myCanvas.getContext('2d');
						//	img = new Image;
						//	img.onload = function () {
						//		ctx.drawImage(img, 0, 0); // Or at whatever offset you like
						//	};
						//	img.src = 'https://vm06.ssf.videomanager.info:9006/livefeed?oid=1&auth=1454ddc6-c4c6-4fa3-a279-7ad516c9d9b7&size=640x524';
						//		img.src = 'https://vm06.ssf.videomanager.info:9006/livefeed?oid=1&auth=1454ddc6-c4c6-4fa3-a279-7ad516c9d9b7&size=640x524&ts=' + new Date().getTime();
					}
					else {
						renderer.setSize(cam.size.width, cam.size.height);
						camera.position.set(cam.x, cam.y, cam.z);
						camera.rotation.set(angle(cam.presetActive.rx), angle(cam.presetActive.ry), angle(cam.presetActive.rz));
						camera.aspect = cam.size.width / cam.size.height;
						camera.zoom = cam.presetActive.zoom;
						camera.updateProjectionMatrix();
						renderer.render(scene, camera);
						//ctx.drawImage(renderer.domElement, 0, 0);
						//onload.call({ ctx: ctx });
						cam.draw(renderer.domElement);
					}
				}
			}
			Aim.Videowall.createItem.call(scene, item);
			allcars = [
				carsR1 = Object.assign([], { z: -6, dir: 1, speed: Aim.Videowall.speed[2], cartypes: Aim.Videowall.cartypes[2] }),
				carsR2 = Object.assign([], { z: -2, dir: 1, speed: Aim.Videowall.speed[1], cartypes: Aim.Videowall.cartypes[1] }),
				carsL1 = Object.assign([], { z: 8, dir: -1, speed: Aim.Videowall.speed[2], cartypes: Aim.Videowall.cartypes[2] }),
				carsL2 = Object.assign([], { z: 4, dir: -1, speed: Aim.Videowall.speed[1], cartypes: Aim.Videowall.cartypes[1] }),
			]
			allcars.forEach(Aim.Videowall.fillstreet);
			Aim.Videowall.dt = new Date();
		},
		moveall: function () {
			Aim.Videowall.ms = -(Aim.Videowall.dt - (Aim.Videowall.dt = new Date()));
			allcars.forEach(Aim.Videowall.movecars);
		},
		animate: function () {
			Aim.Videowall.moveall();
			for (var name in Aim.Videowall.kanalen) Aim.Videowall.kanalen[name].render();
			//setTimeout(Aim.Videowall.animate, 500);
			requestAnimationFrame(Aim.Videowall.animate);
		},
		fillstreet: function (cars) { for (var i = -Aim.Videowall.plan.length / 2; i < Aim.Videowall.plan.length / 2; i += Aim.Videowall.carsdistance) Aim.Videowall.pushcar(cars, i * cars.dir); },
		createGeo: function (geo, name) {
			if (geo.radius) {
				var mesh = this[name] = 'color' in geo ? new THREE.Mesh(new THREE.CylinderGeometry(geo.radius, geo.radius, geo.depth || 1, 8), new THREE.MeshBasicMaterial({ color: geo.color })) : new THREE.Group();
				mesh.position.set(geo.left || 0, (geo.bottom || 0) + (geo.height || 0) / 2, -geo.distance || 0);
				mesh.rotation.x = angle(90);
			}
			else {
				var mesh = this[name] = 'color' in geo ? new THREE.Mesh(new THREE.BoxGeometry(geo.width || 1, geo.height || 1, geo.depth || 1), new THREE.MeshBasicMaterial({ color: geo.color })) : new THREE.Group();
				mesh.position.set(geo.left || 0, (geo.bottom || 0) + (geo.height || 0) / 2, -geo.distance || 0);
			}
			this.add(mesh);
			if (geo.children) Object.forEach(geo.children, Aim.Videowall.createGeo.bind(mesh));
			return mesh;
		},
		createItem: function (item) {
			if ('selected' in item && item.selected == 0) return;
			item.mesh = Aim.Videowall.createGeo.call(this, item.geo || {});
			if (item.geo && item.geo.step) {
				if (item.geo.step.left) item.mesh.position.x += item.geo.step.left * item.typicalIdx;
				if (item.geo.step.distance) item.mesh.position.z += item.geo.step.distance * item.typicalIdx;
			}
			this.add(item.mesh);
			if (item.children) item.children.forEach(Aim.Videowall.createItem.bind(item.mesh));
		},
		pushcar: function (cars, pos) {
			newmesh = function (geo, material, prop) {
				var mesh = new THREE.Mesh(geo, material);
				for (var propname in prop) for (var propvalue in prop[propname]) mesh[propname][propvalue] = prop[propname][propvalue];
				return mesh;
			}

			var car = Object.assign(new THREE.Group(), { speed: cars.speed }, cars.cartypes[Math.round((cars.cartypes.length - 1) * Math.random())]);
			scene.add(car);
			cars.push(car);

			var shape = new THREE.Shape();
			shape.moveTo(0, 0);
			var p = null, vectors = Aim.Three.shape[car.shape].vectors;
			vectors.forEach(function (vector) {
				if (p) return shape.lineTo((vector[0] - p[0]), vector[1] - p[1]);
				p = [vector[0], vector[1]];
			});

			var extrudeSettings = {
				curveSegments: 6,
				steps: 1,
				amount: car.w,
				bevelEnabled: true,
				bevelThickness: .1,
				bevelSize: .1,
				bevelSegments: 1,
			};
			var geo = new THREE.ExtrudeGeometry(shape, extrudeSettings);

			//var carmat = new THREE.MeshPhysicalMaterial({ color: 0xffffff * Math.random(), emissive: 0, roughness: 0.68, metalness: 0.24, reflectivity: 0.25, clearCoat: 0, flatShading: 0, wireframe: 0, });
			var carmat = new THREE.MeshBasicMaterial({ color: car.colors[Math.round((car.colors.length - 1) * Math.random())] });
			var mesh = new THREE.Mesh(geo, carmat);
			mesh.rotation.y = angle(90);
			var box = new THREE.Box3().setFromObject(mesh);
			//var scale = car.l / (box.max.z - box.min.z);
			var scale = car.h ? car.h / (box.max.y - box.min.y) : car.l / (box.max.z - box.min.z);

			mesh.scale.set(cars.dir * scale, scale, 1);

			car.add(mesh);
			var box = new THREE.Box3().setFromObject(car);
			car.position.set(-cars.z, -box.min.y, pos);
			car.l = box.max.z - box.min.z;


			//car.add(new THREE.Mesh(new THREE.CubeGeometry(car.w, car.h, car.l), new THREE.MeshBasicMaterial({ color: 0xffffff * Math.random() })));
			//console.log(box.min, box.max);
			//var scaleY = car.h / (box.max.y - box.min.y)
			//car.add(new THREE.Mesh(new THREE.CubeGeometry(car.w, 1, car.l), carmat));
			//var geowheel = new THREE.CylinderGeometry(.5, .5, .2, 8);
			//var mat = new THREE.MeshBasicMaterial({ color: 0x666666 });
			//car.add(newmesh(geowheel, mat, { rotation: { z: angle(90) }, position: { x: car.w / 2 + 0.2, y: 0, z: car.l / 2 - .8 } }));
			//car.add(newmesh(geowheel, mat, { rotation: { z: angle(90) }, position: { x: car.w / 2 + 0.2, y: 0, z: -car.l / 2 + 1 } }));
			//car.add(newmesh(geowheel, mat, { rotation: { z: angle(90) }, position: { x: -car.w / 2 - 0.2, y: 0, z: car.l / 2 - .8 } }));
			//car.add(newmesh(geowheel, mat, { rotation: { z: angle(90) }, position: { x: -car.w / 2 - 0.2, y: 0, z: -car.l / 2 + 1 } }));
		},
		stopcar: function (posstop) {
			//oStop.mesh.position.z = (stop = posstop);
			if (Aim.Videowall.posstop == posstop) return;
			Aim.Videowall.posstop = posstop;
			console.log('STOP ON ', posstop);
			for (var i = 0, car; car = carsR1[i]; i++) car.stop = false;
			for (var i = 0, car; car = carsR2[i]; i++) car.stop = false;
			if (posstop == -1) return;
			for (var i = 0, car; car = carsR1[i]; i++) if (car.position.z > -Aim.Videowall.posstop + 50) { car.stop = true; break; }
			for (var i = 0, car; car = carsR2[i]; i++) if (car.position.z > -Aim.Videowall.posstop + 50) { car.stop = true; break; }
		},
		movecars: function (cars) {
			var carstopped = null, car0 = { speed: cars.speed, p: -Aim.Videowall.plan.length / 2 - 100, l: 0 };
			for (var i = 0, car; car = cars[i]; i++) {
				if (car.stop) carstopped = car0 = { speed: 0, p: -Aim.Videowall.posstop + 5, l: 0 };
				car.afstand_gewenst = (car.speed * 1000 / 60 / 60 * 2) + 2 + car0.l / 2 + car.l / 2; // 2 seconden afstand van voorganger = 2 * snelheid (m/s)
				car.afstand_actueel = Math.abs(car0.p - car.position.z);
				car.afstand_verschil = car.afstand_actueel - car.afstand_gewenst;
				car.speed = Math.max(0, car.speed - 5, Math.min(cars.speed, car.speed + .5, car.afstand_verschil / 1000 * 60 * 60));
				//car.speed = 80;
				car.d = car.speed * 1000 / 60 / 60 / 1000 * Aim.Videowall.ms;
				var p = car.p = (car.position.z -= car.d * cars.dir);
				if ((car.position.z < -Aim.Videowall.plan.length / 2) || (car.position.z > Aim.Videowall.plan.length / 2)) { scene.remove(car); cars.shift(); }
				car0 = car;
			}
			var afstand = Aim.Videowall.carsdistance * (0.9 + 0.2 * Math.random());
			if (cars.dir == 1 ? p < Aim.Videowall.plan.length / 2 - afstand : p > -Aim.Videowall.plan.length / 2 + afstand) Aim.Videowall.pushcar(cars, Aim.Videowall.plan.length / 2 * cars.dir);
		},
	},
	messenger: {
		onreceive: function () {
			//console.log('RCV', this.data);
			if (this.data.state == 'connected' && this.data.from.app == 'em') document.location.reload();
			if (('kanaal' in this.data) && ('cam' in this.data)) {
				var kanaal = Aim.Videowall.kanalen[this.data.kanaal];
				kanaal.cameraID = this.data.cam;
				if ('preset' in this.data) Aim.Videowall.cameras[kanaal.cameraID].presetID = Math.min(this.data.preset, Aim.Videowall.cameras[kanaal.cameraID].preset.length - 1);
			}
			if (this.data.value) this.data.value.forEach(function (row) {
				var item = api.item[row.id];
				if (!item) return;
				for (var name in row.values) item[name] = row.values[name];
				while (item) {
					if (item.onchange) item.onchange();
					item = item.master;
				}
			});
		}
	},
});
