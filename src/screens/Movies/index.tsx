import ScreenWrapper from 'components/ScreenWrapper';
import Swimlane from 'components/Swimlane';
import React, { memo } from 'react';

const MoviesScreen = () => {
  return (
    <ScreenWrapper header>
      <Swimlane.PopularMovies />
    </ScreenWrapper>
  );
};

export default memo(MoviesScreen);
