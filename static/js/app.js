// from data.js
var tableData = data;
tbody = d3.select("tbody");

// Use 'Object.entries' to console.log each UFO sighting
function displayData(data){
    tbody.text("")
    data.forEach(function(sighting){
    new_tr = tbody.append("tr")
    Object.entries(sighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)
    })
})}

displayData(tableData)

//select input and filter button
var dateInputText = d3.select("#datetime")
var button = d3.select("filter-btn")

// filter data with user input
function clickSelect(){
    d3.event.preventDefault();
    console.log(dateInputText.property("value"));
    var new_table = tableData.filter(sighting => sighting.datetime===dateInputText.property("value"))
    //display new table
    displayData(new_table)
}
// event listener for change and click
dateInputText.on("change", clickSelect)
