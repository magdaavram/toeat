import React from 'react';
import styled from "styled-components";
import AddIcon from "../../icons/Add";
import DeleteIcon from "../../icons/Delete";
import EditIcon from "../../icons/Edit";

const IconWrapper = styled.button`
	width: 50px;
	height: 50px;
	padding: 0;
	margin-left: 9px;
	border: none;
	border-radius: 50%;
	outline: none;
	background-color: transparent;
	cursor: pointer;
	
	:hover {
		opacity: 0.9;	
	}
`;

const Icons = () => (
	<>
		<IconWrapper onClick={() => console.log('pressed add')}>
			<AddIcon />
		</IconWrapper>

		<IconWrapper onClick={() => console.log('pressed delete')}>
			<DeleteIcon />
		</IconWrapper>

		<IconWrapper onClick={() => console.log('pressed edit')}>
			<EditIcon />
		</IconWrapper>
	</>
);

export default Icons;