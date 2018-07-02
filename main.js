var config = {
  apiKey: "AIzaSyByvD1q5Wsv0HRbo_QmRLgDQlT5ZcvsWkc",
  authDomain: "trainstation0911.firebaseapp.com",
  databaseURL: "https://trainstation0911.firebaseio.com",
  projectId: "trainstation0911",
  storageBucket: "trainstation0911.appspot.com",
  messagingSenderId: "454520742464"
};
firebase.initializeApp(config);

  var trainName = "";
  var destination = "";
  var firstTrain = 0;//train time military moment.js
  var frequency = 0;

  var database = firebase.database()

  $("#submit").on("click", function(event) {
   
    event.preventDefault();
   trainName = $("#train-name").val()
   destination = $("#destination").val()
   firstTrain = $("#first-train").val()
   frequency = $("#frequency").val()

    

   database.ref().push({
    trainName: trainName,
    destination: destination,
    firstTrain: firstTrain,
    frequency: frequency, 
    //dateAdded: firebase.database.ServerValue.TIMESTAMP
  })
  console.log(trainName)
  console.log(destination)
  console.log(firstTrain)
  console.log(frequency)
});

database.ref().on("child_added", function(snapshot) {
  $("#train-name").text(snapshot.val().trainName);
  $("#destination").text(snapshot.val().destination);
  $("#first-train").text(snapshot.val().firstTrain);
  $("#frequency").text(snapshot.val().frequency);

  var tableBody = $("#table-body");
  var tableRow = $("<tr>");

  var tName = $('<td>' + trainName + '</td>')
  var tDestination = $('<td>' + destination + '</td>')
  var tFirstTrain = $('<td>' + firstTrain + '</td>')
  //var = $('<td>' + nextArrival + '</td>')
  var tFrequency = $('<td>' + frequency + '</td>')

  tableBody.append(tableRow);
    tableRow.append(tName);
    tableRow.append(tDestination);
    tableRow.append(tFirstTrain);
    tableRow.append(tFrequency);
    //tableRow.append();


});