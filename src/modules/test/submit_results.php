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
$res->test_name = $_POST['test_name'];
$res->answ_count = $_POST['answ_count'];
$res->percent = $_POST['percent'];
$res->result_name = $_POST['result_name'];
$res->tab_number = $user->tab_number;
$res->date = date('Y-m-d H:i:s');
$test_res = R::store($res);

?>