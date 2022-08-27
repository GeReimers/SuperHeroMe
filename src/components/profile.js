import React from 'react';
import { Input } from '@chakra-ui/core';

function Profile (){
	return (
		<div>
		  <h1>Become a Superhero!</h1>
		  <h4>Please enter details to sign up</h4>
		  <br></br>
		  <div className="sign_up_input_field">
		  <form>
			<label>Your Superhero Name
			<Input placeholder='Be creative! Batman1 does not count!'/>
			</label>
			<label>Email
			<Input placeholder='Not oly for fan mail!'/>
			</label>
			<label>Password
			<br></br>
			<Input placeholder='The key to your secret identity!'/>
			<br></br>
			</label>
			<label>Confirm Password
			<br></br>
			<Input placeholder='One more time!'/>
			<br></br>
			</label>
		  </form>
		  </div>
		</div>
	  )
	}

export default Profile;