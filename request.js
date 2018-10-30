var url = "https://api.nytimes.com/svc/books/v3/lists/overview.json";
url += '?' + $.param({
  'published_date': "2013-05-22",
  'api-key': "82697b9a8a9c4c4a9064ae9385cd2280"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
    result.results.lists.forEach(function(element) {
        console.log(element.display_name + ": " + element.books.length);
    });      
}).fail(function(err) {
  throw err;
});