import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((res) => {
    const dataArray = [];
    for (const idx of res) {
      dataArray.push({
        status: idx.status,
        value: Object.keys(idx).includes('reason')
          ? String(idx.reason)
          : idx.value,
      });
    }
    return dataArray;
  });
}
