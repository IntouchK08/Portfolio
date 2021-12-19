function showAll() {
    let activitys = document.querySelectorAll(".text")
    activitys.forEach(activity => {
        activity.style.display = "inherit" ;
    });
}
function showOne(){
    let activitys = document.querySelectorAll(".text")
    activitys.forEach(activity => {
        let type = activity.getAttribute("type")
        if(type == "activity-1"){
            activity.style.display = "inherit"
        }
        else {
            activity.style.display = "none"
        }
    });
}
function showTwo(){
    let activitys = document.querySelectorAll(".text")
    activitys.forEach(activity => {
        let type = activity.getAttribute("type")
        if(type == "activity-2"){
            activity.style.display = "initial"
        }
        else {
            activity.style.display = "none"
        }
    });
}