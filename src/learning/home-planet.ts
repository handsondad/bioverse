import * as THREE from 'three';
import { mountDuo, type DuoKit, type DuoStage } from '../series/duo-stage';

/** 生物奇遇记的小星球：在系列同一颗星球上，摆一台显微镜、一株向日葵和培养皿，头顶飘着 DNA 双螺旋、透明细胞和小蝴蝶。 */

function ball(kit: DuoKit, color: string, r: number, at: [number, number, number]): THREE.Mesh {
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(r, 18, 12), kit.toon(color));
  mesh.position.set(...at);
  return mesh;
}

function rod(kit: DuoKit, color: string, from: THREE.Vector3, to: THREE.Vector3, r = 0.018): THREE.Mesh {
  const length = from.distanceTo(to);
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(r, r, length, 8), kit.toon(color));
  mesh.position.copy(from).lerp(to, 0.5);
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), to.clone().sub(from).normalize());
  return mesh;
}

function microscope(kit: DuoKit): THREE.Group {
  const group = new THREE.Group();
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.21, 0.05, 18), kit.toon('#4a5d52'));
  base.position.y = 0.025;
  const stage = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.025, 0.2), kit.toon('#3d4a44'));
  stage.position.set(0.03, 0.16, 0);
  const slide = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.01, 0.06), kit.toon('#c8f2dc'));
  slide.position.set(0.03, 0.178, 0);
  const arm = new THREE.Mesh(new THREE.TorusGeometry(0.15, 0.032, 10, 20, Math.PI * 0.95), kit.toon('#f3efe6'));
  arm.position.set(-0.08, 0.22, 0);
  arm.rotation.z = Math.PI * 0.5;
  const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.042, 0.048, 0.24, 14), kit.toon('#ffffff'));
  tube.position.set(0.04, 0.34, 0);
  tube.rotation.z = -0.22;
  const eyepiece = new THREE.Mesh(new THREE.CylinderGeometry(0.034, 0.034, 0.08, 12), kit.toon('#2e7d32'));
  eyepiece.position.set(0.07, 0.47, 0);
  eyepiece.rotation.z = -0.22;
  const objective = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.028, 0.06, 12), kit.toon('#ff9f43'));
  objective.position.set(0.015, 0.215, 0);
  objective.rotation.z = -0.22;
  group.add(base, stage, slide, arm, tube, eyepiece, objective);
  return group;
}

function sunflower(kit: DuoKit): THREE.Group {
  const group = new THREE.Group();
  const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.095, 0.14, 16), kit.toon('#d97b4a'));
  pot.position.y = 0.07;
  const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.022, 0.34, 8), kit.toon('#3d9949'));
  stem.position.y = 0.27;
  for (const side of [-1, 1]) {
    const leaf = new THREE.Mesh(new THREE.SphereGeometry(0.07, 12, 8), kit.toon('#56b85c'));
    leaf.scale.set(1.4, 0.35, 0.7);
    leaf.position.set(side * 0.085, 0.24 + (side > 0 ? 0.04 : 0), 0);
    leaf.rotation.z = side * 0.35;
    group.add(leaf);
  }
  const head = new THREE.Group();
  head.position.set(0, 0.46, 0.02);
  head.rotation.x = 0.25;
  const center = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.085, 0.035, 16), kit.toon('#704423'));
  center.rotation.x = Math.PI / 2;
  head.add(center);
  const petalMat = kit.toon('#ffd23f');
  for (let i = 0; i < 10; i += 1) {
    const a = (i / 10) * Math.PI * 2;
    const petal = new THREE.Mesh(new THREE.SphereGeometry(0.042, 10, 8), petalMat);
    petal.scale.set(1.3, 0.65, 0.35);
    petal.position.set(Math.cos(a) * 0.11, Math.sin(a) * 0.11, -0.005);
    petal.rotation.z = a;
    head.add(petal);
  }
  group.add(pot, stem, head);
  return group;
}

function petriDish(kit: DuoKit): THREE.Group {
  const group = new THREE.Group();
  const glass = kit.toon('#e8faf0');
  glass.transparent = true;
  glass.opacity = 0.55;
  const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.055, 24), glass);
  rim.position.y = 0.028;
  const agar = new THREE.Mesh(new THREE.CylinderGeometry(0.165, 0.165, 0.022, 24), kit.toon('#c6f0d0'));
  agar.position.y = 0.018;
  group.add(agar, rim);
  const dots: [number, number, string, number][] = [
    [-0.06, 0.04, '#ff8fb1', 0.032],
    [0.05, -0.04, '#ffb347', 0.028],
    [0.06, 0.05, '#6cc4ff', 0.024],
    [-0.04, -0.06, '#b48cff', 0.025],
  ];
  for (const [x, z, color, r] of dots) {
    const colony = new THREE.Mesh(new THREE.SphereGeometry(r, 12, 8), kit.toon(color));
    colony.scale.y = 0.45;
    colony.position.set(x, 0.032, z);
    group.add(colony);
  }
  return group;
}

