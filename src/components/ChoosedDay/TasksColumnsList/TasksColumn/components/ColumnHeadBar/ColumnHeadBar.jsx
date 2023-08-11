import { BtnAdd, PlusCircleIcon, Box, Title } from './ColumnHeadBar.styled';

export const ColumnHeadBar = ({ title }) => {
  return (
    <Box>
      {/* <Title>{title}</Title> */}
      <Title>To Do</Title>
      <BtnAdd>
        <PlusCircleIcon />
      </BtnAdd>
    </Box>
  );
};
