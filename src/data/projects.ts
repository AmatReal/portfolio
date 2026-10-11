export interface MediaItem {
  type: 'video' | 'image';
  src: string;
  alt: string;
}

export type ProjectCategory =
  | 'Character & Creature Rigs'
  | 'Mechanical & Hard-Surface Rigs'
  | 'Specialized Rigs & R&D';

export interface Project {
  id: string;
  category: ProjectCategory;
  eyebrow: string;
  title: string;
  description: string[];
  technologies: string;
  breakdownUrl: string;
  preview: string;
  items: MediaItem[];
}

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
const A = (path: string) => `${BASE}${path}`;

const IMG = 'Dragon Rig & Animation';
const ANT = 'Old Ant Rig';
const BEAR = 'Bear Rig - AR';
const DREAM = 'Dream Sequence';
const GAUNTLET = 'Gauntlet Of Gods';
const MERCY = 'Mercy Rig';
const MILLING = 'Milling Machine';
const MONSTER = 'Monster Leg';
const CREATURE = 'TheCreature';
const ARTHUR = 'Sir Arthur';
const ARCHIVES = 'ProjectArchives';
const RYTHBALL = 'Rythball Logo';
const SIMPLE_ARM = 'Simple Arm';
const SPIDER = 'Spider';

export const projects: Record<string, Project> = {
  dragon: {
    id: 'dragon',
    category: 'Character & Creature Rigs',
    eyebrow: 'Featured — Creature Rig',
    title: 'Dragon Rig & Animation',
    description: [
      'Adapted and optimized a high-resolution dragon sculpt into a fully animatable rig. Developed IK/FK systems using drivers and constraints, along with secondary physics-based bones to enhance realism and motion detail.',
    ],
    technologies: 'Blender, Drivers, IK/FK, Constraints, Secondary Physics',
    breakdownUrl: 'https://www.instagram.com/p/DRiERhjj-78/',
    preview: A(`/assets/images/${IMG}/Dragon Rig - Render.png`),
    items: [
      { type: 'image', src: A(`/assets/images/${IMG}/Dragon Rig - Render.png`), alt: 'Dragon Rig Render' },
      { type: 'image', src: A(`/assets/images/${IMG}/Dragon Rig - viewport1.png`), alt: 'Dragon Rig Viewport 1' },
      { type: 'image', src: A(`/assets/images/${IMG}/Dragon Rig - viewport2.jpeg`), alt: 'Dragon Rig Viewport 2' },
    ],
  },
  ant: {
    id: 'ant',
    category: 'Character & Creature Rigs',
    eyebrow: 'Featured — Gameplay Rig',
    title: 'Old Ant Rig',
    description: [
      'Designed a gameplay-focused rig for the player character in Ant Defender, prioritizing flexibility and responsiveness for movement and emotes in Unreal Engine. Implemented IK systems with supporting FK controls, along with drivers, constraints, and a toggle system for switching between standing and running states.',
    ],
    technologies: 'Unreal Engine, Blender, IK + FK, Drivers, Constraints, State Toggle',
    breakdownUrl: 'https://www.instagram.com/p/DLiuzmoNlZq/',
    preview: A(`/assets/images/${ANT}/Old Ant Rig Cover.png`),
    items: [
      { type: 'image', src: A(`/assets/images/${ANT}/Old Ant Rig Cover.png`), alt: 'Old Ant Rig Cover' },
      { type: 'video', src: A(`/assets/videos/${ARCHIVES}/OldAntRig.mp4`), alt: 'Old Ant Rig Animation' },
      { type: 'image', src: A(`/assets/images/${ANT}/Ant Rig - Close up.jpeg`), alt: 'Old Ant Rig Close up' },
    ],
  },
  bear: {
    id: 'bear',
    category: 'Character & Creature Rigs',
    eyebrow: 'Featured — AR / Unity',
    title: 'Bear Rig - AR',
    description: [
      'Created a lightweight rig for an augmented reality experience in Unity, triggered via QR code scanning on a presentation card. Optimized the rig to work with a low-poly mesh while maintaining functional and intuitive controls for animation.',
    ],
    technologies: 'Unity, AR, QR Trigger, Low-poly Rig',
    breakdownUrl: 'https://www.instagram.com/p/DORQnnBj0He/',
    preview: A(`/assets/images/${BEAR}/BearRig - Render.png`),
    items: [
      { type: 'image', src: A(`/assets/images/${BEAR}/BearRig - Render.png`), alt: 'Bear Rig Render' },
      { type: 'image', src: A(`/assets/images/${BEAR}/Bear Rig - Scene.jpg`), alt: 'Bear Rig Scene' },
    ],
  },
  'gauntlet-of-gods': {
    id: 'gauntlet-of-gods',
    category: 'Character & Creature Rigs',
    eyebrow: 'Animation — Game Cinematic',
    title: 'Gauntlet Of Gods - Pwnisher Challenge',
    description: [
      'Stylized cinematic for the Gauntlet Of Gods card battler. Rigged the rabbit hero and built the low-poly world with geometry-node driven eyes, trading card renders and orchestrated camera moves.',
    ],
    technologies: 'Blender, Geometry Nodes, Animation, Camera Work',
    breakdownUrl: 'https://www.instagram.com/amat.3d/?hl=en',
    preview: A(`/assets/images/${GAUNTLET}/Gauntlet Of Gods Cover.png`),
    items: [
      { type: 'image', src: A(`/assets/images/${GAUNTLET}/Gauntlet Of Gods Cover.png`), alt: 'Gauntlet Of Gods Cover' },
      { type: 'video', src: A(`/assets/videos/${GAUNTLET}/Gauntlet Of Gods.mp4`), alt: 'Gauntlet Of Gods Animation' },
      { type: 'image', src: A(`/assets/images/${GAUNTLET}/Gauntlet Of Gods.png`), alt: 'Gauntlet Of Gods Poster' },
      { type: 'image', src: A(`/assets/images/${GAUNTLET}/Captura de pantalla 2026-09-01 004836.png`), alt: 'Gauntlet Of Gods scene outliner' },
      { type: 'image', src: A(`/assets/images/${GAUNTLET}/Gauntlet Of Gods (1).png`), alt: 'Gauntlet Of Gods render 1' },
      { type: 'image', src: A(`/assets/images/${GAUNTLET}/Gauntlet Of Gods (1).jpeg`), alt: 'Gauntlet Of Gods render 1 crop' },
      { type: 'image', src: A(`/assets/images/${GAUNTLET}/Gauntlet Of Gods (2).png`), alt: 'Gauntlet Of Gods render 2' },
      { type: 'image', src: A(`/assets/images/${GAUNTLET}/Gauntlet Of Gods (2).jpeg`), alt: 'Gauntlet Of Gods render 2 crop' },
      { type: 'image', src: A(`/assets/images/${GAUNTLET}/Gauntlet Of Gods (3).png`), alt: 'Gauntlet Of Gods render 3' },
      { type: 'image', src: A(`/assets/images/${GAUNTLET}/Gauntlet Of Gods (3).jpeg`), alt: 'Gauntlet Of Gods render 3 crop' },
      { type: 'image', src: A(`/assets/images/${GAUNTLET}/Gauntlet Of Gods (4).png`), alt: 'Gauntlet Of Gods render 4' },
      { type: 'image', src: A(`/assets/images/${GAUNTLET}/Gauntlet Of Gods (4).jpeg`), alt: 'Gauntlet Of Gods render 4 crop' },
      { type: 'image', src: A(`/assets/images/${GAUNTLET}/Gauntlet Of Gods (5).jpeg`), alt: 'Gauntlet Of Gods render 5' },
    ],
  },
  'mercy-rig': {
    id: 'mercy-rig',
    category: 'Character & Creature Rigs',
    eyebrow: 'Character Rig — Full Setup',
    title: 'Mercy Rig',
    description: [
      'Complete Mercy character rig with FK and IK setups for body and legs, detailed hand and facial controls, and wing geometry shaped for expressive support poses.',
    ],
    technologies: 'Blender, IK/FK, Facial Controls, Hand Rigging',
    breakdownUrl: 'https://www.instagram.com/amat.3d/?hl=en',
    preview: A(`/assets/images/${MERCY}/Mercy Cover.png`),
    items: [
      { type: 'image', src: A(`/assets/images/${MERCY}/Mercy Cover.png`), alt: 'Mercy Rig Cover' },
      { type: 'image', src: A(`/assets/images/${MERCY}/Face close up.png`), alt: 'Mercy Rig Face close up' },
      { type: 'image', src: A(`/assets/images/${MERCY}/Hand close up.png`), alt: 'Mercy Rig Hand close up' },
      { type: 'image', src: A(`/assets/images/${MERCY}/FK Body.png`), alt: 'Mercy Rig FK Body' },
      { type: 'image', src: A(`/assets/images/${MERCY}/FK Legs.png`), alt: 'Mercy Rig FK Legs' },
      { type: 'image', src: A(`/assets/images/${MERCY}/IK Body.png`), alt: 'Mercy Rig IK Body' },
      { type: 'image', src: A(`/assets/images/${MERCY}/IK Legs.png`), alt: 'Mercy Rig IK Legs' },
    ],
  },
  'mechanical-arm': {
    id: 'mechanical-arm',
    category: 'Mechanical & Hard-Surface Rigs',
    eyebrow: 'Mechanical Rig — Hard Surface',
    title: 'Complex Arm',
    description: [
      'Hard-surface rig in Maya with precise constraints and FK controls for mechanical articulation and cinematic shots.',
    ],
    technologies: 'Maya, Hard-Surface, Constraints, FK Controls',
    breakdownUrl: 'https://www.instagram.com/amat.3d/?hl=en',
    preview: A('/assets/images/Complex Arm/Complex Arm Cover.png'),
    items: [
      { type: 'image', src: A('/assets/images/Complex Arm/Complex Arm Cover.png'), alt: 'Complex Arm Cover' },
      { type: 'video', src: A(`/assets/videos/${ARCHIVES}/ComplexArm.mp4`), alt: 'Complex Arm Animation' },
      { type: 'image', src: A('/assets/images/Complex Arm/Full view.png'), alt: 'Complex Arm Full view' },
      { type: 'image', src: A('/assets/images/Complex Arm/Side view.png'), alt: 'Complex Arm Side view' },
    ],
  },
  'wrecking-ball': {
    id: 'wrecking-ball',
    category: 'Mechanical & Hard-Surface Rigs',
    eyebrow: 'Mechanical Rig — Physics',
    title: 'Wrecking Ball Rig',
    description: [
      'Physics-driven chain rig with secondary motion and weight control, built for dynamic destruction sequences.',
    ],
    technologies: 'Maya, Constraints, Secondary Motion, Weight Control',
    breakdownUrl: 'https://www.instagram.com/amat.3d/?hl=en',
    preview: A('/assets/images/Wrecking Ball Rig/Wrecking Ball Cover.png'),
    items: [
      { type: 'image', src: A('/assets/images/Wrecking Ball Rig/Wrecking Ball Cover.png'), alt: 'Wrecking Ball Cover' },
      { type: 'video', src: A(`/assets/videos/${ARCHIVES}/WreckingBall.mp4`), alt: 'Wrecking Ball Animation' },
      { type: 'image', src: A('/assets/images/Wrecking Ball Rig/Wrecking Ball Rig.png'), alt: 'Wrecking Ball Rig viewport' },
    ],
  },
  'dream-sequence': {
    id: 'dream-sequence',
    category: 'Character & Creature Rigs',
    eyebrow: 'Animation — Challenge',
    title: 'Dream Sequence — Pwnisher Challenge',
    description: [
      '4-second 120 BPM beat-driven animation for community challenge, built and animated entirely in Blender.',
    ],
    technologies: 'Blender, Animation, 120 BPM',
    breakdownUrl: 'https://www.instagram.com/amat.3d/?hl=en',
    preview: A(`/assets/images/${DREAM}/Dream Sequence Cover.png`),
    items: [
      { type: 'image', src: A(`/assets/images/${DREAM}/Dream Sequence Cover.png`), alt: 'Dream Sequence Cover' },
      { type: 'video', src: A(`/assets/videos/${DREAM}/Dream Sequence - Animation.mp4`), alt: 'Dream Sequence Animation' },
      { type: 'video', src: A(`/assets/videos/${DREAM}/Dream Sequence - Mesh Test.mp4`), alt: 'Dream Sequence Mesh Test' },
      { type: 'image', src: A(`/assets/images/${DREAM}/DreamSequence - cover.png`), alt: 'Dream Sequence Cover alt' },
    ],
  },
  'ant-model': {
    id: 'ant-model',
    category: 'Character & Creature Rigs',
    eyebrow: 'Modeling — Character',
    title: 'Ant Model',
    description: [
      'High-detail character model sculpt and retopology for rigging, with clean topology for deformation.',
    ],
    technologies: 'Blender, Modeling, Retopology',
    breakdownUrl: 'https://www.instagram.com/amat.3d/?hl=en',
    preview: A('/assets/images/Ant Model/AntModel Cover.jpg'),
    items: [
      { type: 'image', src: A('/assets/images/Ant Model/AntModel Cover.jpg'), alt: 'Ant Model Cover' },
    ],
  },
  ball: {
    id: 'ball',
    category: 'Specialized Rigs & R&D',
    eyebrow: 'Specialized Rig — Principles',
    title: 'Simple Ball',
    description: [
      'Bouncing ball rig built to practice animation principles, with squash & stretch controls and an intuitive setup for timing and spacing exercises.',
    ],
    technologies: 'Blender, Squash & Stretch, Controls, Animation Principles',
    breakdownUrl: 'https://www.instagram.com/amat.3d/?hl=en',
    preview: A('/assets/images/Simple Ball/Simple Ball Cover.png'),
    items: [
      { type: 'image', src: A('/assets/images/Simple Ball/Simple Ball Cover.png'), alt: 'Simple Ball Cover' },
      { type: 'video', src: A(`/assets/videos/${ARCHIVES}/SimpleBall.mp4`), alt: 'Simple Ball Animation' },
      { type: 'image', src: A('/assets/images/Simple Ball/Captura de pantalla 2026-09-03 174829.png'), alt: 'Simple Ball viewport 1' },
      { type: 'image', src: A('/assets/images/Simple Ball/Captura de pantalla 2026-09-03 174801.png'), alt: 'Simple Ball viewport 2' },
    ],
  },
  bunny: {
    id: 'bunny',
    category: 'Character & Creature Rigs',
    eyebrow: 'Creature Rig — Stylized',
    title: 'Bunny Rig',
    description: [
      'Stylized bunny character rig with IK/FK limbs, facial controls and corrective shapes, built for expressive cartoon-style motion.',
    ],
    technologies: 'Blender, IK/FK, Facial Controls, Corrective Shapes',
    breakdownUrl: 'https://www.instagram.com/amat.3d/?hl=en',
    preview: A('/assets/images/Bunny Rig/Captura de pantalla 2026-08-25 182108.png'),
    items: [
      { type: 'image', src: A('/assets/images/Bunny Rig/Captura de pantalla 2026-08-25 182108.png'), alt: 'Bunny Rig viewport 1' },
      { type: 'image', src: A('/assets/images/Bunny Rig/Captura de pantalla 2026-08-25 121100.png'), alt: 'Bunny Rig viewport 2' },
    ],
  },
  eye: {
    id: 'eye',
    category: 'Specialized Rigs & R&D',
    eyebrow: 'Specialized Rig — Facial Setup',
    title: 'Eye Rig',
    description: [
      'Eye rig with aim-constrained look-at controls, driver-driven blinks and supportive shaping for expressive character gazes.',
    ],
    technologies: 'Blender, Aim Constraints, Drivers, Facial Controls',
    breakdownUrl: 'https://www.instagram.com/amat.3d/?hl=en',
    preview: A('/assets/images/Eye Rig/Captura de pantalla 2026-08-13 185020.png'),
    items: [
      { type: 'image', src: A('/assets/images/Eye Rig/Captura de pantalla 2026-08-13 185020.png'), alt: 'Eye Rig viewport 1' },
      { type: 'image', src: A('/assets/images/Eye Rig/Captura de pantalla 2026-08-12 205602.png'), alt: 'Eye Rig viewport 2' },
    ],
  },
  gatoppel: {
    id: 'gatoppel',
    category: 'Character & Creature Rigs',
    eyebrow: 'Creature Rig — Character',
    title: 'Gatoppel',
    description: [
      'Stylized cat character rig with IK/FK blending, intuitive control curves and secondary motion for lively performances.',
    ],
    technologies: 'Blender, IK/FK, Constraints, Control Curves',
    breakdownUrl: 'https://www.instagram.com/amat.3d/?hl=en',
    preview: A('/assets/images/Gatoppel/GatoppelCover2.png'),
    items: [
      { type: 'image', src: A('/assets/images/Gatoppel/GatoppelCover2.png'), alt: 'Gatoppel Cover' },
      { type: 'image', src: A('/assets/images/Gatoppel/GatoppelStanding.png'), alt: 'Gatoppel standing' },
      { type: 'image', src: A('/assets/images/Gatoppel/1778816426962.jpg'), alt: 'Gatoppel render 1' },
      { type: 'image', src: A('/assets/images/Gatoppel/1778816426903.jpg'), alt: 'Gatoppel render 2' },
      { type: 'image', src: A('/assets/images/Gatoppel/1778816424599.jpg'), alt: 'Gatoppel render 3' },
    ],
  },
  girl: {
    id: 'girl',
    category: 'Character & Creature Rigs',
    eyebrow: 'Character Rig — Stylized',
    title: 'Girl Rig',
    description: [
      'Stylized girl character rig with a full facial setup, IK/FK limbs and secondary dynamics, validated through a series of animation tests.',
    ],
    technologies: 'Blender, IK/FK, Facial Rig, Dynamics',
    breakdownUrl: 'https://www.instagram.com/amat.3d/?hl=en',
    preview: A('/assets/images/Girl Rig/Girl Rig Cover.png'),
    items: [
      { type: 'image', src: A('/assets/images/Girl Rig/Girl Rig Cover.png'), alt: 'Girl Rig Cover' },
      { type: 'video', src: A('/assets/images/Girl Rig/2026-04-23 10-34-16.mp4'), alt: 'Girl Rig test 1' },
      { type: 'video', src: A('/assets/images/Girl Rig/2026-04-23 10-33-43.mp4'), alt: 'Girl Rig test 2' },
      { type: 'video', src: A('/assets/images/Girl Rig/2026-04-23 08-52-41.mp4'), alt: 'Girl Rig test 3' },
      { type: 'video', src: A('/assets/images/Girl Rig/2026-04-23 08-51-58.mp4'), alt: 'Girl Rig test 4' },
      { type: 'image', src: A('/assets/images/Girl Rig/FrtontView.png'), alt: 'Girl Rig front view' },
      { type: 'image', src: A('/assets/images/Girl Rig/Captura de pantalla 2026-06-10 114944.png'), alt: 'Girl Rig viewport 1' },
      { type: 'image', src: A('/assets/images/Girl Rig/Captura de pantalla 2026-06-05 125518.png'), alt: 'Girl Rig viewport 2' },
    ],
  },
  turret: {
    id: 'turret',
    category: 'Mechanical & Hard-Surface Rigs',
    eyebrow: 'Mechanical Rig — Hard Surface',
    title: 'Turret Tracking',
    description: [
      'Hard-surface turret rig with articulated aiming controls, constrained mechanical parts and game-ready ranges of motion.',
    ],
    technologies: 'Blender, Hard-Surface, Constraints, Game-Ready',
    breakdownUrl: 'https://www.instagram.com/amat.3d/?hl=en',
    preview: A('/assets/images/Turret Tracking/Turret cover.png'),
    items: [
      { type: 'image', src: A('/assets/images/Turret Tracking/Turret cover.png'), alt: 'Turret Tracking Cover' },
      { type: 'video', src: A(`/assets/videos/${ARCHIVES}/Turret Tracking.mp4`), alt: 'Turret Tracking Animation' },
      { type: 'image', src: A('/assets/images/Turret Tracking/Captura de pantalla 2026-09-03 174651.png'), alt: 'Turret Tracking viewport 1' },
      { type: 'image', src: A('/assets/images/Turret Tracking/Captura de pantalla 2026-09-03 174640.png'), alt: 'Turret Tracking viewport 2' },
    ],
  },
  'monster-leg': {
    id: 'monster-leg',
    category: 'Character & Creature Rigs',
    eyebrow: 'Creature Rig — Leg Setup',
    title: 'Monster Leg',
    description: [
      'Creature leg rig with IK/FK blending, foot roll and claw articulation, built for weighty monster locomotion.',
    ],
    technologies: 'Blender, IK/FK, Foot Controls',
    breakdownUrl: 'https://www.instagram.com/amat.3d/?hl=en',
    preview: A(`/assets/images/${MONSTER}/Full view.png`),
    items: [
      { type: 'image', src: A(`/assets/images/${MONSTER}/Full view.png`), alt: 'Monster Leg Full view' },
      { type: 'video', src: A(`/assets/videos/${ARCHIVES}/MonsterLeg.mp4`), alt: 'Monster Leg Animation' },
      { type: 'image', src: A(`/assets/images/${MONSTER}/Feet close up.png`), alt: 'Monster Leg Feet close up' },
      { type: 'image', src: A(`/assets/images/${MONSTER}/FK View.png`), alt: 'Monster Leg FK View' },
      { type: 'image', src: A(`/assets/images/${MONSTER}/IK View.png`), alt: 'Monster Leg IK View' },
    ],
  },
  'the-creature': {
    id: 'the-creature',
    category: 'Character & Creature Rigs',
    eyebrow: 'Creature Rig — Cloth',
    title: 'TheCreature',
    description: [
      'Ghostly creature rig with a simulated cloth robe, antler and body control clusters, and staged camera framing for animated shots.',
    ],
    technologies: 'Blender, Cloth, Controls, Animation',
    breakdownUrl: 'https://www.instagram.com/amat.3d/?hl=en',
    preview: A(`/assets/images/${CREATURE}/TheCreature Cover.png`),
    items: [
      { type: 'image', src: A(`/assets/images/${CREATURE}/TheCreature Cover.png`), alt: 'TheCreature Cover' },
      { type: 'video', src: A(`/assets/videos/${ARCHIVES}/TheCreature.mp4`), alt: 'TheCreature Animation' },
      { type: 'image', src: A(`/assets/images/${CREATURE}/Captura de pantalla 2026-10-10 071309.png`), alt: 'TheCreature viewport 1' },
      { type: 'image', src: A(`/assets/images/${CREATURE}/Captura de pantalla 2026-10-10 071356.png`), alt: 'TheCreature viewport 2' },
    ],
  },
  'sir-arthur': {
    id: 'sir-arthur',
    category: 'Character & Creature Rigs',
    eyebrow: 'Character Rig — Stylized',
    title: 'Sir Arthur',
    description: [
      'Stylized knight rig with standing and posed setups, refined control curves and backstage documentation of the deformation work.',
    ],
    technologies: 'Blender, IK/FK, Control Curves',
    breakdownUrl: 'https://www.instagram.com/amat.3d/?hl=en',
    preview: A(`/assets/images/${ARTHUR}/Sir Arthur Cover.png`),
    items: [
      { type: 'image', src: A(`/assets/images/${ARTHUR}/Sir Arthur Cover.png`), alt: 'Sir Arthur Cover' },
      { type: 'image', src: A(`/assets/images/${ARTHUR}/Standing Rig.png`), alt: 'Sir Arthur Standing Rig' },
      { type: 'image', src: A(`/assets/images/${ARTHUR}/Posed Rig.png`), alt: 'Sir Arthur Posed Rig' },
      { type: 'image', src: A(`/assets/images/${ARTHUR}/Close Up.png`), alt: 'Sir Arthur Close Up' },
      { type: 'image', src: A(`/assets/images/${ARTHUR}/Arthur Backstage.png`), alt: 'Arthur Backstage' },
    ],
  },
  spider: {
    id: 'spider',
    category: 'Character & Creature Rigs',
    eyebrow: 'Creature Rig — Arachnid',
    title: 'Spider Rig',
    description: [
      'Spider rig with articulated leg chains and creepy-crawly secondary motion, built for creature animation tests.',
    ],
    technologies: 'Blender, Leg IK, Secondary Motion',
    breakdownUrl: 'https://www.instagram.com/amat.3d/?hl=en',
    preview: A(`/assets/images/${SPIDER}/Spider Cover.png`),
    items: [
      { type: 'image', src: A(`/assets/images/${SPIDER}/Spider Cover.png`), alt: 'Spider Rig Cover' },
      { type: 'video', src: A(`/assets/videos/${ARCHIVES}/Spider.mp4`), alt: 'Spider Rig Animation' },
      { type: 'image', src: A(`/assets/images/${SPIDER}/Spider Top Rig View.png`), alt: 'Spider Rig Top View' },
    ],
  },
  'simple-arm': {
    id: 'simple-arm',
    category: 'Mechanical & Hard-Surface Rigs',
    eyebrow: 'Mechanical Rig — Basic',
    title: 'Simple Arm',
    description: [
      'Simple robotic arm rig with articulated joints and clean constraints for mechanical motion tests.',
    ],
    technologies: 'Blender, Constraints, Hard-Surface',
    breakdownUrl: 'https://www.instagram.com/amat.3d/?hl=en',
    preview: A(`/assets/images/${SIMPLE_ARM}/Simple Arm Cover.png`),
    items: [
      { type: 'image', src: A(`/assets/images/${SIMPLE_ARM}/Simple Arm Cover.png`), alt: 'Simple Arm Cover' },
      { type: 'video', src: A(`/assets/videos/${ARCHIVES}/SimpleArm.mp4`), alt: 'Simple Arm Animation' },
      { type: 'image', src: A(`/assets/images/${SIMPLE_ARM}/side view.png`), alt: 'Simple Arm Side view' },
    ],
  },
  'milling-machine': {
    id: 'milling-machine',
    category: 'Mechanical & Hard-Surface Rigs',
    eyebrow: 'Mechanical Rig — Machine',
    title: 'Milling Machine',
    description: [
      'Milling machine rig with constrained mechanical articulation across spindle, table and hand wheels for precise machine motion.',
    ],
    technologies: 'Blender, Hard-Surface, Constraints',
    breakdownUrl: 'https://www.instagram.com/amat.3d/?hl=en',
    preview: A(`/assets/images/${MILLING}/Machine Cover.png`),
    items: [
      { type: 'image', src: A(`/assets/images/${MILLING}/Machine Cover.png`), alt: 'Milling Machine Cover' },
      { type: 'image', src: A(`/assets/images/${MILLING}/Captura de pantalla 2026-10-10 071630.png`), alt: 'Milling Machine viewport 1' },
      { type: 'image', src: A(`/assets/images/${MILLING}/Captura de pantalla 2026-10-10 071653.png`), alt: 'Milling Machine viewport 2' },
    ],
  },
  'rythball-logo': {
    id: 'rythball-logo',
    category: 'Specialized Rigs & R&D',
    eyebrow: 'Animation — Logo Sting',
    title: 'Rythball Logo',
    description: [
      'Rigged logo animation for Rythball, where the T turns into a soccer leg that kicks the ball with punchy, rhythmic timing.',
    ],
    technologies: 'Blender, Rigging, Animation, Motion Design',
    breakdownUrl: 'https://www.instagram.com/amat.3d/?hl=en',
    preview: A(`/assets/images/${RYTHBALL}/LogoRythball.png`),
    items: [
      { type: 'image', src: A(`/assets/images/${RYTHBALL}/LogoRythball.png`), alt: 'Rythball Logo' },
      { type: 'video', src: A(`/assets/videos/${ARCHIVES}/RythballLogo.mp4`), alt: 'Rythball Logo Animation' },
      { type: 'image', src: A(`/assets/images/${RYTHBALL}/Rig View logo.png`), alt: 'Rythball Logo Rig View' },
      { type: 'image', src: A(`/assets/images/${RYTHBALL}/Leg close up.png`), alt: 'Rythball Logo Leg close up' },
    ],
  },
};

