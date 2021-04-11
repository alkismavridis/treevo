import React from "react";
import "./CladeDetailView.scss"
import CladeMiniView from "../CladeMiniView/CladeMiniView";
import Clade from "../../../../entities/Clade";


interface Props {
    parentClade: Clade;
    clade: Clade;
    children: Clade[];
    onForwClick() : void;
    onPrevClick() : void;
}

export default function CladeDetailView(props: Props) {
    return(
        <>
            {props.clade && <>
                {props.parentClade && <CladeMiniView clade={props.parentClade}/>}
                <h1>Welcome to Clade {props.clade.id}</h1>
                <h2>{props.clade.commonName} was found</h2>
                <div className="clade-details-page__children">
                    <h3>Children:</h3>
                    {renderChildren(props.children)}
                    <button onClick={() => props.onForwClick()} >
                        Show more
                    </button>
                    <button onClick={() => props.onPrevClick()} >
                        Go back
                    </button>
                </div>
            </>}
        </>
    )
}



function renderChildren(children: Clade[]) {
    return children.map(el =>
        <CladeMiniView clade={el} key={el.id}/> )
}

