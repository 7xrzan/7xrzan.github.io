// Nudo Toroidal para hero.js
const vs = [];
const fs = [];

const p = 2; // Vueltas alrededor del eje principal
const q = 3; // Vueltas a través del agujero
const segments = 80;    // Resolución a lo largo del nudo
const tubeSegments = 8; // Resolución del grosor del tubo
const radius = 0.4;     // Radio mayor
const tubeRadius = 0.08; // Grosor del nudo

for (let i = 0; i < segments; i++) {
    const u = (i / segments) * Math.PI * 2;
    
    // Ecuación paramétrica del nudo toroidal
    const r_knot = radius * (0.8 + 0.4 * Math.cos(q * u));
    const x_knot = r_knot * Math.cos(p * u);
    const y_knot = r_knot * Math.sin(p * u);
    const z_knot = radius * 0.4 * Math.sin(q * u);

    // Vectores para generar el tubo (Aproximación de Frenet-Serret)
    const next_u = ((i + 1) / segments) * Math.PI * 2;
    const dx = Math.cos(p * next_u) - Math.cos(p * u);
    const dy = Math.sin(p * next_u) - Math.sin(p * u);
    const tangent = { x: dx, y: dy, z: 0 };
    const mag = Math.sqrt(tangent.x**2 + tangent.y**2);
    const normal = { x: -tangent.y / mag, y: tangent.x / mag, z: 0 };
    const binormal = { x: 0, y: 0, z: 1 };

    for (let j = 0; j < tubeSegments; j++) {
        const v = (j / tubeSegments) * Math.PI * 2;
        const cx = Math.cos(v) * tubeRadius;
        const cy = Math.sin(v) * tubeRadius;

        // Añadir vértice del tubo
        vs.push({
            x: x_knot + cx * normal.x + cy * binormal.x,
            y: y_knot + cx * normal.y + cy * binormal.y,
            z: z_knot + cx * normal.z + cy * binormal.z
        });
    }
}

// Generar las caras (fs) conectando los segmentos del tubo
for (let i = 0; i < segments; i++) {
    for (let j = 0; j < tubeSegments; j++) {
        const i_next = (i + 1) % segments;
        const j_next = (j + 1) % tubeSegments;

        const a = i * tubeSegments + j;
        const b = i_next * tubeSegments + j;
        const c = i_next * tubeSegments + j_next;
        const d = i * tubeSegments + j_next;

        // Dos triángulos por cada sección de la malla
        fs.push([a, b, c]);
        fs.push([a, c, d]);
    }
}
