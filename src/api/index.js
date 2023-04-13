const baseUrl = "https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players/";

export async function fetchDogs() {
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data.data.players;
  } catch (e) {
    console.error(e);
  }
}

export async function fetchDog(id) {
  try {
    const response = await fetch(`${baseUrl}${id}`);
    const data = await response.json();
    return data.data.player;
  } catch (e) {
    console.error(e);
  }
}

export async function postDog(name, breed, dogStatus, imageUrl, teamId) {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        breed: breed,
        status: dogStatus,
        imageUrl: imageUrl,
        teamId: teamId,
      }),
    });
    const data = await response.json();
    return data.data.newPlayer;
  } catch (e) {
    console.error(e);
  }
}

export async function deleteDog(id) {
  try {
    const response = await fetch(`${baseUrl}${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    if (data.success) return true;
    else return false;
  } catch (e) {
    console.error(e);
  }
}
