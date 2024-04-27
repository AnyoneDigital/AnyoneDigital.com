document.addEventListener("DOMContentLoaded", function () {
    const knowMore = document.getElementsByClassName("knowMore");
    const about = document.getElementById("about");
    const work = document.getElementById("work");
    const intern = document.getElementById("intern");
    const abtTopBlock = document.getElementById("abtTopBlock");
    const workDiv = document.getElementById("workDiv");
    const aboutDiv = document.getElementById("aboutDiv");
    const internDiv = document.getElementById("internDiv");

    makeVisible(about, aboutDiv);
    makeVisible(work, workDiv);
    makeVisible(intern, internDiv);


    for (let i = 0; i < knowMore.length; i++) {
        makeVisible(knowMore[i], workDiv);
    }
});

function makeVisible(item, target) {
    item.addEventListener('click', function () {
        target.scrollIntoView({ behavior: "smooth" });
    })
}
