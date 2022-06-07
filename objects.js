var fruit=["ვაშლი", "მსხალი", "ატამი"];
fruit.pop();
fruit.pop();
fruit.pop();
fruit.push("ატამი");
fruit.push("მსხალი");
fruit.push("ვაშლი");
document.write(fruit);


var welcome;
var dro = new Date();
var day= dro.getDay();
var month = dro.getMonth();

 if ((day==0 || day==5 || day==6 ) && month<4)  {
   
    welcome="ვგუნდაობთ";}

else if (month<=4) {
    welcome="ცივა";
}
 
else if ((day==0 || day==5 || day==6 ) && month<8) {
       welcome= " ვცურავთ";} 

else if  (month<8)
{
    welcome="ცხელა ";}


    else 
    welcome="ძალიან ცხელა";
        

document.write(welcome+month+day);

