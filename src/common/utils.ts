import { Mode } from 'types';

export const isLightMode = (mode: Mode) => mode === 'light';
export const classes = (...arg: string[]) => arg.filter((a: string) => a).join(' ');
