package com.alex.kob.model

import com.alex.kob.enum.RoleName
import org.hibernate.annotations.NaturalId
import javax.persistence.*

@Entity
@Table(name = "roles")
data class Role(
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        var id: Long?,

        @Enumerated(EnumType.STRING)
        @NaturalId
        @Column(length = 60)
        var name: RoleName?
)