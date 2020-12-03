let userData=[]

let newUserInputs= document.getElementById("ans"),

const registerBtn = document.getElementById("regbtn")

registerBtn.addEventListener("click",async()=>{
    let newUserInputvalue = newUserInput.value;
    if (newUserInputvalue ===""){
        alert("A field is required tobe filled");
    }else{
        const userDataPayload ={
            userData:newUserInputvalue,

        };
        const response =await fetch (""),{
            method: "POST",
            body: JSON.stringfy(userDataPayload),
        });
        const userData = await response.JSON();
        newUserInput.value ="";
});


