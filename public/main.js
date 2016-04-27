

function flip() {
    $('.card').toggleClass('flipped');
    $('.details').toggleClass('show');
}

$('.submit-text').on('click',function(){
  
    var text = $('#text-input').val();
    if(text.length<2){
      $('.title').html("TELL ME MORE");
    }
    else{
      var data = {
        text: text,
      }; 
      fetch(data);
    }
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
     var resultScore= response.document_tone.tone_categories[0].tones[index].score;
     console.log(resultEmotion);
     console.log(resultScore);

if(resultEmotion=="Fear"){
    $('.back').html('<img src= "https://slack-imgs.com/?c=1&url=http%3A%2F%2Fmedia.salemwebnetwork.com%2Fcms%2FCW%2Ffaith%2F14061-fear-hide-scared-woman.1200w.tn.jpg"/>' );
    $('.title').html('Fear no more');
    
   }

   else if (resultEmotion=="Joy"){
    $('.back').html('<img src= "https://images.unsplash.com/photo-1446161543652-83eaa65fddab?crop=entropy&fit=crop&fm=jpg&h=650&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1375" style = "height:100%"/>');
    $('.title').html('Keep smiling ');
    
   }

   else if(resultEmotion=="Disgust"){
    $('.back').html('<img src="http://gratisography.com/pictures/229_1.jpg"/>');
    $('.title').html('Sounds Yucky');
    
   }

   else if(resultEmotion=="Anger"){
    $('.back').html('<img src="http://gratisography.com/pictures/262_1.jpg"/>');
    $('.title').html('Why So Angry?');
    
   }

   else if(resultEmotion=="Sadness"){
    $('.back').html('<img src="http://wallpaperswide.com/download/sense_of_sadness-wallpaper-1366x768.jpg"/>');
    $('.title').html('You Seem Down');
    if(resultScore>0.49){
      $('.title').append('!');
    }
   }

var sentences = [];
   var index1= -1;
    for(var j=0;j<response.sentences_tone.length;j++){
       var sentence = response.sentences_tone[j];
       var text = sentence.text;

       var highestScore1 = 0;
       
       for(var k =0; k < 5; k++){
       var score1 = sentence.tone_categories[0].tones[k].score;
       if(score1>highestScore1)
       {
         highestScore1 = score1;
         index1 = k;
       }
     }

     var resultEmotion1 = sentence.tone_categories[0].tones[index1].tone_name;
     var sentence = {
      text: text,
      emotion: resultEmotion1
     };

     sentences.push(sentence);
    }

    for(var z=0 ;z < sentences.length; z++){
      if(sentences[z].emotion=="Joy"){
        sentences[z].text = sentences[z].text.fontcolor("yellow");
      }
      else if(sentences[z].emotion=="Anger"){
        sentences[z].text = sentences[z].text.fontcolor("red");
      }
      else if(sentences[z].emotion=="Disgust"){
        sentences[z].text = sentences[z].text.fontcolor("brown");
      }
      else if(sentences[z].emotion=="Sadness"){
        sentences[z].text = sentences[z].text.fontcolor("blue");
      }
      else if(sentences[z].emotion=="Fear"){
        sentences[z].text = sentences[z].text.fontcolor("gray");
      }
      $('.details').append(sentences[z].text);
    }
    // var result = sentences[0].text.fontcolor("red");
    
    //  console.log("first sentence is:" + sentences[0].text + " emotion is:" + sentences[0].emotion);
    //  $('.details').html(result);
     // resultData = response;
     // $('.result').html(JSON.stringify(response));

   },
   error: function(jqXHR, textStatus, errorThrown) {
     console.log(textStatus);
   }
 }); 
}

