function fetchGradeData() {
    console.log("Fetching grade data...");
}
function populatedGradebook(data) {
    console.log("Populating gradebook with data:", data);
}

const gradeData = fetchGradeData();
populateGradebook(gradeData);
function fetchGradeData() { 
    
console.log("Fetching grade data...");

let xhr = new XMLHttRequest();

let apiRoute = "/api/grades";

xhr.onreadystatechange = function(){

    if(xhr.readyState === xhr.DONE){
        if (xhr.status !==200){
            console.error('Could not get grades.   
                          Status: ${xhr.status}');

        populateGradebook(JSON.parse(xhr.responseText));
        }
    }.bind(this); 
    xhr.open("get", apiroute, true);
    xhr.send();
}
