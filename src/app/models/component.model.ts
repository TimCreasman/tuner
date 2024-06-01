export const components = {
    upperRing: 'Upper Ring',
    lowerRing: 'Lower Ring',
    noteFill: 'Note Fill',
    noteOctave: 'Note Octave',
    noteOutline: 'Note Outline',
    needle: 'Needle',
    donationButton: 'Donation Button',
    settingsButton: 'Settings Button',
} as const;
export type Component = keyof typeof components;
export type ComponentName = typeof components[Component];