function dnaHelix(kit: DuoKit): THREE.Group {
  const group = new THREE.Group();
  const pairs = [
    ['#ff6b6b', '#4dabf7'],
    ['#ffd43b', '#51cf66'],
    ['#4dabf7', '#ff6b6b'],
    ['#51cf66', '#ffd43b'],
    ['#ff6b6b', '#4dabf7'],
    ['#ffd43b', '#51cf66'],
  ];
  const radius = 0.16;
  const stepY = 0.11;
  let prevA: THREE.Vector3 | null = null;
  let prevB: THREE.Vector3 | null = null;
  pairs.forEach(([c1, c2], i) => {
    const angle = i * 0.85;
    const y = (i - (pairs.length - 1) / 2) * stepY;
    const a = new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius);
    const b = new THREE.Vector3(-Math.cos(angle) * radius, y, -Math.sin(angle) * radius);
    const mid = new THREE.Vector3(0, y, 0);
    group.add(ball(kit, '#2e7d32', 0.042, [a.x, a.y, a.z]));
    group.add(ball(kit, '#2e7d32', 0.042, [b.x, b.y, b.z]));
    group.add(rod(kit, c1, a, mid, 0.018));
    group.add(rod(kit, c2, mid, b, 0.018));
    if (prevA && prevB) {
      group.add(rod(kit, '#8ce09b', prevA, a, 0.015));
      group.add(rod(kit, '#8ce09b', prevB, b, 0.015));
    }
    prevA = a;
    prevB = b;
  });
  group.rotation.z = 0.35;
  return group;
}

function cellOrb(kit: DuoKit): THREE.Group {
  const group = new THREE.Group();
  const membrane = kit.toon('#b7f0c4');
  membrane.transparent = true;
  membrane.opacity = 0.5;
  group.add(new THREE.Mesh(new THREE.SphereGeometry(0.24, 22, 16), membrane));
  group.add(ball(kit, '#7c52b8', 0.095, [0.02, 0.02, 0]));
  group.add(ball(kit, '#ff9f43', 0.042, [-0.11, -0.07, 0.06]));
  group.add(ball(kit, '#4dabf7', 0.036, [0.1, -0.09, -0.05]));
  return group;
}

function butterfly(kit: DuoKit): { group: THREE.Group; left: THREE.Group; right: THREE.Group } {
  const group = new THREE.Group();
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.012, 0.14, 8), kit.toon('#4a3828'));
  body.rotation.x = Math.PI / 2;
  group.add(body);
  const makeWing = (side: number): THREE.Group => {
    const pivot = new THREE.Group();
    const upper = new THREE.Mesh(new THREE.CircleGeometry(0.095, 16), new THREE.MeshToonMaterial({ color: '#ff9f43', side: THREE.DoubleSide }));
    upper.rotation.x = -Math.PI / 2;
    upper.position.set(side * 0.09, 0, -0.03);
    const lower = new THREE.Mesh(new THREE.CircleGeometry(0.065, 14), new THREE.MeshToonMaterial({ color: '#ffd43b', side: THREE.DoubleSide }));
    lower.rotation.x = -Math.PI / 2;
    lower.position.set(side * 0.07, 0, 0.05);
    pivot.add(upper, lower);
    group.add(pivot);
    return pivot;
  };
  const left = makeWing(-1);
  const right = makeWing(1);
  return { group, left, right };
}

function decorate(kit: DuoKit): void {
  const scope = microscope(kit);
  scope.scale.setScalar(1.25);
  kit.plant(scope, 1.15, -0.15);

  const flower = sunflower(kit);
  flower.scale.setScalar(1.2);
  kit.plant(flower, -1.25, -0.1);

  const dish = petriDish(kit);
  dish.scale.setScalar(1.15);
  kit.plant(dish, -0.9, 0.55);

  const sprout = sunflower(kit);
  sprout.scale.setScalar(0.8);
  kit.plant(sprout, 1.0, 0.52);

  const dna = dnaHelix(kit);
  const cell = cellOrb(kit);
  const floaters = [
    { object: dna, at: new THREE.Vector3(-1.85, 1.95, -1.1), spin: 0.7 },
    { object: cell, at: new THREE.Vector3(1.35, 2.4, -1.8), spin: -0.35 },
  ];
  floaters.forEach(({ object, at }) => {
    object.position.copy(at);
    kit.scene.add(object);
  });

  const flutter = butterfly(kit);
  const center = new THREE.Vector3(-0.1, 2.55, -2.1);
  kit.scene.add(flutter.group);

  kit.onFrame((t, dt) => {
    floaters.forEach(({ object, at, spin }, i) => {
      object.rotation.y += dt * spin;
      object.position.y = at.y + Math.sin(t * 1.1 + i * 2) * 0.08;
    });
    const flap = Math.sin(t * 9) * 0.65;
    flutter.left.rotation.z = flap;
    flutter.right.rotation.z = -flap;
    flutter.group.position.set(
      center.x + Math.cos(t * 0.7) * 0.55,
      center.y + Math.sin(t * 1.4) * 0.16,
      center.z + Math.sin(t * 0.7) * 0.25,
    );
    flutter.group.rotation.y = -t * 0.7;
  });
}

export function mountBioPlanet(host: HTMLElement, onTap: () => void): Promise<DuoStage> {
  return mountDuo(host, { label: '小念和爸爸站在生物小星球上，旁边摆着显微镜和向日葵，头顶飘着 DNA 双螺旋；点他们会接着聊', decorate, onTap });
}
