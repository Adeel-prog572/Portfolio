<?php

header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "student_management");

if ($conn->connect_error) {
    die(json_encode([
        "success" => false,
        "message" => "Database connection failed"
    ]));
}

$name = $_POST['name'] ?? '';
$rollNo = $_POST['rollNo'] ?? '';
$className = $_POST['className'] ?? '';
$email = $_POST['email'] ?? '';

if ($name === '' || $rollNo === '' || $className === '' || $email === '') {
    echo json_encode([
        "success" => false,
        "message" => "All fields are required"
    ]);
    exit;
}

$sql = "INSERT INTO students (name, rollNo, className, email)
        VALUES (?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $name, $rollNo, $className, $email);

if ($stmt->execute()) {
    echo json_encode([
        "success" => true,
        "message" => "Student added successfully"
    ]);
} else {
    echo json_encode([
        "success" => false,
        "message" => "Failed to add student"
    ]);
}

$stmt->close();
$conn->close();

?>