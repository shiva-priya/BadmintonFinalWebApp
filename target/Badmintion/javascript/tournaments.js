function tourLoad(){
    loadHome();
        $.get('ShowTrounaments', {}, function(responseText) {

            if(responseText=="null")
            {
                alert("No Players to Show!");
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

        var btn = document.createElement('button');
        btn.textContent = 'Join';
        btn.setAttribute('id',name);
        btn.style.fontSize="large";


       
        tagdiv.appendChild(nameT);
        tagdiv.appendChild(winPrizeT);
        tagdiv.appendChild(runPrizeT);
        tagdiv.appendChild(locationT);
        tagdiv.appendChild(locationT);
        tagdiv.appendChild(btn);
        x.appendChild(tagdiv);
        
        i++;

        maindiv.appendChild(x);
    }

    document.body.appendChild(maindiv);
}