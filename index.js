 function add(){
  myTable.innerHTML = ''
    for (var i = 1; i <= input1.value; i++){
      result = "<tr>"
      for (var j = 1; j <= input2.value; j++) {
        // resultMlt= (i-j)
        result +=  `
        <td> ${i}+${j}=${i+j} </td>
     `
        }
       result += "</tr>"
       myTable.innerHTML += result
    }
 }
  
   
function multi(){
  myTable.innerHTML = ''
    for (var i = 1; i <= input1.value; i++){
      result = "<tr>"
      for (var j = 1; j <= input2.value; j++) {
        // resultMlt= (i-j)
        result +=  `
        <td> ${i}*${j}=${i*j}</td>
     `
        }
       result += "</tr>"
       myTable.innerHTML += result
    }
      
}


function subtract(){
    myTable.innerHTML = ''
    for (var i = 1; i <= input1.value; i++){
      result = "<tr>"
      for (var j = 1; j <= input2.value; j++) {
        // resultMlt= (i-j)
        result +=  `
        <td> ${i}-${j}=${i-j} </td>
     `
        }
       result += "</tr>"
       myTable.innerHTML += result
    }
      
}
function divide(){
    myTable.innerHTML = ''
    for (var i = 1; i <= input1.value; i++){
      result = "<tr>"
      for (var j = 1; j <= input2.value; j++) {
        // resultMlt= (i-j)
        result +=  `
        <td> ${i}/${j}=${parseFloat(i/j).toFixed(2)} </td>
     `
        }
       result += "</tr>"
       myTable.innerHTML += result
    }
      
}

    