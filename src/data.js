const data = [
  {
    name: "Atlassian",
    icon: "https://www.svgrepo.com/show/353428/atlassian.svg",
    location: [12.951092, 77.6412016],
  },
  {
    name: "Google",
    icon: "https://www.svgrepo.com/show/475656/google-color.svg",
    location: [12.9938127, 77.6606261],
  },
];

export default data;

export const maxLatitude = Math.max(...data.map((each) => each.location[0]));
export const maxLongitude = Math.max(...data.map((each) => each.location[1]));
