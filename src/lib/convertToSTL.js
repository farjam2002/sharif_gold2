// File: src/lib/convertToSTL.js
// Final Stable – Geometry & Export (Sharif Gold Studio)
// Compatible with Three.js 0.155 + Vite/React 18

import * as THREE from 'three';
import { STLExporter } from 'three/examples/jsm/exporters/STLExporter.js';
import DxfWriter, { point, polyline } from 'dxf-writer';

// -------- Create basic 3D geometry for each jewelry type --------
export function createJewelryGeometry(pieceType = 'ring', size_mm = 56) {
  let mesh;

  switch (pieceType) {
    case 'ring': {
      const radius = size_mm / 10;            // mm → cm scale
      const tubeRadius = 1.6;
      const geometry = new THREE.TorusGeometry(radius, tubeRadius, 32, 64);
      mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({ color: 0xffd700 }));
      break;
    }
    case 'bracelet': {
      const radius = size_mm / 10;
      const thickness = 2.5;
      const geometry = new THREE.TorusGeometry(radius, thickness, 32, 96);
      mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({ color: 0xffaa00 }));
      break;
    }
    case 'necklace': {
      const radius = size_mm / 20;
      const geometry = new THREE.TorusGeometry(radius, 0.6, 20, 128);
      mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({ color: 0xeeeeee }));
      break;
    }
    case 'earpiece': {
      const geometry = new THREE.SphereGeometry(size_mm / 15, 64, 64);
      mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({ color: 0xffeeee }));
      break;
    }
    default: {
      const geometry = new THREE.BoxGeometry(10, 10, 10);
      mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({ color: 0xcccccc }));
    }
  }

  mesh.name = `${pieceType}_geometry`;
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

// -------- Export STL File --------
export function exportToSTL(object3D) {
  const exporter = new STLExporter();
  const scene = new THREE.Scene();
  scene.add(object3D);
  const stlString = exporter.parse(scene);

  const blob = new Blob([stlString], { type: 'model/stl' });
  return blob;
}

// -------- Export DXF File (outline only) --------
export function exportToDXF(object3D) {
  const dxf = new DxfWriter();
  dxf.setUnits('Millimeters');
  object3D.geometry.computeBoundingBox();

  const { min, max } = object3D.geometry.boundingBox;
  const boxPoints = [
    point(min.x, min.y),
    point(max.x, min.y),
    point(max.x, max.y),
    point(min.x, max.y),
    point(min.x, min.y),
  ];

  const pl = polyline(boxPoints);
  dxf.addPolyline(pl);

  const blob = new Blob([dxf.stringify()], { type: 'application/dxf' });
  return blob;
}

// -------- Generate geometry and trigger STL download --------
export function generateAndDownloadSTL(pieceType = 'ring', size_mm = 56) {
  const mesh = createJewelryGeometry(pieceType, size_mm);
  const stlBlob = exportToSTL(mesh);
  const fileName = `${pieceType}-${Date.now()}.stl`;

  const link = document.createElement('a');
  link.href = URL.createObjectURL(stlBlob);
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(link.href);
}

// -------- Optional: Generate DXF and trigger download --------
export function generateAndDownloadDXF(pieceType = 'ring', size_mm = 56) {
  const mesh = createJewelryGeometry(pieceType, size_mm);
  const dxfBlob = exportToDXF(mesh);
  const fileName = `${pieceType}-${Date.now()}.dxf`;

  const link = document.createElement('a');
  link.href = URL.createObjectURL(dxfBlob);
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(link.href);
}
