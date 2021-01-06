package eu.alkismavrdis.treevo.modules

import graphql.kickstart.tools.SchemaParserDictionary
import graphql.scalars.ExtendedScalars
import graphql.schema.GraphQLScalarType
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class Config {



    /// GRAPHQL CONFIG
    @Bean
    fun graphqlDictionary() : SchemaParserDictionary {
        return SchemaParserDictionary()
                //.add("DataProviderConfigInput", DataProviderConfig::class.java)

    }


    @Bean
    fun graphqlAnyScalar() : GraphQLScalarType {
        return ExtendedScalars.Json
    }

}
