<?php

/**
 * Write data to log file.
 *
 * @param mixed $dataflo
 * @param string $title
 *
 * @return bool
 */

class Bitrix{
 private $webhook = "";
  function logHook($data, $title = '') {
    $log = "\n------------------------\n";
    $log .= date("Y.m.d G:i:s") . "\n";
    $log .= (strlen($title) > 0 ? $title : 'DEBUG') . "\n";
    $log .= print_r($data, 1);
    $log .= "\n------------------------\n";
    file_put_contents(getcwd() . '/hook.log', $log, FILE_APPEND);
    return true;
  }
  function get(){
    $url0 = "$this->webhook/ists.element.get.json?";
    $ch0 = curl_init();
    curl_setopt($ch0, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch0, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch0, CURLOPT_URL,$url0);
    $result0 = curl_exec($ch0);
    curl_close($ch0);
    $arr0 = json_decode($result0, true);
    return $arr0["result"];
  }

  
  }

  ?>