import React from "react";
import "./why.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tips from "../../pages/tips/tips";
import NavBar from "../../components/navBar/navBar";

function Stretching() {
  return (
    <div id="root">
      <NavBar />
      <div id="header">
        <h1>Menopause – why it occurs and what the symptoms are</h1>
        <p className="special-paragraph">
          Menopause is a scientific name for the last menstruation in a woman’s
          life. Menopause is preceded by perimenopause. It is a time when the
          oestrogen production starts to change, the pituitary gland slows down,
          and the ovaries stop releasing egg cells over time, which makes it
          impossible for the woman to conceive. Women enter menopause between
          the age of 45 and 55. The perimenopausal period usually starts around
          5-10 years before menopause and marks the beginning of declining
          fertility.
        </p>
      </div>
      <div className="content">
        <div className="exercise-section">
          <h2>Perimenopausal period</h2>

          <p className="exercise-description">
            The main symptoms of the perimenopausal period include irregular
            menstruations. Your period bleeding can be heavier, as – due to
            hormonal deficiencies and anovulatory cycles – the endometrium
            becomes thicker. Low oestrogen levels are also responsible for hot
            flushes and cold sweating because it disturbs the thermoregulatory
            centre. Low levels of this hormone can also cause sleep disorders
            and irritation as well as reduced concentration and memory
            disorders. Perimenopause is also associated with reduced
            testosterone responsible for libido, leading to no mood for sex,
            which can be particularly hard for the partner. The hormonal therapy
            can offer a rescue. Depending on the severity of menopause and
            doctor’s recommendations, hormones can be used, that is oestrogen
            and progesterone in different configurations.
          </p>
        </div>
      </div>

      <Tips />
    </div>
  );
}

export default Stretching;
