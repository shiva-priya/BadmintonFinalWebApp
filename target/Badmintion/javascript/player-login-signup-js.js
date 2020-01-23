var pcall = 1
function loadPlayer( ){

    loadHome();
       // window.location.reload();
    const pformContainer = document.createElement('div');
    pformContainer.setAttribute('id','playerForm');
     const pform2 = psignUpFunction();
     const pform1 = plogInFunction()
     pformContainer.appendChild(pform1);
     pformContainer.appendChild(pform2);
    document.body.appendChild(pformContainer);
    pcall += 1;
   // window.stop();


}


function plogInFunction(){
    const plogInDiv = document.createElement('div');
     plogInDiv.setAttribute('id','logindiv');
     const ptable = document.createElement('table');
     const ptbody = document.createElement('tbody');
     const ptr1 = document.createElement('tr');
    const ptr2 = document.createElement('tr');
    const ptr3 = document.createElement('tr');
    const ptd1  = document.createElement('td');
    const ptd2  = document.createElement('td');
    const ptd3  = document.createElement('td');
    const ptd4  = document.createElement('td');
    const ptd5  = document.createElement('td');

    ptbody.appendChild(ptr1);
    ptbody.appendChild(ptr2);
    ptbody.appendChild(ptr3);

    ptr1.appendChild(ptd1);
    ptr1.appendChild(ptd2);
    ptr2.appendChild(ptd3);
    ptr2.appendChild(ptd4);
    ptr3.appendChild(ptd5);

    const psh1 = document.createElement('h1');
    psh1.textContent = "Log In";
    psh1.style.textAlign = "center";
    plogInDiv.appendChild(psh1);


    const plogInForm = document.createElement('form');
    plogInForm.setAttribute('method','POST');
    plogInForm.setAttribute('action','PlayerLogIn');
    plogInForm.setAttribute('name','plogin');


    const pemailLabel = document.createElement('label');
    pemailLabel.textContent = "Email : ";
    const pemailInput = document.createElement('input');
    pemailInput.setAttribute('name','email');
    pemailInput.setAttribute('type','email');
    pemailInput.setAttribute('id','emailId');
    pemailInput.setAttribute('required','');


    const ppasswordLabel = document.createElement('label');
    ppasswordLabel.textContent = "Password : ";
    const ppasswordInput = document.createElement('input');
    ppasswordInput.setAttribute('name','password');
    ppasswordInput.setAttribute('type','password');
    ppasswordInput.setAttribute('id','passwordId');
    ppasswordInput.setAttribute('required','');

    const plogInButton = document.createElement('input');
    plogInButton.setAttribute('type','submit');
    plogInButton.setAttribute('value','Log In');
    plogInButton.setAttribute('id','loginBtn');
    plogInButton.setAttribute('onclick','return validatePlayerLogIn()')
    plogInButton.style.alignContent = "centre";


    ptd1.appendChild(pemailLabel);
    ptd2.appendChild(pemailInput);
    ptd3.appendChild(ppasswordLabel);
    ptd4.appendChild(ppasswordInput);
    ptd5.appendChild(plogInButton);

    ptable.appendChild(ptbody);
    plogInForm.appendChild(ptable);
    plogInDiv.appendChild(plogInForm);
    return plogInDiv;

}


