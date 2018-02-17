function ld()
{
	document.getElementById("qty1").value=0;
	document.getElementById("qty2").value=0;
	document.getElementById("qty3").value=0;
	document.getElementById("qty4").value=0;
}
function tot()
{
	var a=document.getElementById("qty1").value;
	var b=document.getElementById("qty2").value;
	var c=document.getElementById("qty3").value;
	var d=document.getElementById("qty4").value;
	
	var tot=(a*8500)+(b*7500)+(c*9800)+(d*5600);
	
	document.getElementById("total").innerHTML="TOTAL AMOUNT PAYABLE = Rs. "+tot;
}
function checkName()
{
				flag =0;
				var t=document.getElementById("name1").value;
				var reg=/^[a-zA-Z]$/;
				for(var i=0;i<t.length;i++)
				{
					if(!reg.test(t[i]))
					{
						flag=1;
					}
				}
				if(flag==1 || t.length==0)
					return(false);
				
				return(true);
}
function ValidateEmail()
			{
				var t = document.getElementById("mail").value;
				var reg=/^\w+([\.-]?\ w+)*@\w+([\.-]?\ w+)*(\.\w{2,3})+$/;
				if (reg.test(t))
					return (true)
				return (false)
			}
function checkDate()
{
				
				var today = new Date();
				var dd = today.getDate();
				var mm =  today.getMonth()+1;
				var yyyy = today.getFullYear();
				if(dd<10)
					dd='0'+dd;
				if(mm<10)
					mm='0'+mm;
				var d1=yyyy+'-'+mm+'-'+dd;
				var x = document.getElementById("date1").value;
				var yyyy1=x[0]+x[1]+x[2]+x[3];
				var mm1= x[5]+x[6];
				var dd1= x[8]+x[9];
				var dt2=new Date(parseInt(yyyy1),parseInt(mm1),parseInt(dd1));
				var dt1= new Date(yyyy,mm,dd);
				var timeDiff = Math.abs(dt1.getTime()-dt2.getTime());
				var err=document.getElementById("dateError");
				diffDays=Math.ceil(timeDiff/(1000*3600*24));
				if(diffDays<6570)
				{
					
					return(false);
				}
				else
				{
					return(true);
				}
		
}
function addCheck()
{
	t = document.getElementById("address").value;
	if(t.length==0)
		return(false);
	else
		return(true);
}
function checkMob()
			{
				flag2=0;
				
				var t=document.getElementById("mobnum").value;
				var reg1 = /^[0-9]$/;
				for(var i=0; i<t.length;i++)
					if(!reg1.test(t[i]))
						flag2=1;
				if(flag2==1 || t.length==0)
					return(false);
				else
					return(true);
			}
function fn()
{
	var a=document.getElementById("qty1").value;
	var b=document.getElementById("qty1").value;
	var c=document.getElementById("qty1").value;
	var d=document.getElementById("qty1").value;
	
	if(a<0 ||b<0||c<0||d<0)
	{
		alert("Enter valid quantity!");
	}
	else if(a==0 && b==0 && c==0 &&d==0)
	{
		alert("Enter some quantity!");
	}
	else if(!checkName())
	{
		alert("Enter valid name!");

	}
	else if(!checkDate())
	{
		alert("You are not above 18 yrs age");
	}
	else if(!ValidateEmail())
	{
		alert("Enter valid email");
	}
	else if(!checkMob())
	{
		alert("Enter valid mobile number");
	}
	else if(!addCheck())
	{
		alert("Enter address");
	}
	else
	{
		alert("Order placed ! ");
		location = "success.html";
	}
}