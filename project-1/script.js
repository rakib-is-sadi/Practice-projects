let content = [
  {
    img: "https://picsum.photos/id/10/800/450",
    name: "Stark Mountain",
    descrip: "A towering peak covered in snow under a clear sky.",
  },
  {
    img: "https://picsum.photos/id/11/800/450",
    name: "Deep Forest",
    descrip: "Sunlight filters through dense green leaves in a quiet wood.",
  },
  {
    img: "https://picsum.photos/id/15/800/450",
    name: "Golden Desert",
    descrip: "Endless sand dunes stretching toward a warm and hazy horizon.",
  },
  {
    img: "https://picsum.photos/id/16/800/450",
    name: "Crystal Lake",
    descrip:
      "Still blue waters reflecting the surrounding trees and white clouds.",
  },
  {
    img: "https://picsum.photos/id/18/800/450",
    name: "Ancient Meadow",
    descrip:
      "Wildflowers blooming across a vast field during the early morning.",
  },
  {
    img: "https://picsum.photos/id/19/800/450",
    name: "Rocky Coast",
    descrip: "Waves crashing against sharp stones under a dark stormy sky.",
  },
  {
    img: "https://picsum.photos/id/22/800/450",
    name: "Urban Skyline",
    descrip:
      "Tall glass buildings reaching upward into a bright summer atmosphere.",
  },
  {
    img: "https://picsum.photos/id/25/800/450",
    name: "Silent Valley",
    descrip:
      "A peaceful green valley tucked between two massive rolling hills.",
  },
  {
    img: "https://picsum.photos/id/26/800/450",
    name: "Glowing Tundra",
    descrip: "Frozen ground illuminated by the soft light of the moon.",
  },
  {
    img: "https://picsum.photos/id/28/800/450",
    name: "Autumn Trail",
    descrip: "Orange leaves covering a winding path through a rustic forest.",
  },
  {
    img: "https://picsum.photos/id/29/800/450",
    name: "Hidden Canyon",
    descrip: "Red rock walls carved by wind and water over centuries.",
  },
  {
    img: "https://picsum.photos/id/30/800/450",
    name: "Morning Dew",
    descrip: "Tiny water droplets resting on blades of grass at sunrise.",
  },
  {
    img: "https://picsum.photos/id/37/800/450",
    name: "Wooden Bridge",
    descrip: "A rustic path crossing over a shallow and bubbling stream.",
  },
  {
    img: "https://picsum.photos/id/42/800/450",
    name: "Mist Garden",
    descrip: "Fog rolling over a coffee plantation in the early hours.",
  },
  {
    img: "https://picsum.photos/id/48/800/450",
    name: "Computer Tech",
    descrip: "Old school hardware components laid out on a clean surface.",
  },
  {
    img: "https://picsum.photos/id/54/800/450",
    name: "Mountain Vista",
    descrip: "A wide view of jagged peaks under a heavy sky.",
  },
  {
    img: "https://picsum.photos/id/57/800/450",
    name: "Coastal Cliff",
    descrip: "High edges looking down at the turquoise sea water below.",
  },
  {
    img: "https://picsum.photos/id/63/800/450",
    name: "Coffee Break",
    descrip: "A steaming mug of dark roast on a textured table.",
  },
  {
    img: "https://picsum.photos/id/67/800/450",
    name: "Winter Solstice",
    descrip: "Deep snow covering the quiet streets of a sleeping village.",
  },
  {
    img: "https://picsum.photos/id/75/800/450",
    name: "Botanical Leaf",
    descrip: "A close up shot of intricate patterns on a leaf.",
  },
];

let bg = document.querySelector(".bg");

content.forEach((data) => {
  let contentDiv = document.createElement("div");
  contentDiv.classList.add("content-div");

  let img = document.createElement("img");
  let h2 = document.createElement("h2");
  let p = document.createElement("p");

  img.setAttribute("src", data.img);
  h2.textContent = data.name;
  p.textContent = data.descrip;

  contentDiv.append(img, h2, p);
  bg.appendChild(contentDiv);
});
