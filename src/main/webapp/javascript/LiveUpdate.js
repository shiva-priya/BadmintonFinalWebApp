//root
function LiveLoad(){
loadHome();
var maindiv = document.createElement('div');
maindiv.setAttribute('class','main');
document.body.appendChild(maindiv);


//staring three parts div
var liveupdateContainer = document.createElement('div');
liveupdateContainer.setAttribute('class','starting');
maindiv.appendChild(liveupdateContainer);



//matchnumber

var matchno=document.createElement('p');
matchno.textContent="Match ID:";


var matchnobox = document.createElement('input');
matchnobox.setAttribute('type','text');
matchnobox.setAttribute('id','mid');
matchnobox.setAttribute('class','textbox');

liveupdateContainer.appendChild(matchno);
matchno.appendChild(matchnobox);


//select teams

var match=document.createElement('p');
match.textContent="Match between";
var dropdown=document.createElement('input');
dropdown.setAttribute('type','text');
dropdown.setAttribute('class','dropbox');
dropdown.setAttribute('placeholder','Team 1');
dropdown.setAttribute('id','t1');
/*
var option_ptb=document.createElement('option');
option_ptb.textContent="Team A";
*/
liveupdateContainer.appendChild(match);
liveupdateContainer.appendChild(dropdown);
//dropdown.appendChild(option_ptb);
// dropdown.appendChild(option1);
// dropdown.appendChild(option2);
// dropdown.appendChild(option3);
// dropdown.appendChild(option4);


var dropdown2=document.createElement('input');
dropdown2.setAttribute('class','dropbox');
dropdown2.setAttribute('type','text');
dropdown2.setAttribute('placeholder','Team 2');
dropdown2.setAttribute('id','t2');

//var option_t=document.createElement('option');
//option_t.textContent="Team B";


liveupdateContainer.appendChild(dropdown2);
//dropdown2.appendChild(option_t);
// dropdown2.appendChild(option_1);
// dropdown2.appendChild(option_2);
// dropdown2.appendChild(option_3);
// dropdown2.appendChild(option_4);

//select players

var players=document.createElement('p');
players.textContent="Select Players";


var dropdownp1=document.createElement('input');
dropdownp1.setAttribute('class','dropbox');
dropdownp1.setAttribute('type','text');
dropdownp1.setAttribute('placeholder',' Player 1');
dropdownp1.setAttribute('id','p1');

//var option_pta=document.createElement('option');
//option_pta.textContent="Team A";



liveupdateContainer.appendChild(players);
liveupdateContainer.appendChild(dropdownp1);
//dropdownp1.appendChild(option_pta);



var dropdownp2=document.createElement('input');
dropdownp2.setAttribute('class','dropbox');
dropdownp2.setAttribute('placeholder',' Player 2');
dropdownp2.setAttribute('id','p2');
var option_ptb=document.createElement('option');
option_ptb.textContent="Team B";



liveupdateContainer.appendChild(dropdownp2);
dropdownp2.appendChild(option_ptb);




//sets

var pointstable=document.createElement("div")
pointstable.setAttribute('class','pointstable');
pointstable.style.padding = "20px";
var setLabel = document.createElement('label');
setLabel.textContent = "SET 1 : ";
var pointstext1 = document.createElement('input');
pointstext1.setAttribute('type','text');
pointstext1.setAttribute('class','textbox');
pointstext1.setAttribute('id','s11');

var pointstext2 = document.createElement('input');
pointstext2.setAttribute('type','text');
pointstext2.setAttribute('class','textbox');
pointstext2.setAttribute('id','s12');
pointstext2.style.margin = "20px";
var pointstext3 = document.createElement('input');
pointstext3.setAttribute('type','text');
pointstext3.setAttribute('placeholder','RESULT');
pointstext3.setAttribute('id','r1');
var  Button3 = document.createElement('input');
pointstext3.setAttribute('class','textbox');
Button3.setAttribute('type','submit');
Button3.setAttribute('value','submit');
Button3.setAttribute('class','button');
Button3.setAttribute('id','s1');

maindiv.appendChild(pointstable);
pointstable.appendChild(setLabel);
pointstable.appendChild(pointstext1);
pointstable.appendChild(pointstext2);
pointstable.appendChild(pointstext3);
pointstable.appendChild(Button3);

var pointstable2=document.createElement("div")
pointstable2.setAttribute('class','pointstable2');
pointstable2.style.padding = "20px";
var setLabel2 = document.createElement('label');
setLabel2.textContent = "SET 2 : ";
var pointstext_1 = document.createElement('input');
pointstext_1.setAttribute('type','text');
pointstext_1.setAttribute('class','textbox');
pointstext_1.setAttribute('id','s21');
var pointstext_2 = document.createElement('input');
pointstext_2.setAttribute('type','text');
pointstext_2.style.margin = "20px";
pointstext_2.setAttribute('class','textbox');
pointstext_2.setAttribute('id','s22');
var pointstext_3 = document.createElement('input');
pointstext_3.setAttribute('type','text');
pointstext_3.setAttribute('class','textbox');
pointstext_3.setAttribute('placeholder','RESULT');
pointstext_3.setAttribute('id','r2');
var  Button2 = document.createElement('input');
Button2.setAttribute('class','button');
Button2.setAttribute('type','submit');
Button2.setAttribute('value','submit');
Button2.setAttribute('id','s2');

maindiv.appendChild(pointstable2);
pointstable2.appendChild(setLabel2);
pointstable2.appendChild(pointstext_1);
pointstable2.appendChild(pointstext_2);
pointstable2.appendChild(pointstext_3);
pointstable2.appendChild(Button2);


var pointstable3=document.createElement("div");
pointstable3.setAttribute('class','pointstable3');
pointstable3.style.padding = "20px";
var setLabel3 = document.createElement('label');
setLabel3.textContent = "SET 3 : ";
var pointstext1_1 = document.createElement('input');
pointstext1_1.setAttribute('type','text');
pointstext1_1.setAttribute('class','textbox');
pointstext1_1.setAttribute('id','s31');
var pointstext1_2 = document.createElement('input');
pointstext1_2.setAttribute('type','text');
pointstext1_2.setAttribute('class','textbox');
pointstext1_2.setAttribute('id','s32');
pointstext1_2.style.margin = "20px";
var pointstext1_3 = document.createElement('input');
pointstext1_3.setAttribute('type','text');
pointstext1_3.setAttribute('class','textbox');
pointstext1_3.setAttribute('placeholder','RESULT');
pointstext1_3.setAttribute('id','r3');
var  sButton = document.createElement('input');
sButton.setAttribute('class','button');
sButton.setAttribute('type','submit');
sButton.setAttribute('value','submit');
sButton.setAttribute('id','s3');
maindiv.appendChild(pointstable3);
pointstable3.appendChild(setLabel3);
pointstable3.appendChild(pointstext1_1);
pointstable3.appendChild(pointstext1_2);
pointstable3.appendChild(pointstext1_3);

pointstable3.appendChild(sButton);

}


