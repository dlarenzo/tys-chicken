import React from "react";
import MenuCard from "./MenuCard";

const Menu = ({ title }) => {
  // Menu Data
  const menuItems = [
    {
      id: 1,
      title: "Blackened Ranch Chicken",
      price: 10,
      image: "/imgs/menu/bbq.jpg",
      description:
        "Our classic chicken sandwich is made with a crispy chicken fillet topped with lettuce, tomato, and mayo on a toasted brioche bun.",
    },
    {
      id: 2,
      title: "Sweet & Spicy Chicken Wangz",
      price: 10,
      image: "/imgs/menu/Buffalo-Chicken-Thighs-1.jpg",
      description:
        "Our chicken tenders are made with 100% all-white meat chicken and no added hormones, steroids, or artificial flavors.",
    },
    {
      id: 3,
      title: "Blackened Ranch Chicken",
      price: 10,
      image: "/imgs/menu/Buttermilk-Chicken-Tenders-5-728x1094.jpg",
      description:
        "Our chicken nuggets are made with tender, juicy chicken on the inside and crispy on the outside. Ain't nothing fake about these nuggets!",
    },
    {
      id: 4,
      title: "Blackened Ranch Chicken",
      price: 10,
      image: "/imgs/menu/caramel-Zu_w3tFOtUA-unsplash.jpg",
      description:
        "Our chicken wings are seasoned to perfection and cooked until golden and crispy. Enough to make you slap ya mamma!",
    },
    {
      id: 5,
      title: "Blackened Ranch Chicken",
      price: 10,
      image: "/imgs/menu/chipotle-chicken.webp",
      description:
        "Our chicken salad is made with tender, juicy chicken, celery, and onions mixed with mayonnaise and a blend of spices.",
    },
    {
      id: 6,
      title: "Blackened Ranch Chicken",
      price: 10,
      image: "/imgs/menu/Sticky-Asian-Grilled-Chicken-Thighs-3-of-6.jpg",
      description:
        "Our chicken wrap is made with grilled chicken, lettuce, tomato, and ranch dressing wrapped in a warm tortilla.",
    },
  ];

  return (
    <div className="max-w-[1240px] m-auto">
      <h1 className="text-8xl font-bold text-center my-8 py-10 text-transform uppercase">
        {title}
      </h1>

      {/* Menu Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {menuItems.map((item) => (
          <MenuCard
            key={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
