var inits = {};

inits.game = {
	start: function() { renderMap() },
	mapsize: [1000, 700]
};

inits.mods = [];

inits.player = {
	name: 'Yuika',
	level: 1,
	hp: [80,100], //var max
	mp: [10,40],
	gold: [200, 400],
	location: ['testland', 0],
	time: {
		time: [14, 0], //hr mn
		date: [0, 8, 27] //27th aug, 1990
	},
	getTime: null
};

inits.locales = {
	testland: {
		displayName: 'TestLand',
		weather: 'sun',
		0: {
			img: './img/map/test.png',
			buttons: [
				{
					coord: [[567,262],[716,323]],
					shape: 'rect',
					title: 'Read Sign',
					action: function() { renderDialogue('testland', 0, 0) }
				},
				{
					coord: [[193,433],[324,605]],
					shape: 'rect',
					title: 'Palm Tree',
					action: function() { renderDialogue('testland', 1, 0) }
				}
			]
		}
	}
};

inits.dialogue = {
	testland: {
		0: [
			{type: 'text', name: 'Sign', text: 'congratulations- you can read.'},
			{type: 'action', action: function() {renderMap()}}
		],
		1: [
			{type: 'text', text: 'what a well drawn tree'},
			{type: 'action', action: function() {renderMap()}}
		]
	}
}