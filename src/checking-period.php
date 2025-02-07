<?php
// Путь к файлу, хранящему последний год обновления
$updateFilePath = 'last_update.txt';

// Проверка существования файла
if (!file_exists($updateFilePath)) {
    // Если файла нет, создаём его и записываем туда текущий год
    file_put_contents($updateFilePath, date('Y-m-d'));
}

// Читаем последний сохранённую дату
$lastUpdateDate = file_get_contents($updateFilePath);

// Текущие год, месяц и день
$currentDate = date('Y-m-d');
list($currentYear, $currentMonth, $currentDay) = explode('-', $currentDate);

// Проверяем, наступило ли 1 апреля или 1 октября нового полугодия
if (($currentYear > substr($lastUpdateDate, 0, 4))
    || ($currentYear == substr($lastUpdateDate, 0, 4) && ($currentMonth >= 4 && $currentDay >= 1))
    || ($currentYear == substr($lastUpdateDate, 0, 4) && ($currentMonth >= 10 && $currentDay >= 1))) {
    // Обновляем файл
    file_put_contents($updateFilePath, $currentDate);

    // Определяем сезон: весна или осень
    if ($currentMonth < 10 && $currentMonth > 4) {
      $season = 'Весна';
    } else {
      $season = 'Осень';
    }

    // Формируем строку с новой датой
    $dateString = "($season $currentYear)";
} else {
    // Используем старую дату
    $lastYear = substr($lastUpdateDate, 0, 4);

    // Определяем прошлый сезон: весна или осень
    if ($currentMonth < 10 && $currentMonth > 4) {
      $lastSeason = 'Весна';
    } else {
      $lastSeason = 'Осень';
    }

    // Формируем строку со старой датой
    $dateString = "($lastSeason $lastYear)";
}

// // Смена даты каждый месяц
// $months = [
//   "01" => "Январь",
//   "02" => "Февраль",
//   "03" => "Март",
//   "04" => "Апрель",
//   "05" => "Май",
//   "06" => "Июнь",
//   "07" => "Июль",
//   "08" => "Август",
//   "09" => "Сентябрь",
//   "10" => "Октябрь",
//   "11" => "Ноябрь",
//   "12" => "Декабрь"
// ];

// if ($currentYear > substr($lastUpdateDate, 0, 4)) {
//   // Обновляем файл
//   file_put_contents($updateFilePath, $currentDate);

//   // Формируем строку с новой датой
//   $dateMonth = "($months[$currentMonth] $currentYear)";
// } else {
//   // Используем старую дату
//   $lastYear = substr($lastUpdateDate, 0, 4);
//   $dateMonth = "($months[$currentMonth] $lastYear)";
// }

// Массив месяцев для кварталов
$months = [
  "01" => "Январь",
  "02" => "Февраль",
  "03" => "Март",
  "04" => "Апрель",
  "05" => "Май",
  "06" => "Июнь",
  "07" => "Июль",
  "08" => "Август",
  "09" => "Сентябрь",
  "10" => "Октябрь",
  "11" => "Ноябрь",
  "12" => "Декабрь"
];

// Массив месяцев для кварталов
$quarters = [
  'Зима' => ['12', '01', '02'], // Декабрь-Февраль
  'Весна' => ['03', '04', '05'], // Март-Май
  'Лето' => ['06', '07', '08'], // Июнь-Август
  'Осень' => ['09', '10', '11']  // Сентябрь-Ноябрь
];

// Текущий год и месяц
$currentYear = date('Y');
$currentMonth = date('m'); // Формат 'mm'

// Предположим, что формат $lastUpdateDate: YYYY-QX
$lastYear = substr($lastUpdateDate, 0, 4);
$lastQuarter = substr($lastUpdateDate, 5, 2);

// Определяем текущий квартал
foreach ($quarters as $q => $range) {
  if (in_array($currentMonth, $range)) {
      $currentQuarter = $q;
      break;
  }
}

// Проверка условий обновления
if ($currentYear > $lastYear || $currentQuarter != $lastQuarter) {
  // Обновление файла
  if (!file_put_contents($updateFilePath, $currentDate)) {
      echo "Не удалось записать в файл.";
  }

  // Формируем новую строку с датой
  $dateMonth = "({$currentQuarter} {$currentYear})";
} else {
  // Используем старую дату
  $dateMonth = "({$currentQuarter} {$lastYear})";
}

?>