const list = id("contents");

let contents = Array.from({ length: 6 }, (_, i) => {
  const id = i + 1;
  const isSelfCon = i % 2 === 0;

  const landmarks = ["Jobele", "Akinmorin", "Fiditi"];
  const landmark = landmarks[Math.floor(Math.random() * landmarks.length)];

  return {
    id,
    address: `No. ${Math.ceil(Math.random() * 30)} ${["Oke Street", "Ajegunle", "Odo-Ona", "Alare", "Market Road"][i % 5]}`,
    landmark: landmark,
    toilet: Math.random() > 0.3,
    bathroom: Math.random() > 0.3,
    kitchen: Math.random() > 0.3,
    images: [
      `https://picsum.photos/seed/h${id}a/300/200`,
      `https://picsum.photos/seed/h${id}b/300/200`,
      ...(Math.random() > 0.5 ? [`https://picsum.photos/seed/h${id}c/300/200`] : [])
    ],
    rating: Math.ceil(Math.random() * 5),
    type: isSelfCon ? "Self-con" : "Room",
    price: isSelfCon
      ? 150000 + Math.floor(Math.random() * 120000)
      : 40000 + Math.floor(Math.random() * 50000),
    negotiable: Math.random() > 0.5,
    description: isSelfCon
      ? "Clean self-contained apartment with good ventilation, tiled floors and steady water supply."
      : "Affordable room with shared facilities in a calm environment.",
    user: {
      fname: ["Basit","Kemi","Sola","Tunde","Aisha","Musa","Yinka","Rasheed","Zainab","Kunle"][i % 10],
      lname: ["Tola","Ade","Bello","Raji","Lawal","Sadiq","Ola","Kareem","Abdul","James"][i % 10],
      username: `user${id}`,
      type: Math.random() > 0.5 ? "agent" : "landlord",
      verified: Math.random() > 0.4
    }
  };
});

contents.forEach(itm =>{
  const item = document.createElement('div');
  item.classList.add("content");
  
  const item2 = document.createElement('div');
  item2.classList.add("item2");
  
  const item3 = document.createElement('div');
  item3.classList.add("item3");
  const photo = document.createElement('span');
  photo.classList.add("photo");
  photo.textContent = itm.user.fname.substring(0,1);
  const nameOpt = document.createElement('div');
  nameOpt.classList.add("name-opt");
  
  const names = document.createElement('p');
  names.classList.add("names");
  const name1 = document.createElement('span');
  name1.classList.add("name1");
  name1.textContent = itm.user.fname+" "+itm.user.lname;
  const name2 = document.createElement('span');
  name2.classList.add("name2","fa-solid","fa-check-circle");
  if(itm.user.verified){
    name2.style.display = "block";
  }
  
  const name3 = document.createElement('span');
  name3.classList.add("name3");
  name3.textContent = "@" + itm.user.username;
  
  const opt = document.createElement('span');
  opt.classList.add("fa-solid","fa-ellipsis-vertical");
  
  const des = document.createElement('p');
  des.classList.add("des");
  des.textContent = itm.description;
  
  const img = document.createElement('img');
  img.classList.add("img");
  img.src = itm.images[1];
  
  const more = document.createElement('p');
  more.classList.add("more");
  
  const type = document.createElement('span');
  type.classList.add("type");
  type.textContent = itm.type;
  
  const toilet = document.createElement('span');
  toilet.classList.add("toilet");
  toilet.textContent = itm.toilet? "Toilet" : "No Toilet";
  if(itm.toilet){
    toilet.style.display = "block";
  }
  
  const bathroom = document.createElement('span');
  bathroom.classList.add("bathroom");
  bathroom.textContent = itm.bathroom? "Bathroom" : "No Bathroom";
  if(itm.bathroom){
    bathroom.style.display = "block";
  }
  
  const kitchen = document.createElement('span');
  kitchen.classList.add("kitchen");
  kitchen.textContent = itm.kitchen? "Kitchen" : "No Kitchen";
  if(itm.kitchen){
    kitchen.style.display = "block";
  }
  
  const rating = document.createElement('span');
  rating.classList.add("rating");
  
  const star = document.createElement('span');
  star.classList.add("star");
  star.classList.add("fa-solid","fa-star");
  const starCount = document.createElement('span');
  starCount.classList.add("star-count");
  starCount.textContent = itm.rating;
  
  rating.appendChild(star);
  rating.appendChild(starCount);
  
  more.appendChild(type);
  more.appendChild(bathroom);
  more.appendChild(toilet);
  more.appendChild(kitchen);
  more.appendChild(rating);
  
  const more2 = document.createElement('p');
  more2.classList.add("more2");
  
  const price = document.createElement('p');
  price.classList.add("price");
  price.textContent = "₦"+ formatMoney(itm.price);
  
  const landmark = document.createElement('p');
  landmark.classList.add("landmark");
  landmark.textContent = " • " + itm.landmark;
  
  
  const negotiable = document.createElement('p');
  negotiable.classList.add("negotiable");
  negotiable.textContent = itm.negotiable? " • Negotiable" : " • Non-negotiable";
  
  more2.appendChild(price);
  more2.appendChild(negotiable);
  more2.appendChild(landmark);
  
  const more3 = document.createElement('div');
  more3.classList.add("more3");
  
  const view = document.createElement('button');
  view.classList.add("view","button");
  const view1 = document.createElement('span');
  view1.classList.add("view1","fa-solid","fa-eye");
  const view2 = document.createElement('span');
  view2.classList.add("view2");
  view2.textContent = "View Details";
  
  view.appendChild(view1);
  view.appendChild(view2);
  
  const call = document.createElement('button');
  call.classList.add("call","button2");
  const call1 = document.createElement('span');
  call1.classList.add("call1","fa-solid","fa-phone");
  const call2 = document.createElement('span');
  call2.classList.add("call2");
  call2.textContent = "Call";
  
  call.appendChild(call1);
  call.appendChild(call2);
  
  more3.appendChild(view);
  more3.appendChild(call);
  
  const thinEnd = document.createElement("div");
  thinEnd.classList.add("thin-end");
  
  
  names.appendChild(name1);
  names.appendChild(name2);
  names.appendChild(name3);
  
  nameOpt.appendChild(names);
  nameOpt.appendChild(opt);
  
  item3.appendChild(nameOpt);
  item3.appendChild(des);
  item3.appendChild(img);
  item3.appendChild(more);
  item3.appendChild(more2);
  item3.appendChild(more3);
  
  item2.appendChild(photo);
  item2.appendChild(item3);
  
  item.appendChild(item2);
  item.appendChild(thinEnd);
  
  list.appendChild(item);
  
});
