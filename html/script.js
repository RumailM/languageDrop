function myFunction() {
    var x = document.getElementById("myGrid");
    if (x.className === "w3-row") {
        x.className = "w3-row-padding";
    } else {
        x.className = x.className.replace("w3-row-padding", "w3-row");
    }
}

// Open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}
//THis is only for the audio files
function audioFiles_open(language) {
    document.getElementById(language).style.width = "100%";
    document.getElementById(language).style.display = "block";
}

function audioFiles_close(language) {
    document.getElementById(language).style.display = "none";
}

function manage_downloads(course_id){
  var display_state = document.getElementById(course_id).style.display;
  if (display_state == 'none') {
    console.log('show me');
    document.getElementById(course_id).style.display = "block";
  } else {
    document.getElementById(course_id).style.display = "none";
  }
    // document.getElementById(course_id).style.display = "block";
    // document.getElementById('light').style.display='block';document.getElementById('fade').style.display='block'
}
