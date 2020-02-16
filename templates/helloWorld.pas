uses
  fpjson, jsonparser;

procedure JSONTest;
var
  jData : TJSONData;
  jObject : TJSONObject;
  jArray : TJSONArray;
  s : String;
begin
  
  // this is only a minimal sampling of what can be done with this API

  // create from string
  jData := GetJSON('{"Fld1" : "Hello", "Fld2" : 42, "Colors" : ["Red", "Green", "Blue"]}');

  // output as a flat string
  s := jData.AsJSON;

  // output as nicely formatted JSON
  s := jData.FormatJSON;

  // cast as TJSONObject to make access easier
  jObject := TJSONObject(jData);

  // retrieve value of Fld1
  s := jObject.Get('Fld1');

  // change value of Fld2
  jObject.Integers['Fld2'] := 123;

  // retrieve the second color
  s := jData.FindPath('Colors[1]').AsString;

  // add a new element
  jObject.Add('Happy', True);

  // add a new sub-array
  jArray := TJSONArray.Create;
  jArray.Add('North');
  jArray.Add('South');
  jArray.Add('East');
  jArray.Add('West');
  jObject.Add('Directions', jArray);

end;