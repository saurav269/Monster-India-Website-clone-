document.querySelector("#btn").addEventListener("click",detail)

function detail(event){
    event.preventDefault()
    let mail = document.querySelector("#email").value;
    let pass = document.querySelector("#password").value;

    let obj={
        mail,pass
    }
    if(obj.mail == "" || obj.pass==""){
        alert("Some Fields are missing")
    }else{
        alert("Login Successfully")
        document.getElementById("text").innerText = "Congratulation!"
        document.getElementById("text").style.color="#5d4d8a";
        document.location.href="index.html"
    }
}