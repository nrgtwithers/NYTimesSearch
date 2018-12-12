var apiKey= “480f45d81ea248c09937922e10a04509”;
           var queryURL= “https://data-gov.tw.rpi.edu/wiki/How_to_use_New_York_Times_Article_Search_API#Getting_the_next_10_results” + apiKey;

          $.ajax({
           url: queryURL,
           method: “GET”
           }) .then(function(response) {


       console.log(queryURL);


       console.log(response);

           });