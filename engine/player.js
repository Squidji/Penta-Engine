var player = inits.player;

player.heal = function(hp, pastmax) {
	player.hp[0] += hp;
	if (!pastmax && player.hp[0] > player.hp[1]) {
		player.hp[0] = player.hp[1];
	};
	player.updateMenu();
};

player.recover = function(mp, pastmax) {
	player.mp[0] += mp;
	if (!pastmax && player.mp[0] > player.mp[1]) {
		player.mp[0] = player.mp[1];
	};
	player.updateMenu();
};

player.removeItem = function(id) {
	if (Object.keys(player.items).includes(id)) {
		player.items[id] -= 1;
		if (player.items[id] === 0) {
			delete player.items[id];
		}
	};
};

player.updateMenu = function() {
	$('#playermenu h1').html(player.name+'<i>Lv.'+player.level+'</i>');
	$('#playermenu #gold').html(''+player.gold[0]+'G');
	statusBar('#playermenu #hp', player.hp, 'HP');
	statusBar('#playermenu #mp', player.mp, 'MP');
};

player.getTime = function () {
	let static = player.time;
	let date = new Date(static.date[0] + 1990, static.date[1]+1, static.date[2], static.time[0], static.time[1], 0);
	let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
					'September', 'October', 'November', 'December'];
	let re = {
		day:  days[date.getDay()],
		date: date.getDate(),
		year: 'X' + static.date[0],
		month: months[date.getMonth()],
		hour: date.getHours(),
		minute: date.getMinutes(),
		ampm: 'am',
		ordinal: 'th',
		_full: date
	};
	re.sm = {
		day: re.day.substring(0, 3),
		month: re.month.substring(0,3),
		minute: ''+date.getMinutes(),
		hour: re.hour
	};

	if (re.sm.minute.length === 1) {
		re.sm.minute='0'+re.sm.minute;
	};
	if (re.sm.hour > 12) {
		re.sm.hour-=12;
		re.ampm = 'pm';
	} else if (re.sm.hour === 0) {
		re.sm.hour = 12;
	};
	if ( (''+re.date[0]).endsWith('1') ) {re.ordinal = 'st'};
	if ( (''+re.date[0]).endsWith('2') ) {re.ordinal = 'nd'};
	if ( (''+re.date[0]).endsWith('3') ) {re.ordinal = 'rd'};

	return re;
};

player.passTime = function(minutes) {
	player.time.time[1] += minutes;
	while (player.time.time[1] > 60) {
		player.time.time[0]++;
		player.time.time[1]-=60;
	};
	// upadte days and months based on passed time
	updateTimestamp();
};