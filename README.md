# Color Picker Temperature

### Installing

#### npm

```
npm i html-print-element
```

#### yarn

```
yarn html-print-element
```

### Usage

```
function printHtml({selectorName,printStyle}){

}


1.**selectorName =  id or class**
 -id = '#id'
 -class = '.class'
2.**printStyle = in text format**



```

### Example

```ts
import { printHtml } from "html-print-element";



id selector

<div id="test">
  test text
</div>

printHtml(
 {
  selectorElement:"#test",
 }
);


or class selector and printStyle

<div class="test">
  test text
</div>


const printStyle = '.test {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
}'

printHtml(
 {
  selectorElement:".test",
  printStyle
 }
);


```
