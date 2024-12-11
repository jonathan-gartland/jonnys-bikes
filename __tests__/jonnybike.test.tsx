import React from 'react';
import { render } from "@testing-library/react";
import JonnyBike from '@/components/JonnyBike';

describe('JonnyBike Component', () => {
  test('renders the component and verifies the image is visible', () => {
    const { getByAltText } = render(<JonnyBike />);
    const image = getByAltText('GT Grade 2018');
    expect(image).toBeVisible();
  });
});
