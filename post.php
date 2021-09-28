<?php
$db = new mysqli("hostname", "username", "password", "database");

if (isset($_POST)) {
    function validCode()
    {
        if ($_POST['accessCode'] != "password") {
            return false;
        } else {
            return true;
        }
        
    }
    
    function isValid()
    {
        if ($_POST['studentNumber'] != "" && $_POST['fullName'] != "" && $_POST['emailAddress'] != "" && $_POST['selectedClub'] != "") {
            return true;
        } else {
            return false;
        }
    }
    if (validCode()) {
        if (isValid()) {
            
            $studentNumber = $_POST['studentNumber'];
            $fullName      = $_POST['fullName'];
            $emailAddress  = $_POST['emailAddress'];
            $ipAddr        = $_SERVER["HTTP_CF_CONNECTING_IP"];
            $selectedClub  = $_POST['selectedClub'];
            
            $sql    = "INSERT INTO formData (ipAddr, studentNumber, fullName, emailAddress, selectedClub) VALUES('$ipAddr',$studentNumber,'$fullName','$emailAddress','$selectedClub')";
            $result = mysqli_query($db, $sql);
            
            if ($result) {
                echo ('Your response have been recorded.');
                die();
            } else {
                echo 'You are missing form fields, please double check your response.';
                die();
            }
        } else {
            echo ('You are missing form fields. Double check your info.');
            die();
        }
        
    } else {
        echo 'Invalid access code. Check the All Students @ DTSS Teams or email patrick@patrickh.ca';
        die();
    }
}