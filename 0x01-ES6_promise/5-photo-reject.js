export default function uploadPhoto(filename) {
  return new Promise(() => {
    throw Error(`${filename} cannot be processed`);
  });
}
