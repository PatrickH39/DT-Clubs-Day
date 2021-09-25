<?php

$db_user = "root";
$db_pass = "";
$db_name = "userdata";

$db = new PDO('mysql:host=localhost;dbname=' . $db_name . ';charset=utf8mb4', $db_user, $db_pass);

if (isset($_POST))
{

    $studentNumber = $_POST['studentNumber'];
    $fullName = $_POST['fullName'];
    $emailAddress = $_POST['emailAddress'];
    $selectedClub = implode(',', $_POST['selectedClub']);

    $sql = "INSERT INTO form (studentNumber, fullName, emailAddress, selectedClub) VALUES(?,?,?,?)";
    $stmtinsert = $db->prepare($sql);
    $result = $stmtinsert->execute([$studentNumber, $fullName, $emailAddress, $selectedClub]);
    if ($result)
    {
        header("Location: /success");
        die();

    }
    else
    {
        echo 'There was an error processing your form. Please email patrick@patrickh.ca immediately.';
    }
}
else
{
    echo 'No data';
}