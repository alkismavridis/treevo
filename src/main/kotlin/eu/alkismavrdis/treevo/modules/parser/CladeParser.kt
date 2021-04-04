package eu.alkismavrdis.treevo.modules.parser

import eu.alkismavrdis.treevo.entities.Clade
import eu.alkismavrdis.treevo.entities.CladeRepository
import java.io.BufferedReader
import java.util.*

class CladeParser(
        private val repo: CladeRepository,
        private val resourceProvider: (name: String) -> BufferedReader?
) {
    fun parse() {
        this.saveNodes()
        this.saveNames()
    }

    private fun saveNodes() {
        val clades = mutableListOf<Clade>()
        val reader = this.resourceProvider("nodes.dmp") ?:
            throw ParseError("Could not locate nodes.dmp file")

        while(true) {
            val nextClade = this.readNextClade(reader) ?: break
            clades.add(nextClade)
            if (clades.size > 1024) this.flashToDb(clades)
        }

        this.flashToDb(clades)
    }

    private fun readNextClade(reader: BufferedReader) : Clade? {
        val nextLine = reader.readLine() ?: return null
        val parts = nextLine.split("\t|\t")

        return Clade(UUID.randomUUID(), "")
    }

    private fun flashToDb(clades: MutableList<Clade>) {
        if (clades.isEmpty()) return

        this.repo.create(clades)
        clades.clear()
    }

    private fun saveNames() {
        // TODO
    }
}


class ParseError(message: String) : Exception(message)
