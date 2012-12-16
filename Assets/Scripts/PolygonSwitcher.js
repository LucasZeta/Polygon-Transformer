#pragma strict

private var index : int = 0;

var polygonMeshes : Mesh[];

function Start() {
	Debug.Log(polygonMeshes.Length-1);
	SwitchPolygon();
}

function Update() {
	if(Input.GetButtonUp('Fire1')) {
		SwitchPolygon();
	}
}

function SwitchPolygon() {
	Debug.Log('Changing mesh '+polygonMeshes[index].ToString());
	
	gameObject.GetComponent(MeshFilter).mesh = polygonMeshes[index];
	
	if(index == polygonMeshes.Length-1) {
		index = 0;
	}
	else {
		index++;
	}
}