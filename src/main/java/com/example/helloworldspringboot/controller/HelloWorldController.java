package com.example.helloworldspringboot.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/helloworld")
public class HelloWorldController {

    @GetMapping("/fetch")
    public String fetch() {
        return "fetched data from backend";
    }
}
