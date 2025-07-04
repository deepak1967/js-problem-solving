let name = "deepak, prachi, ronit, pari, lavi, krishna";

let conversion = (name) => {
  let data = name.split(",");
  return data;
};

let data = conversion(name);

console.log(data);
