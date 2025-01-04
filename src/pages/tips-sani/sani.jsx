import React from "react";
import "./sani.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tips from "../../pages/tips/tips";
import NavBar from "../../components/navBar/navBar";

function Stretching() {
  return (
    <div id="root">
      <NavBar />
      <div id="header">
        <h1>5 most frequent questions relating to tampons and sanitary pads</h1>
      </div>
      <div className="content">
        <div className="exercise-section">
          <h2>
            1. Does a sanitary pad with traditional thickness absorb better than
            a thin one?
          </h2>
          <p className="exercise-description">
            The absorbency of both sanitary pads is the same. Some ultra-thin
            sanitary pads absorb even more moisture than products with
            traditional thickness. The difference in thickness lies in a special
            superabsorbent used in the “ultra” sanitary napkins. The absorbent
            absorbs moisture and binds it into a gel, keeping it inside the pad.
            This way, such a sanitary pad can take up large amounts of moisture,
            but will not be visible under tight skirt or trousers.
          </p>
        </div>

        <div className="exercise-section">
          <h2>
            2. Should tampons be changed more frequently than sanitary pads?
          </h2>

          <p className="exercise-description">
            Every sanitary product must be changed frequently to minimise the
            risk of an infection. During menstruation, your intimate areas are
            more susceptible to bacterial or fungal infections. If you use
            tampons, the blood does not leave your body, but remains inside,
            which increases the risk even more. Hence, you need to stick to very
            strict rules when it comes to hygiene and change them every 3 hours
            at most.
          </p>
        </div>

        <div className="exercise-section">
          <h2>
            3. Can I go to a swimming pool and use a tampon without fear?{" "}
          </h2>

          <p className="exercise-description">
            Yes, definitely. Your period is no reason to give up your regular
            physical activity. Of course, I you do not feel well or just do not
            feel like it – do not force yourself to anything. Tampons are
            definitely recommended for “those days”. Despite the fact that they
            protect you during menstruation, they also serve as an additional
            barrier making it harder for bacteria and fungi to penetrate your
            body. Remember to change it often, every 3 hours at most, in order
            to avoid a potential infection
          </p>
        </div>

        <div className="exercise-section">
          <h2>
            4. What should I choose to use overnight – tampon or sanitary pad?
          </h2>

          <p className="exercise-description">
            It largely depends on your preferences. Choosing a tampon, remember
            to change it every several hours. If you want to sleep a little
            longer without having to get up at night, remember that there are
            special night sanitary pads. These are a little longer and protect
            your underwear and linen better when you are sleeping.
          </p>
        </div>

        <div className="exercise-section">
          <h2>5. Can I use a tampon if I am still a virgin?</h2>

          <p className="exercise-description">
            The fact that you have not started your sex life yet does not mean
            you must avoid tampons. When you are menstruating, your virginal
            membrane expands and becomes more flexible. Therefore, you can use a
            tampon without fear.
          </p>
        </div>
      </div>

      <Tips />
    </div>
  );
}

export default Stretching;
