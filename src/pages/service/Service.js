import React from 'react';

const Service = () => {
  const carouselData = [
    {
      videoSrc: "https://www.youtube.com/embed/4NkNrGwqsiE?si=0YUI4-nmUqsLUDPU",
      title: "YouTube video player",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      tags: ["#photography", "#travel", "#winter"]
    },
    {
        // <iframe width="560" height="315" src="?si=-hyYlZfsaWCOxlbE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      videoSrc: "https://www.youtube.com/embed/NvdUSZyCGRs",
      title: "The Coldest Sunset",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      tags: ["#photography", "#travel", "#winter"]
    },
    {
      videoSrc: "https://www.youtube.com/embed/hq3yfQnllfQ",
      title: "The Coldest Sunset",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      tags: ["#photography", "#travel", "#winter"]
    },
    {
      videoSrc: "https://www.youtube.com/embed/LFLgELuLp7k",
      title: "The Coldest Sunset",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      tags: ["#photography", "#travel", "#winter"]
    }
  ];

  return (
    <div className="">
      <div className="h-72 mb-10 md:mb-20  bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: 'url(https://www.shutterstock.com/image-photo/thumbs-good-service-260nw-205018012.jpg)' }}>
        <h1 className="text-white text-3xl">Service Carousel</h1>
      </div>
      <div className="flex-1 flex justify-around items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {carouselData.map((card, index) => (
            <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="w-full h-56">
                <iframe
                  className="w-full h-full"
                  src={`${card.videoSrc}?rel=0`}
                  title={`YouTube video player - ${index}`}
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{card.title}</div>
                <p className="text-gray-700 text-base">
                  {card.description}
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                {card.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
