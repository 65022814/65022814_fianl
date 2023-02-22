function submitForm() {
    var name = document.getElementById("ชื่อ").value;
    var surname = document.getElementById("นามสกุล").value;
    var language = document.getElementById("gender").value;
    var dob = document.getElementById("วันเกิด").value;
var result = document.getElementById("result");
    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }
    if(!ชื่อ){
      var error = document.createElement("h1");
      error.innerHTML = "name";
      error.style.color = "red";
      result.appendChild(error);  
    }else{
      var result = document.createElement("h1");
      result.innerHTML = "" + name + "," + surname + "," + dob + "," + language;
      result.style.color = "green";
      document.getElementById("result").appendChild(result);
    }
  }
    var result = document.createElement("h1");
    result.innerHTML = "" + name + "," + surname + "," + dob + "" + language;
    result.style.color = "green";
    document.getElementById("result").appendChild(result);