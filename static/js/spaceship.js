(function() {
    const vertices = [
    {x: 0, y: 0, z: 0.9},      // 0: Punta (Nose)
    {x: 0.15, y: 0.1, z: 0.3},  // 1: Cuerpo superior derecha
    {x: -0.15, y: 0.1, z: 0.3}, // 2: Cuerpo superior izquierda
    {x: 0.15, y: -0.1, z: 0.3}, // 3: Cuerpo inferior derecha
    {x: -0.15, y: -0.1, z: 0.3},// 4: Cuerpo inferior izquierda
    
    // --- CABINA (COCKPIT) ---
    {x: 0, y: 0.25, z: 0.1},    // 5: Techo de la cabina
    {x: 0, y: 0.15, z: 0.4},    // 6: Parabrisas frontal
    
    // --- ALAS (WINGS) ---
    {x: 0.7, y: -0.05, z: -0.3}, // 7: Punta ala derecha
    {x: -0.7, y: -0.05, z: -0.3},// 8: Punta ala izquierda
    {x: 0.2, y: 0, z: -0.4},     // 9: Base ala trasera R
    {x: -0.2, y: 0, z: -0.4},    // 10: Base ala trasera L
    
    // --- MOTORES / PARTE TRASERA ---
    {x: 0.15, y: 0.15, z: -0.5}, // 11: Escape superior R
    {x: -0.15, y: 0.15, z: -0.5},// 12: Escape superior L
    {x: 0.15, y: -0.15, z: -0.5},// 13: Escape inferior R
    {x: -0.15, y: -0.15, z: -0.5},// 14: Escape inferior L
    
    // --- ESTABILIZADOR VERTICAL ---
    {x: 0, y: 0.4, z: -0.5}  ,
    ];
    const faces = [
            [0, 1, 6], [0, 6, 2], [0, 3, 1], [0, 2, 4], [0, 4, 3],
    
    // Cabina
    [6, 1, 5], [6, 5, 2], [5, 1, 11], [5, 12, 2],
    
    // Alas (Derecha)
    [1, 7, 3], [3, 7, 13], [1, 11, 7], [11, 13, 7],
    
    // Alas (Izquierda)
    [2, 4, 8], [4, 14, 8], [2, 8, 12], [12, 8, 14],
    
    // Parte Trasera y Motores
    [11, 12, 14], [11, 14, 13], [3, 13, 4], [4, 13, 14],
    
    // Estabilizador Vertical (Aleta)
    [5, 15, 11], [5, 12, 15], [11, 15, 12],

    
    ];

    // Registramos este modelo en el sistema global
    window.registerMesh("spaceship", vertices, faces);
})();

// const vs = [
//     // --- CUERPO CENTRAL ---
//     {x: 0, y: 0, z: 0.9},      // 0: Punta (Nose)
//     {x: 0.15, y: 0.1, z: 0.3},  // 1: Cuerpo superior derecha
//     {x: -0.15, y: 0.1, z: 0.3}, // 2: Cuerpo superior izquierda
//     {x: 0.15, y: -0.1, z: 0.3}, // 3: Cuerpo inferior derecha
//     {x: -0.15, y: -0.1, z: 0.3},// 4: Cuerpo inferior izquierda
//
//     // --- CABINA (COCKPIT) ---
//     {x: 0, y: 0.25, z: 0.1},    // 5: Techo de la cabina
//     {x: 0, y: 0.15, z: 0.4},    // 6: Parabrisas frontal
//
//     // --- ALAS (WINGS) ---
//     {x: 0.7, y: -0.05, z: -0.3}, // 7: Punta ala derecha
//     {x: -0.7, y: -0.05, z: -0.3},// 8: Punta ala izquierda
//     {x: 0.2, y: 0, z: -0.4},     // 9: Base ala trasera R
//     {x: -0.2, y: 0, z: -0.4},    // 10: Base ala trasera L
//
//     // --- MOTORES / PARTE TRASERA ---
//     {x: 0.15, y: 0.15, z: -0.5}, // 11: Escape superior R
//     {x: -0.15, y: 0.15, z: -0.5},// 12: Escape superior L
//     {x: 0.15, y: -0.15, z: -0.5},// 13: Escape inferior R
//     {x: -0.15, y: -0.15, z: -0.5},// 14: Escape inferior L
//
//     // --- ESTABILIZADOR VERTICAL ---
//     {x: 0, y: 0.4, z: -0.5}      // 15: Punta de la aleta trasera
// ];
//
// const fs = [
//     // Caras de la Nariz a la Cabina
//     [0, 1, 6], [0, 6, 2], [0, 3, 1], [0, 2, 4], [0, 4, 3],
//
//     // Cabina
//     [6, 1, 5], [6, 5, 2], [5, 1, 11], [5, 12, 2],
//
//     // Alas (Derecha)
//     [1, 7, 3], [3, 7, 13], [1, 11, 7], [11, 13, 7],
//
//     // Alas (Izquierda)
//     [2, 4, 8], [4, 14, 8], [2, 8, 12], [12, 8, 14],
//
//     // Parte Trasera y Motores
//     [11, 12, 14], [11, 14, 13], [3, 13, 4], [4, 13, 14],
//
//     // Estabilizador Vertical (Aleta)
//     [5, 15, 11], [5, 12, 15], [11, 15, 12]
// ];
