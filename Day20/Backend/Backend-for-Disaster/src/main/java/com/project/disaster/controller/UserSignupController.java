package com.project.disaster.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//import com.nandha.meow.Service.UserService;
import com.project.disaster.entity.UserSignupEntity;
import com.project.disaster.repository.UserRepository;


@RestController
@CrossOrigin
@RequestMapping("/usersignup")
public class UserSignupController {

	@Autowired UserRepository repo;
//	@Autowired
//	UserService ser;
	@PostMapping("/post")
	private UserSignupEntity PostUser(@RequestBody UserSignupEntity s){
		return repo.save(s);
	}
	@GetMapping("/get")
	private Iterable<UserSignupEntity> GetUsers(){
		return repo.findAll();
	}

}
