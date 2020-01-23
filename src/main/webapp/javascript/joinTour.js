function tourLoad(){
    loadHome();
        $.get('ShowTrounaments', {}, function(responseText) {

            if(responseText=="null")
            {
                alert("No Tournaments to Show!");
            }
            else
            {
                makeui(responseText);
               // alert(responseText.legth)
              // alert(deets[0].firstName);

               // console.log(responseText);
            }

        });
}


function makeui(jsonData)
{
    var maindiv = document.createElement('div');
    maindiv.setAttribute('class','maindiv');
    var plr = JSON.parse(jsonData);
    var i = 0;
    // console.log("adcsd");
    // document.write( Object.keys(plr).length);
    // document.write("dcds");
     console.log(plr.length);
    // console.log(plr[i]);

    var spandiv = document.createElement('span');
    spandiv.setAttribute('class','spandiv');

    var tlabel = document.createElement('label');
    tlabel.textContent = "Enter Tournament You want to Join   :  ";

    var tourbox = document.createElement('input');
    tourbox.setAttribute('type','text');
    tourbox.setAttribute('id','tourbox');


    var submit = document.createElement('input');
    submit.setAttribute('type','submit');
    submit.setAttribute('id','joinbtn');
    submit.setAttribute('class','joinbtn');
    submit.setAttribute('value','Join !');

    spandiv.appendChild(tlabel);
    spandiv.appendChild(tourbox);
    spandiv.appendChild(submit);
    
    document.body.appendChild(spandiv);


    while(i<Object.keys(plr).length)
    {
        var tour = plr[i];
        var name = tour.name;
        var winPrize = tour.winPrize;
        var runPrize = tour.runprize;
        var location = tour.location;
        //var empId = tour.empId;

        var x = document.createElement('div');
        x.setAttribute('class','bdiv');

       

        var tagdiv = document.createElement('span');
        tagdiv.setAttribute('class','tagdiv');

        var nameT = document.createElement('h1');
        nameT.textContent = "Name : "+name;

        var winPrizeT = document.createElement('h1');
        winPrizeT.textContent = "Win Prize : "+winPrize;

        var runPrizeT = document.createElement('h1');
        runPrizeT.textContent ="Run Prize : " + runPrize;

        var locationT = document.createElement('h3');
        locationT.textContent ="Location : " + location;
       
        tagdiv.appendChild(nameT);
        tagdiv.appendChild(winPrizeT);
        tagdiv.appendChild(runPrizeT);
        tagdiv.appendChild(locationT);
        tagdiv.appendChild(locationT);
        x.appendChild(tagdiv);
        
        i++;

        maindiv.appendChild(x);
    }

    document.body.appendChild(maindiv);
}


$(document).on("click","#joinbtn", function(){

    var tourName = $('#tourbox').val();
    var d = document.cookie.split(";");
     if(d[1] == null){
    var email = document.cookie.split("=")[1];
     }else{
         var email= d[0].split("=")[1];
     }
         $.post('ShowTrounaments', {     
                 email : email,
                 trnName : tourName
         }, function(responseText) {
            
          //alert(responseText + "from servlet to js");

          if(responseText=="s")
          {
              alert("Joined Succesfully!");
          }
          else
          {
              alert("Sorry, Try Again!")
          }
          
         });
});