<?php
require_once __DIR__ . '/../vendor/autoload.php';
use Tecnick\TCPDF\TCPDF;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true)['results'];

    if (!empty($data)) {
        // Создаем новый объект TCPDF
        $pdf = new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);

        // Настраиваем параметры документа
        $pdf->SetCreator(PDF_CREATOR);
        $pdf->SetAuthor('Ваше имя');
        $pdf->SetTitle('Результаты тестов');
        $pdf->SetSubject('Список результатов тестирования сотрудников');
        $pdf->SetKeywords('тестирование, результаты, сотрудники');

        // Устанавливаем шрифт
        $pdf->SetFont('helvetica', '', 12);

        // Добавляем страницу
        $pdf->AddPage();

        // Формируем содержимое страницы
        $html = '<h1>Результаты тестирования</h1>';
        $html .= '<table border="1">';
        $html .= '<tr><th>ФИО</th><th>Должность</th><th>Табельный номер</th><th>Город</th><th>Тест</th><th>Дата</th><th>Результат</th></tr>';

        foreach ($data as $item) {
            // Формируем строку таблицы
            $html .= '<tr>';
            $html .= "<td>{$item['userName']}</td>";
            $html .= "<td>{$item['post']}</td>";
            $html .= "<td>{$item['tabNumber']}</td>";
            $html .= "<td>{$item['city']}</td>";
            $html .= "<td>{$item['testName']}</td>";
            $html .= "<td>{$item['date']}</td>";
            $html .= "<td>{$item['result']}</td>";
            $html .= '</tr>';
        }

        $html .= '</table>';

        // Выводим HTML в PDF
        $pdf->writeHTML($html, true, false, true, false, '');

        // Генерируем PDF и сохраняем его в переменную
        $output = $pdf->Output('results.pdf', 'S'); // S - Return as a string

        // Отправляем PDF клиенту для скачивания
        header('Content-type: application/pdf');
        header('Content-Disposition: attachment; filename="results.pdf"');
        echo $output;
    }
}
?>
