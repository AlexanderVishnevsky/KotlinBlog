package com.alex.kob.model

import com.alex.kob.model.audit.DateAudit
import org.hibernate.annotations.NaturalId

import javax.persistence.Entity
import javax.persistence.Table
import javax.persistence.UniqueConstraint
import javax.persistence.Id
import javax.persistence.GenerationType
import javax.persistence.GeneratedValue
import javax.persistence.ManyToMany
import javax.persistence.FetchType
import javax.persistence.JoinTable
import javax.persistence.JoinColumn
import javax.validation.constraints.Email
import javax.validation.constraints.NotBlank
import javax.validation.constraints.Size

@Entity
@Table(name = "users", uniqueConstraints = [UniqueConstraint(columnNames = ["username"]), UniqueConstraint(columnNames = ["email"])])
data class User(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null,

    @NotBlank
    @Size(max = 40)
    var name: String?,

    @NotBlank
    @Size(max = 15)
    var username: String?,

    @NaturalId
    @NotBlank
    @Size(max = 40)
    @Email
    var email: String?,

    @NotBlank
    @Size(max = 100)
    var password: String?,

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_roles", joinColumns = [JoinColumn(name = "user_id")], inverseJoinColumns = [JoinColumn(name = "role_id")])
    var roles: Set<Role> = HashSet()
) : DateAudit()