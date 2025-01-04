import React from "react";
import "./meno.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../../components/footer/footer";
import Card from "../../components/card/card";
import Nav from "../../components/navBar/navBar";

function Teen() {
  const cardsData = [
    {
      title: "Menstruation before menopause",
      description:
        "Hot flashes, cold sweating, sleep disorders, irritations: every woman experiences menopause differently. This life stage usually begins between the age of 45 and 55. When will menopause exactly start? Unfortunately, it cannot be predicted.",
      link: "/tips-menopause-men",
    },
    {
      title: "Menopause – why it occurs and what the symptoms are?",
      description:
        "Menopause is a scientific name for the last menstruation in a woman’s life. Menopause is preceded by perimenopause.",
      link: "/tips-menopause-why",
    },
    {
      title: "Leucorrhoea – when you need to see a doctor",
      description:
        "Depending on what time of the cycle you are currently in, you might notice a vaginal discharge that is typical for the current moment. When the vaginal discharge has abnormal colour or odour, this might be suggestive of leucorrhoea.",
      link: "/tips-menopause-leu",
    },
  ];

  return (
    <div id="root">
      <div>
        <Nav />
      </div>
      <div id="header">
        <h1>Tips for menopause</h1>
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
