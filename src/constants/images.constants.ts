import quicknotesIconImage from '@/assets/images/quicknotes-Icon.webp';
import favoriteiconImage from '@/assets/images/favorite-Icon.webp';
import archivedIconImage from '@/assets/images/archived-Icon.webp';
import trashIconImage from '@/assets/images/trash-Icon.webp';
import favoriteiconImageNone from '@/assets/images/favorites-none-icon.webp';
import archivediconImageNone from '@/assets/images/archived-none-icon.webp';
import trashiconImageNone from '@/assets/images/trash-none-icon.webp';
import notFoundIconImage from '@/assets/images/notFound-icon.webp';
import notesiconImageNone from '@/assets/images/notes-none-icon.webp';

export const APP_IMAGES = {
  logo: quicknotesIconImage,
  Icons: {
    favorites: favoriteiconImage,
    favoritesNone: favoriteiconImageNone,
    archived: archivedIconImage,
    archivedNone: archivediconImageNone,
    trash: trashIconImage,
    trashNone: trashiconImageNone,
    notFound: notFoundIconImage,
    notNotes: notesiconImageNone,
  },
} as const;
