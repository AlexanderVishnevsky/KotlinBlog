package com.alex.kob.repository

import com.alex.kob.model.Role
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface RoleRepository : JpaRepository<Role, Long> {
    fun findByRoleName(roleName: String): Optional<Role>
}