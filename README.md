> Note: the repository is heavily work-in-progress and not suitable for use yet.

### Excalidraw

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
  return (
    <div className="App">
      <Excalidraw
        width={width}
        height={height}
        onResize={onResize}
        initialData={InitialData}
        onChange={onChange}
        zenModeEnabled
        viewBackgroundColor="#AFEEEE"
        user={{ name: "Aakansha" }}
        onUsernameChange={onUsernameChange}
      />
    </div>
  );
}
```

### Props

| Name                | Type                                                                                                                                         | Default            | Description                                                                                                                                                                                        |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| width               | Number                                                                                                                                       | window.innerWidth  | The width of Excalidraw component                                                                                                                                                                  |
| height              | Number                                                                                                                                       | window.innerHeight | The height of Excalidraw component                                                                                                                                                                 |
| onResize            | Function                                                                                                                                     |                    | This callback will be called when window resizes. You might want to update width and height when app resizes. The width and height of App won't resize unless you send the update width and height |
| initialData         | [ExcalidrawElement[]](https://github.com/excalidraw/excalidraw-embed/blob/58178c388ae577140a1c679b5733f33e3722498a/src/element/types.ts#L44) | []                 | The initial data with which app loads.                                                                                                                                                             |
| onChange            | Function                                                                                                                                     |                    | This callback is triggered whenever the component updates due to any change. This callback will receive the excalidraw elements and the current app state.                                         |
| zenModeEnabled      | boolean                                                                                                                                      | false              | To enable zenmode                                                                                                                                                                                  |
| viewBackgroundColor | string                                                                                                                                       | #fff               | The background color of Excalidraw component                                                                                                                                                       |
| user                | { name?: string }                                                                                                                            |                    | User details. The name refers to the name of the user to be shown                                                                                                                                  |
| onUsernameChange    | Function                                                                                                                                     |                    | This callback is triggered whenever the username change. This callback receives the username.                                                                                                      |
