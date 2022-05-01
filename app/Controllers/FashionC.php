<?php

namespace App\Controllers;
use App\Models\fashion;


class FashionC extends BaseController
{
	

     public function index()
    {
        $model = model(FashionModel::class);

        $data['fashion'] = $model->getData();
			
			echo json_encode($data);

    }
	
	
}
