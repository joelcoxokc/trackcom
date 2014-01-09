@extends('layouts.scaffold')

@section('page_styles')
@parent


<!-- BEGIN PAGE LEVEL STYLES -->
	<link rel="stylesheet" type="text/css" href="{{ asset('assets/plugins/select2/select2_metro.css') }}"/>
	<link rel="stylesheet" href="{{ asset('assets/plugins/data-tables/DT_bootstrap.css') }}"/>
<!-- END PAGE LEVEL STYLES -->

@stop
@section('main')
	<div class="page-content-wrapper">
		<div class="page-content">
			<!-- BEGIN SAMPLE PORTLET CONFIGURATION MODAL FORM-->
			
				@include('layouts.modals.config')
				
			<!-- END SAMPLE PORTLET CONFIGURATION MODAL FORM-->
			
			<!-- BEGIN STYLE CUSTOMIZER -->
			<div class="theme-panel hidden-xs hidden-sm">
			
				@include('layouts.sections.style')
				
			</div>
			<!-- END STYLE CUSTOMIZER -->
			
			<!-- BEGIN PAGE HEADER-->
			
				@include('layouts.sections.header')

			<!-- END PAGE HEADER-->
			
			<div class="clearfix">
			</div>
			<div class="row">
				<div class='col-md-12'>
			
						<div class="dashboard-stat green">
							<div class="visual">
								<i class="fa fa-home"></i>
							</div>
							<div class="details">
								<div class="number">
									{{ count($dtypes) }}
								</div>
								<div class="desc">
									Dtype
								</div>
							</div>
							<a href="{{ URL::to('dtypes/create') }}" class="more">
							Add Dtype <i class="m-icon-swapright m-icon-white"></i>
							</a>
						</div>
				</div>
			</div>
			
			<div class="clearfix">
			</div>
			<div class="row">
				<div class="col-md-12">
					<div class="well">
						
						
						<p>{{ link_to_route('dtypes.create', 'Add new dtype') }}</p>
						
						@if ($dtypes->count())
							<table class="table table-striped table-bordered table-hover table-full-width dataTable" id="sample_2" aria-describedby="sample_2_info" style="width: 1060px;">
								<thead>
									<tr>
										<th>Name</th>
									</tr>
								</thead>
						
								<tbody>
									@foreach ($dtypes as $dtype)
										<tr>
											<td>{{{ $dtype->name }}}</td>
                    <td>{{ link_to_route('dtypes.edit', 'Edit', array($dtype->id), array('class' => 'btn btn-info')) }}</td>
                    <td>
                        {{ Form::open(array('method' => 'DELETE', 'route' => array('dtypes.destroy', $dtype->id))) }}
                            {{ Form::submit('Delete', array('class' => 'btn btn-danger')) }}
                        {{ Form::close() }}
                    </td>
										</tr>
									@endforeach
								</tbody>
							</table>
						@else
							There are no dtypes
						@endif
					</div>
				</div>
			</div>
		</div>
	</div>
@stop
@section('page_plugins')
<!-- BEGIN PAGE LEVEL PLUGINS -->
<script type="text/javascript" src="{{ ('assets/plugins/select2/select2.min.js') }}"></script>
<script type="text/javascript" src="{{ ('assets/plugins/data-tables/jquery.dataTables.min.js') }}"></script>
<script type="text/javascript" src="{{ ('assets/plugins/data-tables/DT_bootstrap.js') }}"></script>
<!-- END PAGE LEVEL PLUGINS -->
@stop
@section('page_scripts')
<script src="{{ ('assets/scripts/app.js') }}"></script>
<script src="{{ ('assets/scripts/table-advanced.js') }}"></script>
<script>
jQuery(document).ready(function() {       
   App.init();
   TableAdvanced.init();
});
</script>

@stop