export default async function request(url){
  try {
    const response = await fetch(url);
    const data = await response.json()
    return data;
  } catch (e) {
    console.log(e,'error');
  }
}
