export interface Skill {
  name: string;
  level: string;
  /** URL absoluta o ruta local bajo public/ */
  logo: string;
}

export const skills: Skill[] = [
  {
    name: 'Blender',
    level: 'Professional',
    logo: 'src/assets/images/Blender_Logo.png',
  },
  {
    name: 'Maya',
    level: 'Advanced',
    logo: 'https://brandlogos.net/wp-content/uploads/2022/07/autodesk_maya-logo_brandlogos.net_x7aqy.png',
  },
  {
    name: 'ZBrush',
    level: 'Intermediate',
    logo: 'https://www.svgrepo.com/show/508998/zbrush.svg',
  },
  {
    name: '3D Max',
    level: 'Intermediate',
    logo: 'https://brandlogos.net/wp-content/uploads/2022/05/autodesk_3ds_max-logo_brandlogos.net_ugjmh.png',
  },
  {
    name: 'Unreal Engine',
    level: 'Advanced',
    logo: 'https://pnghdpro.com/wp-content/themes/pnghdpro/download/social-media-and-brands/unreal-engine-logo-icon.png',
  },
  {
    name: 'Premiere Pro',
    level: 'Professional',
    logo: 'src/assets/images/Adobe_Premiere_Pro_Logo.png',
  },
  {
    name: 'After Effects',
    level: 'Advanced',
    logo: 'src/assets/images/Adobe_After_Effects_Logo.png',
  },
];
