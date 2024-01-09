import React from "react";
import { rgbToHex } from "../utils/helpers";

const SingleColor = ({rgb,type,weight}) => {
    // console.log(rgbToHex(...rgb));
    // console.log(rgb);
  return (
    <article className="single-color" style={{backgroundColor:rgbToHex(...rgb)}}>
     {rgb}
    </article>
  )
};

export default SingleColor;