package com.alex.kob.controller

import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("/api/auth/")
class AuthController {

    @GetMapping(value = ["/login"])
    @PreAuthorize("hasAuthority('USER')")
    fun helloRestrictedWorld() = "Test message"
}