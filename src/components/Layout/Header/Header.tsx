import React from 'react';

import {Button} from '../../Partials/Button/Button'

export const Header = () => (
  <header>
    <div className="flex h-16 justify-between items-center bg-base-dark px-2">
      <div>
        <span>Acme</span>
      </div>
      <div>
        <Button label="DARK"></Button>
      </div>
    </div>
  </header>
);
