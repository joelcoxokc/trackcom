<?php

class DocumentsTableSeeder extends Seeder {

	public function run()
	{
		// Uncomment the below to wipe the table clean before populating
		// DB::table('documents')->truncate();

		$documents = array(

		);

		// Uncomment the below to run the seeder
		DB::table('documents')->insert($documents);
	}

}