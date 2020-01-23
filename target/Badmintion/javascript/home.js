function newLoad(){
    loadHome();
    homePage();
}


function homePage(){
    //points table
    const maindiv = document.createElement('div');
    document.body.appendChild(maindiv);
    maindiv.setAttribute('id','main');
 var pointsTable =document.createElement('div');
 pointsTable.setAttribute('class','pointstable');
  maindiv.appendChild(pointsTable);


  
var table=document.createElement('table');
 table.setAttribute("class",'pt');
 pointsTable.appendChild(table);

    
 var row= document.createElement('tr');
 row.setAttribute('class','rowheadings');
 table.appendChild(row);


 var tableheading= document.createElement('th');
 tableheading.setAttribute('class','headings');
 tableheading.textContent='#';
  row.appendChild(tableheading);


  var tableheading2= document.createElement('th');
 tableheading2.setAttribute('class','headings');
 tableheading2.textContent='TEAM';
  row.appendChild(tableheading2);

  var tableheading3= document.createElement('th');
 tableheading3.setAttribute('class','headings');
 tableheading3.textContent='P';
  row.appendChild(tableheading3);

  var tableheading4= document.createElement('th');
 tableheading3.setAttribute('class','headings');
 tableheading3.textContent='W';
  row.appendChild(tableheading4);

  var tableheading5= document.createElement('th');
 tableheading5.setAttribute('class','headings');
 tableheading5.textContent='L';
  row.appendChild(tableheading5);


  var tableheading6= document.createElement('th');
 tableheading6.setAttribute('class','headings');
 tableheading6.textContent='D';
  row.appendChild(tableheading6);


  var tableheading7= document.createElement('th');
 tableheading7.setAttribute('class','headings');
 tableheading7.textContent='POINTS';
  row.appendChild(tableheading7);
  




    
 var row1= document.createElement('tr');
 row1.setAttribute('class','rowheadings');
 table.appendChild(row1);


 var tableheading= document.createElement('td');
 tableheading.setAttribute('class','elements');
 tableheading.textContent='1';
  row1.appendChild(tableheading);


  var tableheading2= document.createElement('td');
 tableheading2.setAttribute('class','elements');
 tableheading2.textContent='Sun Risers';
  row1.appendChild(tableheading2);

  var tableheading3= document.createElement('td');
 tableheading3.setAttribute('class','elements');
 tableheading3.textContent='5';
  row1.appendChild(tableheading3);

  var tableheading4= document.createElement('td');
 tableheading3.setAttribute('class','elements');
 tableheading3.textContent='4';
  row1.appendChild(tableheading4);

  var tableheading5= document.createElement('td');
 tableheading5.setAttribute('class','elements');
 tableheading5.textContent='0';
  row1.appendChild(tableheading5);


  var tableheading6= document.createElement('td');
 tableheading6.setAttribute('class','elements');
 tableheading6.textContent='1';
  row1.appendChild(tableheading6);


  var tableheading7= document.createElement('td');
 tableheading7.setAttribute('class','elements');
 tableheading7.textContent='9';
  row1.appendChild(tableheading7);
  

  
    
  var row2= document.createElement('tr');
  row2.setAttribute('class','rowheadings');
  table.appendChild(row2);


  var tableheading= document.createElement('td');
  tableheading.setAttribute('class','elements');
  tableheading.textContent='2';
   row2.appendChild(tableheading);


   var tableheading2= document.createElement('td');
  tableheading2.setAttribute('class','elements');
  tableheading2.textContent='Moon Risers';
   row2.appendChild(tableheading2);

   var tableheading3= document.createElement('td');
  tableheading3.setAttribute('class','elements');
  tableheading3.textContent='5';
   row2.appendChild(tableheading3);

   var tableheading4= document.createElement('td');
  tableheading3.setAttribute('class','elements');
  tableheading3.textContent='4';
   row2.appendChild(tableheading4);

   var tableheading5= document.createElement('td');
  tableheading5.setAttribute('class','elements');
  tableheading5.textContent='1';
   row2.appendChild(tableheading5);


   var tableheading6= document.createElement('td');
  tableheading6.setAttribute('class','elements');
  tableheading6.textContent='0';
   row2.appendChild(tableheading6);

   var tableheading7= document.createElement('td');
  tableheading7.setAttribute('class','elements');
  tableheading7.textContent='8';
   row2.appendChild(tableheading7);
   

 
   
    
   var row3= document.createElement('tr');
   row3.setAttribute('class','rowheadings');
   table.appendChild(row3);


   var tableheading= document.createElement('td');
   tableheading.setAttribute('class','elements');
   tableheading.textContent='3';
    row3.appendChild(tableheading);


    var tableheading2= document.createElement('td');
   tableheading2.setAttribute('class','elements');
   tableheading2.textContent='Mars Risers';
    row3.appendChild(tableheading2);

    var tableheading3= document.createElement('td');
   tableheading3.setAttribute('class','elements');
   tableheading3.textContent='5';
    row3.appendChild(tableheading3);

    var tableheading4= document.createElement('td');
   tableheading3.setAttribute('class','elements');
   tableheading3.textContent='3';
    row3.appendChild(tableheading4);

    var tableheading5= document.createElement('td');
   tableheading5.setAttribute('class','elements');
   tableheading5.textContent='1';
    row3.appendChild(tableheading5);


    var tableheading6= document.createElement('td');
   tableheading6.setAttribute('class','elements');
   tableheading6.textContent='1';
    row3.appendChild(tableheading6);


    var tableheading7= document.createElement('td');
   tableheading7.setAttribute('class','elements');
   tableheading7.textContent='7';
    row3.appendChild(tableheading7);
    

    
    var row4= document.createElement('tr');
    row4.setAttribute('class','rowheadings');
    table.appendChild(row4);


    var tableheading= document.createElement('td');
    tableheading.setAttribute('class','elements');
    tableheading.textContent='4';
     row4.appendChild(tableheading);


     var tableheading2= document.createElement('td');
    tableheading2.setAttribute('class','elements');
    tableheading2.textContent='Earth Risers';
     row4.appendChild(tableheading2);

     var tableheading3= document.createElement('td');
    tableheading3.setAttribute('class','elements');
    tableheading3.textContent='5';
     row4.appendChild(tableheading3);

     var tableheading4= document.createElement('td');
    tableheading3.setAttribute('class','elements');
    tableheading3.textContent='2';
     row4.appendChild(tableheading4);

     var tableheading5= document.createElement('td');
    tableheading5.setAttribute('class','elements');
    tableheading5.textContent='2';
     row4.appendChild(tableheading5);


     var tableheading6= document.createElement('td');
    tableheading6.setAttribute('class','elements');
    tableheading6.textContent='1';
     row4.appendChild(tableheading6);


     var tableheading7= document.createElement('td');
    tableheading7.setAttribute('class','elements');
    tableheading7.textContent='5';
     row4.appendChild(tableheading7);
}