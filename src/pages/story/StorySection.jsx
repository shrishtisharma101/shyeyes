import React from 'react';
import { Link } from 'react-router-dom';

const stories = [
  {
    id: 1,
    title: "Ankit & Priya - From Chats to Forever ❤️",
    description: "We started chatting casually on SHY-EYES and instantly clicked. Within weeks, we were inseparable. Now, we're planning our engagement!",
    image: "assets/images/story/01.jpg"
  },
  {
    id: 2,
    title: "Rohit & Neha - A Match Made on SHY-EYES ✨",
    description: "Thanks to SHY-EYES, I met the love of my life. We bonded over common interests and now we can't imagine life without each other.",
    image: "assets/images/story/02.jpg"
  },
  {
    id: 3,
    title: "Aarav & Simran - From First Chat to First Date 🌟",
    description: "Never thought a simple message could lead to such a beautiful connection. Our first date was magical, all thanks to SHY-EYES.",
    image: "assets/images/story/03.jpg"
  }
];

const StorySection = () => {
  return (
    <section className="story-section padding-tb bg-img">
      <div className="container">
        <div className="section-header">
          <h4>SHY-EYES Love Stories</h4>
          <h2>Beautiful Journeys That Started With A Swipe 💕</h2>
        </div>
        <div className="section-wrapper">
          <div className="row justify-content-center g-4">
            {stories.map(story => (
              <div className="col-lg-4 col-md-6 col-12" key={story.id}>
                <div className="story-item lab-item">
                  <div className="lab-inner">
                    <div className="lab-thumb">
                      <img src={story.image} alt="img" />
                    </div>
                    <div className="lab-content">
                      <h4><Link to="/blog-single">{story.title}</Link></h4>
                      <p>{story.description}</p>
                      <Link to="/blog-single" className="lab-btn">
                        <i className="icofont-circled-right"></i> Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;