let games = [
  { id: "1", title: "Elder Scrolls VI", platform: ["PC", "Xbox"] },
  { id: "2", title: "God of War: Ragnarok", platform: ["PS5"] },
  { id: "3", title: "Fortnite", platform: ["PC", "PS5", "Xbox", "Switch"] },
  { id: "4", title: "Hades II", platform: ["PC", "Switch"] },
  { id: "5", title: "Cyberpunk 2077", platform: ["PC", "PS5", "Xbox"] }
];
let reviews = [
  { id: "1", rating: 9, content: "Amazing gameplay and world design.", game_id: "1", author_id: "1" },
  { id: "2", rating: 7, content: "Good but needs better optimization.", game_id: "2", author_id: "2" },
  { id: "3", rating: 10, content: "A masterpiece—nothing else to say.", game_id: "3", author_id: "3" },
  { id: "4", rating: 8, content: "Solid experience with great replay value.", game_id: "4", author_id: "4" },
  { id: "5", rating: 6, content: "Fun but repetitive after a while.", game_id: "5", author_id: "5" }
];


let authors = [
  {id: "1",name: "Alice Johnson",verified: true},
  {id: "2",name: "Marcus Reed",verified: false},
  {id: "3",name: "Sofia Ramirez",verified: true},
  {id: "4",name: "Daniel Kim",verified: false},
  {id: "5",name: "Priya Sharma",verified: true}
];
export default{games, authors, reviews}