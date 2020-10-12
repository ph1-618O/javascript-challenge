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


buildTable(tableData);