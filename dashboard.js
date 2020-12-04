let students=[
    {
        firstName:"Karen",
        lastName:"Mukisa",
        occupation:"Engineer",
        status:"Graduated",
        attendanceScore:"99"
    },
    {
        firstName:"Flower",
        lastName:"Khojari",
        occupation:"Administrator",
        status:"Graduated",
        attendanceScore:"65"
    },
    {
        firstName:"Jolly",
        lastName:"Kirabo",
        occupation:"Student",
        status:"Dropped out",
        attendanceScore:"-"
    },
    {
        firstName:"Sarah",
        lastName:"Kori",
        occupation:"Chemist",
        status:"Graduated",
        attendanceScore:"87"
    },
    {
        firstName:"Flower",
        lastName:"Khojari",
        occupation:"Engineer",
        status:"Graduated",
        attendanceScore:"65"
    },
    {
        firstName:"Ariana",
        lastName:"Natooke",
        occupation:"Statitian",
        status:"Continuing",
        attendanceScore:"-"
    },
    {
        firstName:"Wanili",
        lastName:"Zamin",
        occupation:"Editor",
        status:"Continuing",
        attendanceScore:"-"
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

