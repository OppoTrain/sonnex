import React from "react";
import "./stretching.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tips from "../../pages/tips/tips";
import NavBar from "../../components/navBar/navBar";

function Stretching() {
  return (
    <div id="root">
      <NavBar />
      <div id="header">
        <h1>Stretching</h1>
        <p className="special-paragraph">
          In order to prevent muscle sores after an intensive workout, do not
          forget about stretching.
        </p>
      </div>
      <div className="content">
        <div className="exercise-section">
          <h2>
            <strong>Stretching the calves</strong>
          </h2>
          <p className="exercise-description">
            <strong>Stretching the calves –</strong> Stand in as wide a straddle
            as possible (left leg at the front, right leg at the back) so that
            you can press the heel of the leg at the back to the floor (toes
            pointing forward) and straighten it. The left leg is bent in the
            knee (knee over the foot). Change sides.
          </p>
          <p className="exercise-description">
            <strong>Stretching the back of the thigh and the calf – </strong>
            In a standing position, move your right leg forward and straighten
            its knee. Support the foot on the heel with the toes pointing
            upwards. Place your hands high on your left thigh (leg bent in the
            knee). Keeping your back straight, tilt your body towards the
            stretched, right leg. Change sides.
          </p>
          <p className="exercise-description">
            <strong>Stretching the hip flexors –</strong> Stand in a wide lunge
            – left leg at the front bent in the knee at a 90° angle, right leg
            straight at the back. Place your left hand on the left thigh, while
            the right hand on the floor. Push your hips down, your back
            straight. Change sides.
          </p>
        </div>

        <div className="exercise-section">
          <h2>
            <strong>Stretching the glutes</strong>
          </h2>
          <p className="exercise-description">
            <strong>Stretching the glutes –</strong> Lie down on your back and
            place your left ankle on your right thigh and pull the right thigh
            towards your chest. Hips and back flat on the floor. Change sides.
          </p>
          <p className="exercise-description">
            <strong>Stretching the inner thigh muscles –</strong> Sit down and
            place your feet so that they are close to the hips, while their
            soles touch together. Grasp the feet with your hands and straighten
            the body. Push the knees towards the floor.
          </p>
          <p className="exercise-description">
            <strong>Stretching the arm muscles –</strong>Stand in a straddle,
            grasp the left elbow with the right hand from underneath. Press the
            elbow towards your chest, pulling it to the right at the same time.
            Change sides.
          </p>
          <p className="exercise-description">
            <strong>
              Stretching the back thigh muscles, the calf and the lower back
              muscles –{" "}
            </strong>
            Sitting down, straighten the left leg, flex your feet, pointing the
            toes upwards, bend the right leg in the knee and place on the floor.
            With your back straight, grasp your left calf and pull gently your
            chest down. Change sides.
          </p>
        </div>

        <div className="exercise-section">
          <h2>
            <strong>Stretching the front thigh muscles</strong>
          </h2>
          <p className="exercise-description">
            <strong>Stretching the front thigh muscles –</strong>Sit on your
            left hip and support yourself on your left forearm. The left leg
            lying bent in the knee. Grasp your right leg with the right hand and
            pull it towards the glute. The right knee placed on the floor. Push
            the hips forward and retract your shoulder blades. Change sides.
          </p>
          <p className="exercise-description">
            <strong>
              Stretching the arm, pectoral, back, and abdominal muscles –{" "}
            </strong>
            Stand in a wide straddle, bend the knees slightly, your pelvis
            straight, support your right hand on the thigh, your left hand
            straightened upwards along the body. Tilt your body to the right,
            keeping your back straight, reach as high as possible with your
            hand. Change sides.
          </p>
          <p className="exercise-description">
            <strong>Stretching the arm, pectoral, and back muscles – </strong>
            Stand in a wide straddle, bend the knees slightly, your pelvis
            straight. Lace your fingers and move the hands over your hand,
            gently retracting your shoulder blades. Try to stretch your spine
            upwards, as high as possible.
          </p>
        </div>

        <div className="exercise-section">
          <h2>
            <strong>Stretching the neck and back muscles</strong>
          </h2>
          <p className="exercise-description">
            <strong>Stretching the neck and back muscles –</strong> Stand in a
            wide straddle, bend the knees slightly, your pelvis straight, move
            your left hand over your head and place it on the opposite temple.
            Gently pull the hand to the side, tilting the head. At the same
            time, the straight right hand pulls downwards along the body,
            lowering the shoulder. Change sides.
          </p>
          <p className="exercise-description">
            <strong>Stretching the pectoral and arm muscles–</strong> Stand in a
            wide straddle, bend the knees slightly, your pelvis straight. Move
            your hands to the back, lace your fingers and pull it backwards and
            downwards at the same time, retracting your shoulder blades. Relax
            your neck and lower your shoulders
          </p>
          <p className="exercise-description">
            <strong>
              Stretching the back muscles, the glutes, and the pectoral and arm
              muscles–{" "}
            </strong>
            Sit on your heels, rest your chest on your thighs and your forehead
            on the floor. Pull your hands forward on the floor and try to reach
            as far as possible. Pull your hips in the opposite direction,
            stretching well your spine.
          </p>
        </div>
      </div>
      <Tips />
    </div>
  );
}

export default Stretching;
