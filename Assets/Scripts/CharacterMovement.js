#pragma strict

var movementForce : float = 10;
var jumpForce : float = 250;

function FixedUpdate () {
	rigidbody.AddForce(Vector3(
		Input.GetAxis('Horizontal') * movementForce, 
		Input.GetButtonUp('Jump') ? jumpForce : 0, 
		Input.GetAxis('Vertical') * movementForce
	));
}