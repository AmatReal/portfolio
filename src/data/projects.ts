export interface MediaItem {
  type: 'video' | 'image';
  src: string;
  alt: string;
}

export type ProjectCategory =
  | 'Character & Creature Rigs'
  | 'Mechanical & Hard-Surface Rigs'
  | 'Specialized Rigs & Mechanics'
  | 'AR, Animation & Modeling';

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
const ANT = 'Ant Rig & Animation';
const BEAR = 'Bear Rig - AR';
const DREAM = 'Dream Sequence';

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
    title: 'Ant Rig & Animation',
    description: [
      'Designed a gameplay-focused rig for the player character in Ant Defender, prioritizing flexibility and responsiveness for movement and emotes in Unreal Engine. Implemented IK systems with supporting FK controls, along with drivers, constraints, and a toggle system for switching between standing and running states.',
    ],
    technologies: 'Unreal Engine, Blender, IK + FK, Drivers, Constraints, State Toggle',
    breakdownUrl: 'https://www.instagram.com/p/DLiuzmoNlZq/',
    preview: A(`/assets/images/${ANT}/Ant Rig - Render.png`),
    items: [
      { type: 'image', src: A(`/assets/images/${ANT}/Ant Rig - Render.png`), alt: 'Ant Rig Render' },
      { type: 'image', src: A(`/assets/images/${ANT}/Ant Rig - Close up.jpeg`), alt: 'Ant Rig Close up' },
    ],
  },
  bear: {
    id: 'bear',
    category: 'AR, Animation & Modeling',
    eyebrow: 'Featured — AR / Unity',
    title: 'Bear Rig & Animation',
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
  'mechanical-arm': {
    id: 'mechanical-arm',
    category: 'Mechanical & Hard-Surface Rigs',
    eyebrow: 'Mechanical Rig — Hard Surface',
    title: 'Mechanical Arm Rig',
    description: [
      'Hard-surface rig in Maya with precise constraints and FK controls for mechanical articulation and cinematic shots.',
    ],
    technologies: 'Maya, Hard-Surface, Constraints, FK Controls',
    breakdownUrl: 'https://www.instagram.com/amat.3d/?hl=en',
    preview: A('/assets/images/Mechanical Arm Rig/Mechanical Arm Rig.jpg'),
    items: [
      { type: 'image', src: A('/assets/images/Mechanical Arm Rig/Mechanical Arm Rig.jpg'), alt: 'Mechanical Arm Rig' },
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
    preview: A('/assets/images/Wrecking Ball Rig/Wrecking Ball Rig.jpg'),
    items: [
      { type: 'image', src: A('/assets/images/Wrecking Ball Rig/Wrecking Ball Rig.jpg'), alt: 'Wrecking Ball Rig' },
    ],
  },
  'dream-sequence': {
    id: 'dream-sequence',
    category: 'AR, Animation & Modeling',
    eyebrow: 'Animation — Challenge',
    title: 'Dream Sequence — Pwnisher Challenge',
    description: [
      '4-second 120 BPM beat-driven animation for community challenge, built and animated entirely in Blender.',
    ],
    technologies: 'Blender, Animation, 120 BPM',
    breakdownUrl: 'https://www.instagram.com/amat.3d/?hl=en',
    preview: A(`/assets/images/${DREAM}/DreamSequence - cover.png`),
    items: [
      { type: 'video', src: A(`/assets/videos/${DREAM}/Dream Sequence - Animation.mp4`), alt: 'Dream Sequence Animation' },
      { type: 'video', src: A(`/assets/videos/${DREAM}/Dream Sequence - Mesh Test.mp4`), alt: 'Dream Sequence Mesh Test' },
      { type: 'image', src: A(`/assets/images/${DREAM}/DreamSequence - cover.png`), alt: 'Dream Sequence Cover' },
    ],
  },
  'ant-model': {
    id: 'ant-model',
    category: 'AR, Animation & Modeling',
    eyebrow: 'Modeling — Character',
    title: 'Ant Model',
    description: [
      'High-detail character model sculpt and retopology for rigging, with clean topology for deformation.',
    ],
    technologies: 'Blender, Modeling, Retopology',
    breakdownUrl: 'https://www.instagram.com/amat.3d/?hl=en',
    preview: A('/assets/images/Ant Model/AntModel.jpg'),
    items: [
      { type: 'image', src: A('/assets/images/Ant Model/AntModel.jpg'), alt: 'Ant Model' },
    ],
  },
  ball: {
    id: 'ball',
    category: 'Specialized Rigs & Mechanics',
    eyebrow: 'Specialized Rig — Principles',
    title: 'Ball Rig',
    description: [
      'Bouncing ball rig built to practice animation principles, with squash & stretch controls and an intuitive setup for timing and spacing exercises.',
    ],
    technologies: 'Blender, Squash & Stretch, Controls, Animation Principles',
    breakdownUrl: 'https://www.instagram.com/amat.3d/?hl=en',
    preview: A('/assets/images/Ball Rig/Captura de pantalla 2026-09-03 174829.png'),
    items: [
      { type: 'image', src: A('/assets/images/Ball Rig/Captura de pantalla 2026-09-03 174829.png'), alt: 'Ball Rig viewport 1' },
      { type: 'image', src: A('/assets/images/Ball Rig/Captura de pantalla 2026-09-03 174801.png'), alt: 'Ball Rig viewport 2' },
      { type: 'image', src: A('/assets/images/Ball Rig/Captura de pantalla 2026-09-03 174746.png'), alt: 'Ball Rig viewport 3' },
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
    category: 'Specialized Rigs & Mechanics',
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
    preview: A('/assets/images/Gatoppel/1778816426962.jpg'),
    items: [
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
    preview: A('/assets/images/Girl Rig/Captura de pantalla 2026-06-10 114944.png'),
    items: [
      { type: 'video', src: A('/assets/images/Girl Rig/2026-04-23 10-34-16.mp4'), alt: 'Girl Rig test 1' },
      { type: 'video', src: A('/assets/images/Girl Rig/2026-04-23 10-33-43.mp4'), alt: 'Girl Rig test 2' },
      { type: 'video', src: A('/assets/images/Girl Rig/2026-04-23 08-52-41.mp4'), alt: 'Girl Rig test 3' },
      { type: 'video', src: A('/assets/images/Girl Rig/2026-04-23 08-51-58.mp4'), alt: 'Girl Rig test 4' },
      { type: 'image', src: A('/assets/images/Girl Rig/Captura de pantalla 2026-06-10 114944.png'), alt: 'Girl Rig viewport 1' },
      { type: 'image', src: A('/assets/images/Girl Rig/Captura de pantalla 2026-06-05 125518.png'), alt: 'Girl Rig viewport 2' },
    ],
  },
  turret: {
    id: 'turret',
    category: 'Mechanical & Hard-Surface Rigs',
    eyebrow: 'Mechanical Rig — Hard Surface',
    title: 'Turret Rig',
    description: [
      'Hard-surface turret rig with articulated aiming controls, constrained mechanical parts and game-ready ranges of motion.',
    ],
    technologies: 'Blender, Hard-Surface, Constraints, Game-Ready',
    breakdownUrl: 'https://www.instagram.com/amat.3d/?hl=en',
    preview: A('/assets/images/Turret Rig/Captura de pantalla 2026-09-03 174651.png'),
    items: [
      { type: 'image', src: A('/assets/images/Turret Rig/Captura de pantalla 2026-09-03 174651.png'), alt: 'Turret Rig viewport 1' },
      { type: 'image', src: A('/assets/images/Turret Rig/Captura de pantalla 2026-09-03 174640.png'), alt: 'Turret Rig viewport 2' },
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
        tags: [{ label: 'Blender', icon: 'uil-cube' }, { label: 'Drivers' }, { label: 'IK/FK' }],
        ariaLabel: 'Abrir Dragon Rig',
        image: projects.dragon.preview,
        project: 'dragon',
      },
      {
        glyph: '⬢',
        gradient: 'linear-gradient(135deg,#0f1a0f,#1e3a1e)',
        title: 'Ant Rig — Ant Defender Player',
        description:
          'Player character rig for Ant Defender in Unreal, IK + supporting FK, drivers and mode switching for gameplay.',
        tags: [{ label: 'Unreal Engine' }, { label: 'Blender' }],
        ariaLabel: 'Abrir detalle',
        image: projects.ant.preview,
        project: 'ant',
      },
      {
        glyph: '✿',
        gradient: 'linear-gradient(135deg,#0f1430,#1a2a55)',
        title: 'Girl Rig',
        description:
          'Stylized girl character rig with full facial setup, IK/FK limbs and secondary dynamics, validated through animation tests.',
        tags: [{ label: 'Blender', icon: 'uil-cube' }, { label: 'Facial' }, { label: 'Dynamics' }],
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
        tags: [{ label: 'Blender', icon: 'uil-cube' }, { label: 'IK/FK' }, { label: 'Facial' }],
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
        tags: [{ label: 'Blender', icon: 'uil-cube' }, { label: 'IK/FK' }, { label: 'Constraints' }],
        ariaLabel: 'Abrir Gatoppel',
        image: projects.gatoppel.preview,
        project: 'gatoppel',
      },
    ],
  },
  {
    category: 'Mechanical & Hard-Surface Rigs',
    cards: [
      {
        glyph: '⧉',
        gradient: 'linear-gradient(135deg,#1a1a1e,#2f2f3a)',
        title: 'Mechanical Arm Rig',
        description:
          'Hard-surface rig in Maya with precise constraints and FK controls for mechanical articulation and cinematic shots.',
        tags: [{ label: 'Maya' }, { label: 'Hard-Surface' }],
        ariaLabel: 'Abrir detalle',
        image: projects['mechanical-arm'].preview,
        project: 'mechanical-arm',
      },
      {
        glyph: '⌖',
        gradient: 'linear-gradient(135deg,#10141a,#263042)',
        title: 'Turret Rig',
        description:
          'Hard-surface turret rig with articulated aiming controls, constrained mechanical parts and game-ready ranges of motion.',
        tags: [{ label: 'Hard-Surface' }, { label: 'Constraints' }],
        ariaLabel: 'Abrir Turret Rig',
        image: projects.turret.preview,
        project: 'turret',
      },
      {
        glyph: '◉',
        gradient: 'linear-gradient(135deg,#1e1510,#3d2a1a)',
        title: 'Wrecking Ball Rig',
        description:
          'Physics-driven chain rig with secondary motion and weight control, built for dynamic destruction sequences.',
        tags: [{ label: 'Maya' }, { label: 'Constraints' }],
        ariaLabel: 'Abrir detalle',
        image: projects['wrecking-ball'].preview,
        project: 'wrecking-ball',
      },
    ],
  },
  {
    category: 'Specialized Rigs & Mechanics',
    cards: [
      {
        glyph: '◉',
        gradient: 'linear-gradient(135deg,#0e1a26,#1c3a4a)',
        title: 'Eye Rig',
        description:
          'Eye rig with aim-constrained look-at controls, driver-driven blinks and supportive shaping for expressive character gazes.',
        tags: [{ label: 'Constraints' }, { label: 'Drivers' }],
        ariaLabel: 'Abrir Eye Rig',
        image: projects.eye.preview,
        project: 'eye',
      },
      {
        glyph: '●',
        gradient: 'linear-gradient(135deg,#101a2e,#1c2c4a)',
        title: 'Ball Rig',
        description:
          'Bouncing ball rig built to practice animation principles, with squash & stretch controls for timing and spacing exercises.',
        tags: [{ label: 'Blender', icon: 'uil-cube' }, { label: 'Squash & Stretch' }],
        ariaLabel: 'Abrir Ball Rig',
        image: projects.ball.preview,
        project: 'ball',
      },
    ],
  },
  {
    category: 'AR, Animation & Modeling',
    cards: [
      {
        glyph: '◎',
        gradient: 'linear-gradient(135deg,#1a1710,#3a2f1a)',
        title: 'Bear Rig — Low-Poly AR',
        description:
          'Lightweight rig for AR triggered via QR on presentation card, optimized for low-poly mesh with intuitive controls.',
        tags: [{ label: 'Unity', icon: 'uil-mobile-android' }, { label: 'AR' }],
        ariaLabel: 'Abrir detalle',
        image: projects.bear.preview,
        project: 'bear',
      },
      {
        glyph: '◐',
        gradient: 'linear-gradient(135deg,#0a0a23,#1a1d4a)',
        title: 'Dream Sequence — Pwnisher Challenge',
        description:
          '4-second 120 BPM beat-driven animation for community challenge, built and animated entirely in Blender.',
        tags: [{ label: 'Blender', icon: 'uil-film' }, { label: 'Animation' }],
        ariaLabel: 'Abrir detalle',
        image: projects['dream-sequence'].preview,
        project: 'dream-sequence',
      },
      {
        glyph: '⬣',
        gradient: 'linear-gradient(135deg,#0f1a1e,#143a3e)',
        title: 'Ant Model',
        description:
          'High-detail character model sculpt and retopology for rigging, with clean topology for deformation.',
        tags: [{ label: 'Blender' }, { label: 'Modeling' }],
        ariaLabel: 'Abrir detalle',
        image: projects['ant-model'].preview,
        project: 'ant-model',
      },
    ],
  },
];