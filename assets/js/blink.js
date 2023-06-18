$(document).ready(function() {
    var jobTitles = ['a Quality Analyst', 'an aspiring Data Analyst']; // Array of job titles
    var currentIndex = 0; // Start with the first job title
  
    setInterval(function() {
      var sentence = "Quality Analyst ";
      var newSentence = sentence.replace('Quality Analyst', jobTitles[currentIndex]);
  
      $('#job-title').fadeOut(500, function() {
        $(this).html(newSentence).fadeIn(500);
        currentIndex = (currentIndex + 1) % jobTitles.length;
      });
    }, 1800); // Change the job title every 3 seconds (adjust the timing as desired)
  });