<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<title>File Manager</title>
<link rel="stylesheet" type="text/css" href="{{ URL::asset('public/filemanager/styles/reset.css') }}" />
<link rel="stylesheet" type="text/css" href="{{ URL::asset('public/filemanager/scripts/jquery.filetree/jqueryFileTree.css') }}" />
<link rel="stylesheet" type="text/css" href="{{ URL::asset('public/filemanager/scripts/jquery.contextmenu/jquery.contextMenu-1.01.css') }}" />
<link rel="stylesheet" type="text/css" href="{{ URL::asset('public/filemanager/styles/filemanager.css') }}" />
<!--[if IE 9]>
<link rel="stylesheet" type="text/css" href="{{ URL::asset('public/filemanager/styles/ie9.css') }}" />
<![endif]-->
<!--[if lte IE 8]>
<link rel="stylesheet" type="text/css" href="{{ URL::asset('public/filemanager/styles/ie8.css') }}" />
<![endif]-->
</head>
<body>
<div>
<form id="uploader" method="post">
<input type="hidden" name="_token" value="{{ csrf_token() }}">
	<button id="home" name="home" type="button" value="Home">&nbsp;</button>
	<h1></h1>
	<div id="uploadresponse"></div>
	<input id="mode" name="mode" type="hidden" value="add" />
	<input id="currentpath" name="currentpath" type="hidden" />
	<div id="file-input-container">
		<div id="alt-fileinput">
			<input id="filepath" name="filepath" type="text" /><button id="browse" name="browse" type="button" value="Browse"></button>
		</div>
		<input	id="newfile" name="newfile" type="file" />
	</div>
	<button id="upload" name="upload" type="submit" value="Upload"></button>
	<button id="newfolder" name="newfolder" type="button" value="New Folder"></button>
	<button id="grid" class="ON" type="button">&nbsp;</button>
	<button id="list" type="button">&nbsp;</button>
</form>
<div id="splitter">
<div id="filetree"></div>
<div id="fileinfo">
<h1></h1>
</div>
</div>
<form name="search" id="search" method="get">
		<div>
			<input type="text" value="" name="q" id="q" />
			<a id="reset" href="#" class="q-reset"></a>
			<span class="q-inactive"></span>
		</div>
</form>

<ul id="itemOptions" class="contextMenu">
	<li class="select"><a href="#select"></a></li>
	<li class="download"><a href="#download"></a></li>
	<li class="rename"><a href="#rename"></a></li>
	<li class="move"><a href="#move"></a></li>
	<li class="replace"><a href="#replace"></a></li>
	<li class="delete separator"><a href="#delete"></a></li>
</ul>

<script type="text/javascript" src="{{ URL::asset('public/filemanager/scripts/jquery-1.8.3.min.js') }}"></script>
<script type="text/javascript" src="{{ URL::asset('public/filemanager/scripts/jquery.form-3.24.js') }}"></script>
<script type="text/javascript" src="{{ URL::asset('public/filemanager/scripts/jquery.splitter/jquery.splitter-1.5.1.js') }}"></script>
<script type="text/javascript" src="{{ URL::asset('public/filemanager/scripts/jquery.filetree/jqueryFileTree.js') }}"></script>
<script type="text/javascript" src="{{ URL::asset('public/filemanager/scripts/jquery.contextmenu/jquery.contextMenu-1.01.js') }}"></script>
<script type="text/javascript" src="{{ URL::asset('public/filemanager/scripts/jquery.impromptu-3.2.min.js') }}"></script>
<script type="text/javascript" src="{{ URL::asset('public/filemanager/scripts/jquery.tablesorter-2.7.2.min.js') }}"></script>
<script type="text/javascript" src="{{ URL::asset('public/filemanager/scripts/filemanager.js') }}"></script>
</div>
</body>
</html>