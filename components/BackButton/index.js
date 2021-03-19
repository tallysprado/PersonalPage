import $ from "jquery";
import { useEffect } from "react";

function handleClick(evt) {
  evt.preventDefault();
  console.log("ok");
  $(function () {
    $("#page2").addClass("animate-out");
  });
}

export default function BackButton() {
  useEffect(() => {
    $(".backbutton").click(function(){
        console.log('back')
        $("#page2").animate({left: '200%'})
    })
  });

  return (
    <div style={{ width: "100%" }}>
      <div 
      className="backbutton">
        <h1
          style={{
            color: "white",
          }}
        >
          &#60;
        </h1>
      </div>
    </div>
  );
}
