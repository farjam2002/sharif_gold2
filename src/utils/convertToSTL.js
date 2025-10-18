// File: src/lib/convertToSTL.js
// FINAL — Stable STL/DXF Export Engine for Sharif Gold Studio
// Compatible with Three.js v0.155

import * as THREE from 'three';
import { STLExporter } from 'three/examples/jsm/exporters/STLExporter.js';
import DxfWriter, { point, polyline } from 'dxf-writer';

// -------- Create base geometry --------
export function createJewelryGeometry(pieceType = 'ring', size_mm = 56) {
  let geometry;

  switch (pieceType) {
    case 'ring':
      geometry = new THREE.TorusGeometry(size_mm / 10, 1.6, 32, 64);
      break;
    case 'bracelet':
      geometry = new THREE.TorusGeometry(size_mm / 10, 2.4, 32, 96);
      break;
    case 'necklace':
      geometry = new THREE.TorusGeometry(size_mm / 20, 0.6, 20, 128);
      break;
    case 'earpiece':
      geometry = new THREE.SphereGeometry(size_mm / 15, 64, 64);
      break;
    default:
      geometry = new THREE.BoxGeometry(10, 10, 10);
      break;
  }

  const mesh = new THREE.Mesh(
    geometry,
    new THREE.MeshStandardMaterial({ color: 0xffd700, roughness: 0.3, metalness: 1 })
  );
  mesh.name = `${pieceType}_mesh`;
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

// -------- STL Export --------
export function exportToSTL(object3D) {
  const exporter = new STLExporter();
  const stlString = exporter.parse(object3D);
  return new Blob([stlString], { type: 'model/stl' });
}

// -------- DXF Export --------
export function exportToDXF(object3D) {
  const dxf = new DxfWriter();
  dxf.setUnits('Millimeters');
  object3D.geometry.computeBoundingBox();

  const { min, max } = object3D.geometry.boundingBox;
  const points = [
    point(min.x, min.y),
    point(max.x, min.y),
    point(max.x, max.y),
    point(min.x, max.y),
    point(min.x, min.y),
  ];
  const pl = polyline(points);
  dxf.addPolyline(pl);
  return new Blob([dxf.stringify()], { type: 'application/dxf' });
}

// -------- Generate & Download STL --------
export function generateAndDownloadSTL(pieceType = 'ring', size_mm = 56) {
  const mesh = createJewelryGeometry(pieceType, size_mm);
  const blob = exportToSTL(mesh);
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${pieceType}-${Date.now()}.stl`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(link.href);
}

// -------- Generate & Download DXF --------
export function generateAndDownloadDXF(pieceType = 'ring', size_mm = 56) {
  const mesh = createJewelryGeometry(pieceType, size_mm);
  const blob = exportToDXF(mesh);
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${pieceType}-${Date.now()}.dxf`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(link.href);
}
