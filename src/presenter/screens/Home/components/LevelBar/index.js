import React, { useState, useEffect } from 'react';

import {
  LevelBar,
  LevelBarIndicator,
} from './styles';

function ProfileLevelBar({value}) {
  const [percentValue, setPercentValue] = useState(0)

  useEffect(() => {
    if (value) {
      setPercentValue(value)
    }
  }, [value])

  return (
    <LevelBar>
      <LevelBarIndicator style={{ width: `${percentValue}%` }} />
    </LevelBar>
  );
};

export default ProfileLevelBar;
