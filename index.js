let
  redis     = require('redis'),
  client    = redis.createClient({
    port      : 6379,               // replace with your port
    host      : '127.0.0.1'        // replace with your hostname or IP address  
  });

  console.log("Setting Key1 with a value KeyValue1");
  // Adding a key
  client.set('Key1','Key1Value',function(err) {
    if (err) { 
        console.log(err);
      throw err; 
    } else {
      client.get('Key1',function(err,value) {
        if (err) {
          throw err;
        } else {
          console.log("Retrieving Key1 with a value KeyValue1");
          console.log(value);
        }
      }
    );
  }});