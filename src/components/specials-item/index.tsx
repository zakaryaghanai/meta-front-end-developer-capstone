import { Box, styled, Typography } from "@mui/joy";
import { FC } from "react";

const SpecialsItemBox = styled(Box)({
  // width: '350px',
  display: 'flex',
  flexFlow: 'column',
  borderRadius: '20px',
  overflow: 'hidden',
  "#special-name": {
    
  },
  "#special-description": {},
});

type SpecialsItemProps = {
  item: {
    id: string;
    name: string;
    description: string;
    price: number;
    image: any;
  };
};
const SpecialsItem: FC<SpecialsItemProps> = (props) => {
  const { item } = props;
  return (
    // <SpecialsItemContainer>
      <SpecialsItemBox>
        <Box component={"img"} src={item.image} alt={item.name} width={'100%'} />
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 1, padding: '1rem', background: '#edefee', height: '180px'}}>
          <Typography level="h4" id='special-name'>{item.name}</Typography>
          <Typography id='special-description'>{item.description}</Typography>
        </Box>
      </SpecialsItemBox>
    // </SpecialsItemContainer>
  );
};

export default SpecialsItem;
