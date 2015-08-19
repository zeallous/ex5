function numberEncoding(str){
  // your code goes here
  var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var numbers = ["1","2","3","4","5","6","7","8","9","0"];
  var encoded = [];
  for (i=0; i < str.length; i++) {
    //find out if that character is a number of alphabet
  	for (j = 0; j < alphabet.length; j++) {
  		if (str.charAt(i) === alphabet[j]) {
  			encoded.push((j+1).toString());
  		}
  	}
    for (j = 0; j < numbers.length; j++) {
  		if (str.charAt(i) === numbers[j]) {
  			encoded.push(str.charAt(i));
  		}
  	}
    
  }
  var encodedFinal = encoded.join('');
  
  return encodedFinal;
}


// Ensure that when you run this code, the value below that is out is `true`
console.log(numberEncoding('af5c') === '1653');