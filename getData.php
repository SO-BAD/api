<?php
// $url = "https://data.taipei/api/getDatasetInfo/downloadResource?id=61ff4b3a-8a8a-47e4-96ec-e180b2abbfdb&rid=87b38c72-f9e7-4f75-b3af-5b6684f2a059";
$html =  file_get_contents($_POST['url']);
// $html =  file_get_contents($url);
echo $html;
// $myfile = fopen("./animal.csv", "w") or die("Unable to open file!");
// fwrite($myfile, $html);
// fclose($myfile);

// echo $_POST['url'];

?>