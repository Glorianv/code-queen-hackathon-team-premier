let teams=[
    {
        teamName:"Premier",
        teamMembers:"Nansubuga Gloria, Achieng Christine, Atukunda Zillah",
        cohort:"Three",
        year:"2020",
        projectTitle:"Students' Tracking System",
        projectFile:"sts.pdf"
    },
    {
        teamName:"Pacers",
        teamMembers:"Nakato Gloria, Achan Tina, Atukunda Zain",
        cohort:"Three",
        year:"2020",
        projectTitle:"Students' Tracking System",
        projectFile:"ours.pdf"
    },
    {
        teamName:"Wise",
        teamMembers:"Vivian Asiimwe, Bathong Wayi, Nowin Billah",
        cohort:"Two",
        year:"2020",
        projectTitle:"Riders' register",
        projectFile:"reg.pdf"
    },
    {
        teamName:"Premier",
        teamMembers:"Nansubuga Gloria, Achieng Christine, Atukunda Zillah",
        cohort:"Three",
        year:"2020",
        projectTitle:"Students' Tracking System",
        projectFile:"sts.pdf"
    },
    {
        teamName:"Premier",
        teamMembers:"Nansubuga Gloria, Achieng Christine, Atukunda Zillah",
        cohort:"Three",
        year:"2020",
        projectTitle:"Students' Tracking System",
        projectFile:"sts.pdf"
    },
    {
        teamName:"Premier",
        teamMembers:"Nansubuga Gloria, Achieng Christine, Atukunda Zillah",
        cohort:"Three",
        year:"2020",
        projectTitle:"Students' Tracking System",
        projectFile:"sts.pdf"
    },
    {
        teamName:"Premier",
        teamMembers:"Nansubuga Gloria, Achieng Christine, Atukunda Zillah",
        cohort:"Three",
        year:"2020",
        projectTitle:"Students' Tracking System",
        projectFile:"sts.pdf"
    }
]

let teamTable=document.getElementById("student-info");
// let tbody=document.createElement("tbody")
// studentTable.appendChild(tbody)
let content=`<tr>
<th>Team Name</th>
<th>Team Members</th>
<th>Cohort</th>
<th>Year</th>
<th>Project Title</th>
<th>Project File</th>
</tr>`
for (team of teams){
//    let row= document.createElement("tr")
   content+=`<tr><td>${team.teamName}</td>
        <td>${team.teamName}</td>
        <td>${team.teamMembers}</td>
        <td>${team.cohort}</td>
        <td>${team.year}</td></tr>
        <td>${team.projectTitle}</td></tr>
        <td>${team.projectFile}</td></tr>`
    
}
teamTable.innerHTML=content

