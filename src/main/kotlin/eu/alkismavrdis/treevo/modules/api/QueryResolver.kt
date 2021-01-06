package eu.alkismavrdis.treevo.modules.api

import graphql.kickstart.tools.GraphQLQueryResolver
import org.springframework.stereotype.Component

@Component
class QueryResolver : GraphQLQueryResolver {
    fun foo() = "hello"
}
