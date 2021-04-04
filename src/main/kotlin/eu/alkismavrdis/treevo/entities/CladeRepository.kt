package eu.alkismavrdis.treevo.entities

interface CladeRepository {
    fun create(clades: Collection<Clade>)
    fun update(clades: Collection<Clade>)
}
