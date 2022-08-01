import ScreenWrapper from 'components/ScreenWrapper';
import Swimlane from 'components/Swimlane';
import React, { memo } from 'react';

const DiscoverScreen = () => {
  return (
    <ScreenWrapper>
      <Swimlane.PopularMovies />
      <Swimlane.PopularTVShows />
    </ScreenWrapper>
  );
};

export default memo(DiscoverScreen);
