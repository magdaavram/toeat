import React from 'react';
import styled from 'styled-components';
import LogoIcon from "../../icons/Logo";
import TopControls from '../TopControls';

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Header = () => (
	<ContentWrapper>
		<a href='/#'>
			<LogoIcon />
		</a>
		<TopControls />
	</ContentWrapper>
);

export default Header;