$(document).on("click","#s1", function(){
      var mid = $('#mid').val();
      var t1 = $('#t1').val();
      var t2 = $('#t2').val();
      var p1 = $('#p1').val();
      var p2 = $('#p2').val();
      var set = 1;
      var sp1 = $('#s11').val();
      var sp2 = $('#s12').val();
      var win = $('#r1').val();
         $.post('LiveScoreUpdate', {
            mid : mid,
            t1 : t1,
            t2 : t2,
            p1 : p1,
            p2 : p2,
            set : set,
            sp1 : sp1,
            sp2 : sp2,
            win : win
         }, function(responseText) {
    
         //  alert(responseText);
         });
     
    });


$(document).on("click","#s2", function(){
      var mid = $('#mid').val();
      var t1 = $('#t1').val();
      var t2 = $('#t2').val();
      var p1 = $('#p1').val();
      var p2 = $('#p2').val();
      var set = 2;
      var sp1 = $('#s21').val();
      var sp2 = $('#s22').val();
      var win = $('#r2').val();
         $.post('LiveScoreUpdate', {
            mid : mid,
            t1 : t1,
            t2 : t2,
            p1 : p1,
            p2 : p2,
            set : set,
            sp1 : sp1,
            sp2 : sp2,
            win : win
         }, function(responseText) {
    
         //  alert(responseText);
         });
     
    });


$(document).on("click","#s3", function(){
      var mid = $('#mid').val();
      var t1 = $('#t1').val();
      var t2 = $('#t2').val();
      var p1 = $('#p1').val();
      var p2 = $('#p2').val();
      var set = 3;
      var sp1 = $('#s31').val();
      var sp2 = $('#s32').val();
      var win = $('#r3').val();
         $.post('LiveScoreUpdate', {
            mid : mid,
            t1 : t1,
            t2 : t2,
            p1 : p1,
            p2 : p2,
            set : set,
            sp1 : sp1,
            sp2 : sp2,
            win : win
         }, function(responseText) {
          // alert(responseText);
         });
     
    });





           
      
    
