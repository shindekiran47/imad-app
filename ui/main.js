console.log('Loaded!');

//counter code
var button = document.getElementById('counter');

button.onclick = function () {
  
  //create a request object
  var request = new XMLHttpRequest();
  
  //capure the response and store it in a variable
  request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            // tack some action
            if (request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
                
            }
        }
        //not yet done
    };
    // make a request
    request.open('GET', 'http://jackyshinde47.imad.hasura-app.io/counter', true);
    request.send(null);
  
};