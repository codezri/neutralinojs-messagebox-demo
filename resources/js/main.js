async function showMessageBox() {
    const type = document.getElementById("type").value;
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    
    const result = await Neutralino.os.showMessageBox({type, title, content});
    document.getElementById("result").innerText = JSON.stringify(result);
}

window.showMessageBox = showMessageBox;

Neutralino.init();
