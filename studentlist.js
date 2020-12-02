let students = [
    {
        id:1,
        firstname:"christine",
        lastname:"Achieng",
        age:"26",
        email:"okechomanda105@gmail.com",
    },
    {
        id:2,
        firstname:"vero",
        lastname:"mwaura",
        age:"21",
        email:"okech@gmail.com",
    },
    {
        id:2,
        firstname:"jack",
        lastname:"kibaki",
        age:"28",
        email:"marlinkair@gmail.com",

    },
]


const saveBtn=document.getElementById('save-btn')
const studentForm=document.getElementById('register')

saveBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    const firstNameInput=firstName.value;
    const lastNameInput=lastName.value;
    const emailInput=email.value;
    const ageInput=age.value;

    if (firstNameInput=="" ||lastNameInput=="" ||emailInput==""|| ageInput==""){

        errorMessage = ("invalid")

   }else{
    let newStudent ={
        userid:students.length+1,
        fname:firstNameInput,
        lname:lastNameInput,
        email:emailInput,
        age:ageInput
    }
    students.push(newStudentData)
    const table=document.getElementById('table')

    let studentsobject;
for(let student of students) {
    studentObject += `<tr>`;

for(let student of students){
    studentObject += `<td>${students[student][eachStudent]}</td>`;
         const table=document.getElementById('table');
         const studentForm = document.getElementById('results');

         let email = document.getElementById("email").value.indexOf("@");
         let age = document.getElementById("age").value;
         let fName = document.getElementById("firstName").value;   
         Submitted = "true";
         let lName = document.getElementById("firstName").value;   
         Submitted = "true";
         if (fName.length > 10) {
             alert("The name must have no more than 10 characters");  
             Submitted = "false";
        if (lName.length > 10) {
                alert("The name must have no more than 10 characters");  
                Submitted = "false";
         }
         if (isNaN(age) || age < 12 || age > 100) {  
             alert("The age must be between numbers 12 and 100");  
             Submitted = "false";
         }
         if (at == -1) {  
             alert("The email address you entered is not valid"); 
             Submitted = "false";
         }
         if (Submitted == "false") {  
             return false;
         }


// let studenthubsobject;
// for(let studenthub of studenthubs) {
//     studenthubObject += `<tr>`;

// for(let studenthub of studenthubs){
//     studentObject += `<td>${studenthubs[studenthub][eachStudenthub]}</td>`;
//          const table=document.getElementById('table');
//          const studentForm = document.getElementById('results');
    
// }

// let studenthubs= newStudenthubs;
// function localStorageLoad(){
//     if(localStorage.studenthubData){
//         studenthubsArray=JSON.parse(localStorage.newStudenthubsData)
//         let newStudenthubs = "";
//         for(let newStudenthub of newStudenthubs) {
//             studenthubObject += `<tr>`;
//             for(let eachStudenthubElement of newStudenthub[studenthub]) {
//                 studenthubObject += `<td>${newStudenthubs[studenthub][eachStudenthubElement]}</td>`;
//             }
//             studenthubObject += `</tr>`;
//         }
//          table.innerHTML = studenthubObject;
//     }

//     document.getElementById('tableresult').innerHTML = studentObject;

// saveBtn.addEventListener('click', (e)=>{
//     e.preventDefault();
//     const firstNameInput=firstName.value;
//     const lastNameInput=lastName.value;
//     const emailInput=email.value;
//     const ageInput=age.value;

//     if (firstNameInput=="" ||lastNameInput=="" ||emailInput==""|| ageInput==""){

//         errorMessage = ("invalid")

//    }else{
//     var newStudenthub ={
//         userid:students.length+1,
//         fname:firstNameInput,
//         lname:lastNameInput,
//         email:emailInput,
//         age:ageInput
//     }
//     students.push(newStudenthubsData)
//     const table=document.getElementById('table')

//     const studentObject = "";
//     for(let studenthub of studenthubs) {
//         studenthubObject += `<tr>`;
//         for(let eachStudenthub of studenthubs[studenthub]) {
//             studenthubObject += `<td>${studenthubs[studenthub][eachStudenthub]}</td>`;
//         }
//         studenthubObject += `</tr>`;
//         errorMessage.innerText='check your input data!!!';
//         setTimeout(() => {   
//             errorMessage.innerHTML=' ';
//         }, 5000);       
//     }
//     else{  const studentForm=document.getElementById('register')
//         const newStudenthub={userid:newStudenthubs.length+1, fname:firstNameInput, lname:lastNameInput, email:emailInput, age:ageInput};
//         newStudenthubs.push(newStudenthubobject);
//         localStorage.studenthubsdata=JSON.stringify(newStudenthubs);
//         studentForm.reset();
//         localStorageLoad(newStudenthubObject)
//     }
//     table.innerHTML = newStudenthubObject;
//     studentForm.reset();

// }

// })

// const clearError=document.getElementById('savebtn')
// clearError.addEventListener("click",()=>{

// })