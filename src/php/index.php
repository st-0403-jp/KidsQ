<?php

$result = 'あああああああああ';



?>
<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="css/common.css">
        <title>kidsQ｜クイズアプリ</title>
    </head>
    <body>
        <form action="<?= basename(__FILE__) ?>" method="post" enctype="application/x-www-form-urlencoded">
            <input type="button" value="押す">
            <hr>
            <div>
                <?= $result ?>
            </div>
        </form>
    </body>
</html>
