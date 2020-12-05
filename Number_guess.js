var guess = Math.floor(Math.random() * 100 +1);
var times=1;
document.getElementById("submit").onclick = function(){
  var n= document.getElementById("input").value;
  if(n==guess)
    {
      alert("You got the right answer in "+ times+ "Guess")
    }
  else if (n>guess)
    {
      alert("The number should be smaller than what you have guessed now.")
      times++;
    }
  else
    {
      alert("The number should be greater than what you have guessed now.")
      times++;
    }
}
