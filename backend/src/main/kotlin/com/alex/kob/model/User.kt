package com.alex.kob.model

import com.alex.kob.model.audit.DateAudit
import org.hibernate.annotations.NaturalId
import javax.persistence.*
import javax.validation.constraints.Email
import javax.validation.constraints.NotBlank
import javax.validation.constraints.Size

@Entity
@Table(name = "users", uniqueConstraints = [UniqueConstraint(columnNames = ["username"]), UniqueConstraint(columnNames = ["email"])])
class User(name: String, username: String, email: String, password: String) : DateAudit() {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null

    @NotBlank
    @Size(max = 40)
    var name: String? = name

    @NotBlank
    @Size(max = 15)
    var username: String? = username

    @NaturalId
    @NotBlank
    @Size(max = 40)
    @Email
    var email: String? = email

    @NotBlank
    @Size(max = 100)
    var password: String? = password
}