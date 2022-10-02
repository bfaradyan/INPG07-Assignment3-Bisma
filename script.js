const data = {
	"async": true,
	"crossDomain": true,
	"url": "https://covid-193.p.rapidapi.com/statistics",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "",
		"X-RapidAPI-Host": "covid-193.p.rapidapi.com"
	}
};

$.ajax(data).done(function (response) {
	console.log(response);
    document.getElementById('textCountries').innerHTML = 'All';
    searchCountries = document.getElementById('searchCountries');
    searchCountries.options[searchCountries.options.length] = new Option('Search Countries', 'All');
    var countryList = []
    response.response.forEach(element => {
        if (element['country'] == 'All') {
            document.getElementById('dataActive').innerHTML = element['cases']['active'];
            document.getElementById('dataNew').innerHTML = element['cases']['new'];
            document.getElementById('dataRecovered').innerHTML = element['cases']['recovered'];
            document.getElementById('totalCase').innerHTML = element['cases']['total'];
            document.getElementById('totalDeath').innerHTML = element['deaths']['total'];
            document.getElementById('totalTest').innerHTML = element['tests']['total'];        
        } else {
            countryList.push(element['country'])
        }
        countryList.sort()
    });
    countryList.forEach(element => {
        searchCountries.options[searchCountries.options.length] = new Option(element, element);  
    })
});

function ChangeCountries() {
    $.ajax(data).done(function (response) {
        response.response.forEach(element => {
            if (element['country'] == document.getElementById('searchCountries').value) {
                document.getElementById('dataActive').innerHTML = element['cases']['active'];
                document.getElementById('dataNew').innerHTML = element['cases']['new'];
                document.getElementById('dataRecovered').innerHTML = element['cases']['recovered'];
                document.getElementById('totalCase').innerHTML = element['cases']['total'];
                document.getElementById('totalDeath').innerHTML = element['deaths']['total'];
                document.getElementById('totalTest').innerHTML = element['tests']['total'];        
            }
        });
    });
    document.getElementById('textCountries').innerHTML = document.getElementById('searchCountries').value;
}

