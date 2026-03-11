const API="/api/employees";

async function addEmployee(){

const employee={
fullName:document.getElementById("name").value,
email:document.getElementById("email").value,
phoneNumber:document.getElementById("phone").value,
department:document.getElementById("department").value,
designation:document.getElementById("designation").value,
salary:document.getElementById("salary").value,
dateOfJoining:new Date(),
employmentType:"Full-time"
};

await fetch(API,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(employee)
});

alert("Employee Added Successfully");

getEmployees();
}

async function getEmployees(){

const res=await fetch(API);
const data=await res.json();

const table=document.getElementById("employeeTable");

table.innerHTML="";

data.forEach(emp=>{

table.innerHTML+=`
<tr>
<td>${emp.fullName}</td>
<td>${emp.email}</td>
<td>${emp.department}</td>
<td>${emp.salary}</td>
<td>
<button class="delete" onclick="deleteEmployee('${emp._id}')">Delete</button>
</td>
</tr>
`;

});
}

async function deleteEmployee(id){

await fetch(API+"/"+id,{
method:"DELETE"
});

getEmployees();

}