document.addEventListener("DOMContentLoaded", function () {

    const teamPhoto = document.querySelector(".team-photo");

  
    if (teamPhoto) {
        teamPhoto.addEventListener("click", function () {
            console.log("Welcome to the SpiderScrum team page!");
        });
    }


    const currentYear = new Date().getFullYear();
    console.log("SpiderScrum Team Page - " + currentYear);
});
