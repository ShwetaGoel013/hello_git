
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title></title>
</head>
<body>
  <script type="text/javascript">
  	   let Employee = [
  	   	{
  	   	  name : 'a',
  	   	  age :19,
  	   	  salary : 5500,
  	   	  DOB : 1998
  	   },

  	   	{
  	   	  name : 'b',
  	   	  age : 22,
  	   	  salary : 5700,
  	   	  DOB : 1888
  	   },

  	   	{
  	   	  name : 'c',
  	   	  age : 16,
  	   	  salary : 4400,
  	   	  DOB : 1976
  	   },

  	   	{
  	   	  name : 'd',
  	   	  age :50,
  	   	  salary : 1900,
  	   	  DOB :1898
  	   },

  	   	{
  	   	  name : 'e',
  	   	  age : 20,
  	   	  salary : 1000,
  	   	  DOB :1880
  	   }
  	]

  	var salaryBasedFilter =Employee.filter(item=> item.salary>5000);
  	console.log("Filtered Salary",salaryBasedFilter);

  	 let group1=[];
  	 let group2=[];

  	 Employee.map(item => (item.age>20)? group1.push(item) : group2.push(item))

  	 console.log("Age of Group1 is greater than Group2", group1);

console.log("Age of Group2 is less than Group1", group2);

Employee.map(item=> {
	if(item.age >20  && item.salary<1000)
	{
		item.salary =item.salary *5;
		return item;	}
})

console.log("List after increment",Employee);



  </script>
</body>
</html>