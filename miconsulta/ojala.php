<?php 
   header('Content-type:application/json;charset=utf-8');
   header('Access-Control-Allow-Origin: *');
   header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
   include_once('./AdministradorBaseDatos.php');
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
$salida = array();
while ($arr = pg_fetch_assoc($result)) {
    
    array_push($salida, $arr);
}
pg_close($conn);
echo json_encode($salida);
?>