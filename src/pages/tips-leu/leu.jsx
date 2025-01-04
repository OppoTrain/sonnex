import React from "react";
import "./leu.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tips from "../../pages/tips/tips";
import NavBar from "../../components/navBar/navBar";

function Stretching() {
  return (
    <div id="root">
      <NavBar />
      <div id="header">
        <h1>Leucorrhoea – when you need to see a doctor</h1>
        <p className="special-paragraph">
          Depending on what time of the cycle you are currently in, you might
          notice a vaginal discharge that is typical for the current moment.
          When the vaginal discharge has abnormal colour or odour, this might be
          suggestive of leucorrhoea.
        </p>
      </div>
      <div className="content">
        <div className="exercise-section">
          <h2>
            How to differentiate between normal and abnormal vaginal discharge?
          </h2>

          <p className="exercise-description">
            Clear or whitish discharge in the first half of the cycle,
            practically odourless or with very light odour, is normal. Its
            amount increases during ovulation. During the first days of
            ovulation, you can observe more abundant cervical mucus similar to
            egg white. The role of the mucus is to make it easier for sperm to
            move forward and, as a result, fertilise an egg cell. In the last
            day of ovulation, the mucus thickens and becomes very viscous. It
            indicates that the fertile days are over because thick mucus makes
            it difficult for sperm to move. At the end of the cycle, that is
            right before menstruation, you can also notice thick, whitish or
            clumpy mucus.
          </p>
        </div>

        <div className="exercise-section">
          <h2>Leucorrhoea</h2>

          <p className="exercise-description">
            If the vaginal discharge is abundant and accompanied by painful and
            swollen vulva, it might be indicative of allergy. Then, you need to
            stop using perfumed hygiene products and use organic agents to wash
            your clothes. Changed colour or odour of your vaginal discharge
            might suggest leucorrhoea. Leucorrhoea usually indicates vaginal
            infection and we can determine what type of infection we are dealing
            with based on the appearance of the vaginal discharge.
          </p>
          <p className="exercise-description">
            White and thick vaginal discharge, often compared to cottage
            cheese-like consistency, might indicate vaginal yeast infection. It
            is accompanied by heavy itching and burning. See a doctor as soon as
            possible. Another type of vaginal discharge that can indicate yeast
            infection is abundant discharge that is thin or even watery.
          </p>
          <p className="exercise-description">
            Grey, abundant discharge with unpleasant, fish-like odour, which
            might exacerbate after a sexual intercourse, is a symptom of vaginal
            bacterial infection, that is vaginosis, and its treatment requires
            taking an antibiotic. This requires urgent medical consultation.
          </p>
          <p className="exercise-description">
            Yellow, abundant and foamy discharge might indicate vaginal
            trichomoniasis caused by a parasite – Trichomonas vaginalis. If that
            is the case, see a doctor immediately. Mucous, purulent discharge
            can indicate chlamydiosis, that is an infection with Chlamydia
            trachomatis. One of the symptoms of chlamydiosis is burning
            sensation during urination. You need to seek medical advice as soon
            as possible.
          </p>
        </div>
      </div>

      <Tips />
    </div>
  );
}

export default Stretching;
