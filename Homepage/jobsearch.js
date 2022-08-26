
let emData = JSON.parse(localStorage.getItem("empList")) || []
document.querySelector("form").addEventListener("submit",detail)

function detail(event){
    event.preventDefault()

    let nam = document.querySelector("#name").value;
    let expi = document.querySelector("#exp").value;
    let place = document.querySelector("#location").value;
    let indus = document.querySelector("#industry").value;
    let func = document.querySelector("#function").value;
    let value = document.querySelector("#role").value;
    let min = document.querySelector("#minSalary").value;
    let max = document.querySelector("#maxSalary").value;

    let obj={
        nam,expi,place,indus,func,value,min,max
    }
    if(obj.nam == "" || obj.expi == "" || obj.place =="" || obj.indus == "" || obj.func == "" || obj.value == "" || obj.min == "" || obj.max == ""){
        alert("Some Fields are Empty")
    }else{
        emData.push(obj)
        localStorage.setItem("empList",JSON.stringify(emData))
    }
}