function psignUpFunction(){

    const psignUpDiv = document.createElement('div');
    psignUpDiv.setAttribute('id','signupdiv');

    const pptable = document.createElement('table');
    const pptbody = document.createElement('tbody');

    const pptr1 = document.createElement('tr');
    const pptr2 = document.createElement('tr');
    
    const pptr4 = document.createElement('tr');
    
    const pptr9 = document.createElement('tr');
    
    const pptr11 = document.createElement('tr');
    const pptr12 = document.createElement('tr');
    const pptr13 = document.createElement('tr');

    const pptd1  = document.createElement('td');
    const pptd2  = document.createElement('td');
    const pptd3  = document.createElement('td');
    const pptd4  = document.createElement('td');
   
    const pptd7  = document.createElement('td');
    const pptd8  = document.createElement('td');
    
    const pptd17 = document.createElement('td');
    const pptd18 = document.createElement('td');
   
    const pptd21 = document.createElement('td');
    const pptd22 = document.createElement('td');
    const pptd23 = document.createElement('td');

    pptbody.appendChild(pptr1);
    pptbody.appendChild(pptr2);
    
    pptbody.appendChild(pptr4);
   
    pptbody.appendChild(pptr9);
    pptbody.appendChild(pptr11);
    pptbody.appendChild(pptr12);
    pptbody.appendChild(pptr13);

    pptr1.appendChild(pptd1);
    pptr1.appendChild(pptd2);
    pptr2.appendChild(pptd3);
    pptr2.appendChild(pptd4);
   
    pptr4.appendChild(pptd7);
    pptr4.appendChild(pptd8);
   
    pptr9.appendChild(pptd17);
    pptr9.appendChild(pptd18);
   
    pptr11.appendChild(pptd21);
    pptr11.appendChild(pptd22);
    pptr12.appendChild(pptd23);

    pptable.appendChild(pptbody);
    pptbody.style.align = "center";


    const ppsh1 = document.createElement('h1');
    ppsh1.textContent = "Sign Up";
    ppsh1.style.textAlign = "center";
    psignUpDiv.appendChild(ppsh1);

    const ppsignUpForm = document.createElement('form');
    ppsignUpForm.setAttribute('method','POST');
    ppsignUpForm.setAttribute('name','plsignup');
    ppsignUpForm.setAttribute('action','PlayerServlet');

    const ppfirstNameLabel  = document.createElement('label');
    ppfirstNameLabel.textContent = "First Name : ";
    const ppfirstNameInput = document.createElement('input');
    ppfirstNameInput.setAttribute('name','firstName');
    ppfirstNameInput.setAttribute('type','text');
    ppfirstNameInput.setAttribute('required','');


    const pplastNameLabel = document.createElement('label');
    pplastNameLabel.textContent = "Last Name : ";
    const pplastNameInput = document.createElement('input');
    pplastNameInput.setAttribute('name','lastName');
    pplastNameInput.setAttribute('type','text');
    pplastNameInput.setAttribute('required','');



   const ppemailLabel = document.createElement('label');
   ppemailLabel.textContent = "Email : ";
   const ppemailInput = document.createElement('input');
   ppemailInput.setAttribute('name','email');
   ppemailInput.setAttribute('type','email');
   ppemailInput.setAttribute('required','');






   const ppempIdLabel = document.createElement('label');
   ppempIdLabel.textContent = "empId : ";
   const ppempIdInput = document.createElement('input');
   ppempIdInput.setAttribute('name','empId');
   ppempIdInput.setAttribute('type','text');
   ppempIdInput.setAttribute('required','');


 

   const pppasswordLabel = document.createElement('label');
   pppasswordLabel.textContent = "Password : ";
   const pppasswordInput = document.createElement('input');
   pppasswordInput.setAttribute('name','password');
   pppasswordInput.setAttribute('type','password');
   pppasswordInput.setAttribute('required','');

   const ppsignUpButton = document.createElement('input');
   ppsignUpButton.setAttribute('type','submit');
   ppsignUpButton.setAttribute('value','Sign Up');
   ppsignUpButton.setAttribute('id','signBtn');
   ppsignUpButton.setAttribute('onclick','return validatePlayerSignUpForm()');
   ppsignUpButton.style.alignContent = "centre";

   pptd1.appendChild(ppfirstNameLabel);
   pptd2.appendChild(ppfirstNameInput);

   pptd3.appendChild(pplastNameLabel);
   pptd4.appendChild(pplastNameInput);


   pptd7.appendChild(ppemailLabel);
   pptd8.appendChild(ppemailInput);

   pptd17.appendChild(ppempIdLabel);
   pptd18.appendChild(ppempIdInput);

  

   pptd21.appendChild(pppasswordLabel);
   pptd22.appendChild(pppasswordInput);

   pptd23.appendChild(ppsignUpButton);

   ppsignUpForm.appendChild(pptable);



   psignUpDiv.appendChild(ppsignUpForm);
   return psignUpDiv;

}

function validatePlayerSignUpForm() {
  var xa = document.forms["plsignup"]["firstName"].value;
  var aflag = true;
  if (xa == "") {
    alert("First name must be filled out");
    aflag = false;
  }
  

  xa = document.forms["plsignup"]["lastName"].value;
  if (xa == "") {
    alert("Last name must be filled out");
    aflag = false;
  }



  xa = document.forms["plsignup"]["empId"].value;
  if (xa == "") {
    alert("Employee ID must be filled out");
    aflag = false;
  }    

 

  xa = document.forms["plsignup"]["email"].value;
  if (xa == "") {
    alert("Email must be filled out");
    aflag = false;
  }

  var xap = document.forms["plsignup"]["password"].value;
  if (xap == "") {
    alert("Password must be filled out");
    aflag = false;
  }else{
      if(xap.length<8){
          alert("Password must be minimum 8 characters");
          aflag = false;
      }
  }
  if(aflag === true){
      alert("SUCCESS");
  }
  return aflag;
}

function validatePlayerLogIn(){
  var aflag1 = true;
  var xa1 = document.forms["plogin"]["email"].value;
  if (xa1 == "") {
    alert("Email must be filled out");
    aflag1 = false;
  }

  xa1 = document.forms["plogin"]["password"].value;
  if (xa1 == "") {
    alert("Password must be filled out");
    aflag1 = false;
  }else{
      
      if(xa1.length<8){
          alert("Password must be minimum 8 characters");
          aflag1 = false;
      }
  }
  
  return aflag1;

}



  $(document).ready(function(){
    $(document).on("click","#loginBtn", function(){

     var email = $('#emailId').val();
     var password = $('#passwordId').val();
          $.post('PlayerLogIn', {
                  email : email,
                  password : password
          }, function(responseText) {
                   //alert(responseText);
                    //e.preventDefault();

                    //console.log(responseText);
               if(responseText.includes("<html>") || responseText=="s"){

                      //alert("login");
                        window.location.replace("playerDetails.html");
                        }
                else{
                      //alert(responseText);
                      window.location.replace("playerReg.html");
                }
          });
     });
    });