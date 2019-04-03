package com.alex.kob

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.domain.EntityScan
import org.springframework.boot.runApplication
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters
import java.util.TimeZone
import javax.annotation.PostConstruct

@SpringBootApplication
@EntityScan(basePackageClasses = [KobApplication::class, Jsr310JpaConverters::class])
class KobApplication

@PostConstruct
internal fun init() {
    TimeZone.setDefault(TimeZone.getTimeZone("UTC"))
}

fun main(args: Array<String>) {
    runApplication<KobApplication>(*args)
}
