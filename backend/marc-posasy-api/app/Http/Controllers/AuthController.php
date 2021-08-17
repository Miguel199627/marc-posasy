<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Validator;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    public function login(Request $req) {
        $credentials = $req->only('email', 'password');

        $validator = Validator::make($credentials, [
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if($validator->fails()) return response("Incorrect email or password", 400);

        $validator = User::where('email', $req->email)->first();
        if(empty($validator)) return response("Incorrect email or password", 400);

        $hash = password_verify($req->password, $validator->password);
        if(!(boolean)$validator->status || !$hash) return response("Incorrect email or password", 400);

        try {
            $jwtToken = JWTAuth::attempt($credentials);
            return response(['jwtToken' => $jwtToken, 'dataUser' => [ 'name' => $validator->name ]], 200);
        } catch (\Throwable $e) {
            return response("Login error", 400);
        }
    }
}
