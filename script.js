function recursivePower(base, exponent, callback) {
  if (exponent === 0) {
    callback(1);
  } else {
    recursivePower(base, exponent - 1, function (result) {
      callback(result * base);
    });
  }
}

recursivePower(5, 3, function (result) {
  console.log(result);
});
recursivePower(2, 6, function (result) {
  console.log(result);
});

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    const postElement = document.createElement("div");
    postElement.textContent = data.title;
    document.body.appendChild(postElement);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

function deepCopy(obj) {
  return new Promise((resolve, reject) => {
    if (typeof obj !== "object" || obj === null) {
      reject(new Error("Argument is not an object."));
    } else {
      try {
        const copy = JSON.parse(JSON.stringify(obj));
        resolve(copy);
      } catch (error) {
        reject(error);
      }
    }
  });
}

// მაგალითი
const originalObject = {
  name: "John",
  age: 30,
  hobbies: ["reading", "running"],
  address: {
    city: "New York",
    country: "USA",
  },
};

deepCopy(originalObject)
  .then((copy) => {
    console.log("Deep copy:", copy);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
