package eu.alkismavrdis.treevo.modules.db

import eu.alkismavrdis.treevo.entities.Clade
import eu.alkismavrdis.treevo.entities.CladeRepository
import org.springframework.jdbc.core.JdbcTemplate

class JdbcCladeRepository(private val jdbcTemplate: JdbcTemplate) : CladeRepository {
    override fun create(clades: Collection<Clade>) {
        val sql = "INSERT INTO CLADES (ID, COMMON_NAME) VALUES (?, ?);"
        this.jdbcTemplate.batchUpdate(sql, clades, 512) {ps, clade ->
            ps.setString(1, clade.id.toString())
            ps.setString(2, clade.commonName)
        }
    }

    override fun update(clades: Collection<Clade>) {
        val sql = "UPDATE CLADES SET COMMON_NAME = ? where ID = ?;"
        this.jdbcTemplate.batchUpdate(sql, clades, 512) {ps, clade ->
            var i = 1
            ps.setString(i++, clade.commonName)
            ps.setString(i, clade.id.toString())
        }
    }
}
