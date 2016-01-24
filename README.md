# React loading spinner

> Loading spinner component for React

## Installation

```
npm install -save react-loading-spinner
```

## Usage

Show loading spinner when content is loading and show content when it is loaded.

```js
<Loading isLoading={this.props.isLoadingContent}
         loadingClassName='loading'
         spinner={Spinner}>
  {this.props.content ? (
    <Content />
  ) : null}
</Loading>
```

See [example](https://github.com/boyarskiy/react-loading-spinner/tree/master/example)

## Options

#### `isLoading`

It is the state of spinner, if ```true``` — show spinner, otherwise show content if it is exist.

#### `spinner`

Set custom React component spinner

#### `loadingClassName`

Style classname for loading wrapper. By default — ```loadingContiner```

## License

MIT
