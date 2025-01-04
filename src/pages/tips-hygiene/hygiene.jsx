import React from "react";
import "./hygiene.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tips from "../../pages/tips/tips";
import NavBar from "../../components/navBar/navBar";

function Stretching() {
  return (
    <div id="root">
      <NavBar />
      <div id="header">
        <h1>HYGIENE DURING MENSTRUATION</h1>
        <p className="special-paragraph">
          We all know how to maintain proper hygiene and how to care for our
          body. We can find our way in the maze of lotions and easily choose the
          right cream, suitable for our skin needs. For teenagers and young
          women, the topic of hygiene and product choice during menstruation may
          raise questions and doubts. No worries, that is absolutely normal. You
          need to explore yourself and your needs to choose the right products
          that will make you feel comfortable and fresh
        </p>
      </div>
      <div className="content">
        <div className="exercise-section">
          <h2>Sanitary pad or tampon – that is the question</h2>
          <p className="exercise-description">
            Many girls wonder what is better – sanitary pad or tampon. There is
            no clear-cut answer to this question. It all largely depends on how
            we plan to spend our day. If you want to jog or go to aerobics or
            Zumba classes, it is better to choose tampons. Sanitary pads, on the
            other hand, will prove perfect at school, at work and at night.
            However, it all depends on your preferences. One thing is crucial,
            though – both a sanitary pad and a tampon need to be changed every
            couple of hours. It is important not only for our comfort, but also
            health. A wet sanitary pad or a soaked tampon is a perfect
            environment for bacterial growth
          </p>
        </div>

        <div className="exercise-section">
          <h2>What sanitary pad and what tampon</h2>

          <p className="exercise-description">
            Each woman can choose a sanitary pad that will best match her needs.
            Where to start? It is best to start by determining the proper
            sanitary pad absorbency. There are appropriate markings on sanitary
            pad packages, usually droplets, that make it easier. On the first
            days of your period, more absorbent sanitary pads will be the best
            choice. You can choose ultra-thin sanitary pads (Bella Ideale, Bella
            Perfecta, Bella for Teens) or classic, slightly thicker ones (Bella
            Nova). The difference in thickness lies in a special superabsorbent
            used in the “ultra” sanitary napkins. The absorbent absorbs moisture
            and binds it into a gel, keeping it inside the pad. This way, such a
            sanitary pad can take up large amounts of moisture, but will not be
            visible under your clothes. The wings, on the other hand, will help
            to protect your underwear against stains. The top layer of sanitary
            pads can be made of a delicate non-woven fabric or a special net. It
            is worth testing both versions and choose the one that you like
            most. Tampons are divided in terms of absorbency and size. Teenagers
            should start from the smallest sizes (Bella Tampo Mini).
          </p>
        </div>

        <div className="exercise-section">
          <h2>Bath or shower</h2>

          <p className="exercise-description">
            Proper intimate hygiene will make us feel fresh and comfortable. It
            is recommended to wash your intimate areas 2-3 times a day. For this
            purpose, choose a gentle intimate gel (Bella HydroNatural). Taking a
            bath during menstruation is not forbidden, although a shower is a
            better solution. Too hot a bath might intensify the bleeding. What
            you will find very useful at school, during travel or at work are
            intimate wet wipes (Bella Sensitive). Menstruation does not
            necessarily have to mean discomfort. It largely depends on the
            choice of the sanitary pad or tampon we prefer most, as well as
            proper intimate hygiene.
          </p>
        </div>
      </div>

      <Tips />
    </div>
  );
}

export default Stretching;
