export const useTypeName = (typeNum) => {
  switch (typeNum) {
    case 1:
      return "folder";
    case 2:
      return "txt";
    case 3:
      return "mp4";
    default:
      return "file";
  }
};
