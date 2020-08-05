var locales = inits.locales;
var dialogue = inits.dialogue;

function moveLocation(path, pass_time) {
	renderMap();
	$('#worldview #buttons').css('display', 'none');

	$('#worldview #background').animate({opacity: '0'}, 150);

	if (pass_time !== undefined && pass_time !== 0) {
		$('#timeincrement').css('display', 'block');
		for (let i=0; i<pass_time; i++) {
			setTimeout( function() {

				player.passTime(1);
				let data = player.getTime();
				$('#timeincrement').text(data.sm.hour + ':' + data.sm.minute + data.ampm);

			}, 300/pass_time * i);
		};
		setTimeout( function() {
			player.location = path;
			renderMap();
			$('#worldview #background').animate({opacity: '1'}, 150);
		}, 600);

	} else {
		player.location = path;
		renderMap();
	};
};