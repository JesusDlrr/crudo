import AsyncStorage from '@react-native-async-storage/async-storage';

export const loadItemsFromStorage = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('items');
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error('Error loading items from storage:', error);
    return [];
  }
};

export const saveItemsToStorage = async (items) => {
  try {
    await AsyncStorage.setItem('items', JSON.stringify(items));
  } catch (error) {
    console.error('Error saving items to storage:', error);
  }
};


export const addItem = async (newItem) => {
  const items = await loadItemsFromStorage();
  items.push(newItem);
  await saveItemsToStorage(items);
  return newItem;
};

export const updateItem = async (itemId, updatedItem) => {
  const items = await loadItemsFromStorage();
  const index = items.findIndex((item) => item.id === itemId);
  if (index !== -1) {
    items[index] = updatedItem;
    await saveItemsToStorage(items);
    return updatedItem;
  } else {
    return null;
  }
};

export const deleteItem = async (itemId) => {
  const items = await loadItemsFromStorage();
  const index = items.findIndex((item) => item.id === itemId);
  if (index !== -1) {
    items.splice(index, 1);
    await saveItemsToStorage(items);
    return true; // Indicate success
  } else {
    return false; // Indicate failure if item not found
  }
};
