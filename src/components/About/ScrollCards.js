import React, { useEffect, useRef, useState } from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../ScrollCards.css';

const ScrollCards = () => {
  const cards = Array(10).fill(null);
  const cardRefs = useRef([]);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => [...prev, entry.target.dataset.index]);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    cardRefs.current.forEach((ref, index) => {
      ref.dataset.index = index;
      observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container mt-5">
      {cards.map((_, index) => (
        <Card 
          key={index}
          ref={el => cardRefs.current[index] = el}
          className={`mb-4 horizontal-card ${
            visibleCards.includes(index.toString()) ? 'visible' : ''
          }`}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <Card.Img 
                src={`https://picsum.photos/300/200?random=${index}`}
                alt="Random image"
                className="card-image"
              />
            </div>
            <div className="col-md-8">
              <Card.Body>
                <Card.Title>Card Title {index + 1}</Card.Title>
                <Card.Text>
                  This is line 1 of the card content.<br/>
                  This is line 2 of the card content.<br/>
                  This is line 3 of the card content.
                </Card.Text>
              </Card.Body>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ScrollCards;