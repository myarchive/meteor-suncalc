Package.describe({
    summary: "Calculate sun positions without a webservice using only latitude and longitude"
});

Package.on_use(function (api) {
    api.use();
    api.add_files("suncalc.js");
});
