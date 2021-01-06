package eu.alkismavrdis.treevo.modules.api

import graphql.kickstart.tools.GraphQLMutationResolver
import org.springframework.stereotype.Component

@Component
class MutationResolver : GraphQLMutationResolver {
    fun bar() = "world"
}
