import React from 'react';
import './flip_card.css';
import { Container, Row, Col } from 'react-bootstrap';

// Use the paths provided for each image
import WiseMove from '../assets/wisemove.jpg';
import StacksOfCash from '../assets/StacksofCash.jpg';
import SocialPlay from '../assets/SocialPlay.jpg';
import PlayingCards from '../assets/playingcards.jpg';
import PersonPlaying from '../assets/PersonPlaying.jpg';
import MoneyBurn from '../assets/moneyburn.jpg';
import LuckyDice from '../assets/LuckyDice.jpg';
import Cards from '../assets/cards.jpg';


const flipCardData = [
  { title: 'Just what I do', image: Cards, description: "Gambling has become a habit and routine, something I do without thinking." },
  { title: 'Along for the ride', image: PlayingCards, description: "Gambling because others around me are doing it, making it feel like a social activity." },
  { title: 'Money to burn', image: MoneyBurn, description: "I have disposable income and see gambling as a form of entertainment." },
  { title: 'Feeling lucky', image: LuckyDice, description: "I gamble because I believe today could be my lucky day to win big." },
  { title: 'For money', image: StacksOfCash, description: "Gambling is my way of making money or trying to overcome financial struggles." },
  { title: 'Me time', image: PersonPlaying, description: "I use gambling as a way to relax, distract, and spend time by myself." },
  { title: 'Social play', image: SocialPlay, description: "Gambling is a way to connect and socialize with friends or peers." },
  { title: 'Wise decision', image: WiseMove, description: "I think I have strategies and see gambling as a calculated risk." }
];

const FlipCardGrid = () => {
  return (
    <Container fluid className="flip-card-container my-5 py-5">
      <h2 className="text-center mb-5" style={{ fontSize: '2.2em', fontWeight: '600', color: '#2c3e50' }}>
        Understanding the Root Causes of Gambling
      </h2>
      <Row className="g-4">
        {flipCardData.map((card, index) => (
          <Col md={3} key={index}>
            <div className="flip-card">
              <div className="flip-card-inner">
                {/* Front of the Flip Card */}
                <div className="flip-card-front" style={{ backgroundImage: `url(${card.image})` }}>
                  <h3 className="flip-card-title">{card.title}</h3>
                </div>
                {/* Back of the Flip Card */}
                <div className="flip-card-back">
                 <p style={{ color: 'white' }}>{card.description}</p>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FlipCardGrid;
