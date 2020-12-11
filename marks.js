let students=[
    {
        firstName:"Karen",
        lastName:"Mukisa",
        
        attendanceScore:"99"
    },
    {
        firstName:"Flower",
        lastName:"Khojari",
        
        attendanceScore:"65"
    },
    {
        firstName:"Jolly",
        lastName:"Kirabo",
        
        attendanceScore:"-"
    },
    {
        firstName:"Sarah",
        lastName:"Kori",
        
        attendanceScore:"87"
    },
    {
        firstName:"Flower",
        lastName:"Khojari",
        
        attendanceScore:"65"
    }
    
]

let studentTable=document.getElementById("student-marks");
// let tbody=document.createElement("tbody")
// studentTable.appendChild(tbody)
let content=`<tr>
<th>First Name</th>
<th>Last Name</th>

<th>Attendance score</th>
</tr>`
for (student of students){
//    let row= document.createElement("tr")
   content+=`<tr><td>${student.firstName}</td>
        <td>${student.lastName}</td>
       
        <td>${student.attendanceScore}</td></tr>`
    
}
studentTable.innerHTML=content
