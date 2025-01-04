import React from "react";
import "./que.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tips from "../../pages/tips/tips";
import NavBar from "../../components/navBar/navBar";

function Stretching() {
  return (
    <div id="root">
      <NavBar />
      <div id="header">
        <h1>5 most frequent questions relating to menstruation</h1>
      </div>
      <div className="content">
        <div className="exercise-section">
          <h2>1. Can your period be too short or too long?</h2>
          <p className="exercise-description">
            It is most frequently assumed that a period lasts from 3 to 5 days.
            Both shorter and longer periods require a medical consultation with
            a gynaecologist. If your periods are too short or too long, this may
            indicate, for example, hormonal problems; therefore, do not wait and
            make an appointment with a specialist.
          </p>
        </div>

        <div className="exercise-section">
          <h2>2. Does menstruation always occur every 28 days?</h2>

          <p className="exercise-description">
            Your menstrual cycle can last from 21 to 35 days. Therefore, regular
            periods every, for example, 23 days should not be a cause for
            concern. You should visit your gynaecologist if your cycles have
            become irregular.
          </p>
        </div>

        <div className="exercise-section">
          <h2>3. Should I avoid physical exercises during a period?</h2>

          <p className="exercise-description">
            If you are physically active every day, do not give it up. Physical
            activity and exercises have a positive impact on your body, “those
            days”, they might reduce painful stomach cramps, thus improving your
            well-being. Especially recommended are: swimming, cycling,
            gymnastics (with an emphasis on stretching), marching. Only
            intensive workout (including strength exercises) might exacerbate
            bleeding.
          </p>
        </div>

        <div className="exercise-section">
          <h2>4. Can I have sex when I am menstruating?</h2>

          <p className="exercise-description">
            If you and your partner are up for it, there is no medical
            contraindications. However, remember that, during a period, you are
            more susceptible to vaginal infections, as menstrual blood is a
            perfect medium for bacterial growth.
          </p>
        </div>

        <div className="exercise-section">
          <h2>5. Does every woman have painful periods?</h2>

          <p className="exercise-description">
            Pain perception is very individual, which also applies to menstrual
            pain. What can help? In mild symptoms, you can use painkillers or
            spasmolytic drugs, available over the counter. You can also try
            light physical exercises that relax tensed muscles, or warm
            compresses. If you experience strong pain that makes normal life
            difficult, talk about it with your doctor.
          </p>
        </div>
      </div>

      <Tips />
    </div>
  );
}

export default Stretching;
