package com.alex.kob.controller

import com.alex.kob.model.User
import com.alex.kob.repository.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.security.Principal

@RestController
@RequestMapping("/api")
class AuthController @Autowired
constructor(private val userRepository: UserRepository) {

    @GetMapping("/login")
    @PreAuthorize("hasAuthority('ADMIN')")
    fun helloRestrictedWorld() = "Test message"

    @GetMapping("/user")
    fun test(principal: Principal?) = principal?.name ?: "You are not logged in"

    @PostMapping("user/register")
    fun register(@RequestBody user: User): ResponseEntity<*> { // You should hash users' passwords
        userRepository.save(User(username = user.username, password = user.password, id = user.id))
        return ResponseEntity.ok("created")
    }
}
