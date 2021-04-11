import Clade from "../entities/Clade";
import DUMMY_CLADE_DATA from "../data/DummyCladeData";
import CladeProvider from "../entities/CladeProvider";


export default class DummyCladeProvider implements CladeProvider{
    getCladeById(id: string) : Promise<Clade> {
        return new Promise((res, rej) => {
            const clade = DUMMY_CLADE_DATA.find(el => el.id === id);
            if (clade != null) {
                res(clade);
            } else {
                rej(new Error(`Clade ${id} not found`));
            }
        });
    }
    getChildren(parentId: string, from: number, length: number) : Promise<Clade[]> {
        return new Promise((res) => {
            const children = DUMMY_CLADE_DATA.filter(el =>
                el.parentId === parentId
            ).slice(from, from + length);
            res(children);
        });
    }
}


