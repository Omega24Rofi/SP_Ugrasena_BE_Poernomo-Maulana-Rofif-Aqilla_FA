import { response } from "express";

const main = async () => {

    const add = await fetch("http://localhost:3000/add", {
        method: "POST",
        headers: {
            
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ a:1, b:2}),
    });
    
    const addAfterJson = await add.json();
    console.log(addAfterJson);
};

main();
