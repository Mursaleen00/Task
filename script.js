// Task_1

function showAlert() {
    alert("Hello Worl!d");
};



// Task_3
function alertText() {
    var name = document.getElementById("text").value
    alert(name);
};



// Tesk 4
function image_1(){
    var img = document.getElementById("image")
}

image_1();





// Task 5
var number = Math.round(Math.random() * 9)
var qoute = ["Coding is the closest thing we have to a superpower. It allows us to create something out of nothing and shape the world around us", "Programming is not just about writing code; it's about solving problems and turning ideas into reality.", "Coding is like poetry in motion, where every line of code is a carefully crafted expression of logic and creativity.", " Programmers are the architects of the digital age, designing the foundations on which our technological advancements stand.", "Coding is a never-ending learning journey, where every challenge is an opportunity to grow and expand our knowledge.", "Code is a language that speaks to machines, but its impact can touch the lives of millions.", "In programming, mistakes are not failures; they are stepping stones to understanding and improvement.", "Coding is a canvas where the only limitation is your imagination. With the right code, you can create wonders.", "Programming is the art of breaking down complex problems into small, manageable tasks and assembling them into a cohesive solution.", "Code is not just lines of text; it's a manifestation of human intelligence and innovation, bringing ideas to life in the digital realm."];

function randum_qoute() {
    document.getElementById('qoute').innerHTML = qoute[number]
}
randum_qoute()




// Tast 7
function show_Date() {
    var new_date = new Date();
    alert(new_date);
}

