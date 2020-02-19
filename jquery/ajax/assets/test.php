<?php
$url = isset($_POST['url']) ? htmlspecialchars($_POST['url']) : '';
echo "\n";
echo 'URL 地址: ' .$url;
?>