
//     function newLoad(){
//               loadHome();
              
//      }

function loadHome(){

     var v = 1

      var navbar=document.createElement('nav');
      navbar.setAttribute('class','homebar');
      navbar.setAttribute('id','navbar');
      
     
      document.body.appendChild(navbar);

      var unorderedlist=document.createElement("ul");
      unorderedlist.setAttribute('class','unlist');
      navbar.appendChild(unorderedlist);

      var imgl=document.createElement("li");
      imgl.setAttribute('class','listelements');
      unorderedlist.appendChild(imgl);

      var img=document.createElement('img');
      img.setAttribute('class','logo');
      img.src = "https://pngimage.net/wp-content/uploads/2018/05/badminton-logo-png.png";
     // img.src="images/pbl.png";
      imgl.appendChild(img);



      var list0=document.createElement("li");
      list0.setAttribute('class','listelements');
      unorderedlist.appendChild(list0);

      var menu10=document.createElement("a");
      menu10.setAttribute('class','stats');
      menu10.href="index.html";
      //menu10.setAttribute('onclick','newLoad()')
      menu10.textContent='Home';
      list0.appendChild(menu10);



      var list=document.createElement("li");
      list.setAttribute('class','listelements');
      unorderedlist.appendChild(list);


      var menu1=document.createElement("a");
      menu1.setAttribute('class','stats');
      menu1.href="TeamStats.html";
      menu1.textContent='TeamStats';
      list.appendChild(menu1);

      var list1=document.createElement("li");
      list1.setAttribute('class','listelements');
      unorderedlist.appendChild(list1);

    var menu2=document.createElement("a");
     menu2.setAttribute('class','stats');
     menu2.href="playerStats.html";
     menu2.textContent='Player stats';
     list1.appendChild(menu2);

     var list2=document.createElement("li");
      list2.setAttribute('class','listelements');
      unorderedlist.appendChild(list2);

    var menu3=document.createElement("a");
     menu3.setAttribute('class','stats');
     menu3.href="tournaments.html";
     menu3.textContent='Tournaments';
   
     list2.appendChild(menu3);

     var list3=document.createElement("li");
     list3.setAttribute('class','listelements');
     unorderedlist.appendChild(list3);

    var menu4=document.createElement("a");
     menu4.setAttribute('class',"stats");
     menu4.href="LiveScore.html";
     menu4.textContent= 'Live Score';
     
     list3.appendChild(menu4);

    var cookie = document.cookie;
    console.log(cookie);
     var list5=document.createElement("li");
     list5.setAttribute('class','listelements');
     unorderedlist.appendChild(list5);

    
   //  menu6.setAttribute('onclick','loadPlayer()');
   list = cookie.split(';');
   console.log(list.len);
   if(cookie.length <2){
      var menu6=document.createElement("a");
      menu6.setAttribute('class',"stats");     
      menu6.setAttribute('onclick','moveTo()')
      menu6.textContent='Rules';
      list5.appendChild(menu6);


      var menu7=document.createElement("a");
      menu7.setAttribute('class','stats');
      menu7.href="playerReg.html";
      menu7.textContent='Log In/Sign Up';
     

     var list7=document.createElement("li");
      list7.setAttribute('class','listelements');
      unorderedlist.appendChild(list7);
      list7.appendChild(menu7);

   }
    else{
      var menu6 = document.createElement('a');
      menu6.setAttribute('class','stats');
      menu6.href="playerDetails.html";
      menu6.style.alignContent = "centre";
      menu6.textContent= 'Go to DashBoard';
      list5.appendChild(menu6);

      var list6=document.createElement("li");
      list6.setAttribute('class','listelements');
      unorderedlist.appendChild(list6);


      var menu7 = document.createElement('a');
      //menu7.setAttribute('type','button');
      menu7.setAttribute('class','xyz');
      menu7.href="#";
      ///menu7.setAttribute('value','Log Out');
      menu7.setAttribute('id','logoutBtn');
      menu7.textContent = "Log Out";
      menu7.style.alignContent = "centre";

    //  var bspan = document.createElement('span');
      //bspan.setAttribute('class','glyphicon glyphicon-log-out');
      //bspan.setAttribute('value','Log Out');
      //menu7.appendChild(bspan);

      list6.appendChild(menu7);

      /*
      var menu7 = document.createElement('input');
      menu7.setAttribute('type','submit');
      menu7.setAttribute('class','btn btn-default btn-sm');
      menu7.setAttribute('value','Log Out');
      menu7.setAttribute('id','logoutBtn');
      menu7.style.alignContent = "centre";
      list6.appendChild(menu7);
      */
    }
    
      $(document).on("click","#logoutBtn", function(){
  
            $.post('LogOut', {}, function(responseText) {
                      //alert(responseText);
                     // e.preventDefault();
                     console.log(cookie);
  
                      console.log(responseText);
                 if(responseText.includes("<html>") || responseText=="s"){
                        window.location.reload();
                         window.location.replace("index.html");
                          }
                  else{
                        alert(responseText);
                        //window.location.replace("playerReg.html");
                  }
                  var data = document.cookie.split("=");
                  if(data[1] != null){
                        window.location.reload();
                        window.location.replace("index.html");
                  }
            });
       });
     

}

function moveTo(){
  window.location.replace('rules.html');
  document.getElementById('home').appendChild(navbar);
  
}


 
    