const arry =[];

function onClick(){
    var obj={};
    obj.Name = document.getElementById('name').value;
    obj.Id = document.getElementById('id').value;
    obj.Phone_no = document.getElementById('num').value;
    obj.Email = document.getElementById('eml').value;
    obj.Desig = document.getElementById('desig').value;
    obj.Salary= document.getElementById('sal').value;
    obj.skills = document.getElementById('skill').value;
    arry.push(obj)
    console.log(arry)
}


function search()
{
    var emp_id = document.getElementById('id1').value;
    for(let i=0;i<arry.length;i++){
        if(arry[i].Id==emp_id){
            console.log(arry[i])
        }
    }
}
