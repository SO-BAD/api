<?php
$url ="https://quality.data.gov.tw/dq_download_json.php?nid=18420&md5_url=44314524414150faa7ccb2800813f493";
$html =  file_get_contents($url);

$myfile = fopen("./data.json", "w") or die("Unable to open file!");
fwrite($myfile, $html);
fclose($myfile);



?>