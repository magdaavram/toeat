import React from 'react';
import styled from "styled-components";
import SearchIcon from '../../icons/Search';

const StyledWrapper = styled.div`
	display: flex;
	width: 70%;
	height: 54px;
`;

const StyledInput = styled.input`
	width: calc(100% - 30px);
	height: 100%;
	border: 3px solid var(--color--light-purple);
	border-radius: 12px;
	background-color: rgba(74, 78, 105, 0.2);
	outline: none;
	padding: 0 54px 0 18px;
	font-size: var(--font-size--regular);
	color: var(--color--dark-purple);
	
	&:focus {
		outline: none;
	}
`;

const StyledButton = styled.button`
	width: 30px;
	height: 30px;
	margin: auto 0;
	margin-left: -45px;
	background-color: transparent;
	border: none;
	outline: none;
	cursor: pointer;
	padding: 0;
`;

const SearchInput = () => (
	<StyledWrapper>
		<StyledInput placeholder={'Search recipe...'} />
		<StyledButton onClick={() => console.log('pressed search')}>
			<SearchIcon />
		</StyledButton>
	</StyledWrapper>
);

export default SearchInput;
