// static/js/hero.js
const BACKGROUND = "#000000";
const FOREGROUND = "#0A9396";
const game = document.getElementById("hero-canvas");
const ctx = game.getContext("2d");
game.width = 400;
game.height = 400;

// Variables de estado
let isPowerOn = true;
let currentMeshIndex = 0;
window.loadedMeshes = []; // Aquí guardaremos todos los modelos cargados

// Función para que otros archivos (torus.js, penger.js) registren su mesh
window.registerMesh = function(name, vertices, faces) {
    window.loadedMeshes.push({ name, vs: vertices, fs: faces });
};

function clear() {
    ctx.fillStyle = BACKGROUND;
    ctx.fillRect(0, 0, game.width, game.height);
}

function screen(p) {
    return {
        x: ((p.x + 1) / 2) * game.width,
        y: (1 - (p.y + 1) / 2) * game.height,
    };
}

function project({ x, y, z }) {
    return { x: x / z, y: y / z };
}

function translate_z({ x, y, z }, dz) {
    return { x, y, z: z + dz };
}

function rotate_xz({ x, y, z }, angle) {
    const c = Math.cos(angle);
    const s = Math.sin(angle);
    return {
        x: x * c - z * s,
        y,
        z: x * s + z * c,
    };
}

function line(p1, p2) {
    ctx.lineWidth = 3;
    ctx.strokeStyle = FOREGROUND;
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
}

let angle = 0;
const FPS = 60;

function frame() {
    if (!isPowerOn) {
        setTimeout(frame, 1000 / FPS);
        return;
    }

    angle += 0.03;
    clear();

    // Solo dibujamos si hay meshes cargados
    if (window.loadedMeshes.length > 0) {
        const mesh = window.loadedMeshes[currentMeshIndex];
        const dz = 1;

        for (const f of mesh.fs) {
            for (let i = 0; i < f.length; i++) {
                // Soportamos tanto objetos {x,y,z} como arrays [x,y,z]
                const aRaw = mesh.vs[f[i]];
                const bRaw = mesh.vs[f[(i + 1) % f.length]];
                
                const a = Array.isArray(aRaw) ? {x: aRaw[0], y: aRaw[1], z: aRaw[2]} : aRaw;
                const b = Array.isArray(bRaw) ? {x: bRaw[0], y: bRaw[1], z: bRaw[2]} : bRaw;

                line(
                    screen(project(translate_z(rotate_xz(a, angle), dz))),
                    screen(project(translate_z(rotate_xz(b, angle), dz)))
                );
            }
        }
    }
    setTimeout(frame, 1000 / FPS);
}

// --- CONFIGURACIÓN DE BOTONES ---
document.addEventListener("DOMContentLoaded", () => {
    const redBtn = document.querySelector(".red-btn");
    const blackBtn = document.querySelector(".black-btn");
    const terminalBody = document.querySelector(".terminal-body");

    // Botón Rojo: Encender/Apagar
    redBtn.addEventListener("click", () => {
        isPowerOn = !isPowerOn;
        terminalBody.classList.toggle("off");
    });

    // Botón Negro: Cambiar de Mesh
    blackBtn.addEventListener("click", () => {
        if (isPowerOn && window.loadedMeshes.length > 0) {
            currentMeshIndex = (currentMeshIndex + 1) % window.loadedMeshes.length;
        }
    });

    frame();
});
