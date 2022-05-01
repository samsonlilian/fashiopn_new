<?php

namespace App\Models;

use CodeIgniter\Model;

class FashionModel extends Model
{
    protected $table = 'fashion_db';
	
	 protected $allowedFields = ['product_name','image','description','price','contact','available'];
	
	public function getData($slug = false)
{
    if ($slug === false) {
        return $this->findAll();
    }

    return $this->where(['slug' => $slug])->first();
}
	
	
	
}