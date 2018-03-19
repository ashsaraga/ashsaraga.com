<?php 

/*
 * Endpoint for GitHub Auto-Deployment
 *
 * see: https://help.github.com/articles/post-receive-hooks
 *
 */

// Commands to run when the hook is received
$commands = array(
	'echo $PWD',
	'whoami',
	'git pull',
	'git status',
	'git submodule sync',
	'git submodule update',
	'git submodule status',
);

// Run each command and echo the result in HTML
$run_git = '';
foreach($commands AS $command){
	// Run the command
	$tmp = shell_exec($command);
	// Echo the result
	$run_git .= "<span style=\"color: #6BE234;\">\$</span> <span style=\"color: #729FCF;\">{$command}\n</span>";
	$run_git .= htmlentities(trim($tmp)) . "\n";
}
?>

<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<title>GitHub Auto-Deploy</title>
</head>
<body style="background-color: #000000; color: #FFFFFF; font-weight: bold; padding: 0 10px;">
<pre>
 .  ____  .    ____________________________
 |/      \|   |                            |
[| <span style="color: #FF0000;">&hearts;    &hearts;</span> |]  | Git Deployment Script v0.1 |
 |___==___|  /              &copy; oodavid 2012 |
              |____________________________|

<?php echo $output; ?>
</pre>
</body>
</html>