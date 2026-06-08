import {
  LuBook,
  LuLightbulb,
  LuBriefcase,
  LuCode,
  LuHeart,
  LuStar,
  LuFlag,
  LuMusic,
  LuHouse,
  LuShoppingCart,
} from 'react-icons/lu';
import type { IconType } from 'react-icons';
import type { NoteIcon } from '@/types/note.types';

export const NOTE_ICONS: Record<NoteIcon, IconType> = {
  book: LuBook,
  lightbulb: LuLightbulb,
  briefcase: LuBriefcase,
  code: LuCode,
  heart: LuHeart,
  star: LuStar,
  flag: LuFlag,
  music: LuMusic,
  home: LuHouse,
  shopping: LuShoppingCart,
};

export const NOTE_ICON_KEYS = Object.keys(NOTE_ICONS) as NoteIcon[];
