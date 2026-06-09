import quicknotesIconImage from '@/assets/images/quicknotes-Icon.webp';
import favoriteiconImage from '@/assets/images/favorite-Icon.webp';
import archivedIconImage from '@/assets/images/archived-Icon.webp';
import trashIconImage from '@/assets/images/trash-Icon.webp';

export const APP_IMAGES = {
  logo: quicknotesIconImage,
  Icons: {
    favorites: favoriteiconImage,
    archived: archivedIconImage,
    trash: trashIconImage,
  },
} as const;