import React from 'react';
import ReactDOM from 'react-dom';
import jsdom from 'mocha-jsdom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import Loading from '../src/';

function setup (propOverrides) {
  const props = Object.assign({
    onSelect: expect.createSpy(),
    onSuggestionOverride: expect.createSpy(),
    suggestions: []
  }, propOverrides);

  const loading = <Loading {...props} />;

  const renderer = TestUtils.createRenderer();
  renderer.render(loading);
  const output = renderer.getRenderOutput();

  const document = TestUtils.renderIntoDocument(loading);

  return {
    props: props,
    output: output,
    renderer: renderer,
    document: document
  };
}

describe('Loading component', function () {
  jsdom();

  beforeEach(function (done) {
    expect.restoreSpies();
    done();
  });

  it('should render default spinner', function (done) {
    const { document } = setup({
      isLoading: true,
      spinner: undefined
    });

    expect(document.refs['defaultLoading']).toExist();
    done();
  });

  it('should render custom spinner', function (done) {
    const { document } = setup({
      isLoading: true,
      spinner: <Spinner />
    });

    expect(document.refs['customtLoading']).toExist();
    done();
  });

});
