var tbody = document.querySelector("tbody");
var date = document.querySelector("#date");
var search = document.querySelector("#search");

search.addEventListener("click", handleSearchButtonClick);

var sightings = dataSet;

function renderTable() {
  tbody.innerHTML = "";
  
  for (var i = 0; i < sightings.length; i++) {
    var sighting = sightings[i];
    var fields = Object.keys(sighting);
    var row = tbody.insertRow(i);
    
    for (var j = 0; j < fields.length; j++) {
      var field = fields[j];
      var cell = row.insertCell(j);
      cell.innerText = sighting[field];
    }
  }
}

function handleSearchButtonClick() {
    var filterDate = $dateInput.value.trim().toString();
    
    filteredSightings = dataSet.filter(function(sightings) {
      var sightingsDate = sightings.datetime;
      return sightingsDate === filterDate;
    });
    
    renderTable();
  }

  renderTable();