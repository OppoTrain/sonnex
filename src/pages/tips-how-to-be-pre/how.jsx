import React from "react";
import "./how.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tips from "../../pages/tips/tips";
import NavBar from "../../components/navBar/navBar";

function Stretching() {
  return (
    <div id="root">
      <NavBar />
      <div id="header">
        <h1>Menstruation-How to be prepared?</h1>
        <p className="special-paragraph">
          Menstruation accompanies every woman from adolescence to menopause. It
          is nothing to be afraid of or embarrassed by. Your first period is a
          signal that you are growing up and your body is undergoing normal
          changes. Although you probably do not even think about it yet, the
          first menstruation is a signal that you will be able to have children
          in the future.
        </p>
      </div>
      <div className="content">
        <div className="exercise-section">
          <h2>Menstrual cycle – how it works</h2>

          <p className="exercise-description">
            The first period (aka menarche) generally occurs between the age of
            12 and 14. If you are very slim, your first period might occur a
            little later; before the ovaries start to produce oestrogens, your
            body needs to accumulate the proper amount of fatty tissue.
            Responsible for the entire process is the pituitary gland in your
            brain, which starts to produce the hormones: FSH (follicle
            stimulating hormone) and LH (luteinising hormone). Under the
            influence of FSH, a Graafian follicle starts to mature in your ovary
            and, along with it, an egg cell. Around the 14th day of your cycle,
            the Graafian follicle ruptures and the egg cell starts its journey
            in the fallopian tube towards the uterus. During this journey, LH
            transforms the structure of the ruptured Graafian follicle into an
            endocrine gland, the so-called yellow body. Yellow body is
            responsible for producing progesterone – a hormone responsible for
            the growth and softening of the endometrium. If you do not conceive
            during ovulation, the lining of the uterus is shed and is discharged
            outside through the vagina. As the lining of the uterus is shed,
            small blood vessels rupture. Such bleeding of the mucous membrane of
            your uterus is called menstruation
          </p>
        </div>

        <div className="exercise-section">
          <h2>How long is a menstrual cycle?</h2>
          <p className="exercise-description">
            The average menstrual cycle lasts 28 days. However, we are all
            different and some women have definitely shorter menstrual cycles,
            even 24 days, while other longer – 32 days. Remember that the
            occurrence of your first period does not mean that another one will
            occur exactly in one month. As long as you are growing up, the first
            menstruations can be very irregular. Even a couple of months may
            pass between the first and the next period.
          </p>
          <p className="exercise-description">
            The first day of your menstruation is the first day of the cycle.
            Ovulation, that is the release of an egg cell from the ovary, occurs
            usually in the middle of the cycle. It is a time when you can become
            pregnant if you have unprotected sex. If the egg cell is not
            fertilised, the body starts to prepare for shedding the lining of
            the uterus and then a menstruation occurs (also known as period).
            Menstruation lasts on average 3-5 days. Too heavy menstrual bleeding
            and prolonged periods are a signal that you need to see a doctor, as
            losing blood, you lose much iron, which can lead to anaemia
          </p>{" "}
          <p className="exercise-description">
            How to prepare for the first period? If you are afraid that your
            first period might catch you off guard, wear pantyliners, which,
            additionally, will help you maintain proper hygiene. A couple of
            months before your first menstruation, you might notice a white
            discharge from your vagina. It is a symptom of properly developing
            hormones. The first period might occur when you are out, but
            remember that menstruation is not a disease and you can function
            normally in spite of it. It is worth having a sanitary pad always
            with you, preferably an ultra-thin one so that you do not have to be
            afraid that it will be visible under tightly-fitting clothes.
          </p>
        </div>
      </div>

      <Tips />
    </div>
  );
}

export default Stretching;
