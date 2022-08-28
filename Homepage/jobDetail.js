

let emData = JSON.parse(localStorage.getItem("empList")) || []
 document.querySelector("#t-count").innerText = emData.length;

//function for filtering
document.querySelector("#filter").addEventListener("change",jobFilter)

function jobFilter(){
    if(filter.value == "Role" || filter.value == ""){
        emJob(emData)
    }else{
        let selected = document.querySelector("#filter").value;
        let filterList = emData.filter(function(ele){
           return ele.value == selected
        })
        emJob(filterList)
    }
}
 emJob(emData)

function emJob(data){
    document.querySelector("tbody").innerHTML = ""

    data.forEach(function(ele,i){
        //creating row
        let row = document.createElement("tr")
        
        //creating column
        let td1 = document.createElement("td")
        td1.innerText=ele.nam;

        let td2 = document.createElement("td")
        td2.innerText=ele.expi;

        let td3 = document.createElement("td")
        td3.innerText=ele.place;

        let td4 = document.createElement("td")
        td4.innerText=ele.indus;

        let td5 = document.createElement("td")
        td5.innerText=ele.func;

        let td6 = document.createElement("td")
        td6.innerText=ele.value;

        let td7 = document.createElement("td")
        td7.innerText = ele.min;

        let td8 = document.createElement("td")
        td8.innerText = ele.max;

        let td9 = document.createElement("td")
        td9.innerText = "Delete"
        td9.style.backgroundColor="red";
        td9.style.cursor ="pointer";
        td9.addEventListener("click",function(){
            event.target.parentNode.remove()
            emData.splice(i,1)
            let total = document.querySelector("#t-count").innerText = emData.length;
            localStorage.setItem("empList",JSON.stringify(emData))
        })

        //appending column into row
        row.append(td1,td2,td3,td4,td5,td6,td7,td8,td9)

        //appending row into tbody
        document.querySelector("tbody").append(row)
    })
}