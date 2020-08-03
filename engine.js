function loadinit() {
	$('#worldview').css('width',  inits.game.mapsize[0] + 'px');
	$('#worldview').css('height', inits.game.mapsize[1] + 'px');
	updateTimestamp();
	inits.game.start();
};

function togglePlayermenu() {
	if ($('#playermenu').css('left') === '-660px') {
		$('#playermenu').css('left', '0')} else {
		$('#playermenu').css('left', '-660px')};
	$('#playermenu h1').html(player.name+'<i>Lv.'+player.level+'</i>');
	$('#playermenu #gold').html(''+player.gold[0]+'G');
	statusBar('#playermenu #hp', player.hp, 'HP');
	statusBar('#playermenu #mp', player.mp, 'MP');
};

function statusBar(selector, set, text) { // [var, max]
	let value = set[0] / set[1];
	value = value * 100;
	$(selector).html('<i style="width:'+value+'%"></i>');
	if (text !== undefined) {
		$(selector).html($(selector).html() + '<b>'+text+'</b>');
	};
};

function updateTimestamp() {
	let data = player.getTime();
	$('#timestamp #date').html(data.sm.month + '. ' + data.date + data.ordinal + ', ' + data.year);
	$('#timestamp #time').html(data.sm.hour + ':' + data.sm.minute + data.ampm);
};

function renderMap(path) {
	if (path === undefined) { path = player.location };
	let map = locales[ path[0] ][ path[1] ];
	$('#worldview #background').css('background-image', 'url(' + map.img + ')');
	$('#worldview #buttons').css('display', 'block');
	$('#worldview #dialogue').css('display', 'none');
	$('#worldview #background').css('filter', 'none');
	$('#worldview #buttons').html('');
	for (let i=0; i<map.buttons.length; i++) {

		let ref = map.buttons[i];
		let crd = map.buttons[i].coord;
		let b = $('<button>');
		if (ref.shape === 'rect') {
			b.css('left', crd[0][0]);
			b.css('top',  crd[0][1]);
			b.css('width', crd[1][0] - crd[0][0]+1);
			b.css('height', crd[1][1] - crd[0][1]+1);
		};
		b.attr('title', ref.title);
		b.click(ref.action);
		$('#worldview #buttons').append(b);
	};
};

function renderDialogue(path, id, n) {
	$('#worldview #buttons').css('display', 'none');
	$('#worldview #dialogue').css('display', 'block');
	$('#worldview #background').css('filter', 'blur(3px)');
	let dia = dialogue[path][id][n];

	if (dia.type === 'text') {
		$('#dialogue #textcontainer #name').css('display', 'block');
		if (dia.name === undefined) {$('#dialogue #textcontainer #name').css('display', 'none')}
		$('#dialogue #textcontainer #name').html(dia.name);
		$('#dialogue #textcontainer #body').html(dia.text);
		$('#dialogue #textcontainer').click( function() {renderDialogue(path, id, n+1)} );
	} else if (dia.type === 'action') {
		dia.action();
	};
};