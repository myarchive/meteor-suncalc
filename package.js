Package.describe({
	name: 'alisalaah:suncalc',
	summary: 'Calculate sun positions without a webservice using only latitude and longitude',
	version: '2.0.1',
	git: 'https://github.com/alisalaah/meteor-suncalc.git'
});

Package.onUse(function(api) {
	api.versionsFrom('METEOR@0.9.2');
	//api.use(['ui'], 'client');
	
	api.add_files("suncalc.js", "client");
});
