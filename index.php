<?php
$credentialsFile = file_exists('credentials-dev.json') ? 'credentials-dev.json' : 'credentials.json';
$credentialsJson = file_get_contents($credentialsFile);
$credentials = json_decode($credentialsJson);
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">


   
    
    <link rel="stylesheet" href="style.css">

    <title>Test facebook social login</title>
</head>

<body>

   
    <div id="result">
        Click on login button
    </div>

   
    <script src="script.js"></script>
</body>

</html>