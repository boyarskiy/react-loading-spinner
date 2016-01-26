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

You can also assign content as a prop:

```js
<Loading isLoading={this.props.isLoadingContent} children={Content} />
```

See [example](https://github.com/boyarskiy/react-loading-spinner/tree/master/example)

## Options

#### `isLoading`

It is the state of loading spinner, if ```true``` — show spinner, otherwise show content if it is exist.

#### `spinner`

Set react component, as a custom spinner. If it is not exist there will be default spinner.

#### `loadingClassName`

Style class name for loading wrapper. By default — ```loadingContiner```

#### `children`

Assign child component as a property.

## License

MIT
