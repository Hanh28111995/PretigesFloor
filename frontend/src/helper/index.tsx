export const normalizeString = (str: string) => {
  return str
    .toLowerCase()
    .normalize("NFD")              // Tách dấu ra khỏi chữ cái
    .replace(/[\u0300-\u036f]/g, "") // Xóa các dấu vừa tách
    .replace(/\s+/g, "")             // Xóa tất cả khoảng trắng
    .trim();
};
export const getValueByPath = (obj: any, path: string) => {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
};

export const matchRangeByLabel = (label: string, min: number, max: number) => (val: any) => {
  if (typeof val !== 'string') return false;
  // Regex tìm số đứng sau label cụ thể
  const regex = new RegExp(`${label}\\s*(?:\\(mm\\))?.*?(\\d+(\\.\\d+)?)`, 'si');
  const match = val.match(regex);
  if (match && match[1]) {
    const n = parseFloat(match[1]);
    return n >= min && n <= max;
  }
  return false;
};