export interface ProjectCardTag {
  label: string;
  icon?: string;
}

export interface ProjectCardData {
  glyph: string;
  gradient: string;
  title: string;
  description: string;
  tags: ProjectCardTag[];
  ariaLabel: string;
  image?: string;
  project?: string;
}

export interface ProjectGroup {
  category: ProjectCategory;
  cards: ProjectCardData[];
}

export const projectGroups: ProjectGroup[] = [
  {
    category: 'Character & Creature Rigs',
    cards: [
      {
        glyph: '◆',
        gradient: 'linear-gradient(135deg,#0f1430,#1a1e3a)',
        title: 'Dragon Rig & Animation',
        description:
          'Adapted high-res dragon sculpt into fully animatable rig with IK/FK, drivers, constraints and secondary physics bones for realism.',
        tags: [{ label: 'Blender' }, { label: 'Deformation' }, { label: 'Physics' }],
        ariaLabel: 'Abrir Dragon Rig',
        image: projects.dragon.preview,
        project: 'dragon',
      },
      {
        glyph: '⬢',
        gradient: 'linear-gradient(135deg,#0f1a0f,#1e3a1e)',
        title: 'Old Ant Rig',
        description:
          'Player character rig for Ant Defender in Unreal, IK + supporting FK, drivers and mode switching for gameplay.',
        tags: [{ label: 'Unreal engine' }, { label: 'Blender' }, { label: 'Game-Ready' }],
        ariaLabel: 'Abrir Old Ant Rig',
        image: projects.ant.preview,
        project: 'ant',
      },
      {
        glyph: '✿',
        gradient: 'linear-gradient(135deg,#0f1430,#1a2a55)',
        title: 'Girl Rig',
        description:
          'Stylized girl character rig with full facial setup, IK/FK limbs and secondary dynamics, validated through animation tests.',
        tags: [{ label: 'Blender' }, { label: 'Blendshapes' }, { label: 'Physics' }],
        ariaLabel: 'Abrir Girl Rig',
        image: projects.girl.preview,
        project: 'girl',
      },
      {
        glyph: '❍',
        gradient: 'linear-gradient(135deg,#141430,#2a2a4a)',
        title: 'Bunny Rig',
        description:
          'Stylized bunny character rig with IK/FK limbs, facial controls and corrective shapes for expressive cartoon motion.',
        tags: [{ label: 'Blender' }, { label: 'Blendshapes' }],
        ariaLabel: 'Abrir Bunny Rig',
        image: projects.bunny.preview,
        project: 'bunny',
      },
      {
        glyph: '✦',
        gradient: 'linear-gradient(135deg,#131a38,#232a55)',
        title: 'Gatoppel',
        description:
          'Stylized cat character rig with IK/FK blending, intuitive control curves and secondary motion for lively performances.',
        tags: [{ label: 'Blender' }],
        ariaLabel: 'Abrir Gatoppel',
        image: projects.gatoppel.preview,
        project: 'gatoppel',
      },
      {
        glyph: '✚',
        gradient: 'linear-gradient(135deg,#0f1430,#1e2a4a)',
        title: 'Mercy Rig',
        description:
          'Complete Mercy character rig with FK and IK setups for body and legs, detailed hand and facial controls and wing shaping.',
        tags: [{ label: 'Blender' }, { label: 'Blendshapes' }, { label: 'Deformation' }],
        ariaLabel: 'Abrir Mercy Rig',
        image: projects['mercy-rig'].preview,
        project: 'mercy-rig',
      },
      {
        glyph: '❦',
        gradient: 'linear-gradient(135deg,#0e141a,#1a2a38)',
        title: 'Monster Leg',
        description:
          'Creature leg rig with IK/FK blending, foot roll and claw articulation, built for weighty monster locomotion.',
        tags: [{ label: 'Blender' }, { label: 'Deformation' }],
        ariaLabel: 'Abrir Monster Leg',
        image: projects['monster-leg'].preview,
        project: 'monster-leg',
      },
      {
        glyph: '❈',
        gradient: 'linear-gradient(135deg,#101018,#232336)',
        title: 'TheCreature',
        description:
          'Ghostly creature rig with a simulated cloth robe, antler and body control clusters and staged camera framing.',
        tags: [{ label: 'Blender' }, { label: 'Physics' }],
        ariaLabel: 'Abrir TheCreature',
        image: projects['the-creature'].preview,
        project: 'the-creature',
      },
      {
        glyph: '♛',
        gradient: 'linear-gradient(135deg,#131328,#252550)',
        title: 'Sir Arthur',
        description:
          'Stylized knight rig with standing and posed setups, refined control curves and backstage documentation of the deformation work.',
        tags: [{ label: 'Blender' }, { label: 'Deformation' }],
        ariaLabel: 'Abrir Sir Arthur',
        image: projects['sir-arthur'].preview,
        project: 'sir-arthur',
      },
      {
        glyph: '⁂',
        gradient: 'linear-gradient(135deg,#0c0c16,#1e1e30)',
        title: 'Spider Rig',
        description:
          'Spider rig with articulated leg chains and creepy-crawly secondary motion, built for creature animation tests.',
        tags: [{ label: 'Blender' }],
        ariaLabel: 'Abrir Spider Rig',
        image: projects.spider.preview,
        project: 'spider',
      },
      {
        glyph: '◎',
        gradient: 'linear-gradient(135deg,#1a1710,#3a2f1a)',
        title: 'Bear Rig - AR',
        description:
          'Lightweight rig for AR triggered via QR on presentation card, optimized for low-poly mesh with intuitive controls.',
        tags: [{ label: 'Unity' }, { label: 'Game-Ready' }],
        ariaLabel: 'Abrir Bear Rig',
        image: projects.bear.preview,
        project: 'bear',
      },
      {
        glyph: '⬣',
        gradient: 'linear-gradient(135deg,#0f1a1e,#143a3e)',
        title: 'Ant Model',
        description:
          'High-detail character model sculpt and retopology for rigging, with clean topology for deformation.',
        tags: [{ label: 'Blender' }, { label: 'Deformation' }],
        ariaLabel: 'Abrir Ant Model',
        image: projects['ant-model'].preview,
        project: 'ant-model',
      },
    ],
  },
  {
    category: 'Mechanical & Hard-Surface Rigs',
    cards: [
      {
        glyph: '⧉',
        gradient: 'linear-gradient(135deg,#1a1a1e,#2f2f3a)',
        title: 'Complex Arm',
        description:
          'Hard-surface rig in Maya with precise constraints and FK controls for mechanical articulation and cinematic shots.',
        tags: [{ label: 'Maya' }],
        ariaLabel: 'Abrir Complex Arm',
        image: projects['mechanical-arm'].preview,
        project: 'mechanical-arm',
      },
      {
        glyph: '⌖',
        gradient: 'linear-gradient(135deg,#10141a,#263042)',
        title: 'Turret Tracking',
        description:
          'Hard-surface turret rig with articulated aiming controls, constrained mechanical parts and game-ready ranges of motion.',
        tags: [{ label: 'Blender' }, { label: 'Game-Ready' }],
        ariaLabel: 'Abrir Turret Tracking',
        image: projects.turret.preview,
        project: 'turret',
      },
      {
        glyph: '◉',
        gradient: 'linear-gradient(135deg,#1e1510,#3d2a1a)',
        title: 'Wrecking Ball Rig',
        description:
          'Physics-driven chain rig with secondary motion and weight control, built for dynamic destruction sequences.',
        tags: [{ label: 'Maya' }, { label: 'Physics' }],
        ariaLabel: 'Abrir Wrecking Ball Rig',
        image: projects['wrecking-ball'].preview,
        project: 'wrecking-ball',
      },
      {
        glyph: '⚙',
        gradient: 'linear-gradient(135deg,#10141a,#242e3e)',
        title: 'Milling Machine',
        description:
          'Milling machine rig with constrained mechanical articulation across spindle, table and hand wheels for precise machine motion.',
        tags: [{ label: 'Blender' }],
        ariaLabel: 'Abrir Milling Machine',
        image: projects['milling-machine'].preview,
        project: 'milling-machine',
      },
      {
        glyph: '⌁',
        gradient: 'linear-gradient(135deg,#101820,#203040)',
        title: 'Simple Arm',
        description:
          'Simple robotic arm rig with articulated joints and clean constraints for mechanical motion tests.',
        tags: [{ label: 'Blender' }],
        ariaLabel: 'Abrir Simple Arm',
        image: projects['simple-arm'].preview,
        project: 'simple-arm',
      },
    ],
  },
  {
    category: 'Specialized Rigs & R&D',
    cards: [
      {
        glyph: '◉',
        gradient: 'linear-gradient(135deg,#0e1a26,#1c3a4a)',
        title: 'Eye Rig',
        description:
          'Eye rig with aim-constrained look-at controls, driver-driven blinks and supportive shaping for expressive character gazes.',
        tags: [{ label: 'Blender' }, { label: 'Blendshapes' }],
        ariaLabel: 'Abrir Eye Rig',
        image: projects.eye.preview,
        project: 'eye',
      },
      {
        glyph: '●',
        gradient: 'linear-gradient(135deg,#101a2e,#1c2c4a)',
        title: 'Simple Ball',
        description:
          'Bouncing ball rig built to practice animation principles, with squash & stretch controls for timing and spacing exercises.',
        tags: [{ label: 'Blender' }],
        ariaLabel: 'Abrir Simple Ball',
        image: projects.ball.preview,
        project: 'ball',
      },
      {
        glyph: '♪',
        gradient: 'linear-gradient(135deg,#0a0a1e,#16164a)',
        title: 'Rythball Logo',
        description:
          'Animated logo sting for Rythball with rhythmic motion design and punchy timing.',
        tags: [{ label: 'Blender' }],
        ariaLabel: 'Abrir Rythball Logo',
        image: projects['rythball-logo'].preview,
        project: 'rythball-logo',
      },
    ],
  },
];
