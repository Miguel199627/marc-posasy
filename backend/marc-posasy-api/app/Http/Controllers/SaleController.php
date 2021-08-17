<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Sale;
use Validator;

class SaleController extends Controller
{

    public function list() {
        $list = Sale::paginate(15);
        if(!$list) return response("Process failed: No sales", 400);
        return response($list, 200);
    }

    public function add(Request $req) {
        $from = $req->only('total', 'cost', 'date');

        $validator = Validator::make($from, [
            'total' => 'required',
            'cost' => 'required',
            'date' => 'required'
        ]);

        if($validator->fails()) return response("Process failed: Incomplete data", 400);

        $sale = new Sale;

        $sale->name_client = $req->name_client;
        $sale->total = $req->total;
        $sale->cost = $req->cost;
        $sale->date = $req->date;

        $result = $sale->save();
        if(!$result) return response("Process failed: Failed to register", 400);

        $list = Sale::paginate(15);
        if(!$list) return response("Process failed: No sales", 400);
        
        return response($list, 200);
    }

    public function update(Request $req) {
        $from = $req->only('id', 'total', 'cost', 'date');

        $validator = Validator::make($from, [
            'id' => 'required',
            'total' => 'required',
            'cost' => 'required',
            'date' => 'required'
        ]);

        if($validator->fails()) return response("Process failed: Incomplete data", 400);

        $sale = new Sale;

        $sale->id = $req->id;
        $sale->name_client = $req->name_client;
        $sale->total = $req->total;
        $sale->cost = $req->cost;
        $sale->date = $req->date;
        $sale->exists = true;

        $result = $sale->save();
        if(!$result) return response("Process failed: Failed to register", 400);

        return response($sale, 200);
    }
    
}
