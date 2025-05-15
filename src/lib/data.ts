type Category = 'All' | 'Music' | 'Culture';

type Project = {
    slug: string;
    title: string;
    subtitle: string;
    image?: string;
    video?: string;
    categories: Category[];
    content?: string;
};

const projects: Project[] = [
    {
        slug: 'party-people-01',
        title: 'Part People News 1',
        subtitle: 'Part People News 1',
        image: 'https://storage.googleapis.com/partypeople.world/images/events/event1.jpg',
        categories: ['Music'],
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac pulvinar quam.`,
    },
    {
        slug: 'party-people-02',
        title: 'Part People News 2',
        subtitle: 'Part People News 2',
        video: 'https://storage.googleapis.com/partypeople.world/videos/yokoo.mp4',
        categories: ['Music', 'Culture'],
        content: `Crafted for a bold spirit. Here's the breakdown of the visual direction and design strategy.`,
    },
    {
        slug: 'party-people-03',
        title: 'Part People News 3',
        subtitle: 'Part People News 3',
        image: 'https://storage.googleapis.com/partypeople.world/images/events/event3.jpg',
        categories: ['Culture'],
        content: `Behind the scenes: voxel art, lighting challenges, and pushing the pixel-perfect vibe.`,
    },
];

const navItems = [
    { name: 'NEWS', path: '/news' },
    { name: 'ABOUT', path: '/about' },
    { name: 'EVENTS', path: '/events' },
    { name: 'CONTACT', path: '/contact' },
    { name: 'SHOP', path: '/shop' },
];

const socials = [
  { label: 'INSTAGRAM', href: 'https://www.instagram.com/we.partypeople/' },
  { label: 'YOUTUBE', href: 'https://www.youtube.com/@we.partypeople' },
  { label: 'SPOTIFY', href: 'https://open.spotify.com/user/31udm6ap4q6moiyjdm3rwkgywvrm' },
  { label: 'SOUNDCLOUD', href: 'https://soundcloud.com/partypeople-world' },
];

export type { Category, Project };
export { projects, navItems, socials };