package eu.alkismavrdis.treevo.modules

import eu.alkismavrdis.treevo.entities.CladeRepository
import eu.alkismavrdis.treevo.modules.db.JdbcCladeRepository
import graphql.kickstart.tools.SchemaParserDictionary
import graphql.scalars.ExtendedScalars
import graphql.schema.GraphQLScalarType
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.jdbc.core.JdbcTemplate

@Configuration
class Config {
    /// API
    @Bean
    fun graphqlDictionary() : SchemaParserDictionary {
        return SchemaParserDictionary()
                //.add("DataProviderConfigInput", DataProviderConfig::class.java)
    }

    @Bean
    fun graphqlAnyScalar() : GraphQLScalarType {
        return ExtendedScalars.Json
    }


    /// DB
    @Bean
    fun cladeRepository(jdbcTemplate: JdbcTemplate) : CladeRepository {
        return JdbcCladeRepository(jdbcTemplate)
    }
}
