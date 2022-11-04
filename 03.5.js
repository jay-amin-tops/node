function exampleAsync(a, b, callback) {
  setTimeout(function() {
    callback(a + b);
  }, 100);
}
console.log('Before asynchronous call');
exampleAsync(2, 3, function(finalresult)  
{
    console.log('Result: ' + finalresult);
}); console.log('After asynchronous call');