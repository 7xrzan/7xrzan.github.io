// Suzanne Low-Poly Mesh para hero.js
// Inspirado en el modelo clásico de Blender, optimizado para wireframe

const vs = [
    // Cráneo y frente
    {x: 0, y: 0.5, z: 0},      // 0: Cima de la cabeza
    {x: 0.3, y: 0.2, z: 0.3},   // 1: Ceja derecha (frente)
    {x: -0.3, y: 0.2, z: 0.3},  // 2: Ceja izquierda (frente)
    {x: 0.35, y: 0.1, z: -0.3}, // 3: Atrás derecha
    {x: -0.35, y: 0.1, z: -0.3},// 4: Atrás izquierda
    
    // Hocico y mandíbula
    {x: 0, y: -0.1, z: 0.6},    // 5: Punta de la nariz/hocico
    {x: 0.15, y: -0.3, z: 0.4}, // 6: Mandíbula derecha
    {x: -0.15, y: -0.3, z: 0.4},// 7: Mandíbula izquierda
    {x: 0, y: -0.5, z: 0},      // 8: Mentón/Base
    
    // Oreja Derecha
    {x: 0.4, y: 0.2, z: 0},     // 9: Base oreja R arriba
    {x: 0.7, y: 0.3, z: -0.1},  // 10: Punta oreja R arriba
    {x: 0.7, y: -0.1, z: -0.1}, // 11: Punta oreja R abajo
    {x: 0.4, y: -0.2, z: 0},    // 12: Base oreja R abajo
    
    // Oreja Izquierda
    {x: -0.4, y: 0.2, z: 0},    // 13: Base oreja L arriba
    {x: -0.7, y: 0.3, z: -0.1}, // 14: Punta oreja L arriba
    {x: -0.7, y: -0.1, z: -0.1},// 15: Punta oreja L abajo
    {x: -0.4, y: -0.2, z: 0}     // 16: Base oreja L abajo
];

const fs = [
    // Caras de la cabeza (frente y laterales)
    [0, 1, 2], [1, 5, 2], [1, 6, 5], [2, 5, 7],
    [1, 9, 3], [2, 4, 13], [3, 0, 4], [0, 1, 3], [0, 4, 2],
    
    // Mandíbula y base
    [6, 8, 7], [5, 6, 7], [3, 8, 6], [4, 7, 8], [3, 4, 8],
    
    // Oreja Derecha
    [9, 10, 11], [9, 11, 12], [1, 9, 12], [1, 12, 6],
    
    // Oreja Izquierda
    [13, 15, 14], [13, 16, 15], [2, 16, 13], [2, 7, 16]
];

