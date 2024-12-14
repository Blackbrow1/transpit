<?php
if (isset($uriArray[1])) {
  $user = R::load('users', $uriArray[1]);
} else {
  if (isset($_SESSION['login']) && $_SESSION['login'] === 1) {
    $user = R::load('users', $_SESSION['logged_user']['id']);
  } else {
    $userNotLoggedIn = true;
  }
}

$res = R::dispense('results');
$res->tab_number = $user->tab_number;
$res->surname = $user->surname;
$res->name = $user->name;
$res->patronymic = $user->patronymic;
$res->post = $user->post;
$res->date = date('d.m.Y');
$res->test_name = $_POST['test_name'];
$res->answ_count = $_POST['answ_count'];
$res->percent = $_POST['percent'];
$res->result_name = $_POST['result_name'];
$test_res = R::store($res);

?>