uses
  Crt;
var
  c: Char;
begin
  Close(Input);
  Assign(Input,'input.txt');
  Reset(Input);
  while not EOF do begin
    c := ReadKey;
    Write(c);
  end;
end.