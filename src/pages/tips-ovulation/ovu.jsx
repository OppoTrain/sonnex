import React from "react";
import "./ovu.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tips from "../../pages/tips/tips";
import NavBar from "../../components/navBar/navBar";

function Stretching() {
  return (
    <div id="root">
      <NavBar />
      <div id="header">
        <h1>Everything you need to know about ovulation</h1>
        <p className="special-paragraph">
          Ovulation occurs usually in the middle of your menstrual cycle, around
          12-16 days from the first day of a period. Ovulation involves
          releasing an egg cell from the Graafian follicle that matures in the
          ovary. The egg cell moves through one of the Fallopian tubes and, if
          it becomes fertilised, it is implanted in the uterus
        </p>
      </div>
      <div className="content">
        <div className="exercise-section">
          <h2>Egg cells and ovulation</h2>

          <p className="exercise-description">
            You may find it surprising, but the number of egg cells is
            predefined, that is every woman is born with a specific number of
            egg cells: from 700 thousand to 2 million egg cells. Unfortunately,
            the majority of the egg cells is subject to degeneration and there
            are only 40 thousand egg cells left in a woman’s ovaries. Generally,
            ovulation is practically symptomless. Apart from changed consistency
            and colour of the cervical mucus or a higher body temperature, women
            do not experience any symptoms. Painful ovulation or periovulatory
            pain is caused by significant expansion of the ovary wall. When you
            are ovulating, you might also observe periovulatory bleeding.
          </p>
        </div>

        <div className="exercise-section">
          <h2>One or two ovulations?</h2>

          <p className="exercise-description">
            In a woman’s cycle, there is usually one ovulation, but it happens
            that there is no ovulation whatsoever or there are two ovulations
            during one cycle. Sometimes, two Graafian follicles might mature at
            the same time in both or in one ovary. It happens that the follicles
            mature one right after the other or totally spontaneously, e.g.
            during a sexual intercourse. If there is no ovulation – it means
            that an unruptured Graafian follicle underwent luteinisation and the
            egg cell was not released outside. There are various reasons of
            anovulatory cycles. Interestingly, we can even be unaware of that
            fact because no ovulation does not necessarily have to mean no
            menstruation, which can happen on time or with a slight shift. The
            causes of no ovulation are diverse, while treatment depends on the
            diagnosis. Remember, however, that anovulatory cycles happen in
            healthy women too. If it happens once or twice a year, do not worry.
          </p>
        </div>
      </div>

      <Tips />
    </div>
  );
}

export default Stretching;
