<?php 
$conn = pg_connect("host=localhost dbname=biblioteca user=postgres password=12345");
if (!$conn) {
  echo "An error occurred.\n";
  exit;
}

$result = pg_query($conn, "SELECT nombres, apellidos, id FROM autor");
if (!$result) {
  echo "An error occurred.\n";
  exit;
}


while ($arr = pg_fetch_assoc($result)) {
    $salida = array();
    array_push($salida, $arr);
}



 



echo json_encode($salida);

?>