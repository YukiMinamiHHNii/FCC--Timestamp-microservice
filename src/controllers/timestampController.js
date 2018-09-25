exports.getTime = function(req, res) {
	res.json({
		unix: (new Date().getTime() / 1000).toFixed(0),
		utc: new Date().toUTCString()
	});
};
exports.getTimestamp = function(req, res) {
	console.log(req.params.date_string)
	console.log(new Date(req.params.date_string))
	console.log(isNaN(new Date(req.params.date_string)))
	if (!isNaN(new Date(req.params.date_string).getTime())) {
		res.json({
			unix: parseInt(new Date(req.params.date_string).getTime() / 1000).toFixed(0),
			utc: new Date(req.params.date_string).toUTCString()
		});
	} else {
		res.json({
			error: "Invalid Date"
		});
	}
};
