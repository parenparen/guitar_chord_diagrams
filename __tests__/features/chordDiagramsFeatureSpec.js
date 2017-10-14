import React from 'react';
import { mount } from 'enzyme';

import App from '../../src/components/App.jsx';

describe("creating chord diagrams", () => {
  let app;
  beforeEach(() => {
    app = mount(<App />);
  });

  function addChordDiagram(config) {
    app.find('input[name="title"]').simulate(
      'change', { target: { value: config.title }});
    app.find('input[name="notes"]').simulate(
      'change', { target: { value: config.notes }});
    app.find('input[name="root"]').simulate(
      'change', { target: { value: config.root }});
    app.find('input[name="fretCount"]').simulate(
      'change', { target: { value: config.fretCount }});
    app.find('input[name="tuning"]').simulate(
      'change', { target: { value: config.tuning }});
    app.find('button[type="submit"]').simulate('submit');
  }

  function deleteChordDiagram() {
  }

  it('the user is able to create chord diagrams', () => {
    addChordDiagram({
      title: 'e minor pentatonic',
      notes: 'e g a b d',
      root: 'e',
      fretCount: 13
    });

    expect(app.text()).toMatch('e minor pentatonic');

    addChordDiagram({
      title: 'e minor (guitar)',
      notes: 'e g b',
      root: 'e',
      fretCount: 13
    });

    expect(app.text()).toMatch('e minor (guitar)');

    addChordDiagram({
      title: 'e minor (ukulele)',
      notes: 'e g b',
      root: 'e',
      tuning: 'g c e a',
      fretCount: 13
    });

    expect(app.text()).toMatch('e minor (ukulele)');

//    deleteChordDiagram('e minor pentatonic');
//
//    expect(app.text()).not.toMatch('e minor pentatonic');
//
//    deleteChordDiagram('e minor');
//
//    expect(app.text()).not.toMatch('e minor (guitar)');
//
//    deleteChordDiagram('e minor');
//
//    expect(app.text()).not.toMatch('e minor (ukulele)');
  });
});
