var container = document.getElementById("container");
var table = document.getElementById("table");
var avg = document.getElementById("avg");
var order = document.getElementById("order");
var avgSum = 0;
var scoresArr = [];
var numTable = prompt("please write your student's number");
while(numTable < 0 || numTable > 10 || isNaN(numTable) || /\s/.test(numTable) || numTable == ""){
    numTable = prompt("تعداد دانشجویان باید به صورت عددی و کمتر از 10 وارد شود")
    
}


for(let i = 1;i<= numTable;i++){
    var num1 = +(Math.random() * 20).toFixed(1);
    var num2 = +(Math.random() * 20).toFixed(1);
    var num3 = +(Math.random() * 20).toFixed(1);
    scores(num1, num2, num3, i);

}

function scores(num1, num2, num3, id){
    var scoresObject = {
        id: id,
        num1: num1,
        num2: num2,
        num3: num3,
        avgNums: ((num1+num2+num3) / 3).toFixed(1)
    }
    table.innerHTML += `<div class="tr cells">
        <p class="td">${scoresObject.id}</p>
        <p class="td">${scoresObject.num1}</p>
        <p class="td">${scoresObject.num2}</p>
        <p class="td">${scoresObject.num3}</p>
        <p class="td">${scoresObject.avgNums}</p>
    </div>`

    scoresArr.push(scoresObject);
}

for(let i = 0;i < scoresArr.length;i++){
    avgSum += +(scoresArr[i].avgNums);
}

var totalAvg = (avgSum / numTable).toFixed(1);

avg.innerHTML += `<h1>:میانگین کلاسی</h1>
<h1>${totalAvg}</h1>`



scoresArr.sort(function(a, b){return a.avgNums - b.avgNums});
scoresArr.reverse();

for(let i = 0;i < scoresArr.length;i++){
    order.innerHTML += `<div>
    <p>the student ${i+1}: student number ${scoresArr[i].id} with average : ${scoresArr[i].avgNums}</p>
    </div>`
}

