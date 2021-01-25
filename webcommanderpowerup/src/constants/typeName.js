export const useTypeName = (typeNum) => {
  switch (typeNum) {
    case 1:
      return "folder";
    case 2:
      return "doc";
    case 3:
      return "media";
    case 4:
      return "archive";
    default:
      return "file";
  }
};
