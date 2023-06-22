import { CloneMe } from './CloneMe';
import { screen } from '@testing-library/react';
import React from 'react';

describe('<CloneMe />', () => {
  it('should render', () => {
    <CloneMe text="Olá" />;
    expect(screen.getByText('Olá')).toBeInTheDocument();
  });
});
