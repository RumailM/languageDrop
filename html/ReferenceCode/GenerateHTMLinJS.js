var numOfCourses = 5;
var language = "urdu";

makeGaurdianHTML();
function makeGaurdianHTML(){
	var CoursesHTML = "";
		for (var i = 1; i <= numOfCourses; i++){

			CoursesHTML +=
				'<p> \
					<a href="#" class="w3-bar-item w3-button w3-text-grey w3-hover-black"> \
					<a href="javascript:void(0)" onclick="manage_downloads('+language+'_course'+i+');"> Course' +i+ '</a> \
					<div id="'+language+'_course'+i+'" style="display:none;"> </div> \
				</p>';

		}
		console.log("I am here");
		document.getElementById(language+'_courses').innerHTML=CoursesHTML;

}


// var numOfLessons = 20;
// var course = "1";
//
// makeLessonHTML();
// function makeLessonHTML(){
// 	var LessonsHTML = "";
// 		for (var i = 1; i <= numOfLessons; i++){
//
// 			LessonsHTML +=
// 				'<p> \
// 					<a href="#" class="w3-bar-item w3-button w3-text-grey w3-hover-black"> \
// 					<a href="javascript:void(0)" onclick="manage_downloads('+course+'-course'+i+');"> Course' +i+ '</a> \
// 				</p>';
//
// 		}
// 		console.log("I am here Ruth");
// 		document.getElementById(course+'-courses').innerHTML=LessonsHTML;
//
// }
