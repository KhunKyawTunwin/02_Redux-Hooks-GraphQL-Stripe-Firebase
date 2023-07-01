import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.styles.scss";

const categories = [
  {
    id: 1,
    title: "hats",
    imageUrl:
      "https://i.pinimg.com/originals/a3/99/c7/a399c702c06caea0a08a0de995109299.jpg",
    route: "shop/hats",
  },

  {
    id: 2,
    title: "jackets",
    imageUrl:
      "https://i.pinimg.com/564x/f5/73/07/f5730789ce65a4468ebdc86c4cb4cc96.jpg",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "womens",
    imageUrl:
      "https://i.pinimg.com/564x/0c/cd/0f/0ccd0fc93ffd3c981d75a468b33ba795.jpg",
    route: "shop/womens",
  },
  {
    id: 5,
    title: "mens",
    imageUrl:
      "https://i.pinimg.com/564x/69/40/d6/6940d6bf3f37c35e3af06950ac3a4354.jpg",
    route: "shop/mens",
  },
];

const Directory = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
