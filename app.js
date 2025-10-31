const app = document.getElementById('app');

const nodes = [
    { id: 1, text: 'Main Idea', x: 300, y: 200 },
    { id: 2, text: 'Sub Idea', x: 500, y: 300 }
];

nodes.forEach(node => {
    const el = document.createElement('div');
    el.className = 'node';
    el.innerText = node.text;
    el.style.left = node.x + pageXOffset;
    el.style.top = node.y + 'px';
    app.appendChild(el);

    // = Drag Logic

    let offsetX, offsetY;
    el.onmousedown = (e) => {
        offsetX = e.offsetX;
        offsetY = e.offsetY;
        document.onmousemove = (moveEvent) => {
            node.x = moveEvent.pageX - offsetX;
            node.y = moveEvent.pageY - offsetY;
            el.style.left = node.x + 'px';
            el.style.top = node.y + 'px';
        };
        document.onmouseup = () => document.onmousedown = null;
    };

    // = Edit text on double-click
    
    el.ondblclick = () => {
        const newText = prompt('Edit text:', node.text);
        if (newText) {
            node.text = newText;
            el.innerText = newText;
        }
    };
});