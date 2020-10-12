// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// YOUR CODE HERE!
data.forEach((line) => {
    var row = tbody.append("tr");
    Object.entries(line).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
    });
});

function buildTable(data){
    tbody.html('');
    data.forEach((entry) => {
    var row = tbody.append("tr");
    Object.entries(entry).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
    });
});
};



function filterTable(element){
    console.log("Button Clicked")
    const value = d3.select('#filter').property('value');
    console.log(value);
    const filterAliens = data.filter(alien=> 
    alien.datetime.includes(value)||
    alien.city.includes(value)||
    alien.state.includes(value)||
    alien.country.includes(value)||
    alien.shape.includes(value));//||
//     alien.durationMinutes.includes(value)||
//     alien.comments.includes(value));
    buildTable(filterAliens);}
//not sure why durationMinutes and comments cannot be filtered by, will look into for further study

d3.select('#filter').on('keyup', filterTable);

buildTable(tableData);