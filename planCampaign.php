<?php
$blueTheme = isset($_GET['theme']) && $_GET['theme'] === 'blue';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Plan Campaign</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Days+One&display=swap"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato:wght@500;700&display=swap"/>
    <link rel="stylesheet" href="CSS/planCampaign.css" />
</head>
<body<?php if ($blueTheme) echo ' class="blue-theme"'; ?>>
    <div class="main-container">
        <div class="intro">
            <h1 class="title">Plan your campaign</h1>
            
            <p class="description">
                Need some <strong>inspiration</strong>? Let us help you find the perfect match on the <strong>left</strong>.<br />
                Already have a <strong>movie in mind</strong> that fits your brand? Great, then hit the <strong>right</strong> button.
            </p>
        </div>
        
        <div class="button-group">
            <a href="./selectDate.html" class="btn-left">See which movie suits your campaign</a>
            <form method="get" action="">
                <input type="hidden" name="theme" value="blue" />
                <button type="submit" class="btn-right">I already have a movie in mind</button>
            </form>
        </div>
        
        <div class="back-button">
            <a href="./Welcome.html" class="btn-back">Back</a>
        </div>
    </div>
</body>
</html>
