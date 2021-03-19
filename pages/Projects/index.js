import { Card, Button } from "react-bootstrap";
import $ from "jquery";
import { useEffect } from "react";
import BackButton from "../../components/BackButton";

function reset($elem) {
  $elem.before($elem.clone(true));
  var $newElem = $elem.prev();
  $elem.remove();
  return $newElem;
} // end reset()

export default function Projects() {
  /**
  useEffect(() => {
    $("#docsButton")
      .on("click", function () {
        $("#page2").addClass("animate");
        
      })
      .on("animationend", function () {
        $("#page2").removeClass("animate");
      });
  }, []); 
   */
  useEffect(()=>{
    $("#docsButton").click(function(){
      console.log('clicado')
      $("#page2").animate({left: '0%'})
    })
  })
  
  return (
    <>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

      <div id="projects" class="page">
        <div id="page1" className="cards">
          <Card className="card">
            <Card.Img variant="top" src="/copycash.gif" />
            <Card.Body>
              <Card.Title>Trader para IQ Option</Card.Title>
              <Card.Text>
                Em tempo real você pode enviar operações para os usuários
                cadastrados.
              </Card.Text>
              <Button
                id="docsButton"
                className="button"
              >
                Read the docs!
              </Button>
            </Card.Body>
          </Card>
          <Card className="card">
            <Card.Img variant="top" src="/copycash.gif" />
            <Card.Body>
              <Card.Title>React Native E-commerce</Card.Title>
              <Card.Text>
                Landing view para E-commerce em React Native e mSQL.
              </Card.Text>
              <Button
                id="docsButton"
                className="button"
              >
                Read the docs!
              </Button>
            </Card.Body>
          </Card>
        </div>

        <div id="page2" class="page">
          <BackButton />
        </div>
      </div>
    </>
  );
}
