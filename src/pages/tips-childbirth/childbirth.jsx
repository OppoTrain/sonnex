import React from "react";
import "./childbirth.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tips from "../../pages/tips/tips";
import NavBar from "../../components/navBar/navBar";

function Stretching() {
  return (
    <div id="root">
      <NavBar />
      <div id="header">
        <h1>Menstruation after childbirth</h1>
        <p className="special-paragraph">
          Your baby is already born or you are only preparing for this
          significant day? There surely have been numerous changes in your life,
          as well as in your body. After giving birth, a woman’s body returns to
          the state before pregnancy. It involves menstruating again. There is
          no definite formula to calculate when your periods will start again,
          as it depends on numerous factors.
        </p>
      </div>
      <div className="content">
        <div className="exercise-section">
          <h2>After birth</h2>

          <p className="exercise-description">
            Bleeding that occurs right after childbirth is not called
            menstruation, but lochia. This state can last even up to six weeks
            and applies to both women who gave a natural birth and those who had
            a caesarean section. It is assumed that in women after a caesarean
            section, it can be slightly shorter. During the postpartum period,
            it is extremely important to take care of intimate hygiene. At the
            beginning, sanitary pads might be insufficient and you might need
            postpartum pads. Doctors and midwifes do not recommend using tampons
            during this time.
          </p>
        </div>

        <div className="exercise-section">
          <h2>First menstruation following childbirth</h2>

          <p className="exercise-description">
            When your first period after giving birth will occur depends on
            numerous factors. How your baby is fed has a significant impact. It
            is assumed that breastfeeding women can expect their first period
            after around 4-8 weeks after they finish breastfeeding. Obviously,
            it is not a rule and some women start menstruating two months
            postpartum despite the fact that they are still breastfeeding – i.e.
            the same as mothers feeding their baby with formula. Remember that,
            during lactation, menstrual cycles can be irregular.
          </p>
        </div>
        <div className="exercise-section">
          <h2>The same or maybe different</h2>

          <p className="exercise-description">
            Many women wonder what their periods will look like after
            childbirth. There is no definite rule here as well. Your
            menstruations might change. It happens that the period length is
            reduced, but the bleeding on the first days of periods is heavier.
            Sometimes, women who used to complain about very disturbing
            abdominal pain find that, after childbirth, their menstruation is
            less painful.
          </p>
        </div>
        <div className="exercise-section">
          <h2>Do you have any doubts?</h2>

          <p className="exercise-description">
            Do not be afraid to ask. Talk to your gynaecologist or midwife about
            your postpartum menstrual cycle. Remember that every human body is
            different, so is every pregnancy or postpartum period length.
          </p>
        </div>
      </div>

      <Tips />
    </div>
  );
}

export default Stretching;
