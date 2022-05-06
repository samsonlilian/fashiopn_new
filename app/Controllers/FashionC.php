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
	
	//saves all data from react
		public function saveFashionData()
    {					
	    $model = model(FashionModel::class);
		 
			$result = $model->save([
            'product_name' => $this->request->getPost('product_name'),      
            'price'  => $this->request->getPost('price'),
		    'image'  => $this->request->getPost('image'),
		     'description'  => $this->request->getPost('description'),
		    'contact'  => $this->request->getPost('contact'),
		   'available'  =>1,
			
        ]);
		 
	echo json_encode($result);	
			
	}

	
	//delete data from react
	public function deleteFashionData($id){
		  $model = model(FashionModel::class);
		$response=$model->delete($id);
		
		echo json_encode($response);
		
	}
	
	
	//this function will make user not to buy again
		public function buyme($id){
			
	
			 $model = model(FashionModel::class);
			 $response=$model->set('available', '0')
                  ->where('id', $id)
                  ->update();
			 
		echo  json_encode($response);
		
	}
	
	
}
