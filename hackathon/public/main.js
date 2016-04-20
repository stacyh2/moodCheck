
// var watson = ('watson-developer-cloud');
// var toneAnalyzer = watson.tone_analyzer({
//   url: 'https://gateway.watsonplatform.net/tone-analyzer-beta/api/',
//   username: 'e5c64c08-8993-492b-ae49-baba98c7865b',
//   password: '6rfx2ArnKjW7',
//   version_date: '2016-11-02',
//   version: 'v3-beta'
// });


$('.check').on('click',function(){
  var text = $('#text-input').val();

  var data = {
    text: text
  }; 

  fetch(data);
})



// $('.submit-input').on('click',function(){

//    window.location = 'http://localhost:3000/';
//    fetch();

// // tone_analyzer.tone({ text: 'A word is dead when it is said, some say. Emily Dickinson' },
// //   function(err, tone) {
// //     if (err)
// //       console.log(err);
// //     else
// //       console.log(JSON.stringify(tone, null, 2));
// // });

// });



var fetch = function () {
  $.ajax({
    method: "GET",
    url: 'http://localhost:3000/get',//gateway.watsonplatform.net/tone-analyzer-beta/api/',
    // dataType: "jsonp",
    // jsonp: "callback",
    body: JSON, //make object {text: "ksdjlsakdjlsakdjasld "}
    success: function(response) {
      console.log("hey2"); //here append wherever I want to use the data
      console.log(response);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
    }
  }); 
}

