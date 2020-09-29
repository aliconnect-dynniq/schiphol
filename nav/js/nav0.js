(function() {
	var loader = new THREE.TextureLoader();
	var scene = new THREE.Scene();
	scene.background = new THREE.Color(0x3E7FD3);
	//var s = 158 / 200;
	//var s = 176 / 500;
	//var s = 500 / 176;
	var s = 100 / 179;
	//scene.scale.set(s, s, s);
	//new THREE.TextureLoader();
	//loader.load('landscape.jpg', function (texture) {scene.background = texture;});

	var floorMaterial = new THREE.MeshBasicMaterial({ map: loader.load('/nav/schiphol11.jpg'), side: THREE.DoubleSide });
	var floorGeometry = new THREE.PlaneGeometry(10000 * s, 10000 * s, 0, 0);
	var floor = new THREE.Mesh(floorGeometry, floorMaterial);
	floor.rotation.x = -Math.PI / 2;
	scene.add(floor);


	//group = new THREE.Group();
	//scene.add(group);


	var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);

	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	//renderer.setClearColor(0xffffff, 0);
	document.body.appendChild(renderer.domElement);



	//boxes = {

	//}


	var geometry = new THREE.BoxGeometry(20, 20, 100);
	var material = new THREE.MeshBasicMaterial({ color: 0xcccccc });
	var cube = new THREE.Mesh(geometry, material);
	cube.position.x = -1000;
	cube.position.z = 200;
	//cube.scale.set(2,2,2);
	scene.add(cube);



	//curposcube = new THREE.Mesh(new THREE.BoxGeometry(120, 500, 120), new THREE.MeshBasicMaterial({ color: 0x00ff00 }));
	//curposcube.position.x = -1000;
	//curposcube.position.z = 200;
	//scene.add(curposcube);




	//camera.position.z = 10;
	//camera.up.set(0, 0, 1);



	var poslist = [
		{ "pos": { "x": -98.75955139469264, "y": 3, "z": -73.93999164243071 }, "rot": { "_x": -2.7731764293947263, "_y": 0.058519330742992294, "_z": 3.119018446846416, "_order": "XYZ" } },
		{ "pos": { "x": -83.14828711215907, "y": 3, "z": 58.6335194604837 }, "rot": { "_x": -2.8919296393722655, "_y": -0.20340996549656098, "_z": 3.0901289795366793, "_order": "XYZ" } },
		{ "pos": { "x": -93.42476318176892, "y": 3, "z": 110.0094947790754 }, "rot": { "_x": -2.9955850696407422, "_y": 0.5147196460911505, "_z": 3.0693253626312558, "_order": "XYZ" } },
		{ "pos": { "x": -108.32073596038956, "y": 3, "z": 118.10137236628358 }, "rot": { "_x": -1.082370374949245, "_y": 1.2449077910993576, "_z": 1.0596311362976367, "_order": "XYZ" } },
		{ "pos": { "x": -143.111071267695, "y": 3, "z": 105.05793441415744 }, "rot": { "_x": -0.3741280242310123, "_y": 0.637701097228508, "_z": 0.22962343902310364, "_order": "XYZ" } },
		{ "pos": { "x": -153.65195496364203, "y": 3, "z": 99.16298264974726 }, "rot": { "_x": -0.4276025854867617, "_y": -0.4742485603606276, "_z": -0.20518597632436028, "_order": "XYZ" } },
	];
	var poslist =
	[
	{ "x": 2519, "y": 0, "z": -1832, "_x": 0, "_y": -11, "_z": 0 },
	//{ "x": 1540, "y": 0, "z": -1888, "_x": 0, "_y": -11.05, "_z": 0 }, { "x": 1335, "y": 0, "z": -1899, "_x": 0, "_y": -11.1, "_z": 0 }, { "x": 1178, "y": 0, "z": -1867, "_x": 0, "_y": -10.55, "_z": 0 }, { "x": 1066, "y": 0, "z": -1813, "_x": 0, "_y": -10.55, "_z": 0 }, { "x": 1009, "y": 0, "z": -1801, "_x": 0, "_y": -11.05, "_z": 0 }, { "x": 777, "y": 0, "z": -1813, "_x": 0, "_y": -11.05, "_z": 0 }, { "x": 733, "y": 0, "z": -1773, "_x": 0, "_y": -9.45, "_z": 0 }, { "x": 732, "y": 0, "z": -1733, "_x": 0, "_y": -9.45, "_z": 0 }, { "x": 690, "y": 0, "z": -1697, "_x": 0, "_y": -11.1, "_z": 0 }

	{ "x": 1342, "y": 0, "z": -1898, "_x": 0, "_y": -11.1, "_z": 0 }, { "x": 1172, "y": 0, "z": -1865, "_x": 0, "_y": -10.6, "_z": 0 }, { "x": 1066, "y": 0, "z": -1812, "_x": 0, "_y": -10.6, "_z": 0 }, { "x": 1006, "y": 0, "z": -1801, "_x": 0, "_y": -11.1, "_z": 0 }, { "x": 491, "y": 0, "z": -1830, "_x": 0, "_y": -11.1, "_z": 0 }, { "x": 424, "y": 0, "z": -1802, "_x": 0, "_y": -10.1, "_z": 0 }, { "x": 233, "y": 0, "z": -1586, "_x": 0, "_y": -10.1, "_z": 0 }, { "x": 216, "y": 0, "z": -1576, "_x": 0, "_y": -10.9, "_z": 0 }, { "x": 198, "y": 0, "z": -1570, "_x": 0, "_y": -10.1, "_z": 0 }, { "x": 184, "y": 0, "z": -1553, "_x": 0, "_y": -10.2, "_z": 0 }, { "x": 179, "y": 0, "z": -1533, "_x": 0, "_y": -9.4, "_z": 0 }, { "x": 176, "y": 0, "z": -1519, "_x": 0, "_y": -10.1, "_z": 0 }, { "x": 172, "y": 0, "z": -1499, "_x": 0, "_y": -9.4, "_z": 0 }, { "x": 176, "y": 0, "z": -1443, "_x": 0, "_y": -9.4, "_z": 0 }, { "x": 167, "y": 0, "z": -1406, "_x": 0, "_y": -10.2, "_z": 0 }, { "x": 74, "y": 0, "z": -1300, "_x": 0, "_y": -10.2, "_z": 0 }, { "x": 49, "y": 0, "z": -1274, "_x": 0, "_y": -10.3, "_z": 0 }, { "x": -281, "y": 0, "z": -993, "_x": 0, "_y": -10.3, "_z": 0 }, { "x": -291, "y": 0, "z": -961, "_x": 0, "_y": -9.5, "_z": 0 }, { "x": -294, "y": 0, "z": -931, "_x": 0, "_y": -9.5, "_z": 0 }, { "x": -286, "y": 0, "z": -902, "_x": 0, "_y": -8.6, "_z": 0 }, { "x": -260, "y": 0, "z": -891, "_x": 0, "_y": -7.9, "_z": 0 }, { "x": -90, "y": 0, "z": -881, "_x": 0, "_y": -7.9, "_z": 0 }, { "x": 136, "y": 0, "z": -868, "_x": 0, "_y": -7.9, "_z": 0 }, { "x": 355, "y": 0, "z": -856, "_x": 0, "_y": -7.9, "_z": 0 }, { "x": 547, "y": 0, "z": -845, "_x": 0, "_y": -7.9, "_z": 0 }, { "x": 590, "y": 0, "z": -833, "_x": 0, "_y": -8.6, "_z": 0 }, { "x": 612, "y": 0, "z": -764, "_x": 0, "_y": -9.5, "_z": 0 },
	{ "x": 602, "y": 0, "z": -571, "_x": 0, "_y": -9.51, "_z": 0 }, { "x": 592, "y": 0, "z": -521, "_x": 0, "_y": -10.01, "_z": 0 }, { "x": 535, "y": 0, "z": -493, "_x": 0, "_y": -11.01, "_z": 0 }, { "x": 351, "y": 0, "z": -502, "_x": 0, "_y": -11.11, "_z": 0 }, { "x": 105, "y": 0, "z": -517, "_x": 0, "_y": -11.01, "_z": 0 }, { "x": -168, "y": 0, "z": -532, "_x": 0, "_y": -11.11, "_z": 0 }, { "x": -415, "y": 0, "z": -546, "_x": 0, "_y": -11.01, "_z": 0 }, { "x": -658, "y": 0, "z": -558, "_x": 0, "_y": -11.11, "_z": 0 }, { "x": -718, "y": 0, "z": -563, "_x": 0, "_y": -11.01, "_z": 0 }, { "x": -782, "y": 0, "z": -566, "_x": 0, "_y": -11.01, "_z": 0 }, { "x": -805, "y": 0, "z": -529, "_x": 0, "_y": -9.41, "_z": 0 }, { "x": -803, "y": 0, "z": -467, "_x": 0, "_y": -9.41, "_z": 0 }, { "x": -800, "y": 0, "z": -413, "_x": 0, "_y": -9.41, "_z": 0 }, { "x": -792, "y": 0, "z": -257, "_x": 0, "_y": -9.41, "_z": 0 }, { "x": -784, "y": 0, "z": -121, "_x": 0, "_y": -9.31, "_z": 0 }, { "x": -780, "y": 0, "z": -64, "_x": 0, "_y": -9.31, "_z": 0 }, { "x": -774, "y": 0, "z": 20, "_x": 0, "_y": -9.41, "_z": 0 }, { "x": -769, "y": 0, "z": 82, "_x": 0, "_y": -9.41, "_z": 0 }, { "x": -795, "y": 0, "z": 110, "_x": 0, "_y": -10.91, "_z": 0 }, { "x": -927, "y": 0, "z": 119, "_x": 0, "_y": -10.91, "_z": 0 }, { "x": -937, "y": 0, "z": 140, "_x": 0, "_y": -9.41, "_z": 0 }, { "x": -934, "y": 0, "z": 198, "_x": 0, "_y": -9.41, "_z": 0 }
	]
	;

	//var plist = poslist;
	function push() {
		console.log('push');
		poslist.push(curpos());
		eplist.value = JSON.stringify(poslist);
	}



	//		var poslist =
	//			[{ "x": 1355, "y": 10, "z": -1898, "_x": 0, "_y": -11.1, "_z": 0 }, { "x": 1247, "y": 10, "z": -1893, "_x": 0, "_y": -10.6, "_z": 0 }, { "x": 1196, "y": 10, "z": -1875, "_x": 0, "_y": -10.5, "_z": 0 }, { "x": 1128, "y": 10, "z": -1841, "_x": 0, "_y": -10.6, "_z": 0 }, { "x": 1088, "y": 10, "z": -1822, "_x": 0, "_y": -10.6, "_z": 0 }, { "x": 1057, "y": 10, "z": -1804, "_x": 0, "_y": -10.9, "_z": 0 }, { "x": 1011, "y": 10, "z": -1801, "_x": 0, "_y": -11, "_z": 0 }, { "x": 835, "y": 10, "z": -1810, "_x": 0, "_y": -11.1, "_z": 0 }, { "x": 681, "y": 10, "z": -1818, "_x": 0, "_y": -11.1, "_z": 0 }, { "x": 548, "y": 10, "z": -1826, "_x": 0, "_y": -11, "_z": 0 }, { "x": 504, "y": 10, "z": -1826, "_x": 0, "_y": -11, "_z": 0 }, { "x": 442, "y": 10, "z": -1821, "_x": 0, "_y": -10.2, "_z": 0 }, { "x": 407, "y": 10, "z": -1783, "_x": 0, "_y": -10.2, "_z": 0 }, { "x": 392, "y": 10, "z": -1767, "_x": 0, "_y": -10.2, "_z": 0 }, { "x": 381, "y": 10, "z": -1751, "_x": 0, "_y": -9.8, "_z": 0 }, { "x": 378, "y": 10, "z": -1726, "_x": 0, "_y": -9.3, "_z": 0 }, { "x": 382, "y": 10, "z": -1698, "_x": 0, "_y": -9.3, "_z": 0 }, { "x": 376, "y": 10, "z": -1639, "_x": 0, "_y": -10.2, "_z": 0 }, { "x": 273, "y": 10, "z": -1522, "_x": 0, "_y": -10.2, "_z": 0 }, { "x": 187, "y": 10, "z": -1426, "_x": 0, "_y": -10.2, "_z": 0 }, { "x": 109, "y": 10, "z": -1337, "_x": 0, "_y": -10.2, "_z": 0 }, { "x": 80, "y": 10, "z": -1305, "_x": 0, "_y": -10.2, "_z": 0 }, { "x": 13, "y": 10, "z": -1243, "_x": 0, "_y": -10.3, "_z": 0 }, { "x": -92, "y": 10, "z": -1155, "_x": 0, "_y": -10.3, "_z": 0 }, { "x": -177, "y": 10, "z": -1081, "_x": 0, "_y": -10.3, "_z": 0 }, { "x": -234, "y": 10, "z": -1031, "_x": 0, "_y": -10.3, "_z": 0 }, { "x": -311, "y": 10, "z": -967, "_x": 0, "_y": -10.3, "_z": 0 }, { "x": -362, "y": 10, "z": -915, "_x": 0, "_y": -10.7, "_z": 0 }, { "x": -420, "y": 10, "z": -899, "_x": 0, "_y": -11.1, "_z": 0 }, { "x": -550, "y": 10, "z": -905, "_x": 0, "_y": -11.1, "_z": 0 }, { "x": -712, "y": 10, "z": -914, "_x": 0, "_y": -11.1, "_z": 0 }, { "x": -905, "y": 10, "z": -927, "_x": 0, "_y": -11.1, "_z": 0 }, { "x": -1066, "y": 10, "z": -935, "_x": 0, "_y": -11.1, "_z": 0 }, { "x": -1262, "y": 10, "z": -944, "_x": 0, "_y": -11.1, "_z": 0 }, { "x": -1404, "y": 10, "z": -953, "_x": 0, "_y": -11.1, "_z": 0 }, { "x": -1581, "y": 10, "z": -963, "_x": 0, "_y": -11.1, "_z": 0 }, { "x": -1709, "y": 10, "z": -971, "_x": 0, "_y": -11.1, "_z": 0 }, { "x": -1775, "y": 10, "z": -965, "_x": 0, "_y": -10.4, "_z": 0 }, { "x": -1810, "y": 10, "z": -923, "_x": 0, "_y": -9.5, "_z": 0 }, { "x": -1815, "y": 10, "z": -859, "_x": 0, "_y": -9.5, "_z": 0 }, { "x": -1812, "y": 10, "z": -822, "_x": 0, "_y": -9, "_z": 0 }, { "x": -1766, "y": 10, "z": -720, "_x": 0, "_y": -9, "_z": 0 }, { "x": -1736, "y": 10, "z": -680, "_x": 0, "_y": -8.5, "_z": 0 }, { "x": -1708, "y": 10, "z": -664, "_x": 0, "_y": -8.3, "_z": 0 }, { "x": -1595, "y": 10, "z": -619, "_x": 0, "_y": -8.3, "_z": 0 }, { "x": -1556, "y": 10, "z": -609, "_x": 0, "_y": -7.9, "_z": 0 }, { "x": -1410, "y": 10, "z": -602, "_x": 0, "_y": -7.9, "_z": 0 }, { "x": -1287, "y": 10, "z": -597, "_x": 0, "_y": -7.9, "_z": 0 }, { "x": -1193, "y": 10, "z": -592, "_x": 0, "_y": -7.9, "_z": 0 }, { "x": -1095, "y": 10, "z": -588, "_x": 0, "_y": -7.9, "_z": 0 }, { "x": -997, "y": 10, "z": -583, "_x": 0, "_y": -7.9, "_z": 0 }, { "x": -885, "y": 10, "z": -578, "_x": 0, "_y": -7.9, "_z": 0 }, { "x": -789, "y": 10, "z": -574, "_x": 0, "_y": -7.9, "_z": 0 }, { "x": -697, "y": 10, "z": -569, "_x": 0, "_y": -7.9, "_z": 0 }, { "x": -560, "y": 10, "z": -557, "_x": 0, "_y": -7.9, "_z": 0 }, { "x": -468, "y": 10, "z": -553, "_x": 0, "_y": -7.9, "_z": 0 }, { "x": -420, "y": 10, "z": -551, "_x": 0, "_y": -7.9, "_z": 0 }, { "x": -395, "y": 10, "z": -550, "_x": 0, "_y": -7.1, "_z": 0 }, { "x": -373, "y": 10, "z": -574, "_x": 0, "_y": -6.3, "_z": 0 }, { "x": -369, "y": 10, "z": -654, "_x": 0, "_y": -6.3, "_z": 0 }, { "x": -364, "y": 10, "z": -726, "_x": 0, "_y": -6.3, "_z": 0 }, { "x": -363, "y": 10, "z": -814, "_x": 0, "_y": -6.3, "_z": 0 }, { "x": -358, "y": 10, "z": -864, "_x": 0, "_y": -6.3, "_z": 0 }, { "x": -362, "y": 10, "z": -896, "_x": 0, "_y": -6.7, "_z": 0 }, { "x": -334, "y": 10, "z": -950, "_x": 0, "_y": -7.1, "_z": 0 }, { "x": -259, "y": 10, "z": -1011, "_x": 0, "_y": -7.1, "_z": 0 }, { "x": -140, "y": 10, "z": -1112, "_x": 0, "_y": -7.1, "_z": 0 }, { "x": -33, "y": 10, "z": -1205, "_x": 0, "_y": -7.1, "_z": 0 }, { "x": 36, "y": 10, "z": -1263, "_x": 0, "_y": -7.1, "_z": 0 }, { "x": 62, "y": 10, "z": -1288, "_x": 0, "_y": -7, "_z": 0 }, { "x": 121, "y": 10, "z": -1356, "_x": 0, "_y": -7, "_z": 0 }, { "x": 154, "y": 10, "z": -1394, "_x": 0, "_y": -7, "_z": 0 }, { "x": 196, "y": 10, "z": -1442, "_x": 0, "_y": -7, "_z": 0 }, { "x": 240, "y": 10, "z": -1493, "_x": 0, "_y": -7, "_z": 0 }, { "x": 257, "y": 10, "z": -1513, "_x": 0, "_y": -7, "_z": 0 }, { "x": 278, "y": 10, "z": -1542, "_x": 0, "_y": -6.2, "_z": 0 }, { "x": 275, "y": 10, "z": -1584, "_x": 0, "_y": -6.2, "_z": 0 }, { "x": 268, "y": 10, "z": -1602, "_x": 0, "_y": -6.5, "_z": 0 }, { "x": 269, "y": 10, "z": -1626, "_x": 0, "_y": -7, "_z": 0 }, { "x": 309, "y": 10, "z": -1671, "_x": 0, "_y": -7, "_z": 0 }, { "x": 323, "y": 10, "z": -1687, "_x": 0, "_y": -7, "_z": 0 }, { "x": 348, "y": 10, "z": -1707, "_x": 0, "_y": -6, "_z": 0 }, { "x": 343, "y": 10, "z": -1738, "_x": 0, "_y": -5.5, "_z": 0 }, { "x": 296, "y": 10, "z": -1779, "_x": 0, "_y": -5.5, "_z": 0 }, { "x": 250, "y": 10, "z": -1820, "_x": 0, "_y": -5.5, "_z": 0 }, { "x": 217, "y": 10, "z": -1852, "_x": 0, "_y": -5.5, "_z": 0 }, { "x": 191, "y": 10, "z": -1874, "_x": 0, "_y": -6.2, "_z": 0 }, { "x": 186, "y": 10, "z": -1903, "_x": 0, "_y": -6.4, "_z": 0 }, { "x": 190, "y": 10, "z": -1939, "_x": 0, "_y": -6.4, "_z": 0 }, { "x": 199, "y": 10, "z": -1963, "_x": 0, "_y": -7.9, "_z": 0 }, { "x": 331, "y": 10, "z": -1957, "_x": 0, "_y": -7.9, "_z": 0 }, { "x": 464, "y": 10, "z": -1951, "_x": 0, "_y": -7.9, "_z": 0 }, { "x": 610, "y": 10, "z": -1945, "_x": 0, "_y": -7.9, "_z": 0 }, { "x": 756, "y": 10, "z": -1938, "_x": 0, "_y": -7.9, "_z": 0 }, { "x": 904, "y": 10, "z": -1931, "_x": 0, "_y": -7.9, "_z": 0 }, { "x": 1091, "y": 10, "z": -1914, "_x": 0, "_y": -7.9, "_z": 0 }, { "x": 1303, "y": 10, "z": -1905, "_x": 0, "_y": -7.9, "_z": 0 }, { "x": 1473, "y": 10, "z": -1895, "_x": 0, "_y": -7.9, "_z": 0 }, { "x": 1716, "y": 10, "z": -1880, "_x": 0, "_y": -7.9, "_z": 0 }, { "x": 2044, "y": 10, "z": -1862, "_x": 0, "_y": -7.9, "_z": 0 }, { "x": 2344, "y": 10, "z": -1845, "_x": 0, "_y": -7.9, "_z": 0 }]
	//		;


	//		var poslist =
	//[{ "x": -370, "y": 0, "z": -722, "_x": 0, "_y": 1.5, "_z": 0 }, { "x": -361, "y": 0, "z": -810, "_x": 0, "_y": -0.1, "_z": 0 }]
	//		;


	//var poslist = [];
	var iPos = 0, set = poslist[iPos], dt = new Date();

	var geometry = new THREE.BoxGeometry(2, 100, 2);
	var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
	var endcube = new THREE.Mesh(geometry, material);
	endcube.position.y = 50;
	scene.add(endcube);



	//var geometry = new THREE.PlaneGeometry(5, 20, 32);
	//var material = new THREE.MeshBasicMaterial({ color: 0xffff00, side: THREE.DoubleSide });
	//var plane = new THREE.Mesh(geometry, material);
	//scene.add(plane);


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
	//cube.scale.set(2,2,2);
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
	//camera.position.y = 10;
	//camera.position.y = 2200;
	//camera.rotation.x = -1.5;
	//camera.rotation.y = 1.5;
	//gopos({ "x": -126, "y": 2260, "z": 1603, "_x": -0.95, "_y": -0.05, "_z": -0.06 })
	//gopos({ "x": -921, "y": 81, "z": 385, "_x": -0.48, "_y": -0.02, "_z": -0.01 });
	run = 0;
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
	start();

	function animate() {
		requestAnimationFrame(animate);
		//console.log(1);
		if (run) {
			var diff = new Date().valueOf() - dt.valueOf(), next = false, d = {};
			var pos1 = poslist[iPos], pos2 = poslist[iPos + 1], speed = 0.05;
			if (pos1 && pos2) {
				var diffo = { x: pos1.x - pos2.x, z: pos1.z - pos2.z };
				var afstand = Math.sqrt((diffo.x * diffo.x) + (diffo.z * diffo.z));
				if (pos2 && afstand) {
					//pos1.pos.y = pos2.pos.y = 3;
					var speedafstand = speed * diff, speedpart = speedafstand / afstand;
					//var step=
					//console.log(pos1.pos.x, pos2.pos.x, diff, diffo, afstand, speedafstand, speedpart);
					if (speedpart > 1) { iPos++; dt = new Date(); }
					//pos1.rot._x = pos2.rot._x = 0;
					//pos1.rot._z = pos2.rot._z = 0;
					//pos1.rot._y = pos2.rot._y = 0;
					var dp = {};
					['x', 'z'].forEach(function (posname) {
						var p1 = pos1[posname], p2 = pos2[posname]; dp[posname] = p2 - p1; step = dp[posname] * speedpart, pnew = p1 + step;
						group.position[posname] = pnew;
					});
					var p1 = pos1._y, p2 = pos2._y, dph = p2 - p1, step = dph * speedpart, pnew = p1 + step;

					//var hoek = !dp.z && !dp.x ? hoek : !dp.z ? Math.PI / 2 : !dp.x ? 0 : Math.PI / 2 * Math.tan(dp.x / dp.z) - Math.PI / 2;

					//console.log('HOEK', dp.x, dp.z, hoek, pnew);
					group.rotation.y = pnew;
				}
			}
			else run = 0;
		}
		divpos.innerText = JSON.stringify(curpos());
		//curposcube.position.set(camera.position.x-2, camera.position.y, camera.position.z);
		//group.position.set(camera.position.x, camera.position.y, camera.position.z);
		//group.rotation.set(camera.rotation.x, camera.rotation.y, camera.rotation.z);
		renderer.render(scene, camera);
	}
	//setTimeout(animate, 5000);
	AIM.extend({
		on: {
			init() {
				animate();
				r = 0;
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
