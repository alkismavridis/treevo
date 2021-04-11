import Clade from "./Clade";

export default interface CladeProvider {
    getCladeById(id:string) : Promise<Clade>
    getChildren(parentId: string, from: number, length: number) : Promise<Clade[]>
}
