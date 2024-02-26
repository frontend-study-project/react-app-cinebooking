interface StorageMethods {
  getStorage: (name: string) => string | null;
  setStorage: (name: string, item: string) => void;
  deleteStorage: (name: string) => void;
}
const useStorage = (): StorageMethods => {
  const getStorage: StorageMethods['getStorage'] = (name) => {
    return localStorage.getItem(name)??"";
  }
  const setStorage: StorageMethods['setStorage'] = (name, item) => {
    //널리시체크
    localStorage.setItem(name, item??"");
  }
  const deleteStorage: StorageMethods['deleteStorage'] = (name) => {
    localStorage.removeItem(name);
  }
  return { getStorage, setStorage, deleteStorage }
}

export default useStorage;
