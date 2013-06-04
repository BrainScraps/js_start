function get_response(){
   return prompt( "(s)quare, (a)rea, (c)ube, or (q)uit");
  };

function square(number){
  return (number * number);
};

function area(w,l){
  return (w * l);
};

function cube(c){
  return (c * c  * c );
};

var response = get_response;

while (response != "q"){
  
  var product;
  var input;

 switch(response){
   case "s":
    var  input = prompt( "Please enter the number you'd like to square.");
     product = square(input);
     alert(input + " squared is " +product);
     break;
   case "a":
     var input1 = prompt("please enter the length");
     var input2 = prompt("please enter the width");
     product = area(input1, input2);
     alert("the area is " + product);
     break;
   case "c":
    var  input = prompt("please enter the number you'd like to cube.");
     product = cube(input);
     alert("the cube of " + input + " is " +product);
     break;
  };
  response = get_response();
};


  
