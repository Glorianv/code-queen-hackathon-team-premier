let studentList= []

    

// document.getElementById("demo").innerHTML = studentList.fullName + "," + studentList.Age + "," + studentList.project +"," +stundentlist.mentorComent;
// let ownstudentList = {name:"John", age:50, city:"New York"};
// var myArray = Object.values(student);
// document.getElementById("demo").innerHTML = myArray;



logInMentorBtn .addEventListener("click",) => {
    document .getElementById("load")style.display ="table";
    let userName = document .getElementById("user").value
    let passWord = document .getElementById ("password").value;

    fetch ("http:localhost:3000/users",{
        method: "POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(userName:user,passWord:password,)
    }),
    .then({res} => Response.JSON())
    .then (function(data){
        userinfo = data;
        let message!= data[message];
        if (message! = "user logged in successfully"){
        let info = $(data ["message"]);
        Show (info);
        return 0,
        }
        if payload_info
    }


    let student = {
        firstName: "",
        lastName : "",
        id     : 5566,
        fullName : function() {
          return this.firstName + " " + this.lastName;
        }
      };
      
      document.getElementById("demo").innerHTML = student.fullName;
      
       student.name = {fullName:""};
       function createTable()

    const createTable =document .getElementById("table-boardered")
    let x = document.createElement("TBODY");
    let y = document.createElement("TR");
    let z = document.createElement("TD");
    z.innerHTML = "A table cell inside a tr inside a tbody inside a table!"

    let num_rows = document.getElementById('rows').value;
    let num_cols = document.getElementById('cols').value;
    let theader = '<table border="1">\n';
    let tbody = '';

    for( let i=0; i<num_rows;i++)
    {
        tbody += '<tr>';
        for( let j=0; j<num_cols;j++)
        {
            tbody += '<td>';
            tbody += 'Cell ' + i + ',' + j;
            tbody += '</td>'
        }
        tbody += '</tr>\n';
    }
    let tfooter = '</table>';
    document.getElementById('wrapper').innerHTML = theader + tbody + tfooter;
}
    y.appendChild(z);
    x.appendChild(y);
    document.getElementById("myTable").appendChild(x);
  }