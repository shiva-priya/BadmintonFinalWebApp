function PStatsLoad(){
    loadHome();
        $.get('PlayerStats', {}, function(responseText) {
            
            if(responseText=="null")
            {
                alert("No Players to Show!");
            }
            else
            {
                makeui(responseText);
               // alert(responseText.legth)
              // alert(deets[0].firstName);
               //hiiiiiiiiii
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
    // console.log(plr.length);
    // console.log(plr[i]);
    while(i<Object.keys(plr).length)
    {
        var player = plr[i];
        var fname = player.firstName;
        var lname = player.lastName;
        var fullname = fname+" "+lname;
        var email = player.email;
        var gender = player.gender;
        var team = player.team;
        var img = player.image;
        var phone = player.phone;
        var type = player.type;
        var ssize = player.shirtSize;
        var eid = player.empId;
        var age = player.age;
        var mpl = player.matchesPlayed;
        var pos = player.position;
        var bid = player.bidStatus;
        var role = player.role;
        var uid = player.userId;
        var points = player.points;

        var x = document.createElement('div');
        x.setAttribute('class','bdiv');
        
        var imgDiv = document.createElement('span');
        imgDiv.setAttribute('class','imgdiv');
        var image = document.createElement('img');
        image.setAttribute('src',img);
        image.setAttribute('class','userphoto');
        imgDiv.appendChild(image);

        var tagdiv = document.createElement('span');
        tagdiv.setAttribute('class','tagdiv');
        
        var posT = document.createElement('h1');
        posT.textContent = "Points : "+points;

        var nameT = document.createElement('h1');
        nameT.textContent = fullname;
    
        var genderT = document.createElement('h4');
        genderT.textContent ="Gender : " + gender;

        var mplT = document.createElement('h4');
        mplT.textContent ="Matches Played : " + mpl;

        var teamT = document.createElement('h3');
        teamT.textContent ="Team : " + team;

        x.appendChild(imgDiv);
        tagdiv.appendChild(posT);
        tagdiv.appendChild(mplT);
        tagdiv.appendChild(teamT);
        tagdiv.appendChild(nameT);
        tagdiv.appendChild(genderT);

        x.appendChild(tagdiv);
    
        i++;

        maindiv.appendChild(x);
    }

    document.body.appendChild(maindiv);
}


