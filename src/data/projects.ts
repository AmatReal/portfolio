export interface MediaItem {
  type: 'video' | 'image';
  src: string;
  alt: string;
}

export interface Project {
  id: string;
  eyebrow: string;
  title: string;
  description: string[];
  technologies: string;
  breakdownUrl: string;
  preview: string;
  items: MediaItem[];
}

const IMG = 'Dragon Rig & Animation';
const ANT = 'Ant Rig & Animation';
const BEAR = 'Bear Rig - AR';
const DREAM = 'Dream Sequence';

export const projects: Record<string, Project> = {
  dragon: {
    id: 'dragon',
    eyebrow: 'Featured — Creature Rig',
    title: 'Dragon Rig & Animation',
    description: [
      'Adapted and optimized a high-resolution dragon sculpt into a fully animatable rig. Developed IK/FK systems using drivers and constraints, along with secondary physics-based bones to enhance realism and motion detail.',
    ],
    technologies: 'Blender, Drivers, IK/FK, Constraints, Secondary Physics',
    breakdownUrl: 'https://www.instagram.com/p/DRiERhjj-78/',
    preview: `/assets/images/${IMG}/Dragon Rig - Render.png`,
    items: [
      { type: 'image', src: `/assets/images/${IMG}/Dragon Rig - Render.png`, alt: 'Dragon Rig Render' },
      { type: 'image', src: `/assets/images/${IMG}/Dragon Rig - viewport1.png`, alt: 'Dragon Rig Viewport 1' },
      { type: 'image', src: `/assets/images/${IMG}/Dragon Rig - viewport2.jpeg`, alt: 'Dragon Rig Viewport 2' },
    ],
  },
  ant: {
    id: 'ant',
    eyebrow: 'Featured — Gameplay Rig',
    title: 'Ant Rig & Animation',
    description: [
      'Designed a gameplay-focused rig for the player character in Ant Defender, prioritizing flexibility and responsiveness for movement and emotes in Unreal Engine. Implemented IK systems with supporting FK controls, along with drivers, constraints, and a toggle system for switching between standing and running states.',
    ],
    technologies: 'Unreal Engine, Blender, IK + FK, Drivers, Constraints, State Toggle',
    breakdownUrl: 'https://www.instagram.com/p/DLiuzmoNlZq/',
    preview: `/assets/images/${ANT}/Ant Rig - Render.png`,
    items: [
      { type: 'image', src: `/assets/images/${ANT}/Ant Rig - Render.png`, alt: 'Ant Rig Render' },
      { type: 'image', src: `/assets/images/${ANT}/Ant Rig - Close up.jpeg`, alt: 'Ant Rig Close up' },
    ],
  },
  bear: {
    id: 'bear',
    eyebrow: 'Featured — AR / Unity',
    title: 'Bear Rig & Animation',
    description: [
      'Created a lightweight rig for an augmented reality experience in Unity, triggered via QR code scanning on a presentation card. Optimized the rig to work with a low-poly mesh while maintaining functional and intuitive controls for animation.',
    ],
    technologies: 'Unity, AR, QR Trigger, Low-poly Rig',
    breakdownUrl: 'https://www.instagram.com/p/DORQnnBj0He/',
    preview: `/assets/images/${BEAR}/BearRig - Render.png`,
    items: [
      { type: 'image', src: `/assets/images/${BEAR}/BearRig - Render.png`, alt: 'Bear Rig Render' },
      { type: 'image', src: `/assets/images/${BEAR}/Bear Rig - Scene.jpg`, alt: 'Bear Rig Scene' },
    ],
  },
  'mechanical-arm': {
    id: 'mechanical-arm',
    eyebrow: 'Game Rig — Hard Surface',
    title: 'Mechanical Arm Rig',
    description: [
      'Hard-surface rig in Maya with precise constraints and FK controls for mechanical articulation and cinematic shots.',
    ],
    technologies: 'Maya, Hard-Surface, Constraints, FK Controls',
    breakdownUrl: 'https://www.instagram.com/amat.3d/?hl=en',
    preview: '/assets/images/Mechanical Arm Rig/Mechanical Arm Rig.jpg',
    items: [
      { type: 'image', src: '/assets/images/Mechanical Arm Rig/Mechanical Arm Rig.jpg', alt: 'Mechanical Arm Rig' },
    ],
  },
  'wrecking-ball': {
    id: 'wrecking-ball',
    eyebrow: 'Game Rig — Physics',
    title: 'Wrecking Ball Rig',
    description: [
      'Physics-driven chain rig with secondary motion and weight control, built for dynamic destruction sequences.',
    ],
    technologies: 'Maya, Constraints, Secondary Motion, Weight Control',
    breakdownUrl: 'https://www.instagram.com/amat.3d/?hl=en',
    preview: '/assets/images/Wrecking Ball Rig/Wrecking Ball Rig.jpg',
    items: [
      { type: 'image', src: '/assets/images/Wrecking Ball Rig/Wrecking Ball Rig.jpg', alt: 'Wrecking Ball Rig' },
    ],
  },
  'dream-sequence': {
    id: 'dream-sequence',
    eyebrow: 'Animation — Challenge',
    title: 'Dream Sequence — Pwnisher Challenge',
    description: [
      '4-second 120 BPM beat-driven animation for community challenge, built and animated entirely in Blender.',
    ],
    technologies: 'Blender, Animation, 120 BPM',
    breakdownUrl: 'https://www.instagram.com/amat.3d/?hl=en',
    preview: `/assets/images/${DREAM}/DreamSequence - cover.png`,
    items: [
      { type: 'video', src: `/assets/videos/${DREAM}/Dream Sequence - Animation.mp4`, alt: 'Dream Sequence Animation' },
      { type: 'video', src: `/assets/videos/${DREAM}/Dream Sequence - Mesh Test.mp4`, alt: 'Dream Sequence Mesh Test' },
      { type: 'image', src: `/assets/images/${DREAM}/DreamSequence - cover.png`, alt: 'Dream Sequence Cover' },
    ],
  },
  'ant-model': {
    id: 'ant-model',
    eyebrow: 'Modeling — Character',
    title: 'Ant Model',
    description: [
      'High-detail character model sculpt and retopology for rigging, with clean topology for deformation.',
    ],
    technologies: 'Blender, Modeling, Retopology',
    breakdownUrl: 'https://www.instagram.com/amat.3d/?hl=en',
    preview: '/assets/images/Ant Model/AntModel.jpg',
    items: [
      { type: 'image', src: '/assets/images/Ant Model/AntModel.jpg', alt: 'Ant Model' },
    ],
  },
};