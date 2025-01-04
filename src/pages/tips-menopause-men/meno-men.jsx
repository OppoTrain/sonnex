import React from "react";
import "./meno-men.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tips from "../../pages/tips/tips";
import NavBar from "../../components/navBar/navBar";

function Stretching() {
  return (
    <div id="root">
      <NavBar />
      <div id="header">
        <h1>Menstruation before menopause</h1>
        <p className="special-paragraph">
          Hot flashes, cold sweating, sleep disorders, irritations: every woman
          experiences menopause differently. This life stage usually begins
          between the age of 45 and 55. When will menopause exactly start?
          Unfortunately, it cannot be predicted. Very important is your
          lifestyle, but also genes. If a woman stopped menstruating relatively
          soon, it is very likely that the situation will be similar in her
          daughter as well.
        </p>
      </div>
      <div className="content">
        <div className="exercise-section">
          <h2>Irregular cycles</h2>

          <p className="exercise-description">
            A few years before the last menstruation, that is before menopause,
            a woman’s cycles can become very irregular. Reduced cycle lengths
            are often observed, but sometimes even 60 days might pass between
            periods. The bleeding intensity also changes. Your period can be
            heavier during one cycle, while the other might involve just mild
            discharges. Anovulatory cycles start to appear. The irregularities
            are caused by hormonal changes: lower oestrogen and progesterone
            levels.
          </p>
        </div>

        <div className="exercise-section">
          <h2>Low oestrogen levels and incontinence</h2>

          <p className="exercise-description">
            oestrogens affect not only the female reproductive system. They also
            play a role in the functioning of the lower urinary tract.
            Frequently, menopause involves stress incontinence. For many women,
            it is an embarrassing problem, but it is often good to talk to a
            doctor about it and choose the best treatment method. It is
            important to ensure a feeling of comfort and proper hygiene. If you
            experience incontinence, instead of sanitary pads, use special
            bladder control pads (Bella Control Discreet). They absorb urine
            much better, neutralise the unpleasant odour and, what is most
            important, are very discreet, unnoticeable under your clothes
          </p>
        </div>
        <div className="exercise-section">
          <h2>Pregnancy during menopause</h2>

          <p className="exercise-description">
            The start of perimenopause does not mean a definite end to your
            fertility. Not every cycle is anovulatory and it is still possible
            to conceive. If you do not plan on becoming pregnant, contraception
            is recommended.
          </p>
        </div>
      </div>
      <Tips />\
    </div>
  );
}

export default Stretching;
