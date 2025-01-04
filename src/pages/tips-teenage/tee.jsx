import React from "react";
import "./tee.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tips from "../../pages/tips/tips";
import NavBar from "../../components/navBar/navBar";

function Stretching() {
  return (
    <div id="root">
      <NavBar />
      <div id="header">
        <h1>Teenage period – what you might find useful</h1>
        <p className="special-paragraph">
          Period is a normal thing in a woman’s life. However, you need to get
          used to how it happens and what it involves. The first period usually
          appears between the age of 10 and 14. For the first 2 years, the
          menstrual cycle can be irregular; therefore, it is worth having a
          toilet bag in your backpack with products that are useful on those
          days.
        </p>
      </div>
      <div className="content">
        <div className="exercise-section">
          <h2>Period at school – a teenager’s toilet bag</h2>
          <p className="exercise-description">
            A well-equipped toilet bag will allow you to feel comfortable during
            your period. What should it contain? Obviously, a couple of sanitary
            pads or tampons. You do not have to take the whole pack with you.
            Assuming that you will change your sanitary pad every 3 hours, 5-6
            sanitary pads for the whole school day will be enough (including
            “emergency” pads, just in case). You can also put several
            pantyliners into your toilet bag. These will be useful near the end
            of your period or as additional protection when using tampons.
            Intimate wet wipes are also extremely helpful. At school, there is
            no way to wash your intimate areas; therefore, such a solution will
            make you feel always fresh and comfortable. Also, remember about
            regular tissues. Many women also carry an antibacterial gel in their
            toilet bag to take care of proper hand hygiene.
          </p>
        </div>
        <div className="exercise-section">
          <h2>At home</h2>

          <p className="exercise-description">
            Some women buy more sanitary pads and tampons just to be sure, while
            other buy only as many as they will need for a single cycle. Talk to
            your mum or sister about their favourite products; maybe together
            you will work out your own method for such girly shopping. Also,
            think about a gentle intimate gel. A well-equipped toilet bag
            containing products useful during a period will not take up much
            space, but will make you feel confident.
          </p>
        </div>
      </div>

      <Tips />
    </div>
  );
}

export default Stretching;
