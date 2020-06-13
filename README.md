### Excalidraw

[![npm version](https://badge.fury.io/js/excalidraw.svg)](https://badge.fury.io/js/excalidraw)
![npm](https://img.shields.io/npm/dw/excalidraw)

Excalidraw exported as a component to directly embed in your projects

### Installation

You can use npm

```
npm install react react-dom excalidraw
```

or via yarn

```cassandraql
yarn add react react-dom excalidraw
```

After installation you will see the below font files in `dist` directory which you will have to copy to the path from where assets are served. In the demo its served from public folder.

```cassandraql
Cascadia.woff2
FG_Virgil.woff2
```

### Demo

[Try here](https://codesandbox.io/s/compassionate-shape-f60f8)

### Usage

```javascript
import React, { useState } from "react";
import Excalidraw from "excalidraw";
import InitialData from "./initialData";

import "excalidraw/dist/excalidraw.min.css";
import "./styles.css";

export default function App() {
  const onChange = (elements, state) => {
    console.log("Elements :", elements, "State : ", state);
  };

  const onUsernameChange = (username) => {
    console.log("current username", username);
  };
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const onResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  const { width, height } = dimensions;
  const options = { zenModeEnabled: true, viewBackgroundColor: "AFEEEE" };
  return (
    <div className="App">
      <Excalidraw
        width={width}
        height={height}
        onResize={onResize}
        initialData={InitialData}
        onChange={onChange}
        options={options}
        user={{ name: "Excalidraw User" }}
        onUsernameChange={onUsernameChange}
      />
    </div>
  );
}
```

[![Edit compassionate-shape-f60f8](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/compassionate-shape-f60f8?fontsize=14&hidenavigation=1&theme=dark)

### Props

| Name                                  | Type                                                                                                                                         | Default                                                                           | Description                                                                                                                                                |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [width](#width)                       | Number                                                                                                                                       | window.innerWidth                                                                 | The width of Excalidraw component                                                                                                                          |
| [height](#height)                     | Number                                                                                                                                       | window.innerHeight                                                                | The height of Excalidraw component                                                                                                                         |
| [onResize](#onResize)                 | Function                                                                                                                                     |                                                                                   | This callback will be called when window resizes                                                                                                           |
| [initialData](#initialData)           | [ExcalidrawElement[]](https://github.com/excalidraw/excalidraw-embed/blob/58178c388ae577140a1c679b5733f33e3722498a/src/element/types.ts#L44) | []                                                                                | The initial data with which app loads.                                                                                                                     |
| [onChange](#onChange)                 | Function                                                                                                                                     |                                                                                   | This callback is triggered whenever the component updates due to any change. This callback will receive the excalidraw elements and the current app state. |
| [options](#options)                   | Object                                                                                                                                       | Each option has a default value. See [options](#options) section for more details | Options to be passed to Excalidraw                                                                                                                         |
| [user](#user)                         | { name?: string }                                                                                                                            |                                                                                   | User details. The name refers to the name of the user to be shown                                                                                          |
| [onUsernameChange](#onUsernameChange) | Function                                                                                                                                     |                                                                                   | This callback is triggered whenever the username change. This callback receives the username.                                                              |

<a name="width"><a/>

##### width

This props defines the width of the Excalidraw component. Defaults to `window.innerWidth` if not passed.

<a name="height"><a/>

##### height

This props defines the height of the Excalidraw component. Defaults to `window.innerHeight` if not passed.

<a name="onResize"><a/>

##### onResize

If this callback is passed, it gets triggered when window resizes. Some calculations which you might want to do here is calculating width and height of Excalidraw and pass it. Incase the updated width and height is not passed, then it will not get updated.

<a name="initialData"><a/>

##### initialData

This helps to load Excalidraw with `initialData`. Defaults to `[]`.
This should be array of [ExcalidrawElement[]](https://github.com/excalidraw/excalidraw-embed/blob/58178c388ae577140a1c679b5733f33e3722498a/src/element/types.ts#L44) as shown below.

```javascript
[
  {
    type: "rectangle",
    version: 141,
    versionNonce: 361174001,
    isDeleted: false,
    id: "oDVXy8D6rom3H1-LLH2-f",
    fillStyle: "hachure",
    strokeWidth: 1,
    strokeStyle: "solid",
    roughness: 1,
    opacity: 100,
    angle: 0,
    x: 100.50390625,
    y: 93.67578125,
    strokeColor: "#000000",
    backgroundColor: "transparent",
    width: 186.47265625,
    height: 141.9765625,
    seed: 1968410350,
    groupIds: [],
  },
];
```

You might want to use this if you are using some backend to store the excalidraw elements and want to preload excalidraw with those elements.

<a name="onChange"><a/>

##### onChange

Every time component updates, this callback if passed will get triggered and has the below signature.

```javascript
onChange(ExcalidrawElement[], AppState)
```

Here you can try saving the data to your backend or local storage for example.

<a name="options"><a/>

##### options

These contains the options object with which you can control the initial rendering of Excalidraw.
Currently it only contains the below keys, more to be added in future.

| Name                | type    | default | Description                        |
| ------------------- | ------- | ------- | ---------------------------------- |
| zenModeEnabled      | boolean | false   | Decides whether to enable zen mode |
| viewBackgroundColor | string  | #fff    | The background color of Excalidraw |

Here is how you use it

```javascript
{ zenModeEnabled: true, viewBackgroundColor: "AFEEEE" }
```

<a name="user"><a/>

##### user

This is the user name which shows during collaboration. Defaults to `{name: ''}`. This is Object as later more attributes like user cursor colors can also be added.

<a name="onUserameChange"><a/>

##### onUsernameChange

This callback if passed gets triggered whenever username changes and has the below signature

```javascript
onUserNameChange(username);
```

### Local Installation

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

#### Clone the repo

```bash
git clone https://github.com/excalidraw/excalidraw-embed.git
```

#### Commands

| Command               | Description                       |
| --------------------- | --------------------------------- |
| `npm install`         | Install the dependencies          |
| `npm start`           | Run the project                   |
| `npm run fix`         | Reformat all files with Prettier  |
| `npm test`            | Run tests                         |
| `npm run test:update` | Update test snapshots             |
| `npm run test:code`   | Test for formatting with Prettier |

## Contributing

Currently this is a fork of [excalidraw](https://github.com/excalidraw/excalidraw) and all the changes for making it an embedable component are done on top of it. So for any changes, please [open an issue](https://github.com/excalidraw/excalidraw-embed/issues/new) first to discuss what you would like to change.
