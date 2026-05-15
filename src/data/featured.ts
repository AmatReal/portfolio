export interface FeaturedProject {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse: boolean;
}

export const featuredProjects: FeaturedProject[] = [
  {
    title: 'Dragon Rig & Animation',
    description:
      'Adapted and optimized a high-resolution dragon sculpt into a fully animatable rig. Developed IK/FK systems using drivers and constraints, along with secondary physics-based bones to enhance realism and motion detail.',
    image: '/src/assets/images/Dragon Rig Render.png',
    imageAlt: 'Dragon Rig Render',
    reverse: false,
  },
  {
    title: 'Ant Rig & Animation',
    description:
      'Designed a gameplay-focused rig for the player character in Ant Defender, prioritizing flexibility and responsiveness for movement and emotes in Unreal Engine. Implemented IK systems with supporting FK controls, along with drivers, constraints, and a toggle system for switching between standing and running states.',
    image: '/src/assets/images/AntRig Render.png',
    imageAlt: 'Ant Rig Render',
    reverse: true,
  },
  {
    title: 'Bear Rig & Animation',
    description:
      'Created a lightweight rig for an augmented reality experience in Unity, triggered via QR code scanning on a presentation card. Optimized the rig to work with a low-poly mesh while maintaining functional and intuitive controls for animation.',
    image: '/src/assets/images/BearRig render.png',
    imageAlt: 'Bear Rig Render',
    reverse: false,
  },
];
