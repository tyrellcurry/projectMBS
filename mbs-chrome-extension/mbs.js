/* 
MIT License

Copyright (c) 2025 Tyrell Curry

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. 
*/

console.log("MBS Extension: Running");

document.addEventListener("DOMContentLoaded", function(event) {
    marketoBrowserSupport();
})

function marketoBrowserSupport() {
  document.querySelectorAll("meta[mktoName]").forEach((e) => {
    if (e.getAttribute("class") == "mktoBoolean") {
      document.documentElement.innerHTML = document.documentElement.innerHTML
        .split("${" + e.id + "}")
        .join(`${e.getAttribute(`${e.getAttribute("default")}_value`)}`);
    } else if (e.getAttribute("units") != null) {
      document.documentElement.innerHTML = document.documentElement.innerHTML
        .split("${" + e.id + "}")
        .join(`${e.getAttribute("default")}${e.getAttribute("units")}`);
    } else if (e.getAttribute("class") == "mktoList") {
      const defaultVal = e.getAttribute("default");
      const listValueArr = e.getAttribute("values").split(",");
      if (defaultVal !== null) {
        document.documentElement.innerHTML = document.documentElement.innerHTML
          .split("${" + e.id + "}")
          .join(defaultVal);
      } else if (listValueArr[0] !== undefined) {
        document.documentElement.innerHTML = document.documentElement.innerHTML
          .split("${" + e.id + "}")
          .join(listValueArr[0]);
      }
    } else {
      document.documentElement.innerHTML = document.documentElement.innerHTML
        .split("${" + e.id + "}")
        .join(`${e.getAttribute("default")}`);
    }
  });
}
