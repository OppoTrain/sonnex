import React from "react";
import "./men.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tips from "../../pages/tips/tips";
import NavBar from "../../components/navBar/navBar";

function Men() {
  return (
    <div id="root">
      <NavBar />
      <div id="header">
        <h1>MENSTRUAL PAIN</h1>
        <p className="special-paragraph">
          Exercises based on yoga relieve the symptoms associated with
          menstruation.
        </p>
      </div>
      <div className="content">
        <div className="exercise-section">
          <p className="exercise-description">
            <strong>Viparita karani –</strong> fanfold 2 blankets and place them
            in parallel to the wall. Lay your hips on them, moving your buttocks
            to the wall. Lie down on your back, bend your arms in the elbows and
            place them on the floor with palms facing upwards. Rest your
            straightened knees against the wall and spread your legs wide enough
            to feel slight stretching on the inner sides of your thighs. Rest
            your heels against the wall, flex the front parts of your thighs.
            Relax your back, arms and abdomen. Hold this position for 2 to 5
            minutes. This exercise relaxes the lower abdomen and the pelvic
            floor muscles.
          </p>
          <p className="exercise-description">
            <strong>Supta baddha kona sana – </strong>
            Fold 2 blankes – one into a rectangle, the other into a square. Sit
            down, facing the wall. Bend your knees and make the soles of your
            feet join each other and the toes touch the wall. Lie down on the
            blankets so that your back rests on the blanket folded in a
            rectangle and the head on the blanket folded in a square; the hips
            should lie on the floor. Relax your legs and let the knees drop down
            to the sides. Place your hands on the floor, moving them away from
            your body, palms facing upwards. The shoulder blades should lie flat
            on the floor. Relax the muscles of your whole body. Hold this
            position for 2 to 5 minutes. This exercise relaxes the groin region.
          </p>

          <p className="exercise-description">
            <strong>Swastikaasana–</strong> Place a chair approximately 50 cm
            from the wall and place a folded blanket on its seat. Another folded
            blanket place along the wall and sit on the blanket, facing the
            chair, so that your buttocks touch the wall slightly. Bend your
            knees so that they form a right angle and cross your legs, placing
            the right leg on the left one. Rest the forearms on the blanket,
            then rest your forehead on your hands, tilting your body forward.
            The elbows can drop down loosely. Keep your back straight. Relax the
            leg and abdominal muscles. Let the knees drop outwards. Hold this
            position for 1 minute and repeat, crossing your legs in a way that,
            this time, your left leg is placed on the right one. This exercise
            relaxes the groin region and the pelvic floor.
          </p>
          <p className="exercise-description">
            <strong>Virasana –</strong> Place a chair approximately 50 cm from
            the wall and place a folded blanket on its seat. Kneel down, facing
            the chair, with your toes slightly touching the wall. Sit on your
            heels and join the largest toes of both feet together. Rest the
            forearms together on the blanket and rest your forehead on them,
            tilting your body forward. Keep your back straight. Relax the
            shoulder region and the neck. Hold this position for 2 to 5 minutes.
            This exercise relaxes the crotch region and pelvic floor.
          </p>
        </div>
      </div>
      <Tips />
    </div>
  );
}

export default Men;
