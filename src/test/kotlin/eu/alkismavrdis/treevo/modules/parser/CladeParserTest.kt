package eu.alkismavrdis.treevo.modules.parser

import eu.alkismavrdis.treevo.entities.CladeRepository
import io.mockk.mockk
import io.mockk.verify
import org.junit.jupiter.api.Test
import java.io.BufferedReader
import java.io.InputStreamReader

internal class CladeParserTest {
    @Test
    fun shouldCreateNodes() {
        val repo = mockk<CladeRepository>(relaxed = true)
        val parser = CladeParser(repo, this::getFile)
        parser.parse()

        verify { repo.create(any()) }
    }


    private fun getFile(name: String) : BufferedReader? {
        val stream = this.javaClass.classLoader.getResourceAsStream("clade_data/$name") ?: return null
        return BufferedReader( InputStreamReader(stream) )
    }
}
