var inits = {};

inits.game = {
	start: function() { renderMap() },
	mapsize: [1000, 700]
};

inits.plugins = [];

inits.player = {
	name: 'Yuika',
	class: 'Catgirl',
	level: 1,
	hp: [80,100], //var max
	mp: [10,40],
	gold: [200, 400],
	location: ['testland', 0],
	time: {
		time: [14, 0], //hr mn
		date: [0, 8, 27] //27th aug, 1990
	},
	items: {
		'shitpotion': 2,
		'specialtea': 5
	}
};

inits.party = [
	{
		name: 'Prificent',
		class: 'Dragon Tamer',
		level: 1,
		hp: [120,120],
		mp: [17,15]
	}
];

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
					title: 'Examine Palm Tree',
					action: function() { renderDialogue('testland', 1, 0) }
				},
				{
					coord: [[849,149],[982,254]],
					shape: 'rect',
					title: 'Use Boat',
					action: function() { moveLocation(['testland', 1], 10) }
				}
			]
		},
		1: {
			img: './img/map/test2.png',
			buttons: [
				{
					coord: [[163,445],[296,550]],
					shape: 'rect',
					title: 'Use Boat',
					action: function() { moveLocation(['testland', 0], 10) }
				},
				{
					coord: [[563,136],[607,226]],
					shape: 'rect',
					title: 'Talk to Pointy-Hatted Man',
					action: function() { renderDialogue('testland', 2, 0) }
				},
				{
					coord: [[709,163],[743,195]],
					shape: 'rect',
					title: 'Enter Building'
				},
				{
					coord: [[688,353],[758,420]],
					shape: 'rect',
					title: 'Fight Metal Dude',
					action: function() { startEncounter('metaldude') }
				}
			]
		}
	}
};

inits.encounters = {
	'metaldude': {
		img: './',
	}
};

inits.items = {
	'shitpotion': {
		name: 'Shitty Potion',
		desc: 'Heals 10hp to a party member.',
		icon: './img/icons/shittypotion.png',
		locations: ['menu', 'battle'],
		action: function() { player.heal(10) },
		consumable: true
	},
	'specialtea': {
		name: 'Special Tea',
		desc: 'Recoveres 10mp to a party member. Can go past max MP.',
		icon: './img/icons/specialtea.png',
		locations: ['menu', 'battle'],
		action: function() { player.recover(10, true) },
		consumable: true
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
		],
		2: [
			{type: 'text', name: 'pointy-hatted man', text: 'greetins', img: './img/dialogue/test.png'},
			{type: 'action', action: function() {renderMap()}}
		]
	}
};