import React from "react";
import "./pms.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tips from "../../pages/tips/tips";
import NavBar from "../../components/navBar/navBar";

function Stretching() {
  return (
    <div id="root">
      <NavBar />
      <div id="header">
        <h1>PMS – premenstrual syndrome</h1>
        <p className="special-paragraph">
          PMS occurs in the second half of the menstrual cycle, after the
          fertile days are over, but before menstruation. It is mainly
          associated with such symptoms as irritation, sadness, aggression,
          depression, increased sensitivity or even lachrymosity, fatigue,
          sensitive breasts, skin eruptions, flatulence and many other symptoms,
          both mental and somatic.
        </p>
      </div>
      <div className="content">
        <div className="exercise-section">
          <h2>PMS – where does it come from?</h2>

          <p className="exercise-description">
            The main cause of PMS is the menstrual cycle, which leads to reduced
            levels of hormones produced by the ovaries in the second half of the
            cycle (the so-called luteal phase). Most probably, it is the time of
            disturbances in the functioning of neurotransmitters, especially the
            serotonin pathways that affect our mood. Susceptibility to PMS can
            be individual and depend on susceptibility to hormonal fluctuations,
            genetic predispositions or depend on the functioning of
            neurotransmitters.
          </p>
        </div>

        <div className="exercise-section">
          <h2>PMS – how to cope with it</h2>

          <p className="exercise-description">
            Unfortunately, no one has developed drugs yet that would completely
            eliminate the symptoms of PMS. In extreme cases, when the symptoms
            exacerbate and make everyday tasks difficult, PMS is treated with
            antidepressants. Natural methods of reducing PMS include diet and
            physical activity. The PMS symptoms can be alleviated by B group
            vitamins, so try to eat as much wholegrain bread, nuts, eggs
            (especially egg yolks), bananas and spinach as possible. Another
            vitamin that can help you fight PMS is vitamin E. You will find it
            in nuts, sunflower seed, avocado and olive oil.
          </p>
          <p className="exercise-description">
            The symptoms of PMS can also be reduced by magnesium and potassium.
            Magnesium tonifies our nervous system. We can supply it to our body
            by eating brown rice, peanuts, almonds and dark chocolate (with at
            least 70% cocoa). A source of potassium is mainly tomatoes and
            bananas. Potassium regulates the body water balance; therefore, it
            reduces the abdominal circumference that is larger during PMS.
          </p>
          <p className="exercise-description">
            During PMS, try not to consume too much salt, as it retains water in
            your body. Try to lower your cholesterol, which boosts the
            production of oestrogen, which is high in the second half of the
            cycle anyway. Cut down on alcohol, which can inhibit the absorption
            of vitamins and minerals needed to reduce the symptoms of PMS. Avoid
            coffee and tea, as those can make you more nervous.
          </p>
          <p className="exercise-description">
            Take care of yourself! During PMS, it is worth turning to activities
            that you like doing and that might boost your endorphin level –
            sports can have soothing effects on your body in the second half of
            your cycle. But remember not to strain yourself too much!
          </p>
        </div>
      </div>

      <Tips />
    </div>
  );
}

export default Stretching;
