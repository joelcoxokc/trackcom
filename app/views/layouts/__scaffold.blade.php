<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
<!-- BEGIN GLOBAL MANDATORY STYLES -->
<link href="{{ URL::asset('assets/plugins/font-awesome/css/font-awesome.min.css') }}" rel="stylesheet" type="text/css"/>
<link href="{{ URL::asset('assets/plugins/bootstrap/css/bootstrap.min.css') }}" rel="stylesheet" type="text/css"/>
<link href="{{ URL::asset('assets/plugins/uniform/css/uniform.default.css') }}" rel="stylesheet" type="text/css"/>
<!-- END GLOBAL MANDATORY STYLES —>
@section(‘page_styles’)

@show
<!-- BEGIN THEME STYLES -->
<link href="{{ URL::asset('assets/css/style-metronic.css') }}" rel="stylesheet" type="text/css"/>
<link href="{{ URL::asset('assets/css/style.css') }}" rel="stylesheet" type="text/css"/>
<link href="{{ URL::asset('assets/css/style-responsive.css') }}" rel="stylesheet" type="text/css"/>
<link href="{{ URL::asset('assets/css/plugins.css') }}" rel="stylesheet" type="text/css"/>
<link href="{{ URL::asset('assets/css/themes/default.css') }}" rel="stylesheet" type="text/css" id="style_color"/>
<link href="{{ URL::asset('assets/css/custom.css') }}" rel="stylesheet" type="text/css"/>
<!-- END THEME STYLES -->
		<style>
			
		</style>
	</head>

	<body class="page-header-fixed">
			@if (Session::has('message'))
				<div class="flash alert">
					<p>{{ Session::get('message') }}</p>
				</div>
			@endif
	<!-- BEGIN HEADER -->
	<div class="header navbar navbar-inverse navbar-fixed-top">
		@include('layouts.headers.main')
	</div>
	<!-- END HEADER -->
	
	<div class="clearfix"></div>
	
	<!-- BEGIN CONTAINER -->
	<div class="page-container">
		<!-- BEGIN SIDEBAR -->
		<div class="page-sidebar-wrapper">
			@include('layouts.menus.sidebar')
		</div>
		<!-- END SIDEBAR -->
		
		
		<!-- BEGIN CONTENT -->
			@yield('main')
		<!-- END CONTENT -->
		
	</div>
	<!-- END CONTAINER -->
	
	<!-- BEGIN FOOTER -->
	<div class="footer">
		@include('layouts.footers.main')
	</div>
	<!-- END FOOTER -->
<!-- BEGIN JAVASCRIPTS(Load javascripts at bottom, this will reduce page load time) -->
<!-- BEGIN CORE PLUGINS -->
<!--[if lt IE 9]>
<script src="{{ URL::asset(''assets/plugins/respond.min.js') }}"></script>
<script src="{{ URL::asset(''assets/plugins/excanvas.min.js') }}"></script> 
<![endif]-->
<script src="{{ URL::asset('assets/plugins/jquery-1.10.2.min.js') }}" type="text/javascript"></script>
<script src="{{ URL::asset('assets/plugins/jquery-migrate-1.2.1.min.js') }}" type="text/javascript"></script>
<script src="{{ URL::asset('assets/plugins/bootstrap/js/bootstrap.min.js') }}" type="text/javascript"></script>
<script src="{{ URL::asset('assets/plugins/bootstrap-hover-dropdown/twitter-bootstrap-hover-dropdown.min.js') }}" type="text/javascript"></script>
<script src="{{ URL::asset('assets/plugins/jquery-slimscroll/jquery.slimscroll.min.js') }}" type="text/javascript"></script>
<script src="{{ URL::asset('assets/plugins/jquery.blockui.min.js') }}" type="text/javascript"></script>
<script src="{{ URL::asset('assets/plugins/jquery.cokie.min.js') }}" type="text/javascript"></script>
<script src="{{ URL::asset('assets/plugins/uniform/jquery.uniform.min.js') }}" type="text/javascript"></script>
<!-- END CORE PLUGINS -->
@section(‘page_plugins’)
@show
@section(‘page_scripts’)
@show
	</body>

</html>