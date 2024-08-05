import React from 'react';

// others
import {en} from 'language';
import {DATA} from './utils';
import {Container} from 'layout';
import {HomeCard as Card} from 'components';

function Home() {
  return (
    <Container headerLabel={en.home}>
      <Card data={DATA} />
    </Container>
  );
}

export default Home;
