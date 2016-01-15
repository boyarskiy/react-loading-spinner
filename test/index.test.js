import React from 'react';
import ReactDOM from 'react-dom';
import jsdom from 'mocha-jsdom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import Loading from '../src/';
import DefaultSpinner from '../src/defaultSpinner';

const MockChildComponent = () => <div className='child'>Child component</div>;

function setupUtil (ReactComponent, props) {
  const component = <ReactComponent {...props} />;

  const renderer = TestUtils.createRenderer();
  renderer.render(component);
  const output = renderer.getRenderOutput();

  const document = TestUtils.renderIntoDocument(component);

  return {
    props: props,
    renderer: renderer,
    output: output,
    document: document
  };
}

describe('Loading component', function () {
  jsdom();

  var Loading;
  var setupLoading;
  var setup;

  before(function () {
    Loading = require('../src/');
    setupLoading = function (propOverrides) {
      const props = Object.assign({
        isLoading: true,
        spinner: ''
      }, propOverrides);

      return setupUtil(Loading, props);
    }
  });  

  beforeEach(function (done) {
    expect.restoreSpies();
    done();
  });

  it('should render default spinner', function (done) {
    setup = function (propOverrides) {
      return setupUtil(DefaultSpinner, propOverrides);
    }

    const { output, props } = setup();
    const { document } = setupLoading();

    expect(document.props.isLoading).toEqual(true);
    expect(document.props.spinner).toEqual('');
    expect(output.props.className).toEqual('defaultSpinner');
    done();
  });

  it('should render custom spinner', function (done) {
    const { document } = setupLoading({
      isLoading: true,
      spinner: 'spinner'
    });

    expect(document.props.isLoading).toEqual(true);
    expect(document.props.spinner).toEqual('spinner');
    done();
  });

    
  it('should render children component', function (done) {
    setup = function (propOverrides) {
      return setupUtil(MockChildComponent, propOverrides);
    }

    const { output, props } = setup();
    const { document } = setupLoading({
      isLoading: false
    });

    expect(document.props.isLoading).toEqual(false);
    expect(output.props.className).toEqual('child');
    done();
  });

});
