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
  /** Optional related-projects links rendered in the modal (e.g. "Project Assets" / "Used In"). */
  related?: RelatedLink[];
}

export interface RelatedLink {
  /** Heading of the section, e.g. "Project Assets" or "Used In". */
  label: string;
  /** ids of related projects */
  projects: string[];
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
      'Adapted and optimized a high-resolution dragon sculpt into a fully animatable rig. Developed IK/FK systems using drivers and constraints, along with secondary physics-based bones to enhance realism and motion detail. Used Blender built in flame simulation during early tests, currently testing flame simulations in EmberGen.',
    ],
    technologies: 'Blender, Drivers, IK/FK, Constraints, Secondary Physics, Camera control, Fire simulation',
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
      'Designed a gameplay-focused rig for the player character in an early version of Ant Defender, running on C++ and DirectX 11, prioritizing flexibility, optimization and responsiveness for limited memory and resources. Implemented IK systems with supporting FK controls, along with drivers and constraints.',
    ],
    technologies: 'Blender, IK/FK, Drivers, Constraints, Optimization, Low Poly',
    breakdownUrl: 'https://www.instagram.com/p/DLjiFBRAsBn/?hl=en&img_index=1',
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
      'Created a lightweight rig for an augmented reality mobile experience in Unity, triggered via QR code scanning on a presentation card. Optimized the rig to work with a low-poly mesh while maintaining functional and intuitive controls for animation.',
    ],
    technologies: 'Unity, AR, QR Trigger, Low Poly, Mobile',
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
      'Stylized 5-second cinematic for the Gauntlet Of Gods community challenge. Composed of multiple rigs and a modular environment with custom UI and drivers for lightning, movement and effects, as well as different Geometry Node setups for the scene.',
    ],
    technologies: 'Blender, Geometry Nodes, Animation, Camera Work, Drivers, Custom UI, Modular Environment',
    breakdownUrl: '',
    preview: A(`/assets/images/${GAUNTLET}/Gauntlet Of Gods Cover.png`),
    related: [
      { label: 'Project Assets', projects: ['bunny', 'eye', 'tracking-eyes', 'scenery'] },
    ],
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
      'Mercy character rig with FK and IK setups for body and legs, detailed hand, facial and body controls. The rig is designed for use in animation and game development, with different switches for IK/FK and to disable or enable controls. At the moment the rig needs polishing on certain controls and deformations.',
    ],
    technologies: 'Maya, IK/FK, Facial Controls, Hand Rigging, Body Controls, Corrective Shapes.',
    breakdownUrl: '',
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
      'Hard-surface rig in Maya with precise constraints and FK controls for mechanical articulation and ease of use.',
    ],
    technologies: 'Maya, Hard-Surface, Constraints, FK Controls',
    breakdownUrl: '',
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
      'FK controled Chain rig with easy motion and weight control.',
    ],
    technologies: 'Maya, Constraints, Weight Control',
    breakdownUrl: 'https://www.instagram.com/p/DLn9nkQt5RI/?hl=en',
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
      '4-second 120 BPM beat-driven animation for a community challenge, built and animated entirely in Blender. The animation implements multiple camera tricks with a modular environment that changes during the sequence, and a stylized dough character rig with blendshape-driven deformation for a cartoon motion.',
    ],
    technologies: 'Blender, Animation, Rythmic Timing, Camera Tricks, Modular Environment, Blendshapes',
    breakdownUrl: 'https://www.instagram.com/p/DVhes2NEhkm/?hl=en',
    preview: A(`/assets/images/${DREAM}/Dream Sequence Cover.png`),
    related: [
      { label: 'Project Assets', projects: ['dough'] },
    ],
    items: [
      { type: 'image', src: A(`/assets/images/${DREAM}/Dream Sequence Cover.png`), alt: 'Dream Sequence Cover' },
      { type: 'video', src: A(`/assets/videos/${DREAM}/Dream Sequence - Animation.mp4`), alt: 'Dream Sequence Animation' },
      { type: 'video', src: A(`/assets/videos/${DREAM}/Dream Sequence - Mesh Test.mp4`), alt: 'Dream Sequence Mesh Test' },
      { type: 'image', src: A(`/assets/images/${DREAM}/DreamSequence - cover.png`), alt: 'Dream Sequence Cover alt' },
    ],
  },
  dough: {
    id: 'dough',
    category: 'Character & Creature Rigs',
    eyebrow: 'Character Rig — Stylized',
    title: 'Dough',
    description: [
      'Stylized dough rig with blendshape-driven deformation for a cartoon motion, used as an asset in the Dream Sequence challenge animation.',
    ],
    technologies: 'Blender, Blendshapes, Animation',
    breakdownUrl: 'https://www.instagram.com/p/DVhes2NEhkm/?hl=en',
    preview: A('/assets/images/Dough/DoughCover.png'),
    related: [
      { label: 'Used In', projects: ['dream-sequence'] },
    ],
    items: [
      { type: 'image', src: A('/assets/images/Dough/DoughCover.png'), alt: 'Dough Cover' },
      { type: 'video', src: A(`/assets/videos/${ARCHIVES}/Dough.mp4`), alt: 'Dough Animation' },
    ],
  },
  'ant-model': {
    id: 'ant-model',
    category: 'Character & Creature Rigs',
    eyebrow: 'Modeling — Character',
    title: 'Ant Model',
    description: [
      'Low poly character model made for rigging, optimized to be used on a C++ with DirectX 11 engine.',
    ],
    technologies: 'Blender, Modeling, Optimization, Low Poly',
    breakdownUrl: '',
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
      'An assignment from P2Design rigging course, a bouncing ball rig built to practice animation principles, with squash & stretch controls and an intuitive setup for timing and spacing.',
    ],
    technologies: 'Blender, Squash & Stretch, Controls, Animation Principles, Course Assignment',
    breakdownUrl: '',
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
      'Stylized bunny character rig with FK limbs, facial controls and corrective shapes, built for simple movements during the Gauntlet Of Gods challenge animation.',
    ],
    technologies: 'Blender, FK Controls, Corrective Shapes',
    breakdownUrl: '',
    preview: A('/assets/images/Bunny Rig/Captura de pantalla 2026-08-25 182108.png'),
    related: [
      { label: 'Used In', projects: ['gauntlet-of-gods'] },
    ],
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
    breakdownUrl: '',
    preview: A('/assets/images/Eye Rig/Captura de pantalla 2026-08-13 185020.png'),
    related: [
      { label: 'Used In', projects: ['gauntlet-of-gods'] },
    ],
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
      'Stylized cat character rig with FK limbs, intuitive control curves and secondary motion for lively performances.',
    ],
    technologies: 'Blender, FK limbs, Control Curves',
    breakdownUrl: '',
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
      'Stylized girl character rig that uses jiggle bones for the hair and clothing movement, corrective shapes, and with IK/FK toggleable controls, validated through a series of animation tests.',
    ],
    technologies: 'Blender, IK/FK, Dynamics, Jiggle Bones, Corrective Shapes',
    breakdownUrl: '',
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
      'An assignment from the P2Design rigging course, a hard-surface turret rig with articulated aiming controls, constrained mechanical parts and game-ready ranges of motion. Implemented more rig controls to the original design for a more intuitive and flexible setup.',
    ],
    technologies: 'Blender, Hard-Surface, Constraints, Game-Ready, Articulated Controls',
    breakdownUrl: '',
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
      'Creature leg rig with IK/FK blending, corrective shapes, foot roll, built for monster locomotion.',
    ],
    technologies: 'Maya, IK/FK, Foot Controls, Corrective Shapes',
    breakdownUrl: '',
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
      'Ghostly creature rig with a simulated cloth robe, antler and body control clusters, and staged camera framing for animated shots. The model and rig were built in conmemoration of the short film "Mañana será otro día" directed by Arelli.',
    ],
    technologies: 'Blender, Cloth, Controls, Animation',
    breakdownUrl: '',
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
      'A rig from the series Knights Of Guinevere, this project is an ongoing work in progress with the help of Wurmiwible, a talented character designer. This first version is the result of a challenge to test our skills in a limited amount of time to create something to celebrate the second episode of the series.',
    ],
    technologies: 'Blender, Challenge, FK Controls, WIP',
    breakdownUrl: 'https://www.instagram.com/p/DeTHJlxj3ON/?hl=en&img_index=1',
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
      'Spider rig with articulated leg chains and creepy-crawly secondary motion, built for game animation in a low poly model..',
    ],
    technologies: 'Blender, Leg IK, Secondary Motion, Low Poly, Game Animation',
    breakdownUrl: '',
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
    technologies: 'Maya, Constraints, Hard-Surface',
    breakdownUrl: 'https://www.instagram.com/p/DLn9ykMN_92/?hl=en',
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
      'A milling machine rig challenge using a 3D scan. The model had to be cleaned and optimized for rigging, maintaining a naming order, logical separation of parts and a smart organizaton for the rigging and animation pipeline. Currently, an investigation is taking place regarding the actual movement of the machine, to understand how the parts interact and how to replicate it in a rig.',
    ],
    technologies: 'Blender, Hard-Surface, Constraints, Challenge, 3D Scan, Optimization, Organization',
    breakdownUrl: '',
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
      'Rigged logo animation for a VR game in Unreal Engine, where the H has a soccer leg that kicks the ball with punchy, rhythmic timing.',
    ],
    technologies: 'Blender, Rigging, Animation, Motion Design, Unreal Engine, Logo Animation',
    breakdownUrl: '',
    preview: A(`/assets/images/${RYTHBALL}/LogoRythball.png`),
    items: [
      { type: 'image', src: A(`/assets/images/${RYTHBALL}/LogoRythball.png`), alt: 'Rythball Logo' },
      { type: 'video', src: A(`/assets/videos/${ARCHIVES}/RythballLogo.mp4`), alt: 'Rythball Logo Animation' },
      { type: 'image', src: A(`/assets/images/${RYTHBALL}/Rig View logo.png`), alt: 'Rythball Logo Rig View' },
      { type: 'image', src: A(`/assets/images/${RYTHBALL}/Leg close up.png`), alt: 'Rythball Logo Leg close up' },
    ],
  },
  'tracking-eyes': {
    id: 'tracking-eyes',
    category: 'Specialized Rigs & R&D',
    eyebrow: 'Specialized Rig — Procedural Eyes',
    title: 'Tracking Eyes',
    description: [
      'Procedural eye system created for the Gauntlet Of Gods challenge cinematic. With Geometry Nodes, stylized eyes scatter automatically across any surface — trees, rocks, ground and props — and every spawned eye aims at a shared target through constraints and drivers, so the whole scenery keeps its gaze on the action.',
      'The setup is fully reusable: dropping the node group on any asset makes the eyes spawn, aim and animate on their own, which made it easy to cover the environment with watchful eyes.',
    ],
    technologies: 'Blender, Geometry Nodes, Procedural Animation, Constraints, Drivers',
    breakdownUrl: '',
    preview: A('/assets/images/Tracking Eyes/TrackingEyes Cover.png'),
    related: [
      { label: 'Used In', projects: ['gauntlet-of-gods'] },
    ],
    items: [
      { type: 'image', src: A('/assets/images/Tracking Eyes/TrackingEyes Cover.png'), alt: 'Tracking Eyes Cover' },
      { type: 'image', src: A('/assets/images/Tracking Eyes/EyeTrackingTest 1.png'), alt: 'Tracking Eyes scatter test 1' },
      { type: 'image', src: A('/assets/images/Tracking Eyes/EyeTrackingTest 2.png'), alt: 'Tracking Eyes scatter test 2' },
    ],
  },
  scenery: {
    id: 'scenery',
    category: 'Specialized Rigs & R&D',
    eyebrow: 'Specialized Rig — Modular Environment',
    title: 'Scenery',
    description: [
      'Modular forest scenery built for the Gauntlet Of Gods challenge environment. Trees, rocks, grass and props are scattered and controlled procedurally with Geometry Nodes, with a custom UI to adjust density, scale and variation between shots.',
      'Constraints and drivers keep every piece consistent across cameras, while blendshape-driven deformation adds subtle stylized motion to the foliage, keeping the environment procedural and animation-ready.',
    ],
    technologies: 'Blender, Geometry Nodes, Procedural Animation, Constraints, Drivers',
    breakdownUrl: '',
    preview: A('/assets/images/Scenery/Gauntlet Of Gods wide scenery view COVER.png'),
    related: [
      { label: 'Used In', projects: ['gauntlet-of-gods'] },
    ],
    items: [
      { type: 'image', src: A('/assets/images/Scenery/Gauntlet Of Gods wide scenery view COVER.png'), alt: 'Scenery wide view' },
      { type: 'image', src: A('/assets/images/Scenery/1.jpeg'), alt: 'Scenery clay view' },
      { type: 'image', src: A('/assets/images/Scenery/2.jpeg'), alt: 'Scenery outliner' },
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
          'Adapted and optimized a high-resolution dragon sculpt into a fully animatable rig with IK/FK systems using drivers and constraints, plus secondary physics-based bones. Currently testing flame simulations in EmberGen.',
        tags: [{ label: 'Blender' }, { label: 'EmberGen' }, { label: 'Physics' }, { label: 'Animation' }, { label: 'WIP' }],
        ariaLabel: 'Abrir Dragon Rig',
        image: projects.dragon.preview,
        project: 'dragon',
      },
      {
        glyph: '⬢',
        gradient: 'linear-gradient(135deg,#0f1a0f,#1e3a1e)',
        title: 'Old Ant Rig',
        description:
          'Gameplay-focused rig for the player character in an early version of Ant Defender, running on C++ and DirectX 11, built for flexibility, optimization and responsiveness on limited resources with IK systems and supporting FK controls.',
        tags: [{ label: 'Blender' }, { label: 'C++' }, { label: 'DirectX 11' }, { label: 'Game-Ready' }],
        ariaLabel: 'Abrir Old Ant Rig',
        image: projects.ant.preview,
        project: 'ant',
      },
      {
        glyph: '✿',
        gradient: 'linear-gradient(135deg,#0f1430,#1a2a55)',
        title: 'Girl Rig',
        description:
          'Stylized girl character rig with jiggle bones for hair and clothing movement, corrective shapes and toggleable IK/FK controls, validated through a series of animation tests.',
        tags: [{ label: 'Blender' }, { label: 'Unity' }, { label: 'IK/FK' }, { label: 'Jiggle Bones' }, { label: 'Animation' }, { label: 'Custom UI' }, { label: 'Physics' }, { label: 'Game-Ready' }],
        ariaLabel: 'Abrir Girl Rig',
        image: projects.girl.preview,
        project: 'girl',
      },
      {
        glyph: '❍',
        gradient: 'linear-gradient(135deg,#141430,#2a2a4a)',
        title: 'Bunny Rig',
        description:
          'Stylized bunny character rig with FK limbs, facial controls and corrective shapes, built for simple movements during the Gauntlet Of Gods challenge animation.',
        tags: [{ label: 'Blender' }, { label: 'Animation' }, { label: 'FK Controls' }, { label: 'Corrective Shapes' }],
        ariaLabel: 'Abrir Bunny Rig',
        image: projects.bunny.preview,
        project: 'bunny',
      },
      {
        glyph: '◍',
        gradient: 'linear-gradient(135deg,#241a12,#40301e)',
        title: 'Dough',
        description:
          'Stylized dough rig with blendshape-driven deformation for cartoon motion, used as an asset in the Dream Sequence challenge animation.',
        tags: [{ label: 'Blender' }, { label: 'Blendshapes' }, { label: 'Animation' }],
        ariaLabel: 'Abrir Dough',
        image: projects.dough.preview,
        project: 'dough',
      },
      {
        glyph: '✦',
        gradient: 'linear-gradient(135deg,#131a38,#232a55)',
        title: 'Gatoppel',
        description:
          'Stylized cat character rig with FK limbs, intuitive control curves and secondary motion for lively performances.',
        tags: [{ label: 'Blender' }, { label: 'Custom UI' }, { label: 'FK Limbs' }, { label: 'Control Curves' }],
        ariaLabel: 'Abrir Gatoppel',
        image: projects.gatoppel.preview,
        project: 'gatoppel',
      },
      {
        glyph: '✚',
        gradient: 'linear-gradient(135deg,#0f1430,#1e2a4a)',
        title: 'Mercy Rig',
        description:
          'Mercy character rig with FK and IK setups for body and legs, detailed hand, facial and body controls, with switches for IK/FK and enabling or disabling controls. Designed for animation and game development.',
        tags: [{ label: 'Maya' }, { label: 'IK/FK' }, { label: 'Blendshapes' }, { label: 'Deformation' }, { label: 'Custom UI' }, { label: 'WIP' }],
        ariaLabel: 'Abrir Mercy Rig',
        image: projects['mercy-rig'].preview,
        project: 'mercy-rig',
      },
      {
        glyph: '❦',
        gradient: 'linear-gradient(135deg,#0e141a,#1a2a38)',
        title: 'Monster Leg',
        description:
          'Creature leg rig with IK/FK blending, corrective shapes and foot roll, built for monster locomotion.',
        tags: [{ label: 'Maya' }, { label: 'Deformation' }, { label: 'IK/FK' }, { label: 'Foot Controls' }],
        ariaLabel: 'Abrir Monster Leg',
        image: projects['monster-leg'].preview,
        project: 'monster-leg',
      },
      {
        glyph: '❈',
        gradient: 'linear-gradient(135deg,#101018,#232336)',
        title: 'TheCreature',
        description:
          'Ghostly creature rig with a simulated cloth robe, antler and body control clusters and staged camera framing for animated shots, built in commemoration of the short film "Mañana será otro día".',
        tags: [{ label: 'Blender' }, { label: 'Cloth' }, { label: 'Animation' }],
        ariaLabel: 'Abrir TheCreature',
        image: projects['the-creature'].preview,
        project: 'the-creature',
      },
      {
        glyph: '♛',
        gradient: 'linear-gradient(135deg,#131328,#252550)',
        title: 'Sir Arthur',
        description:
          'A rig from the series Knights Of Guinevere, created as a timed challenge with character designer Wurmiwible to celebrate the second episode of the series.',
        tags: [{ label: 'Blender' }, { label: 'WIP' }],
        ariaLabel: 'Abrir Sir Arthur',
        image: projects['sir-arthur'].preview,
        project: 'sir-arthur',
      },
      {
        glyph: '⁂',
        gradient: 'linear-gradient(135deg,#0c0c16,#1e1e30)',
        title: 'Spider Rig',
        description:
          'Spider rig with articulated leg chains and creepy-crawly secondary motion, built for game animation on a low poly model.',
        tags: [{ label: 'Blender' }, { label: 'Leg IK' }, { label: 'Animation' }, { label: 'Game-Ready' }],
        ariaLabel: 'Abrir Spider Rig',
        image: projects.spider.preview,
        project: 'spider',
      },
      {
        glyph: '◎',
        gradient: 'linear-gradient(135deg,#1a1710,#3a2f1a)',
        title: 'Bear Rig - AR',
        description:
          'Lightweight rig for an augmented reality mobile experience in Unity, triggered via QR code scanning on a presentation card, optimized for a low-poly mesh with intuitive controls.',
        tags: [{ label: 'Blender' }, { label: 'Unity' }, { label: 'AR' }, { label: 'Low Poly' }, { label: 'Animation' }, { label: 'Game-Ready' }],
        ariaLabel: 'Abrir Bear Rig',
        image: projects.bear.preview,
        project: 'bear',
      },
      {
        glyph: '⬣',
        gradient: 'linear-gradient(135deg,#0f1a1e,#143a3e)',
        title: 'Ant Model',
        description:
          'Low poly character model made for rigging, optimized to be used on a C++ with DirectX 11 engine.',
        tags: [{ label: 'Blender' }, { label: 'Modeling' }, { label: 'Low Poly' }, { label: 'Game-Ready' }],
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
          'Hard-surface rig in Maya with precise constraints and FK controls for mechanical articulation and ease of use.',
        tags: [{ label: 'Maya' }, { label: 'Custom UI' }],
        ariaLabel: 'Abrir Complex Arm',
        image: projects['mechanical-arm'].preview,
        project: 'mechanical-arm',
      },
      {
        glyph: '⌖',
        gradient: 'linear-gradient(135deg,#10141a,#263042)',
        title: 'Turret Tracking',
        description:
          'A P2Design rigging course assignment: hard-surface turret rig with articulated aiming controls, constrained mechanical parts and game-ready ranges of motion, with extra controls added for a more intuitive and flexible setup.',
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
          'FK controlled chain rig with easy motion and weight control.',
        tags: [{ label: 'Maya' }],
        ariaLabel: 'Abrir Wrecking Ball Rig',
        image: projects['wrecking-ball'].preview,
        project: 'wrecking-ball',
      },
      {
        glyph: '⚙',
        gradient: 'linear-gradient(135deg,#10141a,#242e3e)',
        title: 'Milling Machine',
        description:
          'A milling machine rig challenge using a 3D scan: the model was cleaned and optimized for rigging with logical part separation and a smart pipeline organization, while investigating the real machine movement to replicate it.',
        tags: [{ label: 'Blender' }, { label: '3D Scan' }, { label: 'WIP' }],
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
        tags: [{ label: 'Maya' }, { label: 'Custom UI' }],
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
        tags: [{ label: 'Blender' }, { label: 'Animation' }],
        ariaLabel: 'Abrir Eye Rig',
        image: projects.eye.preview,
        project: 'eye',
      },
      {
        glyph: '●',
        gradient: 'linear-gradient(135deg,#101a2e,#1c2c4a)',
        title: 'Simple Ball',
        description:
          'A P2Design rigging course assignment: bouncing ball rig built to practice animation principles with squash & stretch controls and an intuitive setup for timing and spacing.',
        tags: [{ label: 'Blender' }, { label: 'Deformation' }],
        ariaLabel: 'Abrir Simple Ball',
        image: projects.ball.preview,
        project: 'ball',
      },
      {
        glyph: '♪',
        gradient: 'linear-gradient(135deg,#0a0a1e,#16164a)',
        title: 'Rythball Logo',
        description:
          'Rigged logo animation for a VR game in Unreal Engine, where the H has a soccer leg that kicks the ball with punchy, rhythmic timing.',
        tags: [{ label: 'Blender' }, { label: 'Unreal engine' }, { label: 'Animation' }],
        ariaLabel: 'Abrir Rythball Logo',
        image: projects['rythball-logo'].preview,
        project: 'rythball-logo',
      },
      {
        glyph: '✺',
        gradient: 'linear-gradient(135deg,#1c0a1a,#3d1436)',
        title: 'Tracking Eyes',
        description:
          'Procedural Geometry Nodes system that scatters stylized eyes across any surface, with every gaze driven by constraints and drivers to track the action for the Gauntlet Of Gods cinematic.',
        tags: [{ label: 'Blender' }, { label: 'Geometry Nodes' }, { label: 'Animation' }],
        ariaLabel: 'Abrir Tracking Eyes',
        image: projects['tracking-eyes'].preview,
        project: 'tracking-eyes',
      },
      {
        glyph: '⌂',
        gradient: 'linear-gradient(135deg,#0d1a10,#1e3a24)',
        title: 'Scenery',
        description:
          'Modular forest scenery for the Gauntlet Of Gods environment, scattered and controlled with Geometry Nodes, a custom UI and blendshape-driven stylized motion.',
        tags: [{ label: 'Blender' }, { label: 'Geometry Nodes' }, { label: 'Animation' }, { label: 'Custom UI' }, { label: 'Blendshapes' }],
        ariaLabel: 'Abrir Scenery',
        image: projects.scenery.preview,
        project: 'scenery',
      },
    ],
  },
];
