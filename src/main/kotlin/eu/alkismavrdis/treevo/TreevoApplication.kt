package eu.alkismavrdis.treevo

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class TreevoApplication

fun main(args: Array<String>) {
	runApplication<TreevoApplication>(*args)
}
