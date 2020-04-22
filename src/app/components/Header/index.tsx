import React from 'react';
import styled from 'styled-components';
import LogoIcon from "../../icons/Logo";
import RightSideControls from '../RightSideControls';

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Header = () => (
	<ContentWrapper>
		<a href='/#'>
			<LogoIcon />
		</a>
		<RightSideControls />
	</ContentWrapper>
);

export default Header;
