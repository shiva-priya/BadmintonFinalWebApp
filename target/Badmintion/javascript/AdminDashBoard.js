//window.onload = showDisplay();

function AdminDash(){
     var da = document.cookie.split("=");
     var d = document.cookie.split(" ");
     var email = d[0].split("=");
     if( d[1] != undefined){
     var name = d[1].split("=");
    var cooks = document.cookie.split(";");
    var flag = false;
    for(let i=0;i<cooks.length;i++){
        var valOfCook = cooks[i].trim().split("=");
        if(valOfCook[1].includes("@") || valOfCook[1] != null || valOfCook != ""){
            flag = true;
        }
    }
    if(flag === false){
        window.location.replace("index.html");
        
    }
    else{
        loadHome();
        showDisplay();
    }
     }
     else{
        window.location.replace("playerDetails.html");
     }
}


function showDisplay()
{
    var Conatainer = document.createElement('div');
    Conatainer.className = "container";
    
    var div = document.createElement('div');
    div.setAttribute('class','cards');
    var header = document.createElement('h2');
    header.textContent = "Scheduler";
    div.appendChild(header);

    var image = document.createElement('img');
    image.src = "https://i.pinimg.com/originals/48/94/ca/4894caea4539a4c62dafef5c986f1c2b.png";
    image.className = "tasklogo";
    div.appendChild(image);

    div.setAttribute('onclick','location.href="scheduler.html"');
    Conatainer.appendChild(div);

    var div = document.createElement('div');
    div.setAttribute('class','cards');
    var header = document.createElement('h2');
    header.textContent = "Auction";
    div.appendChild(header);

    var image = document.createElement('img');
    image.src = "https://www.pinclipart.com/picdir/middle/30-308075_gavel-vector-png-auction-clipart.png";
    image.className = "tasklogo";
    div.appendChild(image);

    Conatainer.appendChild(div);

    var div = document.createElement('div');
    div.setAttribute('class','cards');
    var header = document.createElement('h2');
    header.textContent = "Add Team";
    div.appendChild(header);
    div.setAttribute('onclick','location.href="addteam.html"');
    var image = document.createElement('img');
    image.src = "https://cdn5.vectorstock.com/i/1000x1000/15/39/people-logo-round-circle-of-group-vector-16671539.jpg";
    image.className = "tasklogo";
    div.appendChild(image);

    Conatainer.appendChild(div);

    var div = document.createElement('div');
    div.setAttribute('class','cards');
    var header = document.createElement('h2');
    header.textContent = "Modify Player";
    div.appendChild(header);

    var image = document.createElement('img');
    image.src = "https://cdn4.vectorstock.com/i/1000x1000/59/08/badminton-player-in-action-logo-super-lightning-vector-16565908.jpg";
    image.className = "tasklogo";
    div.appendChild(image);

    Conatainer.appendChild(div);

    var div = document.createElement('div');
    div.setAttribute('class','cards');
    var header = document.createElement('h2');
    header.textContent = "Live Score Update";
    div.appendChild(header);

    var image = document.createElement('img');
    image.src = "https://cdn3.f-cdn.com/contestentries/128313/13103028/547b1a8717455_thumb900.jpg";
    image.className = "tasklogo";
    div.appendChild(image);

    div.setAttribute('onclick','location.href="LiveUpdate.html"');
    Conatainer.appendChild(div);

    var div1 = document.createElement('div');
    div1.setAttribute('class','cards');
    var header = document.createElement('h2');
    header.textContent = "Settings";
    div1.appendChild(header);

    var image = document.createElement('img');
    image.src = "https://www.logolynx.com/images/logolynx/e8/e89a42cafbf304ed5e68f54dafc65950.png";
    image.className = "tasklogo";
    div1.appendChild(image);

   // div.setAttribute('onclick','location.href="LiveUpdate.html"');
    Conatainer.appendChild(div1);


    document.body.appendChild(Conatainer);
}