<?php

class AdministradorBaseDatos
{
    private $host= "localhost";
    private $bd = "biblioteca";
    private $usuario = "postgres";
    private $password = "12345";
    private $link;
 
    private function conectar()
    {
        $datos_bd="host='$this->host' dbname='$this->bd' user='$this->usuario' password='$this->password'";
        $this->link=pg_connect($datos_bd);
        
        if (!$this->link) {
            return false;
        }
        return true;
        

       
    }
 
    private function consultar($sql)
    {
       // $respuesta = pg_fetch_assoc($sql);
        $respuesta = pg_query($this->link,$sql);
        $salida = array();

       

    
        
        while ($row = pg_fetch_row($respuesta)) {
            array_push($salida, $row);

        }
        return $salida;
        
    }
 


    private function desconectar()
    {
        pg_close($this->link);
    }

    public function ejecutarConsulta($sql){
        $this->conectar();
        $salida = $this->consultar($sql);
        $this->desconectar();
        return $salida;
    }
}