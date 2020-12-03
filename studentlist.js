let studentsProfile = []



let fetchAllUsersData => {
    const res = await fetch( https:...)
    const UserData = await res.json();
    for (let user of usersData){
        
    }
}
const userProfile =document.get getElementById("register")

const registerSaveBtn = document.get getElementById("regbtn")

        registerSaveBtn.addeventListener("click", async ()=> {
            let userProfileValue = UsersDataInput.value;
            if (userProfileValue ==="");{
                alert("A field is required to be filled")
            }else{
                const usersDataPayLoad ={
                    user:userProfileValue,
                },
                const response = await fetch( http:...)
                method "POST"
                body: JSON.stringify(usersDataPayLoad),
                Headers:{
                    "content type":"application/json"
                },
            },
        }),
        const user = await response.json(
            create usersDataElement(user)
            userDataProfile.value ="";
        )
        });

        
//     {
//         id:1,
//         firstname:"christine",
//         lastname:"Achieng",
//         age:"26",
//         email:"okechomanda105@gmail.com",
//     },
//     {
//         id:2,
//         firstname:"vero",
//         lastname:"mwaura",
//         age:"21",
//         email:"okech@gmail.com",
//     },
//     {
//         id:2,
//         firstname:"jack",
//         lastname:"kibaki",
//         age:"28",
//         email:"marlinkair@gmail.com",

//     },
// ]


// const saveBtn=document.getElementById('save-btn')
// const studentForm=document.getElementById('register')

// saveBtn.addEventListener('click', (e)=>{
//     e.preventDefault();
//     const firstNameInput=firstName.value;
//     const lastNameInput=lastName.value;
//     const emailInput=email.value;
//     const ageInput=age.value;

//     if (firstNameInput=="" ||lastNameInput=="" ||emailInput==""|| ageInput==""){

//         errorMessage = ("invalid")

//    }else{
//     let newStudent ={
//         userid:students.length+1,
//         fname:firstNameInput,
//         lname:lastNameInput,
//         email:emailInput,
//         age:ageInput
//     }
//     students.push(newStudentData)
//     const table=document.getElementById('table')

//     let studentsobject;
// for(let student of students) {
//     studentObject += `<tr>`;

// for(let student of students){
//     studentObject += `<td>${students[student][eachStudent]}</td>`;
//          const table=document.getElementById('table');
//          const studentForm = document.getElementById('results');

//          let Email = document.getElementById("email-holder").value.indexOf("@");
//          let age = document.getElementById("age-holder").value;
//          let fName = document.getElementById("givenName-input").value;   
//          Submitted = "true";
//          let lName = document.getElementById("thename-input").value;   
//          Submitted = "true";
//          if (fName.length > 10) {
//              alert("The name must have no more than 10 characters");  
//              Submitted = "false";
//         if (lName.length > 10) {
//                 alert("The name must have no more than 10 characters");  
//                 Submitted = "false";
//          }
//          if (isNaN(age) || age < 12 || age > 100) {  
//              alert("The age must be between numbers 12 and 100");  
//              Submitted = "false";
//          }
//          if (at == -1) {  
//              alert("The email address you entered is not valid"); 
//              Submitted = "false";
//          }
//          if (Submitted == "false") {  
//              return false;
//          }

