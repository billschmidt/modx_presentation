<?php
// saveFormIt
$query = 'insert into `form_submissions` (`name`, `email`, `comment`) values (:name, :email, :comments)';
$values = array(
    ':name' => $hook->getValue('name'),
    ':email' => $hook->getValue('email'),
    ':comments' => $hook->getValue('comments'),
);

$criteria = new xPDOCriteria($modx, $query, $values);
if (!$criteria->prepare() || !$criteria->stmt->execute()) {
    $hook->addError('resource', print_r($modx->errorInfo(), true));
    return false;
}
return true;