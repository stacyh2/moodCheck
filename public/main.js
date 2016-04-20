var resultData= {};


$('.submit-text').on('click',function(){
  var text = $('#text-input').val();

  var data = {
    text: text,
  }; 

  console.log(data);
  fetch(data);
});


var fetch = function (data) {
  var URIEncodedSong = encodeURIComponent(data.text);
  $.ajax({
    method: "GET",
    url: 'http://localhost:3000/' + URIEncodedSong, 
    dataType: 'json',
    data: data, 
    success: function(response) {
      console.log(response); 
      console.log(response.document_tone.tone_categories[0].tones[0].score);
      var highestScore = 0;
      var index = -1;
      for(var i =0; i < 5; i++){
        var score = response.document_tone.tone_categories[0].tones[i].score;
        if(score>highestScore)
        {
          highestScore = score;
          index = i;
        }
      }

      var resultEmotion = response.document_tone.tone_categories[0].tones[index].tone_name;
      console.log(resultEmotion);

      // resultData = response;
      // $('.result').html(JSON.stringify(response));

    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
    }
  }); 
}

console.log(resultData);

