"use server";

export async function getUserData() {
  try {
    let response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
