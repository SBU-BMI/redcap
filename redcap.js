var RedcapJS = (function (URL) {	
	console.log('redcap.js loaded');

	function login() {
		var loginPrompt = window.prompt("Please enter your REDCap API Token for the server located at " + URL,"REDCapToken");
		if (loginPrompt != null) {
			if(loginPrompt.length>0){
				sessionStorage.setItem('REDCapToken',loginPrompt)
			}
		}
		else {
			
		}
	}
	
	function exportRecords(callBack, redcapParams) {
		if (redcapParams == undefined || redcapParams == null) {
			redcapParams = {};
		}
		
		redcapParams.token = sessionStorage.REDCapToken;
		if (!redcapParams.hasOwnProperty("content")) {
			redcapParams.content = "record";
		}
		if (!redcapParams.hasOwnProperty("format")) {
			redcapParams.format = "json";
		}	

		redcapAPICall(redcapParams, callBack);
	}
	
	function exportReports(callBack, redcapParams) {
		if (redcapParams == undefined || redcapParams == null) {
			redcapParams = {};
		}
		
		redcapParams.token = sessionStorage.REDCapToken;
		if (!redcapParams.hasOwnProperty("content")) {
			redcapParams.content = "report";
		}
		if (!redcapParams.hasOwnProperty("format")) {
			redcapParams.format = "json";
		}

		redcapAPICall(redcapParams, callBack);
	}
	
	function importRecords(callBack, redcapParams) {
		if (redcapParams == undefined || redcapParams == null) {
			redcapParams = {};
		}
		
		redcapParams.token = sessionStorage.REDCapToken;
		if (!redcapParams.hasOwnProperty("content")) {
			redcapParams.content = "record";
		}
		if (!redcapParams.hasOwnProperty("format")) {
			redcapParams.format = "json";
		}

		redcapAPICall(redcapParams, callBack);
	}
	
	function exportMetadata(callBack, redcapParams) {
		if (redcapParams == undefined || redcapParams == null) {
			redcapParams = {};
		}
		
		redcapParams.token = sessionStorage.REDCapToken;
		if (!redcapParams.hasOwnProperty("content")) {
			redcapParams.content = "metadata";
		}
		if (!redcapParams.hasOwnProperty("format")) {
			redcapParams.format = "json";
		}

		redcapAPICall(redcapParams, callBack);
	}

	function exportFile(callBack, redcapParams) {
		if (redcapParams == undefined || redcapParams == null) {
			redcapParams = {};
		}
		
		redcapParams.token = sessionStorage.REDCapToken;
		if (!redcapParams.hasOwnProperty("content")) {
			redcapParams.content = "file";
		}
		if (!redcapParams.hasOwnProperty("action")) {
			redcapParams.action = "export";
		}

		redcapAPICall(redcapParams, callBack);
	}
	
	function importFile(callBack, redcapParams) {
		if (redcapParams == undefined || redcapParams == null) {
			redcapParams = {};
		}
		
		redcapParams.token = sessionStorage.REDCapToken;
		if (!redcapParams.hasOwnProperty("content")) {
			redcapParams.content = "file";
		}
		if (!redcapParams.hasOwnProperty("action")) {
			redcapParams.action = "import";
		}

		redcapAPICall(redcapParams, callBack);
	}
	
	function deleteFile(callBack, redcapParams) {
		if (redcapParams == undefined || redcapParams == null) {
			redcapParams = {};
		}
		
		redcapParams.token = sessionStorage.REDCapToken;
		if (!redcapParams.hasOwnProperty("content")) {
			redcapParams.content = "file";
		}
		if (!redcapParams.hasOwnProperty("action")) {
			redcapParams.action = "delete";
		}

		redcapAPICall(redcapParams, callBack);
	}

	function exportInstruments(callBack, redcapParams) {
		if (redcapParams == undefined || redcapParams == null) {
			redcapParams = {};
		}
		
		redcapParams.token = sessionStorage.REDCapToken;
		if (!redcapParams.hasOwnProperty("content")) {
			redcapParams.content = "instrument";
		}
		if (!redcapParams.hasOwnProperty("format")) {
			redcapParams.format = "json";
		}

		redcapAPICall(redcapParams, callBack);
	}

	function exportEvents(callBack, redcapParams) {
		if (redcapParams == undefined || redcapParams == null) {
			redcapParams = {};
		}
		
		redcapParams.token = sessionStorage.REDCapToken;
		if (!redcapParams.hasOwnProperty("content")) {
			redcapParams.content = "event";
		}
		if (!redcapParams.hasOwnProperty("format")) {
			redcapParams.format = "json";
		}

		redcapAPICall(redcapParams, callBack);
	}
	
	function exportArms(callBack, redcapParams) {
		if (redcapParams == undefined || redcapParams == null) {
			redcapParams = {};
		}
		
		redcapParams.token = sessionStorage.REDCapToken;
		if (!redcapParams.hasOwnProperty("content")) {
			redcapParams.content = "arm";
		}
		if (!redcapParams.hasOwnProperty("format")) {
			redcapParams.format = "json";
		}

		redcapAPICall(redcapParams, callBack);
	}
	
	function exportInstrumentEventMappings(callBack, redcapParams) {
		if (redcapParams == undefined || redcapParams == null) {
			redcapParams = {};
		}
		
		redcapParams.token = sessionStorage.REDCapToken;
		if (!redcapParams.hasOwnProperty("content")) {
			redcapParams.content = "formEventMapping";
		}
		if (!redcapParams.hasOwnProperty("format")) {
			redcapParams.format = "json";
		}

		redcapAPICall(redcapParams, callBack);
	}

	function exportUsers(callBack, redcapParams) {
		if (redcapParams == undefined || redcapParams == null) {
			redcapParams = {};
		}
		
		redcapParams.token = sessionStorage.REDCapToken;
		if (!redcapParams.hasOwnProperty("content")) {
			redcapParams.content = "user";
		}
		if (!redcapParams.hasOwnProperty("format")) {
			redcapParams.format = "json";
		}

		redcapAPICall(redcapParams, callBack);
	}

	function exportVersion(callBack, redcapParams) {
		if (redcapParams == undefined || redcapParams == null) {
			redcapParams = {};
		}
		
		redcapParams.token = sessionStorage.REDCapToken;
		if (!redcapParams.hasOwnProperty("content")) {
			redcapParams.content = "version";
		}
		
		redcapAPICall(redcapParams, callBack);
	}

	function redcapAPICall(redcapParams, callBack) {
		$.ajax(
			URL,
			{
				"data": redcapParams,
				"method": "post",
				"success": function(data) {
					callBack(data);
				}
			}
		);
	}
	
	return {
		login: login,
		exportRecords: exportRecords,
		exportReports: exportReports,
		importRecords: importRecords,
		exportMetadata: exportMetadata,
		exportFile: exportFile,
		importFile: importFile,
		deleteFile: deleteFile,
		exportInstruments: exportInstruments,
		exportEvents: exportEvents,
		exportArms: exportArms,
		exportInstrumentEventMappings: exportInstrumentEventMappings,
		exportUsers: exportUsers,
		exportVersion: exportVersion
	};
});