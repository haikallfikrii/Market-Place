import Topbar from "./components/topbar";
import Card from "./components/card";
import { Container } from "./styles";

const index = () => {
  const listProduct = [
    {
      image: "./src/images/baju1.png",
      label: "Distro",
      desc: "Kaos Distro Pedihnya Perjuangan",
      price: 70000,
    },
    {
      image: "./src/images/baju2.jpg",
      label: "Distro",
      desc: "Kaos Pernah Ganteng",
      price: 50000,
    },
    {
      image: "./src/images/baju3.webp",
      label: "Distro",
      desc: "Kaos Calon Orang Kaya",
      price: 90000,
    },
    {
      image: "./src/images/baju3.webp",
      label: "Distro",
      desc: "Kaos Calon Orang Kaya",
      price: 90000,
    },
    {
      image: "./src/images/baju3.webp",
      label: "Distro",
      desc: "Kaos Calon Orang Kaya",
      price: 90000,
    },
    {
      image: "./src/images/baju3.webp",
      label: "Distro",
      desc: "Kaos Calon Orang Kaya",
      price: 90000,
    },
    {
      image: "./src/images/baju3.webp",
      label: "Distro",
      desc: "Kaos Calon Orang Kaya",
      price: 90000,
    },
    {
      image: "./src/images/baju3.webp",
      label: "Distro",
      desc: "Kaos Calon Orang Kaya",
      price: 90000,
    },
    {
      image: "./src/images/baju3.webp",
      label: "Distro",
      desc: "Kaos Calon Orang Kaya",
      price: 90000,
    },
  ];

  return (
    <>
      <Topbar />

      <Container>
        {listProduct.map((item, index) => (
          <Card key={String(index)} {...item} />
        ))}
      </Container>
    </>
  );
};

export default index;
