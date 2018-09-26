exports.getTime = function(req, res) {
	res.json({
		unix: new Date().getTime(),
		utc: new Date().toUTCString()
	});
};
exports.getTimestamp = function(req, res) {
	if (!isNaN(new Date(req.params.date_string))) {
		res.json({
			unix: new Date(req.params.date_string).getTime(),
			utc: new Date(req.params.date_string).toUTCString()
		});
	} else if (!isNaN(new Date(parseInt(req.params.date_string)))) {
		res.json({
			unix: new Date(parseInt(req.params.date_string)).getTime(),
			utc: new Date(parseInt(req.params.date_string)).toUTCString()
		});
	} else {
		res.json({
			error: "Invalid Date"
		});
	}
};
