<?php

$tpl = isset($tpl) ? $tpl : 'submission';

$query = 'select `name`, `email`, `comment`, `date` from `form_submissions`';

$criteria = new xPDOCriteria($modx, $query, $values);
if (!$criteria->prepare() || !$criteria->stmt->execute()) {
    echo __LINE__ . ' : ' . print_r($modx->errorInfo(), true) . '<br>';
    return '';
}

$output = '';
while($row = $criteria->stmt->fetch(PDO::FETCH_ASSOC)){
    $output .= $modx->getChunk($tpl, $row);
}
return $output;