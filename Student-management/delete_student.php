<?php

header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "student_management");

if ($conn->connect_error) {
    die(json_encode([
        "success" => false,
        "message" => "Database connection failed"
    ]));
}

$id = $_POST['id'] ?? '';

if ($id === '') {
    echo json_encode([
        "success" => false,
        "message" => "Student ID is required"
    ]);
    exit;
}

$sql = "DELETE FROM students WHERE id = ?";

$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $id);

if ($stmt->execute()) {
    echo json_encode([
        "success" => true,
        "message" => "Student deleted successfully"
    ]);
} else {
    echo json_encode([
        "success" => false,
        "message" => "Failed to delete student"
    ]);
}

$stmt->close();
$conn->close();

?>