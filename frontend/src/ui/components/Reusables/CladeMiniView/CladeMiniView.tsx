import React from "react";
import "./CladeMiniView.scss"
import Clade from "../../../../entities/Clade";



interface Props {
    clade: Clade;
}

export default function CladeMiniView(props: Props) {
    return (
            <a className="mini-view__link" href={`/pages/clade-details?id=${props.clade.id}`}>
                <div className="mini-view">
                    <img className="mini-view__img" src="https://images.pexels.com/photos/2710186/pexels-photo-2710186.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pic of an animal"/>
                    <div className="mini-view__text">
                        <h3 className="mini-view__text-title">Animal: {props.clade.commonName}</h3>
                        <p className="mini-view__text-desc">Short animal description short animal description short animal description short animal description short animal description short animal description</p>
                    </div>
                </div>
            </a>
    )
}
