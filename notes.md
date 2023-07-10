// Ways to clear data from localStorage

//There are several ways to clear data from localStorage:
// 1. clear() method: This method clears all keys stored in a user's localStorage object. It does not receive any parameters.
   localStorage.clear();

// 2. removeItem() method: This method removes the specified key from a user's localStorage object. It receives the key as a parameter.
   localStorage.removeItem('userRecords');

// 3. setItem() method with empty value: If you want to keep the key but remove its data, you can set its value to an empty string or an empty array.

// For an empty string
   localStorage.setItem('userRecords', '');

// For an empty array
   localStorage.setItem('userRecords', JSON.stringify([]));

//Keep in mind that localStorage is domain-specific. Clearing or changing data will only affect the localStorage object for the domain your script is running on.