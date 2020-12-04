let students=[
    {
        firstName:"Jane",
        lastName:"Mukisa",
        status:"Graduated",
        contact:"07544322456",
        linkedIn:"linkedin.com"
    },
    {
        firstName:"Jane",
        lastName:"Mukisa",
        status:"Graduated",
        contact:"07544322456",
        linkedIn:"linkedin.com"
    },
    {
        firstName:"Jane",
        lastName:"Mukisa",
        status:"Graduated",
        contact:"07544322456",
        linkedIn:"linkedin.com"
    }
]

let studentTable=document.getElementById("student-data");
// let tbody=document.createElement("tbody")
// studentTable.appendChild(tbody)
let content=`<tr>
<th>First Name</th>
<th>Last Name</th>
<th>Occupation</th>
<th>Status</th>
<th>Attendance score</th>
</tr>`
for (student of students){
//    let row= document.createElement("tr")
   content+=`<tr><td>${student.firstName}</td>
        <td>${student.lastName}</td>
        <td>${student.occupation}</td>
        <td>${student.status}</td>
        <td>${student.attendanceScore}</td></tr>`
    
}
studentTable.innerHTML=content

