<?php

$db_user = "";
$db_pass = "";
$db_name = "master";

$db = new PDO('mysql:host=localhost;dbname=' . $db_name . ';charset=utf8mb4', $db_user, $db_pass);

if (isset($_POST))
{

    function isValid() {
        if($_POST['studentNumber'] != "" && $_POST['fullName'] != "" && $_POST['emailAddress'] != "" && $_POST['selectedClub'] != "") {
            return true;
        } else {
            return false;
        }
    }

    if(isValid()) {
    $studentNumber = $_POST['studentNumber'];
    $fullName = $_POST['fullName'];
    $emailAddress = $_POST['emailAddress'];
    $selectedClub = implode(',', $_POST['selectedClub']);
    $ip = $_SERVER['REMOTE_ADDR'];

    $sql = "INSERT INTO formData (ipAddr, studentNumber, fullName, emailAddress, selectedClub) VALUES(?,?,?,?,?)";
    $stmtinsert = $db->prepare($sql);
    $result = $stmtinsert->execute([$ip, $studentNumber, $fullName, $emailAddress, $selectedClub]);
    if ($result)
    {
        header("Location: /success");
        die();

    }
    else
    {
        echo 'There was an error processing your form. Please email patrick@patrickh.ca immediately.';
    }
}else
{
    header("Location: /");
    die();
}}
