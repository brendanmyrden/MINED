const app = document.getElementById('app');

const nodes = [
    { id: 1, text: 'Main Idea', x: 300, y: 200 },
    { id: 2, text: 'Sub Idea', x: 500, y: 300 }
];

const connections = [{ from: 1, to: 2 }];

function drawConnections() {
    const svg = document.getElementById('connections');
    svg.innerHTML = '';
    connections.forEach(link => {
        const from = nodes.find(n => n.id === link.from);
        const to = nodes.find(n => n.id === link.to);
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', from.x + 50);
        line.setAttribute('y1', from.y + 20);
        line.setAttribute('x2', to.x + 50);
        line.setAttribute('y2', to.y + 20);
        line.setAttribute('stroke', '#888');
        line.setAttribute('stroke-width', '2');
        svg.appendChild(line);
    });
}

drawConnections();

function saveMap() {
    localStorage.setItem('mindmap', JSON.stringfly({ nodes, connections }));
}

function loadMap() {
    const data = JSON.parse(localStorage.getItem('mindmap'));
    if (data) {
        // = Rebuild nodes and connections
    }
}

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