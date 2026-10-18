const n = Math.floor(Math.random() * 2176782336).toString(36).toUpperCase()
document.getElementById("pid").innerHTML = n;
document.getElementById("ptl").href = "https://forms.cloud.microsoft/e/y1Uma4bVKK";
document.getElementById("ql").href = "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=JwBhZ8MatkmGQczYPOGwH0Pj1CZcYuFBlwi6DcfF0LpURDFVTUJaRUs5WkJRWFVTMkFYMEVZWTFWWS4u&r185f5b4b5d27449393ed3899f3aef1b5=" + n;
const a = document.getElementById('yourlinkId'); //or grab it by tagname etc
a.href = "somelink url"

function copy() {
  if (!navigator.clipboard) {
    return;
  }
  navigator.clipboard.writeText(document.getElementById("pid").innerHTML).then(function() {
    console.log('Async: Copying to clipboard was successful!');
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
}
