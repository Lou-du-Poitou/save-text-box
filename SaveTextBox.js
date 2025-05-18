/**
*    @author V / Lou du Poitou
*    @license MIT License
*    <save-text-box> Custom Element
*/
// http://loudupoitou.dns-dynamic.net //

const _stbGetLang = () => {
    const languages = {
        "fr": ["Modifier", "Annuler", "Enregistrer"],
        "en": ["Edit", "Cancel", "Save"],
        "de": ["Ändern", "Stornieren", "Speichern"],
        "es": ["Editar", "Anular", "Grabar"]
    };

    return languages[document.documentElement.lang] ? 
    languages[document.documentElement.lang] : 
    languages["en"];
};

class SaveTextBox extends HTMLElement {
    constructor() {
        super();
        let saveValue = this.innerText.trim();
        const language = _stbGetLang();
        this.innerHTML = `
            <form style="display: flex; flex-direction: column; box-sizing: border-box; border: solid 2px #000000; border-radius: 5px; min-width: 180px; min-height: 180px;" onsubmit="return false;">
                <div style="display: flex; height: 100%;">
                    <textarea style="resize: none; width: 100%; padding: 0; margin: 5px; outline: none;" readonly title="content">${saveValue}</textarea>
                </div>
                <div style="display: flex; justify-content: space-around;">
                    <button id="stb-edit" type="button" title="edit" style="margin: 5px; width: 50%; cursor: pointer;">${language[0]}</button>
                    <button id="stb-cancel" type="button" title="cancel" style="margin: 5px; width: 50%; cursor: pointer; display: none;">${language[1]}</button>
                </div>
            </form>
        `;
        this.style = `display: grid; justify-self: center; height: ${this.getAttribute("height") || "180px"}; width: ${this.getAttribute("width") || "180px"};`;
        this.querySelector("#stb-edit").addEventListener("click", (e) => {
            const edit = this.querySelector("#stb-edit"), 
            textarea = this.querySelector("textarea"),
            cancel = this.querySelector("#stb-cancel");
            textarea.readOnly = !textarea.readOnly;
            if (textarea.readOnly) {
                edit.textContent = language[0];
                edit.type = "submit";
                cancel.style.display = "none";
            } else {
                edit.textContent = language[2];
                edit.type = "button";
                cancel.style.display = "block";
            }
            return null;
        });
        this.querySelector("#stb-cancel").addEventListener("click", (e) => {
            const edit = this.querySelector("#stb-edit"), 
            textarea = this.querySelector("textarea"),
            cancel = this.querySelector("#stb-cancel");
            textarea.readOnly = !textarea.readOnly;
            edit.textContent = language[0];
            textarea.value = saveValue;
            cancel.style.display = "none";
            return null;
        });
        this.querySelector("form").addEventListener("submit", (e) => {
            e.preventDefault();
            const textarea = this.querySelector("textarea");
            saveValue = textarea.value.trim();
            textarea.value = saveValue;
            return saveValue;
        });
        this.getSaveValue = () => {
            return saveValue;
        };
        this.setSaveValue = (value) => {
            value = String(value).trim();
            saveValue = value;
            this.querySelector("textarea").value = value;
            return value;
        };
    };

    connectedCallback() {
        console.log("> Save TextBox ready !");
    };

    disconnectedCallback() {
        console.log("< Save TextBox unset !");
    };
};

customElements.define("save-text-box", SaveTextBox);

// For LICENSE and README see ./SaveTextBox.md //

// http://loudupoitou.dns-dynamic.net //
