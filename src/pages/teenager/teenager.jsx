import React from "react";
import "./teenager.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../../components/footer/footer";
import Card from "../../components/card/card";
import Nav from "../../components/navBar/navBar";

function Teen() {
  const cardsData = [
    {
      title: "Training for attractive body",
      description:
        "Physical activity is always a good idea. Are you looking for simple exercises to do even at home? Here, you will find interesting examples. Work out to have an attractive body!",
      link: "/tips-teenager-training",
    },
    {
      title: "Stretching",
      description:
        "Is stretching important? It is a very important part of every workout, both at the beginning and at the end. Stretch the tired parts of the body.",
      link: "/tips-teenager-stretching",
    },
    {
      title: "Menstrual pain",
      description:
        "Some exercises, especially those based on yoga, can reduce the symptoms associated with menstruation. Try exercises to reduce pain during those days.",
      link: "/tips-teenager-men",
    },
    {
      title: "Hygiene during menstruation",
      description:
        "We all know how to maintain proper hygiene and how to care for our body. We can find our way in the maze of lotions and easily choose the right cream, suitable for our skin needs. For teenagers and young women, the topic of hygiene and product choice during menstruation may raise questions and doubts.",
      link: "/tips-teenager-hygiene",
    },
    {
      title: "Teenage period – what you might find useful?",
      description:
        "Period is a normal thing in a woman’s life. However, you need to get used to how it happens and what it involves",
      link: "/tips-teenager-tee",
    },
    {
      title: "5 most frequent questions relating to menstruation",
      description:
        "Menstruation too long or too short? Can I work out? Teenagers and young women often have a lot of questions relating to menstruation. Here you will find answers to most frequent doubts.",
      link: "/tips-teenager-que",
    },
    {
      title: "5 most frequent questions relating to tampons and sanitary pads",
      description:
        "Physical activity is always a good idea. Are you looking for simple exercises to do even at home? Here, you will find interesting examples. Work out to have an attractive body!",
      link: "/tips-teenager-sani",
    },
    {
      title: "No menstruation – causes",
      description:
        "The first thought that comes when your expected period refuses to is: pregnancy. No wonder, as this is the most common cause. However, there is a range of other causes, such as hormonal changes, stress, adolescence or beginnings of menopause, that can explain the lack of expected period",
      link: "/tips-teenager-no",
    },
    {
      title: "Menstrual cycle -Follicular phase and luteal phase",
      description:
        "The menstrual cycle of every woman is divided into phases. It does not mean, however, that we all experience it identically. Knowing your body and what changes it undergoes will help you better understand your own needs and feel comfortable every day.",
      link: "/tips-teenager-cycle",
    },
    {
      title: "Menstruation- How to be prepared?",
      description:
        "Menstruation accompanies every woman from adolescence to menopause. It is nothing to be afraid of or embarrassed by. Your first period is a signal that you are growing up and your body is undergoing normal changes.",
      link: "/tips-teenager-how",
    },
    {
      title: "PMS – premenstrual syndrome",
      description:
        "PMS occurs in the second half of the menstrual cycle, after the fertile days are over, but before menstruation.",
      link: "/tips-teenager-pms",
    },
    {
      title: "Everything you need to know about ovulation",
      description:
        "Ovulation occurs usually in the middle of your menstrual cycle, around 12-16 days from the first day of a period. Ovulation involves releasing an egg cell from the Graafian follicle that matures in the ovary.",
      link: "/tips-teenager-ovu",
    },
  ];

  return (
    <div id="root">
      <div>
        <Nav />
      </div>
      <div id="header">
        <h1>TIPS FOR TEENAGER </h1>
      </div>
      <div className="card-container">
        {" "}
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            link={card.link}
          />
        ))}{" "}
      </div>

      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Teen;
