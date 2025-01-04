import React from "react";
import "./training.css"; // تأكد من استخدام ملف CSS الصحيح
import "bootstrap/dist/css/bootstrap.min.css";
import Tips from "../../pages/tips/tips";
import Footer from "../../components/footer/footer";
import NavBar from "../../components/navBar/navBar";

function Training() {
  return (
    <div id="root">
      <NavBar />
      <header id="header">
        <h1>TRAINING FOR ATTRACTIVE BODY</h1>
        <p className="special-paragraph">
          Exercises for a specific part of the body should be repeated at least
          3 times a week. After 6 weeks, you should achieve a measurable effect!
        </p>
      </header>
      <main className="content">
        <section className="exercise-section">
          <h2>
            <strong>GLUTES</strong>
          </h2>
          <p className="exercise-description">
            <strong>Bridge</strong> – Lie down on your back with hands along
            your body. Bend your knees, with the feet flat on the floor. Raise
            your hips so that your body and thighs create a straight line.
            Without lowering your pelvis, straighten your right knee with the
            foot flexed. Count to 3, lower the right foot to the floor and
            slowly lower your hips. Repeat with the left knee. Do 12-15
            repetitions. This exercise firms your glutes.
          </p>
          <p className="exercise-description">
            <strong>Kickback</strong> – Kneel down with your hands on the floor.
            Position your hands in one line under your shoulders, while the
            knees under your hips. Pull in your stomach. Straighten back your
            right leg to the hip level. Return slowly to the initial position.
            Make sure your spine does not bend. Do 15-20 repetitions in a round
            and change the leg. This exercise firms your glutes and the back of
            your thighs.
          </p>
          <p className="exercise-description">
            <strong>Raising dumbbells</strong> – Kneel down with your hands on
            the floor. Position your hands in one line under your shoulders,
            while the knees under your hips. Put a dumbbell in the bend of your
            knee. Flexing your glutes, raise your right leg back. Stop the
            motion when your knee goes slightly above the hip level. Lower the
            leg slowly to the initial position. Do not put your knee on the
            floor, stop it right above it. Do 12-15 repetitions. This exercise
            firms your glutes.
          </p>
        </section>

        <section className="exercise-section">
          <h2>
            <strong>ABDOMEN</strong>
          </h2>
          <p className="exercise-description">
            <strong>Sit-ups</strong> – Lie down on your back. Bend your knees,
            heels on the floor, feet flexed. Rest your head on your hands. Press
            the heels towards the floor. Pull in your stomach and raise your
            head, hands and shoulder blades. Make sure you do not move your chin
            towards your chest. Return slowly to the initial position. Do 20
            repetitions in a round. This exercise mainly firms the straight
            abdominal muscle.
          </p>
          <p className="exercise-description">
            <strong>Sit-ups II</strong> – Lie down on your back, bend your hips
            and knees so that they form a right angle. Rest your head on your
            hands. Pull in your stomach. Raise your head, hands and shoulder
            blades. At the same time, straighten your right knee so that your
            right leg is at a 45° angle in relation to the floor. Return slowly
            to the initial position. Repeat with the left leg. Do 20 repetitions
            in a round, straightening your knees alternately. This exercise
            mainly firms the straight abdominal muscle.
          </p>
          <p className="exercise-description">
            <strong>Sit-ups III</strong> – Take one (1-3 kg) or two (1-3 kg
            each) dumbbells and sit on a mat. Bend your knees, heels on the
            floor, feet flexed. Bring your hands with the dumbbell(s) close to
            your chest. Pull in your stomach, retract your shoulder blades.
            Slowly lower your body to the lying position, vertebra after
            vertebra. At the same time, press the heels towards the floor. Raise
            your body to the sitting position. Do 15-20 repetitions in a round.
            This exercise mainly firms the straight abdominal muscle.
          </p>
        </section>

        <section className="exercise-section">
          <h2>
            <strong>ARM BACK</strong>
          </h2>
          <p className="exercise-description">
            <strong>Sitting elbow extension</strong> – Take a dumbbell (2-4 kg)
            to your right hand and sit cross-legged on a mat. Raise your hand
            with the dumbbell vertically with the back of your hand facing
            outwards. Place your right hand directly below your right elbow.
            Bend your right elbow, lowering the dumbbell towards your shoulder
            blade. Without moving your right arm, straighten the elbow, raising
            the dumbbell. Slowly bend the elbow, returning to the initial
            position. Do 12-15 repetitions in a round and change the hand. This
            exercise firms the arm backs.
          </p>
          <p className="exercise-description">
            <strong>Elbow extension in supported kneeling</strong> – Take a
            dumbbell (2-4 kg) to your right hand and adopt the supported
            kneeling position. Position your left hand in one line under your
            shoulder, while the knees under your hips. Bend your right elbow so
            that it forms a right angle and press it to your waist. Position the
            forearm and hand holding the dumbbell vertically downwards.
            Straighten the elbow, raising the dumbbell backwards. Make sure that
            your elbow does not change its position during this exercise. Slowly
            bend the elbow and return to the initial position. Do 12-15
            repetitions in a round and change the hand. This exercise firms the
            arm backs.
          </p>
          <p className="exercise-description">
            <strong>Push-up</strong> – Adopt the supported kneeling position and
            then move your hands forward by 20-30 cm. The hands, spread to the
            width of your shoulders, should be in one line under the shoulders.
            Your fingers should face forward. In such a body position, the knee
            bend angle will change from a right angle to an obtuse angle. Slowly
            bend your elbows, keeping them as close to your body as possible. In
            order to do this exercise correctly, do not lower your body
            vertically downwards, but forward. Stop the motion when your chest
            is close to the mat. Slowly straighten the elbows and return to the
            initial position. Do 12-15 repetitions in a round. This exercise
            firms the arm backs.
          </p>
        </section>
      </main>

      <Tips />
    </div>
  );
}

export default Training;
