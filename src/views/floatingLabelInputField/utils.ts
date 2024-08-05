// others
import {APP_COLORS} from '@constants/index';

export const handleInputColor = (focus: boolean, error: string) => {
  if (focus && !error) return APP_COLORS.PRIMARY_TWO;
  if (error) return APP_COLORS.OFF_RED;

  return APP_COLORS.DARK_GRAY;
};
