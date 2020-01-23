
//     function newLoad(){
//               loadHome();
              
//      }

function loadHome(){

     

      var navbar=document.createElement('nav');
      navbar.setAttribute('class','homebar');
      navbar.setAttribute('id','navbar');
      document.body.appendChild(navbar);


     var logo=document.createElement('img');
      logo.setAttribute('class','logo');
      logo.src="images/logo.png";
      navbar.appendChild(logo);

      var img=document.createElement('img');
      img.setAttribute('class','logo');
      img.src="images/pbl.png";
      navbar.appendChild(img);


      var unorderedlist=document.createElement("ul");
      unorderedlist.setAttribute('class','unlist');
      navbar.appendChild(unorderedlist);


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
      menu1.href="#";
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
     menu4.href="#";
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
      menu6.href="playerReg.html";
      menu6.textContent='Log In/Sign Up';
      list5.appendChild(menu6);
   }
    else{
      var menu6 = document.createElement('input');
      menu6.setAttribute('type','submit');
      menu6.setAttribute('value','Log Out');
      menu6.setAttribute('id','logoutBtn');
      menu6.style.alignContent = "centre";
      list5.appendChild(menu6);
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




 
    