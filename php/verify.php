<?php
$servername="localhost";
$username="root";
$password="";
$dbname="startup";
$conn=mysqli_connect($servername,$username,$password,$dbname);
//if($conn)
	//echo "connection success";
$name=$_POST['n'];
$dob=$_POST['bday'];
$email=$_POST['mail'];
$mobile=$_POST['mob'];
$address=$_POST['address'];
$p1=(int)$_POST['qty1'];
$p2=(int)$_POST['qty2'];
$p3=(int)$_POST['qty3'];
$p4=(int)$_POST['qty4'];
$sql="INSERT INTO OrderDetails VALUES('$name',STR_TO_DATE('$dob','%m/%d/%y'),'$email','$mobile','$address',$p1,$p2,$p3,$p4,123)";
$result=mysqli_query($conn,$sql);
if($result)
{
	?>
	<script>
	alert("Order Placed! Success ");
	location="buynow.html"
	</script>
	<?php
	echo "success";
}
else
{
	?>
	<script>
	alert("failed");
	location="buynow.html"
	</script>
	<?php
	echo "fail";
}

?>