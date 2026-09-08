<?php

header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "student_management");

if ($conn->connect_error) {
    die(json_encode([
        "success" => false,
        "message" => "Database connection failed"
    ]));
}

$sql = "SELECT * FROM students ORDER BY id DESC";

$result = $conn->query($sql);

$students = [];

while ($row = $result->fetch_assoc()) {
    $students[] = $row;
}

echo json_encode([
    "success" => true,
    "students" => $students
]);

$conn->close();

?>