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
		<IconWrapper>
			<AddIcon />
		</IconWrapper>

		<IconWrapper>
			<DeleteIcon />
		</IconWrapper>

		<IconWrapper>
			<EditIcon />
		</IconWrapper>
	</>
);

export default Icons;