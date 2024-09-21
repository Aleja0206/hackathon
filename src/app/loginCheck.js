const loggedOutLinks=document.querySelectorAll(".logged-out")
const loggedInnLinks=document.querySelectorAll(".logged-in")
console.log(loggedInnLinks)
console.log(loggedOutLinks)
export const logincheck= user=>{
    if (user){
        loggedInnLinks.forEach(link=> link.style.display="block")
        loggedOutLinks.forEach(link=> link.style.display="none")
    
    }else{
        loggedInnLinks.forEach(link=> link.style.display="none")
        loggedOutLinks.forEach(link=> link.style.display="block")

    }
}