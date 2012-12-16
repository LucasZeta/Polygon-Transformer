#pragma strict

var force : float = 10;

function Start () {

}

function FixedUpdate () {
	rigidbody.AddForce(Vector3(Input.GetAxis('Horizontal') * force, 0, Input.GetAxis('Vertical') * force));
	
	if(Input.GetButtonUp('Jump')) {
		rigidbody.AddForce(Vector3(0, -force, 0));
	}
}