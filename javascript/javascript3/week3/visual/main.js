async function translateOneByOne() {
  await moveElement(document.querySelector("#red-circle"), {
    x: 20,
    y: 300
  })
  console.log("Red Element has been moved")
  await moveElement(document.querySelector("#blue-circle"), {
    x: 400,
    y: 300
  })
  console.log("Blue Element has been moved")
  await moveElement(document.querySelector("#green-circle"), {
    x: 400,
    y: 20
  })
  console.log("Green Element has been moved")
}
translateOneByOne()


function translateAllAtOnce() {
  Promise.all(moveElement(document.querySelector("#red-circle"), {
    x: 20,
    y: 300
  }), moveElement(document.querySelector("#blue-circle"), {
    x: 400,
    y: 300
  }), moveElement(document.querySelector("#green-circle"), {
    x: 400,
    y: 20
  }))
  console.log('All Elements moved')
}
translateAllAtOnce()
