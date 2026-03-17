// Atractor de Lorenz para hero.js
(function() {
    const vs = [];
    const fs = [];

    // --- Generación del Atractor de Lorenz ---
    let x = 0.1, y = 0, z = 0;
    const sigma = 10, rho = 28, beta = 8/3;
    const dt = 0.015;     // Paso de tiempo
    const steps = 250;    // Cantidad de segmentos (ajustado para rendimiento)
    const scale = 0.022;  // Escala para encajar en el canvas
    const thickness = 0.03; // Grosor del "tubo" wireframe

    const points = [];
    for (let i = 0; i < steps; i++) {
        let dx = sigma * (y - x);
        let dy = x * (rho - z) - y;
        let dz = x * y - beta * z;
        
        x += dx * dt;
        y += dy * dt;
        z += dz * dt;
        
        // Centramos en Z (el atractor oscila entre 0 y 50 aprox)
        points.push({
            x: x * scale,
            y: y * scale,
            z: (z - 25) * scale
        });
    }

    // --- Construcción del Mesh (Tubo Triangular) ---
    for (let i = 0; i < points.length; i++) {
        const p = points[i];
        
        // Creamos 3 vértices alrededor del punto central para dar volumen
        vs.push({ x: p.x - thickness, y: p.y - thickness, z: p.z });
        vs.push({ x: p.x + thickness, y: p.y - thickness, z: p.z });
        vs.push({ x: p.x,             y: p.y + thickness, z: p.z });

        // Conectamos con el segmento anterior formando caras (quads)
        if (i > 0) {
            const prev = (i - 1) * 3;
            const curr = i * 3;
            
            // Cara 1
            fs.push([prev, curr, curr + 1, prev + 1]);
            // Cara 2
            fs.push([prev + 1, curr + 1, curr + 2, prev + 2]);
            // Cara 3
            fs.push([prev + 2, curr + 2, curr, prev]);
        }
    }

    // Registro automático en el sistema de hero.js
    window.registerMesh("lorenz", vs, fs);
})();
