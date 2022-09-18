const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Fira',
	imageBackground: true,
	openInNewTab: false,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon',
	greetingEvening: 'Good evening',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '7833ab7dc732944f16f2f2b10cd0f8b7', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '52.520008',
	defaultLongitude: '13.404954', // Berlin, Germany

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: false,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'https://mail.proton.me/',
		},
		{
			id: '3',
			name: 'Knots',
			icon: 'sailboat',
			link: 'https://www.animatedknots.com',
		},
		{
			id: '4',
			name: 'Calendar',
			icon: 'calendar',
			link: 'https://metropolitanschool.com/en/about-us/school-life/calendar',
		},
		{
			id: '5',
			name: 'Reddit',
			icon: 'glasses',
			link: 'https://reddit.com',
		},
		{
			id: '6',
			name: 'Odysee',
			icon: 'youtube',
			link: 'https://odysee.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'News',
			icon: 'newspaper',
			link: 'https://www.washingtonpost.com/',
		},
		{
			id: '3',
			name: 'Discord',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'MediaMarkt',
			icon: 'shopping-bag',
			link: 'https://www.mediamarkt.de/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'newspaper',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://open.spotify.com',
				},
				{
					name: 'WashingtonPost',
					link: 'https://www.washingtonpost.com/',
				},
				{
					name: 'MediaMarkt',
					link: 'https://www.mediamarkt.de/',
				},
				{
					name: 'HackerNews',
					link: 'https://thehackernews.com/',
				},
			],
		},
		{
			icon: 'code-2',
			id: '2',
			links: [
				{
					name: 'SoloLearn',
					link: 'https://www.sololearn.com/learn',
				},
				{
					name: 'YouTube',
					link: 'https://www.youtube.com/',
				},
				{
					name: 'StackOverflow',
					link: 'https://stackoverflow.com/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/GotaLoveFiraCode?tab=repositories',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://open.spotify.com',
				},
				{
					name: 'WashingtonPost',
					link: 'https://www.washingtonpost.com/',
				},
				{
					name: 'MediaMarkt',
					link: 'https://www.mediamarkt.de/',
				},
				{
					name: 'HackerNews',
					link: 'https://thehackernews.com/',
				},
			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'SoloLearn',
					link: 'https://www.sololearn.com/learn',
				},
				{
					name: 'YouTube',
					link: 'https://www.youtube.com/',
				},
				{
					name: 'StackOverflow',
					link: 'https://stackoverflow.com/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/GotaLoveFiraCode?tab=repositories',
				},
			],
		},
	],
};
