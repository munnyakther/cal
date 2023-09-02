function answer(){
    var amount_input=parseInt(document.getElementById("amount").value);
    var rate_input=parseInt(document.getElementById("rate").value);
    var time_input=parseInt(document.getElementById("time").value);

    var 
    interest=amount_input*rate_input*time_input/100;

    var total=interest+amount_input;




    document.getElementById("output_1").innerHTML=amount_input;
    document.getElementById("output_2").innerHTML=interest;
    document.getElementById("output_3").innerHTML=total;
   }
//*hishab//

function age() {
    var d1 = document.getElementById('date').value;
    var m1 = document.getElementById('month').value;
    var y1 = document.getElementById('year').value; 
  
  
    var date = new Date();//new Data() is a javascript method that collects time from your device
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
  
   if(d1 > d2){
    d2 = d2 + month[m2 - 1];
    m2 = m2 - 1;
   }
  if(m1 > m2){
    m2 = m2 + 12;
    y2 = y2 - 1;
  }
  var d = d2 - d1;
  var m = m2 - m1;
  var y = y2 - y1;
  
  
  document.getElementById('age').innerHTML = 'Date is '+y+' Years '+m+' Months '+d+' Days';
  } 
  



   