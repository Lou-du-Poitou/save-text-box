# save-text-box

***Custom element html (SaveTextBox)***
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
