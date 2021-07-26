<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{

    public function list() {
        $list = User::paginate(15);
        if(!$list) return response("Process failed: No users", 400);
        return response($list, 200);
    }

    public function add(Request $req) {
        var_dump($req);
    }
}
