<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(){

    }
    public function store(Request $request){
        $request->validate([
            'name' => 'required| max:255',
            'email' => 'required|email|unique:users,email',
            'permission' => 'required'
        ]);
        dd($request->all());
    }
}
