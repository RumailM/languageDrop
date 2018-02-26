makeCourseHTML();
makeLessonHTML();
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

//Shahads code
function manage_downloads(course){
  console.log(course);
  console.log(course.id);
  var display_state = document.getElementById(course.id).style.display;
  console.log(display_state);

  if (display_state == 'none') {
    console.log('show me');
    document.getElementById(course.id).style.display = "block";
  } else {
    document.getElementById(course.id).style.display = "none";
  }
    // document.getElementById(course_id).style.display = "block";
    // document.getElementById('light').style.display='block';document.getElementById('fade').style.display='block'
//new code to do stuff dyanmically
}



function makeCourseHTML(){
  var numOfCourses = 5;
  console.log(language);
  var language = "urdu";
  var CoursesHTML = "";
		for (var i = 1; i <= numOfCourses; i++){

			CoursesHTML +=
				'<p> \
					<a href="#" class="w3-bar-item w3-button w3-text-grey w3-hover-black"> \
					<a href="javascript:void(0)" onclick="manage_downloads('+language+'_course'+i+');"> Course' +i+ '</a> \
					<div id="'+language+'_course'+i+'" style="display:none;"> </div> \
				</p>';

		}
    console.log(language);
		console.log(language+"_courses");
    console.log(document.getElementById(language+'_courses'));
		document.getElementById(language+'_courses').innerHTML=CoursesHTML;
}
//dfsa


function makeLessonHTML(){
  var numOfLesson = 20;
  var course_id = "urdu_course1";
  var Course = "1";
	var LessonsHTML = "";
		for (var i = 1; i <= numOfLesson; i++){

			LessonsHTML +=
				'<p> \
					<a href="#" class="w3-bar-item w3-button w3-text-grey w3-hover-black"> \
					<a href="javascript:void(0)" onclick="manage_downloads('+Course+'_U'+i+');"> Course' +i+ '</a> \
					<div id="'+Course+'_U'+i+'" style="display:none;"> </div> \
				</p>'; //There is this thing of the slash that doesn't work

		}
		console.log("I am here now Ruth");
		document.getElementById(course_id).innerHTML=LessonsHTML;

}
