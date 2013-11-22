#pragma strict

private var index : int = 0;

var polygonMeshes : Mesh[];

function Start() {
	SwitchPolygon();
}

function Update() {
	if(Input.GetButtonUp('Fire1')) {
		SwitchPolygon();
	}
}

function SwitchPolygon() {
	gameObject.GetComponent(MeshFilter).mesh = polygonMeshes[index];
	gameObject.GetComponent(MeshCollider).sharedMesh = polygonMeshes[index];
	
	if(index == polygonMeshes.Length-1) {
		index = 0;
	}
	else {
		index++;
	}
}