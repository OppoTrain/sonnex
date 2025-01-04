import React from "react";
import "./cycle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tips from "../../pages/tips/tips";
import NavBar from "../../components/navBar/navBar";

function Stretching() {
  return (
    <div id="root">
      <NavBar />
      <div id="header">
        <h1>Menstrual cycle. Follicular phase and luteal phase</h1>
        <p className="special-paragraph">
          The menstrual cycle of every woman is divided into phases. It does not
          mean, however, that we all experience it identically. Knowing your
          body and what changes it undergoes will help you better understand
          your own needs and feel comfortable every day.
        </p>
      </div>
      <div className="content">
        <div className="exercise-section">
          <h2>Menstrual cycle from the top – follicular phase</h2>

          <p className="exercise-description">
            The start of the follicular phase coincides with the first day of
            your period. This phase is distinguished by reduced levels of the
            progesterone and oestrogen hormones and lasts around 14 days until
            ovulation. In the first days of the follicular phase, the
            endometrium (uterine mucosa) is the thinnest in the entire cycle and
            gradually thickens to be ready for a potential pregnancy. During the
            follicular phase, 5-7 Graafian follicle mature in one or both
            ovaries. Their growth is stimulated by follicle stimulating hormone.
            The follicles become increasingly larger and start to produce
            oestrogen, a hormone that inhibits the production of follicle
            stimulating hormone. In the last phase of the follicle maturation,
            one or two become dominant. The follicular phase ends with ovulation
            – a release of an egg from the follicle.
          </p>
        </div>

        <div className="exercise-section">
          <h2>Ovulation and luteal phase</h2>

          <p className="exercise-description">
            The follicular phase is followed by the luteal phase. Its beginning
            falls on the first day of ovulation and lasts until the first day of
            menstruation. You can tell that you are ovulating by observing your
            own body. Your body temperature rises and you can notice
            characteristic cervical mucus, while some women feel ovulation pain.
            During ovulation, you may seem more attractive to your partner and
            be more satisfied with your looks. In this phase, the luteinizing
            hormone level increases, which you can detect by doing an ovulation
            test. The luteal phase is when the oestrogen and progesterone levels
            rise, while the lining of the uterus changes to be prepared for the
            implantation of an embryo. If you do not conceive, the lining of the
            uterus is shed, which leads to a menstruation.
          </p>
        </div>
      </div>

      <Tips />
    </div>
  );
}

export default Stretching;
