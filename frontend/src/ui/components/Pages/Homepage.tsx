import "./Homepage.scss"
import CladeProvider from "../../../entities/CladeProvider";
import CladeMiniView from "../Reusables/CladeMiniView/CladeMiniView";
import {useEffect, useState} from "react";
import Clade from "../../../entities/Clade";


interface Props {
    cladeProvider: CladeProvider,
}

export default function Homepage(props: Props) {
    const [clade, setClade] =  useState(null as Clade);

    useEffect(() => {
        props.cladeProvider.getCladeById("55")
            .then((p) => setClade(p))
            .catch((error) => window.alert(error.message));
    }, [])



    return (
        <div>
            <h1>Explore tree of life</h1>
            <div>
                Start here!
                {clade && <CladeMiniView clade={clade}/>}
            </div>
        </div>
    )
}
