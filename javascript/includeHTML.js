 
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('[data-include-html]').forEach(function(elem) {
      var file = elem.getAttribute('data-include-html');
      if (file) {
          // Fetch file and include content
          fetch(file)
              .then(response => response.text())
              .then(content => elem.innerHTML = content)
              .catch(err => console.log(err));
      }
  });
});


  window.onload = includeHTML;
  