import React, { useState } from "react";
import { render } from 'react-dom';



export default function Carrousel(props) {
    const [CurrentImg, setCurrentImg] = useState(0);
    const {img1,img2,img3,img4}=props
    const imgCnt = React.Children.count(props.children);

    function returnCurrentImg(index) {
        // console.log(img1,"  ",img2)
        const imgChild = React.Children.toArray(props.children);
        return imgChild[index];
    }

    return (
        <>
            <button
                disabled={CurrentImg === 0}
                onClick={(e) => setCurrentImg(v => v - 1)}
            >&it; prev picture</button>  
            <button
                disabled={CurrentImg >= imgCnt - 1}
                onClick={(e) => setCurrentImg(v => v + 1)}
            >&it; next picture </button>
            <br></br>
            {returnCurrentImg(CurrentImg)}
        </>
    )
}