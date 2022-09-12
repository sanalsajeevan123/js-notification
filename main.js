const button = document.querySelector("button");

let leaveCount = 0
const leaveLimit = 2 

button.addEventListener("click", ()=>{
    Notification.requestPermission().then(permission =>{
        if(permission == "granted"){
            const notificaton = new Notification("Test notification",{
                body:"Notification body",
                data:{hello : "world"},
                icon:"logo.png",
                tag:"test"
            })
        }
    })
})

let notification
document.addEventListener("visibilitychange",()=>{
    if(document.visibilityState === "hidden"){
        leaveCount += 1
        if(leaveLimit - leaveCount > 0){
            notification = new Notification("Warning",{
                body:"You can't leave the window during exam time, come back please",
                tag:"come back"
            })
        }else{            
            notification = new Notification("Terminated",{
                body:"Exam terminated, you can go now",
                tag:"Exam terminated"
            })
        }
    }else{
        if(notification) notification.close();
        if(leaveLimit - leaveCount <= 0){
            document.getElementsByClassName("exam-status")[0].innerText = "Exam terminated";
        }
    }
})

