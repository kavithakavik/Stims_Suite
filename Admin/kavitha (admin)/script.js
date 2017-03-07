// angular js json code
		var app=angular.module("myapp",[]).controller("mycontroller",function($scope)
    {
var clg={
code:01,
name:"SAN TECHNO SOLUTIONS",
img:"1.jpg",
dno_street:"12-E.K.VALASU",
city:"ERODE",
state:"TAMILNADU",
country:"INDIA",
zipcode:638011,
phone:22454,
mobile:9098765432,
faxno:22143,
contact_person:"Mr.ADMIN",
established_on:"01/01/2017",
academic_year_from:"JUN-2016",
academic_year_to:"MAY-2017"
};
var dept=[{sno:1,dcode:"mca01",dname:"MCA",dtype:"Academic"},{sno:2,dcode:"it02",dname:"IT",dtype:"Academic"},{sno:3,dcode:"cse03",dname:"CSE",dtype:"Academic"},{sno:4,dcode:"101",dname:"Accounts",dtype:"NonAcademic"}];


var academic=[{Sno:1,Start_Month_Year:"jun-2016",End_Month_Year:"may-2017",Status:"Active"},{Sno:2,Start_Month_Year:"jun-2015",End_Month_Year:"may-2016",Status:"Deactive"},{Sno:3,Start_Month_Year:"jun-2014",End_Month_Year:"may-2015",Status:"Deactive"},{Sno:4,Start_Month_Year:"jun-2013",End_Month_Year:"may-2014",Status:"Deactive"}];

 $scope.academicyear=[
        {Id : 1, name : "2015-2016" },
        {Id : 2, name : "2016-2017"},
        {Id : 3, name : "2017-2018"}
    ];

    var sec=[{sno:1,sname:"A"},{sno:2,sname:"B"},{sno:3,sname:"C"},{sno:4,sname:"D"}];

var exam=[{sno:1,ename:"TERM-1"},{sno:2,ename:"TERM-2"},{sno:3,ename:"TERM-3"},{sno:4,ename:"TERM-4"}];


$scope.selectedacademicyear = angular.copy($scope.academicyear[0]);
$scope.dept=dept;
$scope.rowLimit=5;
$scope.clg=clg;
$scope.academic=academic;
$scope.sec=sec;
$scope.exam=exam;

    });
// settings function
		 
 function fun1()
{
  
  document.getElementById('TableView1').style.display="inline";
        $('#modal1').modal('show');
    
}

function fun3()
{
  
  document.getElementById('TableView3').style.display="inline";
        $('#modal3').modal('show');
        $('#example7').calendar({
  type: 'month'
});
        $('#example8').calendar({
  type: 'month'
});
     
}

function fun4()
{
  
  document.getElementById('TableView4').style.display="inline";
      $('#modal4').modal('show');
   
}
function fun6()
{
  
  document.getElementById('TableView6').style.display="inline";
        $('#modal6').modal('show');

}

// examination functions

function exam()
{
 var year= document.getElementById("academic-select");
 var value1= year.value;
 var dept1 = document.getElementById("dept-select");
 var value2 = dept1.value;
 var exam1 = document.getElementById("section-select");
 var value3 = exam1.value;
 var exam1 = document.getElementById("exam-select");
 var value4 = exam1.value;
 if (value1 == "") {
    alert("Please select academic_year");
 } else if (value2 == "") { 
    alert("Please select a department");
 }
 else if (value3 == "") { 
    alert("Please select a section");
 }
 else if (value4 == "") { 
    alert("Please select a exam");
 }
else
{
  document.getElementById('mark').style.display="inline";

}

}


