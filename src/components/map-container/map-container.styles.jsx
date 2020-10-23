import styled from "styled-components";

import pattern from "../../assets/Pattern.png";

export const MapWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NavPanel = styled.div`
  height: 100vh;
  width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid black;
  background-image: url(${pattern});
`;

export const MapBlock = styled.div`
  width: 70vw;
  height: 100vh;
`;

export const SearchField = styled.input`
  margin-top: 50px;
  width: 70%;
  height: 30px;
  padding: 15px;
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavItem = styled.li`
  width: 70%;
  margin-bottom: 10px;
  color: #fff;
`;
