<?php

$newstyle='google_calendar.css';
$url="https://calendar.google.com/calendar/embed?src=a8870506%40gmail.com&ctz=Asia%2FTaipei";
$ch=curl_init();
header("Content-Type:text/html; charset=utf-8");
curl_setopt($ch,CURLOPT_URL,$url);
curl_setopt($ch,CURLOPT_HEADER,0);
curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,0);
$buffer=curl_exec($ch);
curl_close($ch);
$search = '/(<link.*>)/';
$replacement = '<link rel="stylesheet" type="text/css" href="' . $newstyle . '" />';
$buffer = preg_replace($search, $replacement, $buffer);
$buffer=str_replace('/calendar/_','https://calendar.google.com/calendar/_',$buffer);
$buffer=str_replace('<script>function _onload()','<script>function _onload()',$buffer);
$buffer=str_replace('<script type="text/javascript" src="//www.google.com/calendar/','<script type="text/javascript" src="https://www.google.com/calendar/',$buffer);
$buffer=str_replace('"baseUrl":"/"','"baseUrl":"https://www.google.com/"',$buffer);
echo $buffer;
?>
