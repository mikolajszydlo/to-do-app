import React from 'react';
import Container from '../Container/Container.js';
import Hero from '../Hero/Hero.js';
import { pageContents } from '../../redux/store-dataStore/dataStore.js';

const Info = () => (
  <Container>
    <Hero titleText={pageContents.info.title} imageSource={pageContents.info.image} />
    <p>{pageContents.info.content}</p>
  </Container>
);

export default Info;