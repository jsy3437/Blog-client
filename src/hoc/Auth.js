import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function Auth(SpecificComponent, option, adminRoute = null) {
	const dispatch = useDispatch();
	const history = useHistory();

	function AuthenticationCheck() {
		console.log('authCheck');
	}
}
