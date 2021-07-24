<?php 

if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = "cridadgh@gmail.com";
    $header = "From: ".$mailFrom;
    $txt = "You have received an Email from ".$name.".\n\n".$message;

    mail($mailTo, $subject, $header, $txt);
    header("Location: index.php?mailsend");
}
?>