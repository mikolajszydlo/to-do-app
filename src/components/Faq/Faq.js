import React from 'react';
import Container from '../Container/Container.js';
import Hero from '../Hero/Hero.js';
import { pageContents } from '../../redux/store-dataStore/dataStore.js';

const Faq = () => (
  <Container>
    <Hero titleText={pageContents.faq.title} imageSource={pageContents.faq.image} />
    <p>{pageContents.faq.content}</p>
  </Container>
);


export default Faq;