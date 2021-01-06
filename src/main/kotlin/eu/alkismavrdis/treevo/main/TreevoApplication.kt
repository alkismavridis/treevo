package eu.alkismavrdis.treevo.main

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class TreevoApplication

fun main(args: Array<String>) {
	runApplication<TreevoApplication>(*args)
}
