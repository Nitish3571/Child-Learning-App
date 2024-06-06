import React from "react";
import { Carousel, Card, Button } from "antd";
import 'tailwindcss/tailwind.css';  // Make sure Tailwind CSS is imported

const CarouselComp = () => {
  const cardsData = [
    {
      backgroundImage:
        "https://media.istockphoto.com/id/1445504463/photo/excited-homeschool-tablet-or-girl-with-ideas-learning-motivation-or-education-innovation-in.jpg?s=2048x2048&w=is&k=20&c=ZEqFsToI7dMcc7vkgwQzq0h7jNsQb6xeI7JmDyky1zs=",
      cardDetails: [
        {
          title: "Card title 1 ka 1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          className: 'hidden'
        },
        {
          title: "Card title 1 ka 2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          title: "Card title 1 ka 3",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          className: 'hidden'
        },
      ],
    },
    {
      backgroundImage:
        "https://media.istockphoto.com/id/1134576992/photo/teenager-girl-stock-images.jpg?s=2048x2048&w=is&k=20&c=pGYlHmYz3ZImcppdHImcJ0BPoctv8cqqGBQ4eGZEbEM=",
      cardDetails: [
        {
          title: "Card title 2 ka 1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          title: "Card title 2 ka 2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          className: 'hidden'
        },
      ],
    },
    {
      backgroundImage:
        "https://media.istockphoto.com/id/2099731062/photo/student-thinking-while-writing-or-doing-homework-by-using-laptop-erudition.webp?b=1&s=170667a&w=0&k=20&c=yvPQ7nK2DT357O0SbpTC_trYT0-mU-kO7KbV9weYQSk=",
      cardDetails: [
        {
          title: "Card title 3 ka 1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          className: 'hidden'
        },
        {
          title: "Card title 3 ka 2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          title: "Card title 3 ka 3",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          className: 'hidden'
        },
        {
          title: "Card title 3 ka 4",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          className: 'hidden'
        },
        {
          title: "Card title 3 ka 5",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          className: 'hidden'
        },
      ],
    },
    {
      backgroundImage:
        "https://media.istockphoto.com/id/1445504463/photo/excited-homeschool-tablet-or-girl-with-ideas-learning-motivation-or-education-innovation-in.jpg?s=2048x2048&w=is&k=20&c=ZEqFsToI7dMcc7vkgwQzq0h7jNsQb6xeI7JmDyky1zs=",
      cardDetails: [
        {
          title: "Card title 4 ka 1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ],
    },
  ];

  return (
    <Carousel arrows style={{ margin: 0 }}>
      {cardsData.map((card, index) => (
        <div key={index}>
          <div
            style={{
              backgroundImage: `url(${card.backgroundImage})`,
              height: "80vh",
              backgroundSize: "cover",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            {card.cardDetails.map((cardDetails, cardIndex) => (
              <Card
                key={cardIndex}
                title={cardDetails.title}
                bordered={false}
                className={`${cardDetails.className} md:block w-72 h-72 bg-white bg-opacity-80 rounded-2xl shadow-md text-center`}
              >
                <p className="text-center">{cardDetails.description}</p>
                <Button type="primary" shape="round" size="large">
                  Learn More
                </Button>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComp;
