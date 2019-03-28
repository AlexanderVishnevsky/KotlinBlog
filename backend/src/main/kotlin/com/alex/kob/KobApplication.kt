package com.alex.kob

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class KobApplication

fun main(args: Array<String>) {
	runApplication<KobApplication>(*args)
}
