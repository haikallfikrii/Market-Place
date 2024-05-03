import { Container, Image, Label, Desc, Price, WrapDesc } from './styles'

const index = ({ image, title, desc, price }) => (
  <Container>
    <Image src={image} />

    <WrapDesc>
      <Label>{title}</Label>
      <Desc>{desc}</Desc>
      <Price>{`Rp. ${price}`}</Price>
    </WrapDesc>
  </Container>
);

export default index;