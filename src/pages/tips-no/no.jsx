import React from "react";
import "./no.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tips from "../../pages/tips/tips";
import NavBar from "../../components/navBar/navBar";

function Stretching() {
  return (
    <div id="root">
      <NavBar />
      <div id="header">
        <h1>No menstruation – causes</h1>
        <p className="special-paragraph">
          The first thought that comes when your expected period refuses to is:
          pregnancy. No wonder, as this is the most common cause. However, there
          is a range of other causes, such as hormonal changes, stress,
          adolescence or beginnings of menopause, that can explain the lack of
          expected period.
        </p>
      </div>
      <div className="content">
        <div className="exercise-section">
          <h2>No teenage menstruation</h2>
          <p className="exercise-description">
            If you have just started menstruating and are past your first period
            or several first periods, then a late period is not a cause for
            concern yet. In the first two years of menstruation, your body is
            still changing and periods in that time can be very irregular. It is
            possible that, after your first period, another one will occur only
            after a couple of months.
          </p>
        </div>

        <div className="exercise-section">
          <h2>Menstruation and menopause</h2>

          <p className="exercise-description">
            One of the causes of no menstruation can be that you are entering
            menopause. Generally, it can be observed after the age of 45. Your
            cycles can become irregular. Talk to your gynaecologist about it, as
            it might turn out that your lack of periods is not caused by
            menopause, but some different hormonal disorders.
          </p>
        </div>

        <div className="exercise-section">
          <h2>Hormones and period</h2>

          <p className="exercise-description">
            Hormonal disorders are another reason for irregular periods or no
            periods at all. The most common causes of hormonal disorders include
            polycystic ovary syndrome, thyroid function disorders, and many
            more. If you frequently suffer from irregular periods, consult it
            with your doctor.
          </p>
        </div>

        <div className="exercise-section">
          <h2>Calm your nerves – stress</h2>

          <p className="exercise-description">
            Late period is quite frequently caused by stress. If you are going
            through a rough patch, your body produces excessive amounts of the
            hormone – prolactin. Too much prolactin can inhibit ovulation and
            thus affect your menstrual cycle length. No period and pregnancy
          </p>
          <p className="exercise-description">
            No menstruation is most frequently associated with pregnancy. If
            your period is late and you had sex during the time preceding the
            expected menstruation, it is very likely that you are pregnant. The
            first move to confirm or rule out pregnancy is doing a home
            pregnancy test, which you can buy at every drugstore. If the test is
            positive, you must make an appointment with a doctor.
          </p>
        </div>
      </div>

      <Tips />
    </div>
  );
}

export default Stretching;
