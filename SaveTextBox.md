# MIT License

Copyright (c) 2024 V / Lou du Poitou

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

# Example of using the custom element:

```
<!-- Begin example of use -->
<div>
    <h1>Example of use:</h1>
    <!-- Set a height and a width for the SaveTextBox: -->
    <save-text-box height="500px" width="500px">Old Value</save-text-box>
</div>
<style>
    h1 {
        justify-self: center;
        margin: 15px;
        color: green;
        font-family: Arial, Helvetica, sans-serif;
        font-style: italic;
        font-weight: bold;
        text-decoration: underline;
    }
</style>
<script src="./SaveTextBox.js"></script>
<script>
    const saveTextBox = document.querySelector("save-text-box"); // Select the SaveTextBox

    console.log(saveTextBox.getSaveValue()); // Log the value of the SaveTextBox
    saveTextBox.setSaveValue("New Value"); // Set a new value to the SaveTextBox
</script>
<!-- End example of use -->
```

***Made by V / Lou du Poitou :*** http://loudupoitou.dns-dynamic.net