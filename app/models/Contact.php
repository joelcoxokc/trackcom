<?php

class Contact extends Eloquent {
	protected $guarded = array();

	public static $rules = array();

	public function customer()
	{
		return $this->belongsTo('Customer');
	}
}
