$( document ).ready(function() {

		var history = window.history;

		var stateObj = { foo: "index.html" };



	$( "#projects" ).click(function(e) {
	  e.preventDefault()
	  $(".page-content").load( "views/projects.html" );
	  history.pushState(stateObj, "page 2", "bar.html");
	  console.log(history);
	});

	$( "#practice" ).click(function(e) {
	  e.preventDefault()
	  $(".page-content").load( "views/practice.html" );
	});

	$( "#resume" ).click(function(e) {
	  e.preventDefault()
	  $(".page-content").load( "views/resume.html" );
	});

	$( "#about" ).click(function(e) {
	  e.preventDefault()
	  $(".page-content").load( "views/about.html" );
	});

});