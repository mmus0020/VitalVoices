// import React, { useState } from 'react';
// import { Carousel, Container, Row, Col } from 'react-bootstrap';
// import "../flipcard.css"

// const motivations = [
//   {
//     title: "Social play",
//     description: "Gambling is something my friends and I love doing together, whether it's having a friendly competition, adding more excitement to an event, or just for a bit of fun",
//     icon: "🎭"
//   },
//   {
//     title: "Wise decision",
//     description: "Gambling is a matter of skill and I'm confident in my ability to get it right, which is why I enjoy turning events into another opportunity to test my skills",
//     icon: "🧠"
//   },
//   {
//     title: "Me time",
//     description: "I love to play and indulge in a little 'me time', with the added reward of knowing I will probably come out lucky",
//     icon: "🕰️"
//   },
//   {
//     title: "Just what I do",
//     description: "Gambling is just something I've been doing for a while, and I enjoy it as a little treat, regardless of whether I win or not",
//     icon: "🔄"
//   },
//   {
//     title: "Along for the ride",
//     description: "Gambling isn't something I'm particularly interested in, it's just a way I get to enjoy being with others, even if it means I will possibly end up out of pocket",
//     icon: "🚗"
//   },
//   {
//     title: "Money to burn",
//     description: "I'm just using up some leftover credit on a bit of a whim - nothing to lose!",
//     icon: "💸"
//   },
//   {
//     title: "Feeling lucky",
//     description: "Sometimes those lucky chances come my way and I can't help but take a gamble, especially if it gives me an opportunity to prove myself",
//     icon: "🍀"
//   },
//   {
//     title: "For the money",
//     description: "I don't put much thought into gambling, I just like the idea of winning big even if it is a long shot",
//     icon: "💰"
//   },
// ];

// const FlipCard = ({ motivation }) => {
//     const [isFlipped, setIsFlipped] = useState(false);
  
//     const handleFlip = () => {
//       setIsFlipped(!isFlipped);
//     };
  
//     return (
//       <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
//         <div className="flip-card-inner">
//           <div className="flip-card-front">
//             <div className="icon">{motivation.icon}</div>
//             <h3>{motivation.title}</h3>
//             <p className="flip-instruction">Click to learn more</p>
//           </div>
//           <div className="flip-card-back">
//             <h3>{motivation.title}</h3>
//             <p>{motivation.description}</p>
//           </div>
//         </div>
//       </div>
//     );
//   };

  


//     const GamblingMotivationsCarousel = () => {
//         return (
//           <Container className="my-5">
//             <h2 className="text-center mb-4" style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#333' }}>Gambling Motivations</h2>
//             <Carousel 
//               interval={null} 
//               indicators={false}
//               prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
//               nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
//             >
//               {motivations.map((motivation, idx) => (
//                 <Carousel.Item key={idx}>
//                   <Row className="justify-content-center">
//                     <Col md={8} lg={6}>
//                       <FlipCard motivation={motivation} />
//                     </Col>
//                   </Row>
//                 </Carousel.Item>
//               ))}
//             </Carousel>
//             <div className="text-center mt-4">
//               <p className="text-muted" style={{ fontSize: '1.1rem' }}>Click on a card to flip it, use arrows to navigate</p>
//             </div>
//           </Container>
//         );
//       };

// export default GamblingMotivationsCarousel;
import React, { useState } from 'react';

const motivations = [
  {
    title: "Social play",
    description: "My friends and I enjoy gambling together, whether it's for some friendly competition, to make an event more exciting, or simply for a bit of fun."
  },
  {
    title: "Wise decision",
    description: "Gambling is a matter of skill, and I'm confident in my ability to get it right, which is why I enjoy turning events into another opportunity to test my skills."
  },
  {
    title: "Me time",
    description: "I love to play and indulge in a little 'me time', with the added reward of knowing I will probably come out lucky."
  },
  {
    title: "Just what I do",
    description: "Gambling is just something I've been doing for a while, and I enjoy it as a little treat, regardless of whether I win or not."
  },
  {
    title: "Along for the ride",
    description: "Gambling isn't something I'm particularly interested in; it's just a way I get to enjoy being with others, even if it means I will possibly end up out of pocket."
  },
  {
    title: "Money to burn",
    description: "I'm just using up some leftover credit on a bit of a whim - nothing to lose!"
  },
  {
    title: "Feeling lucky",
    description: "Sometimes those lucky chances come my way, and I can't help but take a gamble, especially if it gives me an opportunity to prove myself."
  },
  {
    title: "For money",
    description: "I don't put much thought into gambling; I just like the idea of winning big even if it is a long shot."
  },
];

const GamblingMotivationsCarousel = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleCardClick = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index); // Toggle flip state
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text mb-10 text-4xl font-bold text-gray-800 text-center">Why do People Gamble?</h2>

      <div className="grid-container">
        {motivations.map((motivation, index) => (
          <div
            key={index}
            className={`flip-card ${flippedIndex === index ? 'flipped' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            <div className="flip-card-inner">
              {/* Front of the card */}
              <div className="flip-card-front">
                <span className="font-semibold text-lg">{motivation.title}</span>
              </div>

              {/* Back of the card (only showing the description) */}
              <div className="flip-card-back">
                {flippedIndex === index && (
                  <p className="mt-4 text-white text-sm">{motivation.description}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamblingMotivationsCarousel;
