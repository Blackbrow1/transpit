<?php
$servername = "localhost"; // адрес сервера
$username = "root"; // имя пользователя
$password = ""; // пароль
$dbname = "transpit"; // имя базы данных

// Создаем соединение
$conn = new mysqli($servername, $username, $password, $dbname);

// Проверяем соединение
if ($conn->connect_error) {
    die("Ошибка подключения: " . $conn->connect_error);
}

// Получаем данные из POST-запроса
$test_name = $_POST['test_name'];
$answ_count = $_POST['answ_count'];
$percent = $_POST['percent'];
$result_name = $_POST['result_name'];

// Подготавливаем и выполняем SQL-запрос
$stmt = $conn->prepare("INSERT INTO results (test_name, answ_count, percent, result_name) VALUES (?, ?, ?, ?)");
$stmt->bind_param("siis", $test_name, $answ_count, $percent, $result_name);

// if ($stmt->execute()) {
//     echo "Результаты успешно отправлены! Процент правильных ответов: ";
// } else {
//     echo "Ошибка: " . $stmt->error;
// }

// Закрываем соединение
$stmt->close();
$conn->close();

// $res = R::dispense('results');
// $res->test_name = $_POST['test_name'];
// $res->answ_count = $_POST['answ_count'];
// $res->percent = $_POST['percent'];
// $res->result_name = $_POST['result_name'];
// $test_res = R::store($res);

?>