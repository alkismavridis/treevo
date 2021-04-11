import React, {useEffect, useState} from "react";
import Clade from "../../../entities/Clade";
import "./CladeDetailsPage.scss"
import CladeDetailView from "../Reusables/CladeDetailView/CladeDetailView";
import CladeProvider from "../../../entities/CladeProvider";

const visibleChildrenNum = 2;

interface Props {
    cladeProvider: CladeProvider,
}

function CladeDetailsPage(props: Props) {
    const [errorMessage, setErrorMessage] = useState("");
    const [clade, setClade] = useState(null as Clade);
    const [children, setChildren] = useState([] as Clade[]);
    const [childIndex, setChildIndex] = useState(0);
    const [parentClade, setParentClade] = useState(null as Clade)


    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');

        props.cladeProvider.getCladeById(id)
            .then((c) => setClade(c))
            .catch((error) => setErrorMessage(error.message));

        loadChildren(id, 0)
    }, []);

    useEffect(() => {
        // GOAL: every time clade changes, if it has a parentId, fetch and store the clade describing the parent clade
        if (clade == null || clade.parentId == null) return;
        props.cladeProvider.getCladeById(clade.parentId)
            .then((p) => setParentClade(p) )
            .catch((error) => setErrorMessage(error.message));

    }, [clade])

    return (
        <main className="clade-details-page">
            {errorMessage && <p className="clade-details-page__error">{errorMessage}</p>}
            {clade && <CladeDetailView
                clade={clade}
                children={children}
                onPrevClick={() => loadChildren(clade.id, childIndex - visibleChildrenNum)}
                onForwClick={() => loadChildren(clade.id, childIndex + visibleChildrenNum)}
                parentClade={parentClade}
            />
            }
        </main>
    )

    function loadChildren(parentId: string, startingIndex: number) {
        const sanitizedIndex = Math.max(startingIndex, 0);
        props.cladeProvider.getChildren(parentId, sanitizedIndex, visibleChildrenNum)
            .then((ar) => {
                if (ar.length === 0) return;
                setChildren(ar);
                setChildIndex(sanitizedIndex);
            })
            .catch((error) => setErrorMessage(error.message));
    }

}


export default CladeDetailsPage;

